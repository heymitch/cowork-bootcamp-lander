(function() {
  'use strict';

  // ── Config ──────────────────────────────────────────────────────────
  var CONFIG = window.BOOTCAMP_WIDGET_CONFIG || {};
  CONFIG = {
    apiUrl:      CONFIG.apiUrl      || 'ENDPOINT_URL',
    brandColor:  CONFIG.brandColor  || '#f35a1f',
    darkBg:      CONFIG.darkBg      || '#2f2e2b',
    creamBg:     CONFIG.creamBg     || '#f8f4e9',
    darkDeep:    CONFIG.darkDeep    || '#1c2220',
    widgetTitle: CONFIG.widgetTitle || 'Bootcamp Concierge',
    greeting:    CONFIG.greeting    || "Hey! Got questions about the Cowork Bootcamp? I've got answers.",
    position:    CONFIG.position    || 'bottom-right',
  };

  // ── Session helpers ─────────────────────────────────────────────────
  function uuid() {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0;
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }

  function getSessionId() {
    var id = localStorage.getItem('bootcamp_chat_session_id');
    if (!id) { id = uuid(); localStorage.setItem('bootcamp_chat_session_id', id); }
    return id;
  }

  function loadHistory() {
    try { return JSON.parse(localStorage.getItem('bootcamp_chat_history')) || []; }
    catch(e) { return []; }
  }

  function saveHistory(messages) {
    if (messages.length > 50) messages = messages.slice(messages.length - 50);
    localStorage.setItem('bootcamp_chat_history', JSON.stringify(messages));
  }

  // ── Minimal markdown ────────────────────────────────────────────────
  function md(text) {
    if (!text) return '';
    var s = text
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/`(.+?)`/g, '<code style="background:rgba(0,0,0,.07);padding:1px 4px;border-radius:3px;font-size:.9em;">$1</code>')
      .replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color:' + CONFIG.brandColor + '">$1</a>');
    // bullet lists
    s = s.replace(/(^|\n)- (.+)/g, function(_, pre, item) {
      return pre + '<li style="margin-left:16px;list-style:disc inside;">' + item + '</li>';
    });
    // newlines to <br>
    s = s.replace(/\n/g, '<br>');
    return s;
  }

  // ── SVG icons ───────────────────────────────────────────────────────
  var ICON_CHAT = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';
  var ICON_CLOSE = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
  var ICON_SEND = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';

  // ── Inject CSS ──────────────────────────────────────────────────────
  var style = document.createElement('style');
  style.textContent = [
    '/* Bootcamp Concierge Widget */',
    '.bc-widget *, .bc-widget *::before, .bc-widget *::after { box-sizing:border-box; margin:0; padding:0; }',
    '.bc-widget { font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; font-size:14px; line-height:1.5; z-index:99999; position:fixed; bottom:20px; right:20px; }',

    /* Bubble */
    '.bc-widget__bubble { width:60px; height:60px; border-radius:50%; background:' + CONFIG.brandColor + '; border:none; cursor:pointer; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 14px rgba(0,0,0,.25); transition:transform .2s ease, box-shadow .2s ease; }',
    '.bc-widget__bubble:hover { transform:scale(1.08); box-shadow:0 6px 20px rgba(0,0,0,.3); }',
    '.bc-widget__bubble--pulse { animation:bc-pulse 1.5s ease-in-out 3; }',
    '@keyframes bc-pulse { 0%,100%{ box-shadow:0 4px 14px rgba(0,0,0,.25); } 50%{ box-shadow:0 0 0 12px rgba(243,90,31,.25); } }',

    /* Panel */
    '.bc-widget__panel { display:none; flex-direction:column; width:380px; max-width:calc(100vw - 32px); height:520px; max-height:80vh; border-radius:12px; overflow:hidden; box-shadow:0 12px 40px rgba(0,0,0,.2); position:absolute; bottom:72px; right:0; transform:translateY(12px); opacity:0; transition:transform .3s ease, opacity .3s ease; }',
    '.bc-widget__panel--open { display:flex; transform:translateY(0); opacity:1; }',

    /* Header */
    '.bc-widget__header { background:' + CONFIG.darkBg + '; color:#fff; padding:14px 16px; display:flex; align-items:center; justify-content:space-between; flex-shrink:0; }',
    '.bc-widget__header-title { font-weight:600; font-size:15px; }',
    '.bc-widget__header-close { background:none; border:none; color:#fff; cursor:pointer; padding:4px; border-radius:4px; display:flex; align-items:center; justify-content:center; opacity:.8; transition:opacity .15s; }',
    '.bc-widget__header-close:hover { opacity:1; }',

    /* Messages */
    '.bc-widget__messages { flex:1; overflow-y:auto; padding:16px; background:' + CONFIG.creamBg + '; display:flex; flex-direction:column; gap:10px; }',
    '.bc-widget__messages::-webkit-scrollbar { width:5px; }',
    '.bc-widget__messages::-webkit-scrollbar-thumb { background:rgba(0,0,0,.15); border-radius:4px; }',
    '.bc-widget__msg { max-width:82%; padding:10px 14px; border-radius:8px; word-wrap:break-word; overflow-wrap:break-word; }',
    '.bc-widget__msg--bot { align-self:flex-start; background:#fff; color:' + CONFIG.darkDeep + '; border:1px solid rgba(0,0,0,.06); }',
    '.bc-widget__msg--user { align-self:flex-end; background:' + CONFIG.brandColor + '; color:#fff; }',
    '.bc-widget__msg--user a { color:#fff !important; text-decoration:underline; }',

    /* Typing indicator */
    '.bc-widget__typing { display:flex; align-items:center; gap:4px; padding:10px 14px; align-self:flex-start; }',
    '.bc-widget__typing-dot { width:7px; height:7px; background:rgba(0,0,0,.25); border-radius:50%; animation:bc-bounce .6s ease-in-out infinite alternate; }',
    '.bc-widget__typing-dot:nth-child(2) { animation-delay:.15s; }',
    '.bc-widget__typing-dot:nth-child(3) { animation-delay:.3s; }',
    '@keyframes bc-bounce { to { transform:translateY(-5px); opacity:.5; } }',

    /* Input */
    '.bc-widget__input-area { display:flex; align-items:center; padding:10px 12px; background:#fff; border-top:1px solid rgba(0,0,0,.08); flex-shrink:0; gap:8px; }',
    '.bc-widget__input { flex:1; border:1px solid rgba(0,0,0,.12); border-radius:8px; padding:9px 12px; font-size:14px; outline:none; font-family:inherit; resize:none; transition:border-color .15s; background:transparent; }',
    '.bc-widget__input:focus { border-color:' + CONFIG.brandColor + '; }',
    '.bc-widget__input::placeholder { color:rgba(0,0,0,.35); }',
    '.bc-widget__send { width:38px; height:38px; border-radius:8px; border:none; background:' + CONFIG.brandColor + '; cursor:pointer; display:flex; align-items:center; justify-content:center; flex-shrink:0; transition:opacity .15s; }',
    '.bc-widget__send:disabled { opacity:.45; cursor:not-allowed; }',
    '.bc-widget__send:not(:disabled):hover { opacity:.88; }',

    /* Mobile */
    '@media (max-width:768px) {',
    '  .bc-widget { bottom:16px; right:16px; }',
    '  .bc-widget__bubble { width:52px; height:52px; }',
    '  .bc-widget__panel--open { position:fixed; top:0; left:0; right:0; bottom:0; width:100vw; height:100vh; height:100dvh; max-height:100vh; max-height:100dvh; max-width:100vw; border-radius:0; z-index:100000; }',
    '  .bc-widget__panel { bottom:0; right:0; }',
    '  .bc-widget__header { padding:16px; padding-top:max(16px, env(safe-area-inset-top)); }',
    '  .bc-widget__header-close { width:36px; height:36px; opacity:1; }',
    '  .bc-widget__input-area { padding:10px 12px; padding-bottom:max(10px, env(safe-area-inset-bottom)); }',
    '  .bc-widget__input { font-size:16px; }',
    '  .bc-widget__messages { padding:12px; }',
    '  .bc-widget__msg { max-width:88%; }',
    '}',
  ].join('\n');
  document.head.appendChild(style);

  // ── Inject HTML ─────────────────────────────────────────────────────
  var root = document.createElement('div');
  root.className = 'bc-widget';
  root.setAttribute('role', 'complementary');
  root.setAttribute('aria-label', 'Chat widget');
  root.innerHTML = [
    '<button class="bc-widget__bubble bc-widget__bubble--pulse" aria-label="Open chat">' + ICON_CHAT + '</button>',
    '<div class="bc-widget__panel" role="dialog" aria-label="' + CONFIG.widgetTitle + '">',
    '  <div class="bc-widget__header">',
    '    <span class="bc-widget__header-title">' + CONFIG.widgetTitle + '</span>',
    '    <button class="bc-widget__header-close" aria-label="Close chat">' + ICON_CLOSE + '</button>',
    '  </div>',
    '  <div class="bc-widget__messages" aria-live="polite"></div>',
    '  <div class="bc-widget__input-area">',
    '    <input class="bc-widget__input" type="text" placeholder="Ask me anything about the bootcamp..." aria-label="Type your message" />',
    '    <button class="bc-widget__send" aria-label="Send message">' + ICON_SEND + '</button>',
    '  </div>',
    '</div>',
  ].join('\n');
  document.body.appendChild(root);

  // ── Elements ────────────────────────────────────────────────────────
  var bubble  = root.querySelector('.bc-widget__bubble');
  var panel   = root.querySelector('.bc-widget__panel');
  var closeBtn = root.querySelector('.bc-widget__header-close');
  var msgArea = root.querySelector('.bc-widget__messages');
  var input   = root.querySelector('.bc-widget__input');
  var sendBtn = root.querySelector('.bc-widget__send');

  var messages = loadHistory();
  var isOpen = false;
  var isSending = false;

  // ── Render helpers ──────────────────────────────────────────────────
  function addMessageEl(role, text) {
    var div = document.createElement('div');
    div.className = 'bc-widget__msg bc-widget__msg--' + role;
    div.innerHTML = md(text);
    msgArea.appendChild(div);
    scrollToBottom();
  }

  function showTyping() {
    var el = document.createElement('div');
    el.className = 'bc-widget__typing';
    el.id = 'bc-typing';
    el.innerHTML = '<div class="bc-widget__typing-dot"></div><div class="bc-widget__typing-dot"></div><div class="bc-widget__typing-dot"></div>';
    msgArea.appendChild(el);
    scrollToBottom();
  }

  function hideTyping() {
    var el = document.getElementById('bc-typing');
    if (el) el.remove();
  }

  function scrollToBottom() {
    requestAnimationFrame(function() { msgArea.scrollTop = msgArea.scrollHeight; });
  }

  function renderHistory() {
    msgArea.innerHTML = '';
    messages.forEach(function(m) { addMessageEl(m.role, m.content); });
  }

  // ── Open / Close ───────────────────────────────────────────────────
  function openPanel() {
    isOpen = true;
    bubble.style.display = 'none';
    panel.classList.add('bc-widget__panel--open');
    // force reflow then animate
    panel.offsetHeight; // eslint-disable-line no-unused-expressions
    panel.style.transform = 'translateY(0)';
    panel.style.opacity = '1';

    if (messages.length === 0) {
      messages.push({ role: 'bot', content: CONFIG.greeting });
      saveHistory(messages);
    }
    renderHistory();
    input.focus();
  }

  function closePanel() {
    isOpen = false;
    panel.classList.remove('bc-widget__panel--open');
    bubble.style.display = 'flex';
  }

  bubble.addEventListener('click', openPanel);
  closeBtn.addEventListener('click', closePanel);

  // Remove pulse after animation ends
  bubble.addEventListener('animationend', function() {
    bubble.classList.remove('bc-widget__bubble--pulse');
  });

  // ── Keyboard ────────────────────────────────────────────────────────
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && isOpen) closePanel();
  });

  input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
  });

  sendBtn.addEventListener('click', function() { send(); });

  // ── Send message ───────────────────────────────────────────────────
  function setSending(val) {
    isSending = val;
    sendBtn.disabled = val;
    input.disabled = val;
  }

  function send() {
    var text = input.value.trim();
    if (!text || isSending) return;

    messages.push({ role: 'user', content: text });
    saveHistory(messages);
    addMessageEl('user', text);
    input.value = '';
    setSending(true);
    showTyping();

    var recentHistory = messages.slice(-10).map(function(m) {
      return { role: m.role === 'bot' ? 'assistant' : 'user', content: m.content };
    });

    var controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
    var timeoutId = setTimeout(function() {
      if (controller) controller.abort();
    }, 15000);

    fetch(CONFIG.apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: text,
        session_id: getSessionId(),
        history: recentHistory,
      }),
      signal: controller ? controller.signal : undefined,
    })
    .then(function(res) {
      clearTimeout(timeoutId);
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    })
    .then(function(data) {
      hideTyping();
      var reply = (data && (data.reply || data.message || data.response)) || 'Hmm, I got a blank response. Try asking again?';
      messages.push({ role: 'bot', content: reply });
      saveHistory(messages);
      addMessageEl('bot', reply);
    })
    .catch(function(err) {
      clearTimeout(timeoutId);
      hideTyping();
      var errMsg = err.name === 'AbortError'
        ? 'Response took too long. Try again?'
        : 'Something went wrong. Try again?';
      messages.push({ role: 'bot', content: errMsg });
      saveHistory(messages);
      addMessageEl('bot', errMsg);
    })
    .finally(function() {
      setSending(false);
      input.focus();
    });
  }

  // ── Mobile keyboard handling ────────────────────────────────────────
  if (typeof visualViewport !== 'undefined') {
    visualViewport.addEventListener('resize', function() {
      if (!isOpen) return;
      var offset = window.innerHeight - visualViewport.height;
      panel.style.height = visualViewport.height + 'px';
      panel.style.bottom = offset + 'px';
    });
    visualViewport.addEventListener('scroll', function() {
      if (!isOpen) return;
      panel.style.bottom = (window.innerHeight - visualViewport.height - visualViewport.offsetTop) + 'px';
    });
  }

})();

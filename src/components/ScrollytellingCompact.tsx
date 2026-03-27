"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// ─── Design Tokens ─────────────────────────────────────────────────────────────

const C = {
  pageBg: "#F5F0E8",
  cream: "#2D2A26",
  creamSoft: "rgba(45, 42, 38, 0.7)",
  creamDim: "rgba(45, 42, 38, 0.5)",
  creamFaint: "rgba(45, 42, 38, 0.3)",
  yellow: "#D4714E",
  yellowSoft: "rgba(212, 113, 78, 0.6)",
};

const DK = {
  bg: "#292929",
  bgSidebar: "#242424",
  topBar: "#1A1A1A",
  surface: "#363636",
  text: "#E8E4DB",
  textMuted: "#8B8680",
  textFaint: "#5C5955",
  userBubble: "#404040",
  border: "rgba(255,255,255,0.08)",
  green: "#22C55E",
  blue: "#58a6ff",
  orange: "#D4714A",
  inputBg: "#333333",
  sans: "Inter, system-ui, -apple-system, sans-serif",
};

const CW = {
  orange: "#BF5234",
  sans: "Inter, system-ui, -apple-system, sans-serif",
  textMuted: "#888888",
};

// ─── Connector SVGs ────────────────────────────────────────────────────────────

function ConnectorSVG({ name }: { name: string }) {
  if (name === "Gmail")
    return (
      <svg width="100%" height="100%" viewBox="0 0 48 36" fill="none">
        <path d="M44 0H4C1.8 0 0 1.8 0 4v28c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4z" fill="#EA4335" />
        <path d="M0 8v24c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V8L24 22 0 8z" fill="#F5F5F5" />
        <path d="M0 4c0-2.2 1.8-4 4-4l20 16L44 0c2.2 0 4 1.8 4 4L24 22 0 4z" fill="#EA4335" />
        <path d="M0 4v24l14-10V12L0 4z" fill="#4285F4" />
        <path d="M48 4v24L34 18V12l14-8z" fill="#34A853" />
        <path d="M48 4l-14 8V4l10-4h4z" fill="#FBBC04" />
      </svg>
    );
  if (name === "Drive")
    return (
      <svg width="100%" height="100%" viewBox="0 0 48 42" fill="none">
        <path d="M15.6 2L0 30h16.8L32.4 2z" fill="#34A853" />
        <path d="M15.6 2h16.8L48 30H31.2z" fill="#FBBC04" />
        <path d="M0 30l4.8 10h38.4L48 30z" fill="#4285F4" />
      </svg>
    );
  if (name === "Calendar")
    return (
      <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="10" width="40" height="34" rx="4" fill="#fff" />
        <path d="M4 14a4 4 0 014-4h32a4 4 0 014 4v4H4v-4z" fill="#EA4335" />
        <rect x="15" y="5" width="3.5" height="10" rx="1.5" fill="#D32F2F" />
        <rect x="29.5" y="5" width="3.5" height="10" rx="1.5" fill="#D32F2F" />
        <rect x="12" y="25" width="5" height="4" rx="1" fill="#5F6368" />
        <rect x="21.5" y="25" width="5" height="4" rx="1" fill="#5F6368" />
        <rect x="31" y="25" width="5" height="4" rx="1" fill="#5F6368" />
        <rect x="12" y="33" width="5" height="4" rx="1" fill="#5F6368" />
        <rect x="21.5" y="33" width="5" height="4" rx="1" fill="#5F6368" />
        <path d="M32 35l2.5 2.5L39 33" stroke="#EA4335" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  if (name === "Notion")
    return (
      <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="4" width="40" height="40" rx="8" fill="#fff" stroke="#1a1a1a" strokeWidth="2.5" />
        <path d="M16 14h16" stroke="#1a1a1a" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M16 14v20l16-20v20" stroke="#1a1a1a" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  return null;
}

// ─── Responsive Hook ────────────────────────────────────────────────────────────

function useBreakpoint() {
  const [bp, setBp] = useState("desktop");
  useEffect(() => {
    function check() {
      const w = window.innerWidth;
      setBp(w <= 480 ? "mobile" : w <= 810 ? "tablet" : w <= 1200 ? "laptop" : "desktop");
    }
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return bp;
}

// ─── Connectors ────────────────────────────────────────────────────────────────

const CONNECTORS = [
  { label: "Gmail" },
  { label: "Drive" },
  { label: "Calendar" },
  { label: "Notion" },
];

// ═══════════════════════════════════════════════════════════════════════════════
// COWORK DEMO — Dark theme matching actual claude.ai Cowork interface
// ═══════════════════════════════════════════════════════════════════════════════

function CoworkDemo({ compact, mobile }: { compact: boolean; mobile: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [phase, setPhase] = useState(0);
  const [checkIndex, setCheckIndex] = useState(-1);
  const [activeConnector, setActiveConnector] = useState(-1);

  const userPrompt = "Summarize my meetings and find action items";
  const [typedChars, setTypedChars] = useState(0);
  const [messageSent, setMessageSent] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [visibleMsgs, setVisibleMsgs] = useState(0);

  const checklist = [
    "Pull recordings from Drive",
    "Transcribe meeting audio",
    "Extract discussion topics",
    "Identify action items",
    "Draft summary report",
    "Update CRM with tasks",
  ];

  const workingMessages = [
    { type: "skill", name: "Meeting Extractor", content: "" },
    { type: "text", name: "", content: "Pulling 4 recordings from Google Drive and transcribing audio..." },
    { type: "skill", name: "Action Item Parser", content: "" },
    { type: "text", name: "", content: "Found 17 action items across 4 meetings. Categorizing by owner and priority." },
    { type: "skill", name: "Report Builder", content: "" },
    { type: "text", name: "", content: "Compiling summary and updating CRM with task assignments..." },
  ];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setInView(true); }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || phase !== 0 || messageSent) return;
    if (typedChars >= userPrompt.length) {
      const timer = setTimeout(() => setMessageSent(true), 500);
      return () => clearTimeout(timer);
    }
    const speed = 45 + Math.random() * 35;
    const timer = setTimeout(() => setTypedChars(typedChars + 1), speed);
    return () => clearTimeout(timer);
  }, [inView, phase, typedChars, messageSent, userPrompt.length]);

  useEffect(() => {
    if (phase !== 0 || !messageSent) return;
    const t1 = setTimeout(() => setShowLoading(true), 400);
    const t2 = setTimeout(() => setPhase(1), 2500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [phase, messageSent]);

  useEffect(() => {
    if (phase !== 1) return;
    if (visibleMsgs >= workingMessages.length) return;
    const delay = workingMessages[visibleMsgs]?.type === "skill" ? 1400 : 2000;
    const timer = setTimeout(() => setVisibleMsgs(visibleMsgs + 1), delay);
    return () => clearTimeout(timer);
  }, [phase, visibleMsgs, workingMessages.length]);

  useEffect(() => {
    if (phase !== 1) return;
    if (visibleMsgs < workingMessages.length) return;
    const timer = setTimeout(() => setPhase(2), 2500);
    return () => clearTimeout(timer);
  }, [phase, visibleMsgs, workingMessages.length]);

  useEffect(() => {
    if (phase !== 1) return;
    if (checkIndex >= checklist.length - 1) return;
    const timer = setTimeout(() => setCheckIndex(checkIndex + 1), 1200);
    return () => clearTimeout(timer);
  }, [phase, checkIndex, checklist.length]);

  useEffect(() => {
    if (phase === 1) setCheckIndex(-1);
  }, [phase]);

  useEffect(() => {
    if (phase !== 1) { setActiveConnector(-1); return; }
    setActiveConnector(0);
    const interval = setInterval(() => { setActiveConnector((prev) => (prev + 1) % CONNECTORS.length); }, 1500);
    return () => clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [visibleMsgs, messageSent, showLoading, typedChars]);

  const isMobileDemo = mobile;
  const showSidebar = phase >= 1 && !isMobileDemo;
  const sidebarW = compact ? 160 : 210;
  const iconSize = isMobileDemo ? 32 : 48;
  const bodyH = isMobileDemo ? 300 : compact ? 320 : 360;

  return (
    <div ref={containerRef} style={{ width: isMobileDemo ? "100%" : compact ? "100%" : 680, maxWidth: "100%" }}>
      {/* Connector icons */}
      <div style={{ display: "flex", alignItems: "center", gap: isMobileDemo ? 8 : 12, marginBottom: isMobileDemo ? 10 : 14, paddingLeft: 4, justifyContent: isMobileDemo ? "center" : "flex-start" }}>
        {!isMobileDemo && <span style={{ fontFamily: DK.sans, fontSize: 9, color: C.creamFaint, textTransform: "uppercase", letterSpacing: 1 }}>Connected</span>}
        <div style={{ display: "flex", gap: isMobileDemo ? 10 : 12 }}>
          {CONNECTORS.map((app, i) => {
            const isActive = phase === 1 && activeConnector === i;
            const wasUsed = phase === 2 || (phase === 1 && i <= activeConnector);
            return (
              <motion.div key={app.label} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: !inView ? 0 : phase >= 1 ? 1 : 0.4, scale: !inView ? 0 : isActive ? 1.1 : phase >= 1 ? 1 : 0.85 }} transition={{ delay: inView ? i * 0.15 : 0, duration: 0.4, ease: [0.175, 0.885, 0.32, 1.275] }} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                <div style={{ width: iconSize, height: iconSize, borderRadius: isMobileDemo ? 8 : 12, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", padding: isMobileDemo ? 5 : 8, boxShadow: isActive ? `0 0 16px ${DK.blue}80, 0 0 28px ${DK.blue}40, 0 3px 8px rgba(0,0,0,0.2)` : wasUsed ? `0 0 8px ${DK.blue}30, 0 2px 6px rgba(0,0,0,0.15)` : "0 2px 8px rgba(0,0,0,0.2)", transition: "box-shadow 0.3s ease" }}>
                  <ConnectorSVG name={app.label} />
                </div>
                <span style={{ fontFamily: DK.sans, fontSize: 8, textTransform: "uppercase", color: isActive ? DK.blue : C.creamFaint, fontWeight: isActive ? 700 : 400, transition: "color 0.3s" }}>{app.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* App Window */}
      <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.5)" }}>
        {/* Top bar */}
        <div style={{ background: DK.topBar, padding: isMobileDemo ? "8px 12px" : "10px 16px", display: "flex", alignItems: "center" }}>
          {!isMobileDemo && (
            <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FEBC2E" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28C840" }} />
            </div>
          )}
          <div style={{ flex: 1, display: "flex", justifyContent: "center", gap: 0, fontFamily: DK.sans, fontSize: isMobileDemo ? 11 : 13 }}>
            <span style={{ color: DK.textMuted, padding: isMobileDemo ? "3px 10px" : "4px 14px" }}>Chat</span>
            <span style={{ color: "#fff", fontWeight: 600, padding: isMobileDemo ? "3px 10px" : "4px 14px", position: "relative" }}>
              Cowork
              <div style={{ position: "absolute", bottom: -1, left: "50%", transform: "translateX(-50%)", width: "60%", height: 2, background: DK.orange, borderRadius: 1 }} />
            </span>
            <span style={{ color: DK.textMuted, padding: isMobileDemo ? "3px 10px" : "4px 14px" }}>Code</span>
          </div>
          {!isMobileDemo && <div style={{ width: 46 }} />}
        </div>

        {/* Task title bar */}
        <div style={{ background: DK.bg, padding: isMobileDemo ? "8px 14px" : "10px 20px", borderBottom: `1px solid ${DK.border}`, display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontFamily: DK.sans, fontSize: isMobileDemo ? 11 : 13, color: DK.text }}>Summarize weekly meetings</span>
          <svg width="10" height="10" viewBox="0 0 10 10"><path d="M3 4L5 6.5L7 4" stroke={DK.textMuted} strokeWidth="1.2" fill="none" strokeLinecap="round" /></svg>
        </div>

        {/* Main body */}
        <div style={{ display: "flex", height: bodyH }}>
          {/* Chat area */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", background: DK.bg, overflow: "hidden" }}>
            <div ref={chatRef} style={{ flex: 1, padding: isMobileDemo ? 12 : compact ? 16 : 20, overflowY: "auto", overflowX: "hidden" }}>
              {/* Phase 0: Typing */}
              {phase === 0 && (
                <div>
                  {messageSent && (
                    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} style={{ display: "flex", justifyContent: "flex-end", marginBottom: isMobileDemo ? 10 : 16 }}>
                      <div style={{ background: DK.userBubble, borderRadius: 18, padding: isMobileDemo ? "8px 12px" : "10px 16px", fontFamily: DK.sans, fontSize: isMobileDemo ? 11 : 13, color: DK.text, maxWidth: "85%" }}>{userPrompt}</div>
                    </motion.div>
                  )}
                  {showLoading && (
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} style={{ background: DK.surface, borderRadius: isMobileDemo ? 10 : 12, padding: isMobileDemo ? "10px 12px" : "12px 16px", display: "flex", alignItems: "center", gap: isMobileDemo ? 8 : 10 }}>
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} style={{ width: 16, height: 16, borderRadius: "50%", border: `2px solid ${DK.textFaint}`, borderTopColor: DK.text, flexShrink: 0 }} />
                      <span style={{ fontFamily: DK.sans, fontSize: isMobileDemo ? 11 : 13, color: DK.text }}>Starting Claude&apos;s workspace...</span>
                    </motion.div>
                  )}
                </div>
              )}

              {/* Phase 1: Working */}
              {phase === 1 && (
                <div>
                  <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: isMobileDemo ? 10 : 16 }}>
                    <div style={{ background: DK.userBubble, borderRadius: 18, padding: isMobileDemo ? "8px 12px" : "10px 16px", fontFamily: DK.sans, fontSize: isMobileDemo ? 11 : 13, color: DK.text, maxWidth: "85%" }}>{userPrompt}</div>
                  </div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: isMobileDemo ? 10 : 14 }}>
                    <span style={{ fontFamily: DK.sans, fontSize: isMobileDemo ? 10 : 12, color: DK.textMuted }}>Thought process</span>
                    <span style={{ color: DK.textMuted, fontSize: 10 }}>&rsaquo;</span>
                  </motion.div>
                  {workingMessages.slice(0, visibleMsgs).map((msg, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} style={{ marginBottom: 10 }}>
                      {msg.type === "skill" ? (
                        <div style={{ display: "flex", alignItems: "center", gap: isMobileDemo ? 6 : 8, padding: isMobileDemo ? "5px 10px" : "7px 12px", borderRadius: 8, background: "rgba(255,255,255,0.04)", border: `1px solid ${DK.border}` }}>
                          <svg width={isMobileDemo ? "11" : "13"} height={isMobileDemo ? "11" : "13"} viewBox="0 0 16 16" fill="none">
                            <path d="M10.5 2A4.5 4.5 0 006 8.5L2.3 12.2a1 1 0 000 1.4l.1.1a1 1 0 001.4 0L7.5 10A4.5 4.5 0 0014 5.5L11.5 8 10 6.5 12.5 4A4.5 4.5 0 0010.5 2z" stroke={DK.textMuted} strokeWidth="1.2" strokeLinejoin="round" />
                          </svg>
                          <span style={{ fontFamily: DK.sans, fontSize: isMobileDemo ? 10 : 12, color: DK.textMuted }}>
                            Using skill: <span style={{ color: DK.text, fontWeight: 500 }}>{msg.name}</span>
                          </span>
                        </div>
                      ) : (
                        <div style={{ fontFamily: DK.sans, fontSize: isMobileDemo ? 11 : 13, color: DK.text, lineHeight: 1.6 }}>
                          {msg.content.split(" ").map((word, wi) => (
                            <motion.span key={wi} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: wi * 0.04, duration: 0.1 }}>{word} </motion.span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                  {visibleMsgs < workingMessages.length && visibleMsgs > 0 && (
                    <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }} style={{ display: "inline-block", width: 8, height: 16, background: DK.text, borderRadius: 1, marginLeft: 2, verticalAlign: "middle" }} />
                  )}
                </div>
              )}

              {/* Phase 2: Done */}
              {phase === 2 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: isMobileDemo ? 8 : 12, fontFamily: DK.sans, fontSize: isMobileDemo ? 10 : 12, color: DK.green }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="7" fill={DK.green} /><path d="M4 7l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    Done — 4 meetings processed, 17 action items
                  </div>
                  <div style={{ flex: 1, borderRadius: 8, overflow: "hidden", border: `1px solid ${DK.border}`, background: "#1E1E1E" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 0, background: "#1A1A1A", borderBottom: `1px solid ${DK.border}` }}>
                      {["Action Items", "Summary", "CRM Updates"].map((tab, i) => (
                        <div key={tab} style={{ padding: isMobileDemo ? "4px 10px" : "6px 14px", fontFamily: DK.sans, fontSize: isMobileDemo ? 8 : 10, fontWeight: i === 0 ? 600 : 400, color: i === 0 ? DK.text : DK.textMuted, background: i === 0 ? "#1E1E1E" : "transparent", borderRight: i < 2 ? `1px solid ${DK.border}` : "none" }}>{tab}</div>
                      ))}
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: isMobileDemo ? "2fr 1fr" : "2fr 1fr 1fr", background: "#222", borderBottom: `1px solid ${DK.border}`, padding: isMobileDemo ? "4px 8px" : "5px 10px" }}>
                      {(isMobileDemo ? ["Task", "Status"] : ["Task", "Owner", "Status"]).map((h) => (
                        <span key={h} style={{ fontFamily: DK.sans, fontSize: isMobileDemo ? 8 : 9, fontWeight: 600, color: DK.textMuted, textTransform: "uppercase", letterSpacing: 0.5 }}>{h}</span>
                      ))}
                    </div>
                    {[
                      { task: "Follow up with Acme Corp", owner: "You", status: "Due Fri", color: DK.orange },
                      { task: "Send revised proposal", owner: "You", status: "Due Mon", color: DK.blue },
                      { task: "Review Q4 ad spend", owner: "Jordan", status: "Done", color: DK.green },
                      { task: "Update onboarding deck", owner: "Sara", status: "Done", color: DK.green },
                      { task: "Schedule partner call", owner: "You", status: "Due Wed", color: DK.blue },
                      { task: "Draft investor update", owner: "You", status: "Due Thu", color: DK.orange },
                      { task: "Approve creative assets", owner: "Jordan", status: "Done", color: DK.green },
                    ].map((row, i) => (
                      <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.08, duration: 0.25 }} style={{ display: "grid", gridTemplateColumns: isMobileDemo ? "2fr 1fr" : "2fr 1fr 1fr", padding: isMobileDemo ? "4px 8px" : "6px 10px", borderBottom: `1px solid ${DK.border}` }}>
                        <span style={{ fontFamily: DK.sans, fontSize: isMobileDemo ? 9 : 11, color: DK.text }}>{row.task}</span>
                        {!isMobileDemo && <span style={{ fontFamily: DK.sans, fontSize: 11, color: DK.textMuted }}>{row.owner}</span>}
                        <span style={{ fontFamily: DK.sans, fontSize: isMobileDemo ? 8 : 9, fontWeight: 600, color: row.color, background: `${row.color}18`, padding: "2px 8px", borderRadius: 99, width: "fit-content" }}>{row.status}</span>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.35 }} style={{ fontFamily: DK.sans, fontSize: isMobileDemo ? 11 : 13, color: DK.text, lineHeight: 1.5, marginTop: isMobileDemo ? 6 : 10 }}>
                    Want me to get started on these action items?
                  </motion.div>
                </motion.div>
              )}
            </div>

            {/* Reply input */}
            <div style={{ padding: isMobileDemo ? "6px 10px 8px" : "8px 16px 12px", borderTop: `1px solid ${DK.border}`, background: DK.bg }}>
              <div style={{ background: DK.inputBg, borderRadius: 22, padding: isMobileDemo ? "8px 10px 8px 12px" : "10px 12px 10px 16px", display: "flex", alignItems: "center", gap: isMobileDemo ? 6 : 8 }}>
                {!isMobileDemo && (
                  <div style={{ width: 22, height: 22, borderRadius: "50%", border: `1px solid ${DK.textFaint}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontSize: 13, color: DK.textMuted, lineHeight: 1 }}>+</span>
                  </div>
                )}
                <span style={{ fontFamily: DK.sans, fontSize: isMobileDemo ? 11 : 13, color: phase === 0 && !messageSent && typedChars > 0 ? DK.text : DK.textFaint, flex: 1 }}>
                  {phase === 0 && !messageSent && typedChars > 0 ? (
                    <>
                      {userPrompt.substring(0, typedChars)}
                      <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }} style={{ display: "inline-block", width: 1.5, height: 14, background: DK.text, marginLeft: 1, verticalAlign: "middle" }} />
                    </>
                  ) : "Reply..."}
                </span>
                {!isMobileDemo && (
                  <>
                    <span style={{ fontFamily: DK.sans, fontSize: 11, color: DK.textMuted }}>Opus 4.6</span>
                    <svg width="8" height="8" viewBox="0 0 8 8" style={{ marginLeft: -2, marginRight: 6 }}><path d="M2 3L4 5.5L6 3" stroke={DK.textMuted} strokeWidth="1" fill="none" strokeLinecap="round" /></svg>
                  </>
                )}
                <div style={{ width: isMobileDemo ? 22 : 26, height: isMobileDemo ? 22 : 26, borderRadius: "50%", flexShrink: 0, background: DK.orange, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 10V2M6 2L3 5M6 2L9 5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          {!isMobileDemo && (
            <motion.div initial={{ width: 0, opacity: 0 }} animate={{ width: showSidebar ? sidebarW : 0, opacity: showSidebar ? 1 : 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} style={{ overflow: "hidden", flexShrink: 0, background: DK.bgSidebar, borderLeft: `1px solid ${DK.border}` }}>
              <div style={{ width: sidebarW, height: "100%", display: "flex", flexDirection: "column" }}>
                <div style={{ padding: "14px 14px 10px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                    <span style={{ fontFamily: DK.sans, fontSize: 13, fontWeight: 600, color: DK.text }}>Progress</span>
                    <svg width="10" height="10" viewBox="0 0 10 10"><path d="M3 4L5 6.5L7 4" stroke={DK.textMuted} strokeWidth="1.2" fill="none" strokeLinecap="round" /></svg>
                  </div>
                  {checklist.map((item, i) => {
                    const allDone = phase === 2;
                    const checked = allDone || i <= checkIndex;
                    const isActiveItem = !allDone && i === checkIndex + 1 && phase === 1;
                    return (
                      <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                        <div style={{ width: 22, height: 22, borderRadius: "50%", flexShrink: 0, background: checked ? DK.green : isActiveItem ? DK.blue : "#3D3D3D", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.3s, transform 0.3s", transform: checked ? "scale(1)" : isActiveItem ? "scale(1.05)" : "scale(0.9)" }}>
                          {checked ? (
                            <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2.5 6L5 8.5L9.5 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          ) : (
                            <span style={{ fontFamily: DK.sans, fontSize: 10, fontWeight: 600, color: isActiveItem ? "#fff" : DK.textMuted }}>{i + 1}</span>
                          )}
                        </div>
                        <span style={{ fontFamily: DK.sans, fontSize: 11, color: checked ? DK.text : isActiveItem ? DK.text : DK.textMuted, fontWeight: isActiveItem ? 500 : 400, transition: "color 0.3s" }}>{item}</span>
                      </div>
                    );
                  })}
                </div>
                <div style={{ padding: "10px 14px", borderTop: `1px solid ${DK.border}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontFamily: DK.sans, fontSize: 12, fontWeight: 500, color: DK.text }}>Working folder</span>
                  <svg width="8" height="8" viewBox="0 0 8 8"><path d="M3 2L5.5 4L3 6" stroke={DK.textMuted} strokeWidth="1.2" fill="none" strokeLinecap="round" /></svg>
                </div>
                <div style={{ padding: "10px 14px", flex: 1, borderTop: `1px solid ${DK.border}` }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                    <span style={{ fontFamily: DK.sans, fontSize: 12, fontWeight: 500, color: DK.text }}>Context</span>
                  </div>
                  <span style={{ fontFamily: DK.sans, fontSize: 10, color: DK.textMuted, textTransform: "uppercase", letterSpacing: 0.5 }}>Connectors</span>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8, padding: "6px 8px", borderRadius: 8, background: "rgba(255,255,255,0.03)" }}>
                    <div style={{ width: 20, height: 20, borderRadius: 4, background: "#4285F4", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#fff", fontWeight: 700 }}>G</div>
                    <span style={{ fontFamily: DK.sans, fontSize: 11, color: DK.text }}>Google Drive</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════════════════════
// MAIN EXPORT
// ═══════════════════════════════════════════════════════════════════════════════

interface ScrollytellingCompactProps {
  ctaUrl?: string;
  ctaText?: string;
  ctaSubtext?: string;
}

export default function ScrollytellingCompact({
  ctaUrl = "https://ship.samcart.com/products/claude-co-work-bootcamp",
  ctaText = "JOIN THE BOOTCAMP",
  ctaSubtext = "No code. No terminal. Just results.",
}: ScrollytellingCompactProps) {
  const bp = useBreakpoint();
  const isMobile = bp === "mobile";
  const isTablet = bp === "tablet";
  const isLaptop = bp === "laptop";
  const compact = isMobile || isTablet || isLaptop;
  const mobileLayout = isMobile || isTablet;

  return (
    <section style={{ position: "relative", background: C.pageBg, padding: compact ? "48px 0 60px" : "80px 0 100px", overflow: "hidden", fontFamily: "Manrope, sans-serif" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: compact ? "0 16px" : "0 24px" }}>
        {/* Section 1: Hero + Demo */}
        <div style={{ display: "flex", flexDirection: compact ? "column" : "row", alignItems: "center", gap: compact ? 32 : 56, marginBottom: compact ? 56 : 80 }}>
          <div style={{ flex: 1, maxWidth: compact ? "100%" : 420 }}>
            <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", color: C.yellowSoft, marginBottom: 12 }}>Beyond the Chat</div>
            <h2 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: compact ? 28 : 36, color: C.cream, lineHeight: 1.15, margin: 0, marginBottom: 16 }}>
              What if AI could <span style={{ color: C.yellow }}>do your job with&nbsp;you</span>?
            </h2>
            <p style={{ fontSize: compact ? 16 : 18, color: C.creamDim, lineHeight: 1.6, margin: 0, marginBottom: 20 }}>
              Claude Cowork takes AI beyond the chat window. It&apos;s a no-code AI agent that executes real work. Watch it build a plan, run your day-to-day workflows (in your style), and deliver finished output&mdash;only after you approve it.
            </p>
            <p style={{ fontSize: 14, color: C.creamFaint, lineHeight: 1.5, margin: 0 }}>
              This is the future of knowledge work. And it&apos;s available right now.
            </p>
          </div>
          <div style={{ flexShrink: 0, width: compact ? "100%" : "auto" }}>
            <CoworkDemo compact={compact} mobile={mobileLayout} />
          </div>
        </div>

        {/* Section 2: Skills marquee */}
        <div style={{ textAlign: "center", marginBottom: compact ? 32 : 48 }}>
          <div style={{ display: "inline-block", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", color: C.yellowSoft, marginBottom: 12 }}>The Unlock</div>
          <h3 style={{ fontWeight: 700, fontSize: compact ? 24 : 34, color: C.cream, lineHeight: 1.2, margin: 0, marginBottom: 12 }}>
            .skills take AI to the <span style={{ color: C.yellow }}>next level</span>
          </h3>
          <p style={{ fontSize: compact ? 16 : 18, color: C.creamDim, lineHeight: 1.6, margin: 0, maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
            Think of .skills like hiring an expert at any task...instantly. They connect to the tools you already use and get stuff done.
          </p>
        </div>

        {/* Skills ticker */}
        <div style={{ marginBottom: compact ? 48 : 64, overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 60, zIndex: 1, background: `linear-gradient(to right, ${C.pageBg}, transparent)` }} />
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 60, zIndex: 1, background: `linear-gradient(to left, ${C.pageBg}, transparent)` }} />
          <motion.div animate={{ x: [0, compact ? -720 : -960] }} transition={{ duration: compact ? 22 : 28, repeat: Infinity, ease: "linear" }} style={{ display: "flex", gap: compact ? 12 : 16, width: "max-content" }}>
            {[
              { name: "Customer Support", desc: "Triage tickets, draft responses, escalate issues" },
              { name: "Data", desc: "Write SQL, build dashboards, turn data into stories" },
              { name: "Enterprise Search", desc: "Find anything across email, docs, and wikis" },
              { name: "Finance", desc: "Streamline accounting, journal entries, reconciliation" },
              { name: "Legal", desc: "Draft contracts, review clauses, track compliance" },
              { name: "Organization", desc: "Manage files, schedules, projects, and workflows" },
              { name: "Writing", desc: "Draft, edit, and polish content in your voice" },
              { name: "Productivity", desc: "Automate repetitive tasks and daily routines" },
              { name: "Customer Support", desc: "Triage tickets, draft responses, escalate issues" },
              { name: "Data", desc: "Write SQL, build dashboards, turn data into stories" },
              { name: "Enterprise Search", desc: "Find anything across email, docs, and wikis" },
              { name: "Finance", desc: "Streamline accounting, journal entries, reconciliation" },
              { name: "Legal", desc: "Draft contracts, review clauses, track compliance" },
              { name: "Organization", desc: "Manage files, schedules, projects, and workflows" },
              { name: "Writing", desc: "Draft, edit, and polish content in your voice" },
              { name: "Productivity", desc: "Automate repetitive tasks and daily routines" },
            ].map((skill, i) => (
              <div key={i} style={{ flexShrink: 0, width: compact ? 170 : 220, padding: compact ? "10px 14px" : "14px 18px", background: "rgba(255,255,255,0.04)", borderRadius: compact ? 10 : 12, border: `1px solid ${DK.border}` }}>
                <div style={{ fontFamily: DK.sans, fontSize: compact ? 11 : 13, fontWeight: 600, color: C.cream, marginBottom: compact ? 4 : 6 }}>{skill.name}</div>
                <div style={{ fontFamily: DK.sans, fontSize: compact ? 10 : 11, color: C.creamDim, lineHeight: 1.4 }}>{skill.desc}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: compact ? 48 : 64 }}>
          <a href={ctaUrl} style={{ display: "inline-block", background: C.yellow, color: "#fff", fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: compact ? 16 : 18, textTransform: "uppercase", letterSpacing: "0.04em", padding: "16px 36px", borderRadius: 8, textDecoration: "none" }}>{ctaText}</a>
          <p style={{ fontSize: 16, color: C.creamFaint, fontStyle: "italic", margin: 0, marginTop: 16 }}>{ctaSubtext}</p>
        </div>
      </div>
    </section>
  );
}

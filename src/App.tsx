import './index.css'
import { useState } from 'react'
import ScrollytellingCompact from './framer/scrolly'

const SAMCART_URL = 'https://ship.samcart.com/products/claude-co-work-bootcamp'

/* ─── Section 1: Hero ─── */
function Hero() {
  return (
    <section className="relative w-full bg-page overflow-hidden">
      {/* Background: hero-bg.png for the photo composition */}
      <div className="relative">
        <img
          src="/images/hero-bg.png"
          alt=""
          className="w-full h-auto block"
        />
        {/* Gradient overlay: solid dark on top (covers old baked-in text), fades to transparent at bottom (reveals photos) */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, #0d1116 0%, #0d1116 45%, rgba(13,17,22,0.85) 60%, rgba(13,17,22,0.3) 75%, transparent 90%)',
        }} />
      </div>

      {/* HTML text content positioned over the darkened top portion */}
      <div className="absolute inset-0 flex flex-col items-center z-10">
        {/* Badge */}
        <div className="mt-6 flex items-center gap-2 bg-black/80 backdrop-blur px-4 py-2 rounded-full border border-white/20">
          <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
          <span className="font-manrope text-[12.8px] font-semibold text-white">
            Next Live Class: February 23, 2026
          </span>
        </div>

        {/* Logo */}
        <img src="/images/logo.png" alt="Claude Cowork Bootcamp" className="h-10 mt-8 mb-6" />

        {/* Headline */}
        <h1 className="font-anton text-[clamp(36px,5.5vw,80px)] leading-[0.95] uppercase text-center max-w-[900px] px-6">
          <span className="text-cream">Turn Claude Into Your </span>
          <span className="text-cream">Highest Performing Employee </span>
          <span className="text-cream">By Building </span>
          <span className="text-yellow">.skills</span>
        </h1>

        {/* Subtitle */}
        <p className="font-manrope text-[clamp(14px,1.4vw,18px)] text-cream/70 text-center max-w-[600px] px-6 mt-6 leading-relaxed">
          Any task you do more than once should be saved as a .skill.
          <br />This is how you build leverage forever.
        </p>

        {/* Sub-subtitle */}
        <p className="font-manrope text-[clamp(13px,1.2vw,16px)] text-cream/50 text-center max-w-[550px] px-6 mt-3 leading-relaxed">
          Join us live for beginner-friendly training on No-Code AI and the future of work.
        </p>

        {/* CTA Button */}
        <a
          href={SAMCART_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 bg-yellow text-black font-manrope text-[16px] font-extrabold uppercase tracking-wide px-8 py-4 rounded-lg hover:brightness-110 transition"
        >
          Join the Bootcamp
        </a>
      </div>
    </section>
  )
}

/* ─── Section 2: Divider ─── */
function Divider() {
  return <div className="w-full h-px bg-cream/10" />
}

/* ─── Section 3: What is Cowork ─── */
function WhatIsCowork() {
  return (
    <section className="bg-page py-20 px-6">
      <div className="max-w-[800px] mx-auto">
        <h2 className="font-manrope text-[50px] font-semibold text-cream leading-tight mb-10">
          What is <span className="font-bold">Claude Cowork</span>? And what are <span className="font-bold">Claude.Skills</span>?
        </h2>
        <div className="space-y-6 font-manrope text-[16px] text-cream/70 leading-relaxed">
          <p>Claude Cowork is the simplest way to do no-code automated work.</p>
          <p>
            Similar to Claude, it's a chat window. Except instead of just "chatting," you can give Claude
            Cowork access to other applications—Notion, Google Drive, Gamma, Asana, etc.—and it can{' '}
            <span className="text-yellow font-medium">work with you</span> and execute tasks on your behalf.
          </p>
          <p>It's awesome. It's like cloning "you."</p>
          <p className="text-cream/50">(And it's way, way easier than learning how to code.)</p>
        </div>
        <h3 className="font-manrope text-[26px] font-bold text-cream mt-12 mb-6">
          Claude <span className="font-bold">.Skills</span> are the knowledge-files that build your digital clone's <span className="font-anton">"brain."</span>
        </h3>
        <div className="space-y-6 font-manrope text-[16px] text-cream/70 leading-relaxed">
          <p>
            Every time you do a task with Claude, what you're really doing is training Claude on{' '}
            <span className="text-yellow font-medium">how you do what you do.</span>
          </p>
          <p>
            The problem is, in Claude's regular chat window, if you want to do that same task or go
            through the same process again, you have to re-explain everything. Claude has a hard time
            remembering what you did, or your preferences on how you wanted it done.
          </p>
          <p className="text-yellow font-medium">
            ...unless you go through the steps of building & saving it as a .Skill.
          </p>
          <p>
            Then, Claude Cowork can do "what you just did together," on its own, forever.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 4: Are .Skills Right For You? ─── */
function SkillsRightForYou() {
  const cards = [
    {
      icon: '💼',
      question: 'Do you have a job?',
      text: 'If so, there are probably hundreds of tasks you do manually, repeatedly, that consume hundreds of hours of your life. These are perfect candidates for .Skills to do—because they\'re boring, tedious, mindless, etc. If you spend any time doing this kind of monotonous knowledge work, then you need to build some .Skills.',
    },
    {
      icon: '🤖',
      question: 'Do you use AI but struggle to generate high-quality outputs?',
      text: 'That\'s because you\'re limited to the chat window. You\'re still copy-pasting context every time. The breakthrough comes when your tools meet actually faster & quality work with AI just do things myself. All you need to build some .Skills.',
    },
    {
      icon: '🏢',
      question: 'Do you own your own business?',
      text: 'If so, think of Claude .Skills as your first no-code employee. No more prompting & chatting. Just show it what you want help with, save a .Skill, it to a repeatable process in a .Skill, to save money & get back to the things that matter most to you. Build some profitable .Skills.',
    },
  ]

  return (
    <section className="bg-page py-16 px-6">
      <div className="max-w-page mx-auto text-center mb-12">
        <h2 className="font-manrope text-[50px] font-semibold text-cream mb-3">
          Are <span className="font-bold">.Skills</span> Right For You?
        </h2>
        <p className="font-manrope text-[20px] font-semibold text-cream/70 italic">
          Hmmm… let's see…
        </p>
      </div>
      <div className="max-w-page mx-auto grid grid-cols-1 md:grid-cols-3 gap-0">
        {cards.map((card, i) => (
          <div key={i} className="bg-cream rounded-lg p-8 flex flex-col gap-4">
            <div className="text-4xl">{card.icon}</div>
            <h3 className="font-manrope text-[20px] font-bold text-black">
              {card.question}
            </h3>
            <p className="font-manrope text-[16px] font-medium text-black/80 leading-relaxed">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── Section 5: Bold Statement ─── */
function BoldStatement() {
  return (
    <section className="bg-red py-16 px-6 md:px-16">
      <div className="max-w-page mx-auto">
        <h2 className="font-anton text-[96px] leading-[0.95] uppercase text-cream mb-12">
          Learning how to use &{' '}
          <span className="text-cream/50">create .Skills is the future of no-code work.</span>
        </h2>
        <h2 className="font-anton text-[96px] leading-[0.95] uppercase text-center">
          <span className="text-cream">If staying relevant in your </span>
          <span className="text-cream/50">industry is a priority,</span>
          <br />
          <span className="text-cream">then .Skills are right for you.</span>
        </h2>
      </div>
    </section>
  )
}

/* ─── Section 6: 5 Skills ─── */
function FiveSkills() {
  const skills = [
    { num: 'Skill #1', name: 'Computer Organizer Skill', desc: 'generate posts in your voice', img: '/images/floppy-organizer.png' },
    { num: 'Skill #2', name: 'Newsletter Skill', desc: 'draft editions with your frameworks', img: '/images/floppy-newsletter.png' },
    { num: 'Skill #5', name: 'Meeting Prep Skill', desc: 'dictate on walks, publish when home', img: '/images/floppy-meeting.png' },
    { num: 'Bonus', name: 'Project Kit Skill', desc: 'emails, proposals, briefs, memos', img: '/images/floppy-project.png' },
    { num: 'Skill #3', name: 'Digital Product Skill', desc: 'sales pages, email sequences', img: '/images/floppy-digital.png' },
    { num: 'Skill #4', name: 'Skill Maker', desc: 'trend-jacking, idea generation', img: '/images/floppy-skillmaker.png' },
  ]

  return (
    <section className="relative py-20 px-6 overflow-hidden" style={{
      background: 'linear-gradient(180deg, #f3eccb 0%, #dc2625 15%, #0d1116 50%)',
    }}>
      <div className="max-w-page mx-auto">
        <div className="text-center mb-4">
          <h2 className="font-manrope text-[50px] font-semibold text-cream">
            <span className="font-bold">5 .skills</span> to get you started:
          </h2>
        </div>
        <p className="font-geist text-[16px] text-cream/60 text-center max-w-[700px] mx-auto mb-12">
          In addition to training you on how to build & save .Skills of your own, part of
          Claude Cowork Bootcamp is sharing our .Skills with you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <div key={i} className="bg-page rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-[120px] h-[120px] mb-4 relative">
                <div className="absolute inset-0 bg-cream/10 rounded-full" />
                <img src={skill.img} alt={skill.name} className="w-full h-full object-contain relative z-10" />
              </div>
              <span className="font-manrope text-[16px] font-bold text-cream/70 mb-1">{skill.num}</span>
              <h3 className="font-manrope text-[26px] font-bold text-cream mb-2">{skill.name}</h3>
              <p className="font-manrope text-[16px] text-cream/50">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Section 7: Free Bonuses ─── */
function FreeBonuses() {
  const bonuses = [
    { num: 1, title: 'State of AI Tools Guide', desc: 'What tools actually matter right now. Updated every cohort.', value: '$99' },
    { num: 2, title: 'Prompt Building Blocks Framework', desc: 'The "lego brick" assembly method. One-shot any content type.', value: '$199' },
    { num: 3, title: 'Personal Voice Training Masterclass', desc: 'Make AI sound indistinguishable from your writing.', value: '$199' },
    { num: 4, title: 'Ship 30 for 30 AI Version', desc: 'The original atomic essay system built directly into the Agent\'s brain. Learn the frameworks that made short-form writing viral.', value: '$800' },
    { num: 5, title: 'Category Newsletter Creator Course', desc: 'Build a newsletter that positions you as the go-to expert in your niche. Topic selection to monetization.', value: '$350' },
    { num: 6, title: 'Low-Ticket Launchpad', desc: 'A starter kit to package, position, and sell low-ticket offers without overthinking the tech or strategy.', value: '$350' },
  ]

  return (
    <section className="bg-page py-20 px-6">
      <Divider />
      <div className="max-w-page mx-auto pt-16">
        <h2 className="font-manrope text-[50px] font-semibold text-center mb-12">
          <span className="font-bold text-cream">Free Bonuses</span>{' '}
          <span className="text-cream/70">Included</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-cream/10 border border-cream/10 rounded-lg overflow-hidden">
          {bonuses.map((b, i) => (
            <div key={i} className="bg-card p-8 flex flex-col gap-3">
              <span className="font-manrope text-[16px] font-medium text-yellow">Bonus #{b.num}</span>
              <h3 className="font-manrope text-[24px] font-bold text-cream">{b.title}</h3>
              <p className="font-manrope text-[16px] font-medium text-cream/70 leading-relaxed flex-1">{b.desc}</p>
              <span className="font-manrope text-[20px] font-medium text-red">{b.value} value</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Section 8: Instructors ─── */
function Instructors() {
  const instructors = [
    {
      name: 'Nicolas Cole',
      img: '/images/cole-headshot.png',
      bio: [
        '10+ years writing online. 400+ columns for Inc Magazine. Author of The Art and Business of Online Writing. Built a multi-million dollar ghostwriting agency from scratch.',
        'Cole pioneered the frameworks that made short-form writing go viral—and now he\'s rebuilt them for the AI age. He runs Write With AI Academy and has trained thousands of creators.',
        '"After playing with Claude Cowork non-stop for the past week, I\'ve officially internalized how existential AI is. If you aren\'t learning these AI skills, you\'re completely fused."',
      ],
    },
    {
      name: 'Dickie Bush',
      img: '/images/dickie-headshot.png',
      bio: [
        'Former BlackRock trader. Co-founder of Ship 30 for 30 and Typeshare. Creator of the Atomic Essay format. His frameworks have driven millions of online impressions.',
        'In January 2020, Dickie made a bet: write one short-form piece every day for 30 days. That challenge became a writing community with 30,000+ members.',
        'Now he uses AI daily for hiring, managing a high 7-figure sales team, and running business operations across multiple companies.',
      ],
    },
    {
      name: 'Mitch Harris',
      img: '/images/mitch-headshot.png',
      bio: [
        'Mitch started using AI to help run his business on top of his day job—managing clients, drafting proposals, keeping the drudgery of it all—and the drudgery went away so he could do work.',
        'Now he builds AI systems for professionals who want leverage without learning to code. Practical workflows that give you back hours every week.',
      ],
    },
  ]

  return (
    <section className="bg-page py-20 px-6">
      <Divider />
      <div className="max-w-page mx-auto pt-16">
        <h2 className="font-manrope text-[50px] font-extrabold text-cream text-center mb-2">
          Meet Your Instructors
        </h2>
        <p className="font-manrope text-[18px] font-medium text-white text-center mb-12">
          Built by people who actually use this stuff every day
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-cream/10 border border-cream/10 rounded-lg overflow-hidden">
          {instructors.map((inst, i) => (
            <div key={i} className="bg-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <h3 className="font-manrope text-[28px] font-extrabold text-white">{inst.name}</h3>
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <img src={inst.img} alt={inst.name} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4">
                {inst.bio.map((p, j) => (
                  <p key={j} className={`font-manrope text-[16px] text-white/80 leading-relaxed ${j === inst.bio.length - 1 && i === 0 ? 'italic text-white/60' : ''}`}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="font-manrope text-[26px] font-bold text-cream text-center mt-12">
          Three <span className="text-cream">practitioners</span>. Zero theorists. <span className="font-bold">Everything we teach.</span>
        </p>
      </div>
    </section>
  )
}

/* ─── Section 9: Schedule ─── */
function Schedule() {
  return (
    <section className="bg-page py-20 px-6">
      <Divider />
      <div className="max-w-page mx-auto pt-16">
        <div className="text-center mb-12">
          <h2 className="font-manrope text-[48px] font-bold text-cream mb-2">
            <span className="font-bold">Claude Cowork</span> Bootcamp Kicks Off
          </h2>
          <h3 className="font-manrope text-[48px] font-bold">
            <span className="text-cream">Monday, February 23rd!</span>{' '}
            <span className="text-cream/50">Instructors</span>
          </h3>
          <p className="font-manrope text-[18px] font-medium text-white mt-4">Here's the schedule:</p>
        </div>

        {/* Calendar Visualization */}
        <div className="max-w-[600px] mx-auto mb-12 border border-dashed border-cream/20 rounded-xl p-6">
          {/* Faded week above */}
          <div className="grid grid-cols-6 gap-2 mb-3 opacity-30">
            <span className="font-manrope text-[13.6px] font-bold text-white">Feb 16</span>
            {['M', 'T', 'W', 'T', 'F'].map(d => (
              <span key={d + '1'} className="font-manrope text-[14.4px] font-medium text-white text-center">{d}</span>
            ))}
          </div>
          {/* Week 1 */}
          <div className="grid grid-cols-6 gap-2 mb-3 bg-card rounded-xl p-4">
            <span className="font-manrope text-[13.6px] font-bold text-white self-center">Week 1</span>
            {[{d:'23',active:true},{d:'24',active:false},{d:'25',active:true},{d:'26',active:false},{d:'27',active:true}].map(({d,active}) => (
              <div key={d} className={`w-12 h-12 rounded-lg flex flex-col items-center justify-center mx-auto ${active ? 'border-2 border-green bg-green/10' : ''}`}>
                <span className={`font-manrope font-bold ${active ? 'text-[17.6px] text-white' : 'text-[14.4px] text-white/50'}`}>{d}</span>
                {active && <span className="w-1.5 h-1.5 rounded-full bg-green mt-0.5" />}
              </div>
            ))}
          </div>
          {/* Week 2 */}
          <div className="grid grid-cols-6 gap-2 mb-3 bg-card rounded-xl p-4">
            <span className="font-manrope text-[13.6px] font-bold text-white self-center">Week 2</span>
            {[{d:'2',active:true},{d:'3',active:false},{d:'4',active:true},{d:'5',active:false},{d:'6',active:true}].map(({d,active}) => (
              <div key={d} className={`w-12 h-12 rounded-lg flex flex-col items-center justify-center mx-auto ${active ? 'border-2 border-green bg-green/10' : ''}`}>
                <span className={`font-manrope font-bold ${active ? 'text-[17.6px] text-white' : 'text-[14.4px] text-white/50'}`}>{d}</span>
                {active && <span className="w-1.5 h-1.5 rounded-full bg-green mt-0.5" />}
              </div>
            ))}
          </div>
          {/* Faded week below */}
          <div className="grid grid-cols-6 gap-2 opacity-30">
            <span className="font-manrope text-[13.6px] font-bold text-white">Mar 9</span>
            {['M', 'T', 'W', 'T', 'F'].map(d => (
              <span key={d + '2'} className="font-manrope text-[14.4px] font-medium text-white text-center">{d}</span>
            ))}
          </div>
        </div>

        {/* Week breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-cream/10 border border-cream/10 rounded-lg overflow-hidden mb-12">
          <div className="bg-card p-8">
            <h4 className="font-manrope text-[26px] font-bold text-orange mb-6">Week 1 — February</h4>
            {[
              { day: 'Mon 23', session: 'Session 1: Setup & First .Skill' },
              { day: 'Wed 25', session: 'Session 2: Voice Training' },
              { day: 'Fri 27', session: 'Session 3: Content .Skills' },
            ].map((s, i) => (
              <div key={i} className="flex gap-6 py-3 border-b border-cream/10 last:border-0">
                <span className="font-manrope text-[16px] font-bold text-cream w-16">{s.day}</span>
                <span className="font-manrope text-[16px] text-cream/70">{s.session}</span>
              </div>
            ))}
          </div>
          <div className="bg-card p-8">
            <h4 className="font-manrope text-[26px] font-bold text-orange mb-6">Week 2 — MARCH</h4>
            {[
              { day: 'Mon 2', session: 'Session 4: Research & Ideas' },
              { day: 'Wed 4', session: 'Session 5: Work Docs & Proposals' },
              { day: 'Fri 6', session: 'Session 6: Advanced .Skills' },
            ].map((s, i) => (
              <div key={i} className="flex gap-6 py-3 border-b border-cream/10 last:border-0">
                <span className="font-manrope text-[16px] font-bold text-cream w-16">{s.day}</span>
                <span className="font-manrope text-[16px] text-cream/70">{s.session}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center font-manrope text-[20px] text-cream/70 space-y-1">
          <p><span className="text-red font-medium">6 live</span> sessions over <span className="text-red font-medium">2 weeks.</span></p>
          <p>This <span className="font-bold text-cream">isn't self-paced content</span> you buy and forget.</p>
          <p>We <span className="font-bold text-cream">build together.</span> You show up, you do the work, you leave with a system—</p>
          <p>and the <span className="text-red font-medium">replay recordings forever</span>.</p>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 10: Pricing ─── */
function Pricing() {
  return (
    <section className="relative py-20 px-6 overflow-hidden" style={{
      background: 'linear-gradient(180deg, #0d1116 0%, #1a0505 50%, #0d1116 100%)',
    }}>
      <div className="max-w-[500px] mx-auto bg-card border border-cream/10 rounded-2xl overflow-hidden">
        <div className="p-8 text-center border-b border-cream/10">
          <p className="font-manrope text-[12px] font-bold text-cream/50 uppercase tracking-widest mb-2">Total Value</p>
          <p className="font-manrope text-[26px] font-extrabold text-cream/50 line-through mb-1">$3,800+</p>
        </div>
        <div className="p-8 text-center">
          <p className="font-manrope text-[26px] font-semibold text-white mb-2">Your Price</p>
          <p className="font-manrope text-[96px] font-extrabold text-cream leading-none mb-6">$800</p>
          <a
            href={SAMCART_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-yellow text-black font-manrope text-[20px] font-extrabold uppercase tracking-wide py-4 rounded-lg hover:brightness-110 transition text-center"
          >
            Join Claude Cowork Bootcamp
          </a>
        </div>
        <div className="px-8 pb-8 text-center space-y-3">
          <p className="font-manrope text-[16px] font-medium text-white">
            Starts February 23, 2026 · Limited seats
          </p>
          <div className="inline-flex items-center gap-2 bg-red-bg px-4 py-2 rounded-full">
            <span>🛡️</span>
            <span className="font-dm text-[15.2px] font-semibold text-white">7-Day Money-Back Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 11: Guarantee + Final CTA ─── */
function GuaranteeCTA() {
  return (
    <section className="bg-page py-20 px-6">
      <Divider />
      <div className="max-w-page mx-auto pt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-cream/10 border border-cream/10 rounded-lg overflow-hidden">
        <div className="bg-card p-12">
          <h3 className="font-manrope text-[32px] font-semibold text-cream mb-6">
            7-Day, No-Questions-Asked<br />Guarantee
          </h3>
          <div className="space-y-4 font-manrope text-[18px] text-cream/70 leading-relaxed">
            <p>
              Complete the program, implement the frameworks,
              and if you STILL<br />
              don't feel like you got the value—we'll give you a full refund.
            </p>
            <p>
              We put this stipulation in place because we KNOW
              the frameworks<br />
              work. The variable we don't control is whether you
              put them into<br />
              action.
            </p>
          </div>
        </div>
        <div className="bg-page p-12 flex flex-col justify-center">
          <h3 className="font-manrope text-[50px] font-medium text-cream leading-tight mb-8">
            Ready to Build Your First <span className="font-bold">.Skill</span>?
          </h3>
          <a
            href={SAMCART_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow text-black font-manrope text-[20px] font-extrabold uppercase tracking-wide px-8 py-5 rounded-full hover:brightness-110 transition text-center mb-4"
          >
            Join Claude Cowork Bootcamp — $800
          </a>
          <p className="font-manrope text-[20px] text-cream/50">
            February 23 – March 6, 2026 · Limited seats
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 12: FAQ ─── */
function FAQ() {
  const faqs = [
    { q: 'Do I need Claude Max?', a: 'Yes, Claude Max ($20/month) is required. It gives you access to Claude Cowork which is the platform we use throughout the bootcamp.' },
    { q: 'Does this work on Windows?', a: 'Cowork is a Mac-only interface for Claude right now. Many of the skills and tools are accessible via the Claude app or Claude Code interface on Windows, but it\'s a little more complicated. If you\'re on Windows, we recommend borrowing a Mac for 2 weeks if you want to play :)' },
    { q: 'Is this self-paced or live?', a: 'Live! 6 sessions over 2 weeks. But all sessions are recorded and you get replay access forever.' },
    { q: 'What commitment is required?', a: 'Each session is about 90 minutes. Plus time between sessions to practice building .Skills on your own.' },
    { q: 'What if I\'ve never used AI before?', a: 'Perfect. This bootcamp is designed for non-technical people. If you can use a chat window, you can build .Skills.' },
    { q: 'What about AI agents?', a: '.Skills are the building blocks of AI agents. Once you know how to build .Skills, you\'re ready to build agents that run entire workflows autonomously.' },
  ]

  const [open, setOpen] = useState<number | null>(1)

  return (
    <section className="bg-page py-20 px-6">
      <Divider />
      <div className="max-w-[700px] mx-auto pt-16">
        <h2 className="font-manrope text-[48px] font-bold text-center mb-12">
          <span className="text-cream font-bold">Frequently</span>{' '}
          <span className="text-cream/70">Asked Questions</span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-card border border-cream/10 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex items-center justify-between p-5">
                <span className="font-manrope text-[18px] font-bold text-faq">{faq.q}</span>
                <span className="font-manrope text-[24px] font-extrabold text-faq">
                  {open === i ? '−' : '+'}
                </span>
              </div>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="font-manrope text-[16px] text-faq/80 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer logo */}
        <div className="flex justify-center mt-16">
          <img src="/images/logo.png" alt="Claude Cowork Bootcamp" className="h-16" />
        </div>
      </div>
    </section>
  )
}

/* ─── Scrollytelling Section ─── */
function Scrollytelling() {
  return (
    <section className="bg-page">
      <ScrollytellingCompact
        cTAURL={SAMCART_URL}
        cTAButtonText="JOIN THE BOOTCAMP"
        cTASubtext="No code. No terminal. Just results."
        style={{ width: '100%' }}
      />
    </section>
  )
}

/* ─── Credibility Line ─── */
function CredibilityLine() {
  return (
    <section className="bg-page py-8 px-6">
      <Divider />
      <p className="font-manrope text-[26px] font-bold text-cream/70 text-center pt-8 max-w-page mx-auto">
        <span className="text-cream italic">Everything we teach, we use ourselves to run our</span>{' '}
        <span className="text-cream italic">$8,000,000/yr business.</span>
      </p>
    </section>
  )
}

/* ─── Main App ─── */
export default function App() {
  return (
    <div className="bg-page min-h-screen">
      <Hero />
      <Divider />
      <WhatIsCowork />
      <Scrollytelling />
      <SkillsRightForYou />
      <BoldStatement />
      <FiveSkills />
      <FreeBonuses />
      <Instructors />
      <CredibilityLine />
      <Schedule />
      <Pricing />
      <GuaranteeCTA />
      <FAQ />
    </div>
  )
}

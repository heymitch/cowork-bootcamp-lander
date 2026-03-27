"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import ScrollytellingCompact from "@/components/ScrollytellingCompact";

/* ─────────── INLINE TESTIMONIAL (reusable) ────────────── */
function InlineTestimonial({
  quote,
  name,
  role,
  size = "normal",
}: {
  quote: string;
  name: string;
  role?: string;
  size?: "normal" | "large" | "featured";
}) {
  const isLarge = size === "large" || size === "featured";
  const isFeatured = size === "featured";
  return (
    <div
      className={`animate-on-scroll mx-auto ${
        isFeatured
          ? "max-w-4xl py-16 px-6 text-center"
          : isLarge
          ? "max-w-3xl py-10 px-6"
          : "max-w-2xl py-8 px-6"
      }`}
    >
      {isFeatured ? (
        <>
          <p className="text-white/90 text-xl sm:text-2xl font-manrope italic leading-relaxed">
            &ldquo;{quote}&rdquo;
          </p>
          <p className="text-[#D4714E] font-semibold text-sm mt-4 font-inter">
            {name}
            {role && <span className="text-white/55 font-normal"> &mdash; {role}</span>}
          </p>
        </>
      ) : (
        <blockquote className={`border-l-3 border-[#D4714E]/60 pl-5 ${isLarge ? "pl-6" : ""}`}>
          <p
            className={`text-white/80 italic leading-relaxed font-manrope ${
              isLarge ? "text-lg sm:text-xl" : "text-base"
            }`}
          >
            &ldquo;{quote}&rdquo;
          </p>
          <footer className="text-white/55 text-sm mt-2 font-inter">
            &mdash; {name}
            {role && <span className="text-white/45"> &middot; {role}</span>}
          </footer>
        </blockquote>
      )}
    </div>
  );
}

/* ───────────────────────── HERO ───────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0a1628] overflow-hidden">
      {/* Teal-to-navy gradient from bottom-left corner */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#0c3d3d_0%,_#0a1628_50%,_#0f2847_100%)]" />
      {/* Top banner pill */}
      <div className="flex justify-center pt-6 relative z-10">
        <div className="inline-flex items-center gap-2 border border-red-500/50 rounded-full px-5 py-2 text-sm font-inter">
          <span className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
          <span className="text-white/90 tracking-wide text-xs sm:text-sm">
            2-WEEK BOOTCAMP KICKS OFF MONDAY, APRIL 6
          </span>
        </div>
      </div>

      {/* Instructor photo — spans full right side top to bottom */}
      <div className="hidden lg:block absolute right-0 top-0 h-full w-[55%]">
        {/* Teal glow behind photo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full bg-[#D4714E]/10 blur-3xl" />
        </div>
        <Image
          src="/images/img-01.png"
          alt="Bootcamp instructors"
          width={720}
          height={908}
          className="absolute right-0 top-0 h-full w-full object-cover object-top"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-32 relative z-10">
        {/* Left column */}
        <div className="max-w-[540px] space-y-7">
          <Image
            src="/images/img-00.png"
            alt="Claude Cowork Bootcamp"
            width={600}
            height={324}
            className="w-full max-w-[600px]"
            priority
          />
          <h2 className="text-[#f3eccb] font-manrope font-bold text-2xl sm:text-3xl leading-snug">
            Turn Claude Into Your Highest Performing Employee By Building .skills
          </h2>
          <p className="text-[#f3eccb]/60 text-lg leading-relaxed max-w-lg">
            Any task you do more than once should be saved as a .skill.{" "}
            <em className="text-[#f3eccb] font-semibold">
              This is how you build leverage forever.
            </em>
          </p>
          <p className="text-[#f3eccb]/60 text-lg leading-relaxed max-w-lg">
            Join us live for beginner-friendly training on{" "}
            <strong className="text-[#f3eccb]">No-Code AI</strong> and the future of
            work.
          </p>
          <a
            href="#how-it-works"
            className="inline-block bg-yellow-cta text-[#0a1628] font-bold font-inter text-sm tracking-[0.2em] px-8 py-4 rounded-sm hover:bg-[#fc6714] transition-colors"
          >
            HOW IT WORKS
          </a>
        </div>

        {/* Mobile-only instructor photo */}
        <div className="lg:hidden relative flex justify-center mt-12">
          <Image
            src="/images/img-01.png"
            alt="Bootcamp instructors"
            width={720}
            height={908}
            className="w-full max-w-[500px] h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── WHAT IS COWORK ─────────────────── */
function WhatIsCowork() {
  return (
    <section id="how-it-works" className="bg-[#0f2847] py-24 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16 space-y-2">
          <h2 className="font-manrope font-bold text-3xl sm:text-5xl text-white leading-tight">
            What is Claude Cowork?
          </h2>
          <h2 className="font-manrope font-bold text-3xl sm:text-5xl text-white leading-tight">
            What are .skills?
          </h2>
          <p className="text-white/70 text-lg font-manrope">
            (and why should you care?)
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left text */}
          <div className="space-y-5">
            <span className="text-xs tracking-[0.2em] text-[#D4714E]/80 font-inter uppercase">
              Beyond the Chat
            </span>
            <h3 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1]">
              What if
              <br />
              AI could do
              <br />
              your job
              <br />
              <em className="not-italic text-[#D4714E]">with</em> you?
            </h3>
            <p className="text-white/80 text-base leading-relaxed">
              Claude Cowork takes AI beyond the chat window. It&rsquo;s a
              no-code AI agent that executes real work. Watch it build a plan,
              run your day-to-day workflows (in your style), and deliver finished
              output—only after you approve it.
            </p>
            <p className="text-white/80 text-base leading-relaxed">
              This is the future of knowledge work. And it&rsquo;s available
              right now.
            </p>
          </div>

          {/* Right — Mock Cowork UI in laptop frame */}
          <div className="animate-on-scroll rounded-2xl border-[3px] border-white/20 overflow-hidden shadow-2xl shadow-black/60 bg-[#132640]">
            {/* Top bar — Connected apps */}
            <div className="px-5 pt-5 pb-3">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] text-white/45 tracking-widest uppercase font-inter">
                  Connected
                </span>
              </div>
              <div className="flex gap-3">
                {[
                  { app: "Gmail", letter: "M", bg: "bg-red-500", text: "text-white" },
                  { app: "Drive", letter: "▲", bg: "bg-gradient-to-br from-green-500 via-yellow-400 to-blue-500", text: "text-white" },
                  { app: "Calendar", letter: "C", bg: "bg-blue-500", text: "text-white" },
                  { app: "Notion", letter: "N", bg: "bg-white", text: "text-black" },
                ].map(({ app, letter, bg, text }) => (
                  <div
                    key={app}
                    className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center shadow-md`}
                  >
                    <span className={`text-sm ${text} font-bold font-inter`}>
                      {letter}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-white/15">
              {["Chat", "Cowork", "Code"].map((tab) => (
                <button
                  key={tab}
                  className={`px-5 py-2.5 text-sm font-inter transition-colors ${
                    tab === "Cowork"
                      ? "text-white border-b-2 border-[#D4714E]"
                      : "text-white/55"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Chat area */}
            <div className="p-5 space-y-4 relative">
              {/* Opus badge */}
              <div className="absolute top-3 right-5 bg-[#D4714E]/10 border border-[#D4714E]/30 rounded-full px-3 py-1">
                <span className="text-[10px] text-[#D4714E] font-inter font-medium">Opus 4.6</span>
              </div>
              <div className="bg-[#1e2636] rounded-xl px-4 py-3">
                <p className="text-white/90 text-sm">
                  Summarize weekly meetings
                </p>
              </div>

              {/* Progress steps */}
              <div className="space-y-1">
                <p className="text-white/55 text-xs font-inter tracking-wider uppercase mb-2">
                  Progress
                </p>
                {[
                  "Pull recordings from Drive",
                  "Transcribe meeting audio",
                  "Extract discussion topics",
                  "Identify action items",
                  "Draft summary report",
                  "Update CRM with tasks",
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3 py-1">
                    <span className="w-5 h-5 rounded-full bg-[#D4714E]/20 text-[#D4714E] text-xs flex items-center justify-center font-inter">
                      {i + 1}
                    </span>
                    <span className="text-white/80 text-sm">{step}</span>
                  </div>
                ))}
              </div>

              {/* Working folder */}
              <div className="border-t border-white/15 pt-4 mt-4">
                <p className="text-white/55 text-xs font-inter tracking-wider uppercase mb-2">
                  Working folder
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded bg-blue-500/20 flex items-center justify-center">
                    <span className="text-blue-400 text-xs font-bold">G</span>
                  </div>
                  <span className="text-white/80 text-sm">Google Drive</span>
                </div>
              </div>
            </div>

            {/* Connectors */}
            <div className="px-5 pb-3">
              <div className="border-t border-white/15 pt-3">
                <p className="text-white/45 text-[10px] tracking-widest uppercase font-inter mb-2">Connectors</p>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-[#D4714E]/20 flex items-center justify-center">
                    <span className="text-[#D4714E] text-[9px] font-bold">D</span>
                  </div>
                  <span className="text-white/70 text-xs">Google Drive</span>
                </div>
              </div>
            </div>

            {/* Input bar */}
            <div className="px-5 pb-5">
              <div className="flex items-center gap-2 bg-[#1e2636] rounded-xl px-4 py-3">
                <span className="text-white/45 text-sm flex-1">Reply...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── SKILLS TICKER ─────────────────── */
const SKILL_CATEGORIES = [
  {
    name: "Customer Support",
    desc: "Triage tickets, draft responses, escalate issues",
  },
  {
    name: "Data",
    desc: "Write SQL, build dashboards, turn data into stories",
  },
  {
    name: "Enterprise Search",
    desc: "Find anything across email, docs, and wikis",
  },
  {
    name: "Finance",
    desc: "Streamline accounting, journal entries, reconciliation",
  },
  {
    name: "Legal",
    desc: "Draft contracts, review clauses, track compliance",
  },
  {
    name: "Organization",
    desc: "Manage files, schedules, projects, and workflows",
  },
  {
    name: "Writing",
    desc: "Draft, edit, and polish content in your voice",
  },
  {
    name: "Productivity",
    desc: "Automate repetitive tasks and daily routines",
  },
];

function SkillsTicker() {
  return (
    <section className="bg-[#0f2847] py-24 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <span className="text-xs tracking-[0.2em] text-[#D4714E]/80 font-inter uppercase">
          The Unlock
        </span>
        <h2 className="font-manrope font-bold text-3xl sm:text-5xl text-white mt-3">
          .skills take AI to the{" "}
          <span className="text-[#D4714E]">next level</span>
        </h2>
        <p className="text-white/70 text-lg mt-4 max-w-2xl mx-auto">
          Think of .skills like hiring an expert at any task...instantly. They
          connect to the tools you already use and get stuff done.
        </p>
      </div>

      {/* Ticker row */}
      <div className="overflow-hidden relative">
        <div className="flex animate-ticker w-max">
          {[...SKILL_CATEGORIES, ...SKILL_CATEGORIES].map((cat, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-72 mx-3 bg-[#132640] border border-white/15 rounded-xl p-7 hover:border-[#D4714E]/40 hover:shadow-[0_0_20px_rgba(212,113,78,0.1)] transition-all"
            >
              <h4 className="text-white font-manrope font-semibold text-base mb-1.5">
                {cat.name}
              </h4>
              <p className="text-white/55 text-sm leading-relaxed">
                {cat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── INSTALL SKILLS ──────────────────── */
function InstallSkills() {
  return (
    <section className="bg-[#0f2847] py-24 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-xs tracking-[0.2em] text-[#D4714E]/80 font-inter uppercase">
          Get Started
        </span>
        <h2 className="font-manrope font-bold text-3xl sm:text-5xl text-white mt-3">
          .skills let you install expertise in{" "}
          <span className="text-[#D4714E]">two clicks</span>
        </h2>
        <p className="text-white/70 text-lg mt-4 max-w-2xl mx-auto">
          Best practices, proven processes, and smart decision-making, all
          packaged into .skills you install once and use forever (even as your
          business evolves)
        </p>
        <p className="text-white/70 text-lg mt-3 max-w-2xl mx-auto">
          Or build your own based on your expertise so the AI writes like you,
          acts like you, and thinks like you.
        </p>

        {/* Floppy disks — diamond/staggered arrangement */}
        <div className="relative my-20 stagger-children max-w-3xl mx-auto">
          {/* Warm glow behind — larger and warmer */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <Image
              src="/images/img-05.png"
              alt=""
              width={1000}
              height={500}
              className="opacity-60 scale-125"
            />
          </div>
          <div className="flex justify-center items-end gap-6 sm:gap-10">
            <div className="animate-on-scroll relative z-10 translate-y-6">
              <Image
                src="/images/img-06.png"
                alt="Skill floppy disk"
                width={280}
                height={291}
                className="w-56 sm:w-[270px] h-auto"
              />
            </div>
            <div className="animate-on-scroll relative z-10 -translate-y-6">
              <Image
                src="/images/img-08.png"
                alt="Skill floppy disk"
                width={280}
                height={291}
                className="w-56 sm:w-[270px] h-auto"
              />
            </div>
            <div className="animate-on-scroll relative z-10 translate-y-6">
              <Image
                src="/images/img-10.png"
                alt="Skill floppy disk"
                width={280}
                height={291}
                className="w-56 sm:w-[270px] h-auto"
              />
            </div>
          </div>
        </div>

        <a
          href="#pricing"
          className="inline-block bg-yellow-cta text-[#0a1628] font-bold font-inter text-sm tracking-wider px-8 py-4 hover:bg-[#fc6714] transition-colors"
        >
          JOIN THE BOOTCAMP
        </a>
        <p className="text-white/45 text-sm mt-4 font-inter">
          No code. No terminal. Just results.
        </p>
      </div>
    </section>
  );
}

/* ──────────────────── ARE SKILLS RIGHT ─────────────────── */
function AreSkillsRight() {
  return (
    <section className="relative py-28 sm:py-36 px-6 bg-gradient-to-b from-[#0f2847] via-[#3a0a0a] to-[#BD3131]">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="animate-on-scroll font-manrope font-bold text-4xl sm:text-5xl text-white">
          Are <span className="font-bold">.skills</span> Right For You?
        </h2>
        <p className="text-white/70 text-lg mt-3 italic">
          Hmmm... let&rsquo;s see...
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-7 stagger-children">
        {[
          {
            q: "Do you have a job?",
            a: "If so, there are probably hundreds of tasks you do manually, repeatedly, that consume hundreds of hours of your life. There are probably also tasks you hate to do\u2014because they\u2019re boring, tedious, mindless, etc. If you spend any time doing this kind of monotonous knowledge-work, then you need to build some .Skills.",
          },
          {
            q: "Do you use AI but struggle to generate high-quality outputs?",
            a: 'That\u2019s because you\u2019re limited to the chat window. You\u2019re still copy-pasting context every time. The results never quite meet your standards\u2014and you think, "It\u2019s actually faster if I just do this myself." Well, you won\u2019t anymore\u2026 if you build some .Skills!',
          },
          {
            q: "Do you own your own business?",
            a: "If so, think of Claude .Skills as your first no-code employee. No more prompting & chatting. Just show Claude something you want help with, save the conversation as a .Skill, re-claim hours of your life, and move on to the next task. This is the future of running a highly profitable business.",
          },
        ].map((card, i) => (
          <div
            key={i}
            className="animate-on-scroll bg-cream rounded-2xl p-10 text-left"
          >
            <h3 className="font-manrope font-bold text-xl text-[#1a1a1a] mb-5">
              {card.q}
            </h3>
            <p className="text-[#3a3a3a] text-base leading-relaxed">
              {card.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ──────────────────── BIG TYPE STATEMENT ───────────────── */
function BigTypeStatement() {
  return (
    <section className="bg-[#BD3131] py-24 sm:py-36 px-6">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        {/* Block 1 — slides in from left */}
        <p className="slide-from-left font-anton text-5xl sm:text-7xl lg:text-[85px] uppercase leading-[0.95] tracking-tight italic text-left">
          <span className="text-white">Learning How To Use &</span>
          <br />
          <span className="text-cream">Create .skills Is The Future</span>
          <br />
          <span className="text-white/90 ml-4 sm:ml-8">Of No-Code Work.</span>
        </p>

        <div className="pt-10 sm:pt-14" />

        {/* Block 2 — slides in from right */}
        <p className="slide-from-right font-anton text-5xl sm:text-7xl lg:text-[85px] uppercase leading-[0.95] tracking-tight italic text-left pl-8 sm:pl-24">
          <span className="text-white">If Staying Relevant In Your</span>
          <br />
          <span className="text-cream ml-8 sm:ml-16">Industry Is A Priority,</span>
          <br />
          <span className="text-white">Then .skills Are Right For You.</span>
        </p>
      </div>
    </section>
  );
}

/* ──────────────────── SESSION OUTLINE ──────────────────── */
const SESSIONS = [
  {
    num: 1,
    name: "Build Your Agent Brain in 60 Minutes",
    desc: "From empty folder to working AI employee. Set up your agent workspace, install File Master, and watch Claude organize your entire machine\u2014downloads, documents, desktop\u2014in minutes.",
    skill: "A working agent workspace with File Master running on your machine.",
    img: "/images/session-1.png",
  },
  {
    num: 2,
    name: "Stop Prompting, Start Shipping",
    desc: "How Skills 3x your speed and quality. Learn why .skills crush copy-paste prompting, build Content Creator from scratch, and publish your first AI-assisted piece before the session ends.",
    skill: "A Content Creator .skill trained on your voice that ships real content.",
    img: "/images/session-2.png",
  },
  {
    num: 3,
    name: "Calendar Ninja",
    desc: "Connecting Claude to where the real work lives. Plug your agent into your calendar, email, and docs\u2014then build a meeting prep skill that makes you the most prepared person in every room.",
    skill: "A Calendar Ninja .skill that auto-preps briefs for every meeting on your calendar.",
    img: "/images/session-3.png",
  },
  {
    num: 4,
    name: "Build Your First Custom Skill",
    desc: "Watch Claude do your job. Take a task you repeat every week, turn it into a custom .skill using Skill Maker, and watch your agent execute it end-to-end\u2014your way, every time.",
    skill: "A custom .skill built for your specific workflow, running autonomously.",
    img: "/images/session-4.png",
  },
  {
    num: 5,
    name: "Claude Everywhere: Dispatch + Browser",
    desc: "Deploy skills from your phone and connect Claude to the browser. Automate research, form fills, data extraction\u2014and trigger any skill remotely with Claude Dispatch.",
    skill: "Claude Dispatch on your phone and a browser automation skill.",
    img: "/images/session-5.png",
  },
  {
    num: 6,
    name: "Claude Cascade: Chain Skills Together",
    desc: "One task triggers the next. Chain .skills into multi-step pipelines where the output of one feeds the input of the next\u2014proposals, reports, and deliverables in a single command.",
    skill: "A fully chained skill cascade that produces complete deliverables from one prompt.",
    img: "/images/session-6.png",
  },
];

function SessionOutline() {
  return (
    <section className="bg-gradient-to-b from-[#BD3131] via-[#1a2847] to-[#0d2847] py-24 sm:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <span className="block text-xs font-bold text-[#D4714E] uppercase tracking-[0.15em] mb-3 font-inter">
          The 6 Sessions
        </span>
        <h2 className="font-manrope font-bold text-3xl sm:text-5xl text-white mb-3">
          Here&rsquo;s what you&rsquo;ll build.
        </h2>
        <p className="text-white/60 text-sm font-inter mb-10">
          All sessions are 60 minutes &middot; Kickoff: Monday, April 6 &middot; 3:00 PM ET
        </p>

        <div className="space-y-6">
          {SESSIONS.map((s) => (
            <div
              key={s.num}
              className="animate-on-scroll py-8 px-6 sm:px-8 flex flex-col md:flex-row gap-6 md:gap-10 rounded-2xl border border-[#D4714E]/20 bg-white/5 backdrop-blur-sm shadow-[0_0_30px_rgba(212,113,78,0.06)]"
            >
              <div className="md:w-[180px] flex-shrink-0">
                <Image
                  src={s.img}
                  alt={`Session ${s.num}: ${s.name}`}
                  width={180}
                  height={180}
                  className="w-36 h-36 md:w-44 md:h-44 rounded-lg object-cover"
                />
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold text-[#D4714E] uppercase tracking-wider font-inter">
                  Session {s.num}
                </span>
                <h3 className="font-manrope font-bold text-white text-xl sm:text-2xl leading-tight mb-2">
                  {s.name}
                </h3>
                <p className="text-white/80 text-base leading-relaxed mb-3">
                  {s.desc}
                </p>
                <p className="text-white/60 text-sm">
                  <span className="text-[#D4714E] font-semibold">&rarr; You leave with:</span>{" "}
                  {s.skill}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="font-manrope font-bold text-2xl sm:text-4xl text-white mb-6">
            This isn&rsquo;t self-paced content<br />you buy and forget.
          </h2>
          <div className="w-40 h-px bg-white/20 mx-auto mb-6" />
          <p className="text-white/90 text-lg font-bold font-manrope">
            We build <span className="text-[#D4714E]">together</span>. You show up.
            <br />You leave with <span className="text-[#D4714E]">a system</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── FREE BONUSES ────────────────────── */
const BONUSES = [
  {
    num: 1,
    name: "Coworker: Your Pre-Built AI Workspace",
    desc: "Most people spend their first week just figuring out how to set up. You won\u2019t. Coworker is a ready-to-run workspace with your folder structure and memory already initialized. Drop it in, open Cowork, and you\u2019re already running before Session 1 starts.",
    value: "$497",
    img: null,
  },
  {
    num: 2,
    name: "CLAUDE.md Template + Setup Guide",
    desc: "The exact CLAUDE.md template we use for our own businesses. This is the file that tells Claude who you are, how you work, and what rules to follow. Once it\u2019s set up, Claude stops forgetting or requiring constant hand-holding. Set it up in under an hour.",
    value: "$197",
    img: null,
  },
  {
    num: 3,
    name: "Skill Library Starter Pack",
    desc: "Pre-built skills, ready to install. Workflows for content, operations, research, and communication. Drop them in Cowork and they run immediately. The shortcut to a full skill library without building every one from scratch.",
    value: "$197",
    img: null,
  },
  {
    num: 4,
    name: "Voice Lab Skill",
    desc: "Go deeper than the standard voice training from Session 2. Voice Lab analyzes your writing patterns, identifies your signature phrases, and refines your voice profile over time. The more you use it, the more Cowork sounds like you.",
    value: "$99",
    img: "/images/img-19.png",
  },
  {
    num: 5,
    name: "State of AI Quick-Start Guide",
    desc: "Updated for April 2026. The 20 best AI tools right now. Our picks for the 5 you should actually use. Where Cowork fits in the landscape. Built fresh right before launch so it\u2019s not stale by the time you read it.",
    value: "$99",
    img: "/images/img-17.png",
  },
  {
    num: 6,
    name: "Low Ticket Launchpad (AI Version)",
    desc: "Our complete step-by-step process for building a digital product, packaged as an AI-powered course that builds your assets as you learn. Turn your expertise into products using the same skills and voice training you develop in this bootcamp.",
    value: "$350",
    img: "/images/img-22.png",
  },
  {
    num: 7,
    name: "Ship 30 for 30 (AI Version)",
    desc: "The original atomic essay system that\u2019s taught 10,000+ students the fundamentals of digital writing, now with AI-powered skills baked in. Learn to write online, accelerated by the same Cowork tools you\u2019re building in this bootcamp.",
    value: "$350",
    img: "/images/img-20.png",
  },
  {
    num: 8,
    name: "Design Secrets for Cowork",
    desc: "Create your personal design aesthetic (colors, fonts, layout preferences) that Cowork references every time you use a design skill. Your brand, baked into the agent. Build once, every visual output matches your look.",
    value: "$149",
    img: null,
  },
];

function FreeBonuses() {
  return (
    <section className="bg-gradient-to-b from-[#BD3131] via-[#2a0a0a] to-[#0f2847] py-24 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-manrope font-bold text-3xl sm:text-5xl text-white mb-4">
          Free Bonuses Included
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 stagger-children">
          {BONUSES.map((bonus) => (
            <div
              key={bonus.num}
              className="animate-on-scroll bg-[#132640] border border-white/15 rounded-2xl p-6 flex flex-col"
            >
              <span className="text-xs text-[#D4714E]/80 tracking-widest uppercase font-inter mb-3">
                Bonus #{bonus.num}
              </span>
              {bonus.img ? (
                <div className="flex justify-center mb-4">
                  <Image
                    src={bonus.img}
                    alt={bonus.name}
                    width={200}
                    height={133}
                    className="w-44 h-auto rounded-lg object-contain"
                  />
                </div>
              ) : (
                <div className="flex justify-center mb-4">
                  <div className="w-44 h-28 rounded-lg bg-[#0f2847] border border-white/10 flex items-center justify-center">
                    <span className="text-white/20 text-xs font-inter uppercase tracking-wider">Coming Soon</span>
                  </div>
                </div>
              )}
              <h3 className="font-manrope font-bold text-white text-base mb-2">
                {bonus.name}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed flex-1">
                {bonus.desc}
              </p>
              <p className="mt-4 font-inter font-bold text-sm">
                <span className="text-[#D4714E]">{bonus.value}</span>{" "}
                <span className="text-white/55">value</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── INSTRUCTORS ─────────────────────── */
const INSTRUCTORS = [
  {
    name: "Nicolas Cole",
    img: "/images/img-23.png",
    bio: [
      "10+ years writing online. 400+ columns for Inc Magazine. Author of The Art and Business of Online Writing.",
      "Cole pioneered the frameworks that made short-form writing go viral\u2014and now he\u2019s rebuilt them for the AI age.",
      'He runs Write With AI, the #1-ranked AI writing newsletter, and his Premium Ghostwriting Academy has trained thousands of writers to command premium rates.',
    ],
    quote:
      '\u201CAfter playing with Claude Cowork non-stop for the past week, I\u2019ve officially internalized how existential AI is. If you aren\u2019t learning these new AI skills, you\u2019re completely toast.\u201D',
  },
  {
    name: "Dickie Bush",
    img: "/images/img-24.png",
    bio: [
      "Former BlackRock trader. Co-founder of Ship 30 for 30 and Typeshare. Creator of the Atomic Essay format. His frameworks power millions of posts across the internet.",
      "In January 2020, Dickie made a bet: write one short-form piece every day for 30 days. That challenge became a writing cohort that\u2019s helped 10,000+ people find their voice online.",
      "Now he uses AI daily for hiring, managing a high 7-figure sales team, and running business operations across multiple companies.",
    ],
  },
  {
    name: "Mitch Harris",
    img: "/images/img-25.png",
    bio: [
      "Mitch started using AI to help run his business on top of his day job\u2014managing clients, drafting proposals, keeping the chaos organized. Then he started using it for his job. Automating more and more of the drudgery until all he had to do was focus on the fun stuff.",
      "Now he builds AI systems for professionals who want leverage without learning to code. Practical workflows that give you your time back.",
    ],
  },
];

function Instructors() {
  return (
    <section className="bg-[#0f2847] py-24 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-manrope font-bold text-3xl sm:text-5xl text-white mb-3">
          Meet Your Instructors
        </h2>
        <p className="text-center text-white/70 text-lg mb-18">
          Built by people who actually use this stuff every day
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 stagger-children mt-16">
          {INSTRUCTORS.map((inst) => (
            <div key={inst.name} className="animate-on-scroll text-center">
              <Image
                src={inst.img}
                alt={inst.name}
                width={360}
                height={360}
                className="w-40 h-40 sm:w-48 sm:h-48 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="font-manrope font-bold text-white text-2xl mb-5">
                {inst.name}
              </h3>
              <div className="space-y-4 text-left">
                {inst.bio.map((p, i) => (
                  <p key={i} className="text-white/70 text-base leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
              {inst.quote && (
                <blockquote className="mt-6 text-left border-l-2 border-[#D4714E] pl-4">
                  <p className="text-white/70 text-base italic leading-relaxed">
                    {inst.quote}
                  </p>
                </blockquote>
              )}
            </div>
          ))}
        </div>

        <p className="animate-on-scroll text-center text-white/80 text-xl sm:text-2xl mt-16 font-manrope max-w-3xl mx-auto leading-relaxed">
          Three practitioners. Zero theorists.{" "}
          <strong className="text-white">Everything</strong> we teach, we use ourselves to run our{" "}
          <strong className="text-white">$8,000,000/yr business.</strong>
        </p>
      </div>
    </section>
  );
}

/* ──────────────────── TESTIMONIALS ─────────────────────── */
const TESTIMONIALS = [
  {
    name: "Brendon",
    role: "Marketing Director",
    quote: "This course really helped me get comfortable thinking about and working with agentic AI. I still have so many ideas I want to bring to life.",
  },
  {
    name: "Yahnny",
    role: "Travel Executive",
    quote: "I lacked the skills to maximize the power of Claude Cowork to literally take over repetitive tasks. Mitch was a fantastic teacher.",
  },
  {
    name: "Susheel K.",
    role: "IT Professional",
    quote: "The best thing I learned was how to leverage Claude Cowork and turn it into a potential assistant that works round the clock.",
  },
  {
    name: "Hassan",
    role: "Ghostwriter",
    quote: "Signing up to the Cowork bootcamp provided clarity right from the basics to the most advanced with skill building. Exactly what I needed.",
  },
  {
    name: "Inka B.",
    role: "MD & Coach",
    quote: "I was genuinely blown away by how applicable the sessions were. I\u2019ve been able to streamline and automate parts of my workflow already.",
  },
  {
    name: "Renee B.",
    role: "",
    quote: "I didn\u2019t yet understand Claude Cowork, or the full depth of what skills could achieve. It opens up a huge amount of possibilities now and into the future.",
  },
  {
    name: "Josh W.",
    role: "Regulatory Compliance",
    quote: "I\u2019m looking forward to implementing the skills from this bootcamp to eliminate repetitive tasks and bring our audit risk to close to zero.",
  },
  {
    name: "Vijay",
    role: "Developer & Ghostwriter",
    quote: "This cohort gave me a very constructive way to understand and work on the core features of Claude Cowork. Even the recordings are very well structured.",
  },
  {
    name: "Samanee M.",
    role: "Marketing Manager",
    quote: "Before this bootcamp, the most I ever used AI for was ChatGPT brainstorming. Now I feel like I have superpowers. Can\u2019t recommend this more.",
  },
  {
    name: "Todd",
    role: "Nonprofit Founder",
    quote: "My big moment was learning how to chain skills and create new ones. After training my voice, it\u2019s helped me free up time in writing to meet with more people one-on-one.",
  },
  {
    name: "Gannon N.",
    role: "",
    quote: "With the tools and frameworks in this bootcamp, I can comfortably say I\u2019ve reached a whole new level!",
  },
  {
    name: "Oscar O.",
    role: "GrowthWrite Founder",
    quote: "I\u2019ve used ChatGPT since it first came out on a daily basis. However, I had no idea about Cowork and how much it could do, without coding.",
  },
];

function Testimonials() {
  return (
    <section className="bg-[#0f2847] py-24 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="animate-on-scroll text-center font-manrope font-bold text-3xl sm:text-5xl text-white mb-3">
          250+ Students Built Skills in Cohort 1
        </h2>
        <p className="text-center text-white/70 text-base mb-14 max-w-xl mx-auto">
          Here&rsquo;s what they had to say.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="animate-on-scroll bg-[#132640] border border-white/15 rounded-2xl p-8 flex flex-col justify-between"
            >
              <p className="text-white/80 text-sm leading-relaxed italic mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-white font-semibold text-sm font-manrope">
                  {t.name}
                </p>
                {t.role && (
                  <p className="text-white/55 text-xs font-inter">{t.role}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── WHAT'S NEW IN 2.0 ───────────────── */
function WhatsNew() {
  return (
    <section className="bg-[#0f2847] py-24 sm:py-32 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs tracking-[0.2em] text-[#D4714E]/80 font-inter uppercase">
            Version 2.0
          </span>
          <h2 className="animate-on-scroll font-manrope font-bold text-3xl sm:text-5xl text-white mt-3">
            What&rsquo;s New in 2.0?
          </h2>
          <p className="text-white/70 text-lg mt-4 max-w-2xl mx-auto">
            Everything that made v1 great, plus everything we learned from 250+ students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {[
            {
              title: "Updated Skill Structure",
              desc: "Using the Skills 2.0 Framework by Anthropic, we\u2019ve rebuilt the entire skill library for greater efficiency, increased performance, and less AI fingerprinting.",
              icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              ),
            },
            {
              title: "All-New Curriculum",
              desc: "Refined session flow based on Cowork\u2019s incredible new features and everything we learned by coaching 250+ students. Less setup, more building.",
              icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
              ),
            },
            {
              title: "Comprehensive Skill Library",
              desc: "Brand new skills you won\u2019t find anywhere else, built for the latest capabilities of Cowork and Claude.",
              icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>
              ),
            },
            {
              title: "Even More Bonuses",
              desc: "Updated AI Tools Guide for Q2, new Cowork-Native Courses, and a revamped Voice Training masterclass.",
              icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                </svg>
              ),
            },
            {
              title: "Out-of-the-Box Agent Install",
              desc: "A pre-set best practice workspace you can open before the first session, giving you an agent that knows how to work on Day 1.",
              icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z" />
                </svg>
              ),
            },
            {
              title: "Practitioner Community",
              desc: "Join 250+ Cowork practitioners sharing skills, templates, and wins. Get feedback, trade workflows, and stay sharp together.",
              icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              ),
            },
          ].map((item, i) => (
            <div
              key={i}
              className="animate-on-scroll bg-[#132640] border border-white/15 rounded-2xl p-8"
            >
              <div className="text-[#D4714E] mb-4">{item.icon}</div>
              <h3 className="font-manrope font-bold text-white text-xl mb-3">
                {item.title}
              </h3>
              <p className="text-white/70 text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── SCHEDULE ─────────────────────────── */
function Schedule() {
  const week1Days = [6, 7, 8, 9, 10, 11, 12];
  const week2Days = [13, 14, 15, 16, 17, 18, 19];
  const sessionDaysW1 = [6, 8, 10];
  const sessionDaysW2 = [13, 15, 17];

  return (
    <section className="bg-gradient-to-b from-[#161616] to-[#1a0a0a] py-24 sm:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center font-manrope font-bold text-3xl sm:text-4xl text-white mb-3">
          Claude Cowork Bootcamp Kicks Off
          <br />
          Monday, April 6th!
        </h2>
        <p className="text-center text-white/70 text-base mb-10">
          Here&rsquo;s the schedule:
        </p>
        <p className="text-center text-white/55 text-sm mb-8 font-inter">
          All sessions held at 3:00 PM Eastern Time
        </p>

        {/* Calendar header */}
        <div className="grid grid-cols-7 text-center text-xs text-white/45 font-inter mb-2">
          {["M", "T", "W", "T", "F", "S", "U"].map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>

        {/* Week 1 row */}
        <div className="mb-1">
          <p className="text-xs text-white/55 font-inter mb-1">APRIL</p>
          <div className="grid grid-cols-7 gap-2">
            {week1Days.map((d) => (
              <div
                key={d}
                className={`aspect-square flex items-center justify-center rounded-lg text-sm font-inter ${
                  sessionDaysW1.includes(d)
                    ? "bg-[#D4714E]/20 text-[#D4714E] font-bold border border-[#D4714E]/30"
                    : "bg-white/5 text-white/55"
                }`}
              >
                {d}
              </div>
            ))}
          </div>
        </div>

        {/* Week 2 row */}
        <div className="mb-10">
          <div className="grid grid-cols-7 gap-2 mt-2">
            {week2Days.map((d) => (
              <div
                key={d}
                className={`aspect-square flex items-center justify-center rounded-lg text-sm font-inter ${
                  sessionDaysW2.includes(d)
                    ? "bg-[#D4714E]/20 text-[#D4714E] font-bold border border-[#D4714E]/30"
                    : "bg-white/5 text-white/55"
                }`}
              >
                {d}
              </div>
            ))}
          </div>
        </div>

        {/* Session list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div>
            <h3 className="font-manrope font-bold text-white text-lg mb-4">
              WEEK 1 — APRIL
            </h3>
            <div className="space-y-3">
              {[
                [
                  "Mon 6",
                  "Session 1: Build Your Agent Brain",
                ],
                ["Wed 8", "Session 2: Stop Prompting, Start Shipping"],
                ["Fri 10", "Session 3: Calendar Ninja"],
              ].map(([day, session]) => (
                <div key={day} className="flex gap-4">
                  <span className="text-[#D4714E] text-sm font-bold font-inter w-16 shrink-0">
                    {day}
                  </span>
                  <span className="text-white/80 text-sm">{session}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-manrope font-bold text-white text-lg mb-4">
              WEEK 2 — APRIL
            </h3>
            <div className="space-y-3">
              {[
                ["Mon 13", "Session 4: Build Your First Custom Skill"],
                ["Wed 15", "Session 5: Claude Everywhere (Dispatch + Browser)"],
                ["Fri 17", "Session 6: Claude Cascade"],
              ].map(([day, session]) => (
                <div key={day} className="flex gap-4">
                  <span className="text-[#D4714E] text-sm font-bold font-inter w-16 shrink-0">
                    {day}
                  </span>
                  <span className="text-white/80 text-sm">{session}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-white/70 text-sm mt-12 max-w-xl mx-auto leading-relaxed">
          6 live sessions over 2 weeks. This isn&rsquo;t self-paced content you
          buy and forget. We build together. You show up, you do the work, you
          leave with a system—and the replay recordings forever.
        </p>
      </div>
    </section>
  );
}

/* ──────────────────── PRICING ──────────────────────────── */
function Pricing() {
  return (
    <section id="pricing" className="bg-[#0f2847] py-24 sm:py-32 px-6">
      <div className="max-w-xl mx-auto">
        <div className="animate-on-scroll bg-[#132640] border border-[#D4714E]/20 rounded-2xl p-12 sm:p-14 text-center">
          <p className="text-white/55 text-xs tracking-[0.2em] uppercase font-inter mb-2">
            Total Value
          </p>
          <p className="text-[#D4714E]/70 text-3xl font-manrope line-through mb-6">
            $3,800+
          </p>
          <p className="text-[#D4714E] text-base font-inter mb-1">Your Price</p>
          <p className="text-white font-anton text-7xl sm:text-8xl mb-10">
            $800
          </p>
          <a
            href="#"
            className="block w-full bg-yellow-cta text-[#0a1628] font-bold font-inter text-lg tracking-wider py-5 hover:bg-[#fc6714] transition-colors rounded-lg"
          >
            JOIN CLAUDE COWORK BOOTCAMP
          </a>
          <p className="text-white/45 text-sm mt-5 font-inter">
            Starts April 6, 2026 &middot; Limited seats
          </p>
          <div className="flex justify-center mt-8">
            <Image
              src="/images/img-27.png"
              alt="Cowork Bootcamp"
              width={160}
              height={53}
              className="opacity-60"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── GUARANTEE + FINAL CTA ───────────── */
function GuaranteeCta() {
  return (
    <section className="bg-[#0f2847] py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Guarantee */}
        <div className="space-y-5">
          <h3 className="font-manrope font-bold text-2xl text-white">
            <span className="border-b-2 border-[#D4714E]/50 pb-1">7-DAY MONEY-BACK GUARANTEE</span>
          </h3>
          <h4 className="font-manrope font-semibold text-white/80 text-xl">
            First-Week Guarantee
          </h4>
          <p className="text-white/70 text-base leading-relaxed">
            If in the first week of the cohort you&rsquo;ve completed the
            assignments and still decide these aren&rsquo;t skills you want to
            build, just let us know and we&rsquo;ll give you a full
            refund—no questions asked.
          </p>
        </div>

        {/* Final CTA */}
        <div className="space-y-6 text-center md:text-left">
          <h3 className="font-manrope font-bold text-3xl text-white">
            Ready to Build Your First .skills?
          </h3>
          <a
            href="#"
            className="inline-block bg-yellow-cta text-[#0a1628] font-bold font-inter text-sm tracking-wider px-8 py-4 rounded-sm hover:bg-[#fc6714] transition-colors"
          >
            JOIN THE BOOTCAMP — $800
          </a>
          <p className="text-white/45 text-sm font-inter">
            April 6 – April 17, 2026 &middot; Limited seats
          </p>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── FAQ ──────────────────────────────── */
const FAQ_ITEMS = [
  {
    q: "Do I need Claude Max?",
    a: "Nope. Claude Cowork is available for all paid plans, from the $20/month Pro plan to the $200/month Max plan. No matter what plan you\u2019re on, it\u2019s basically a full time digital employee. Even the cheapest virtual assistant costs between $500-$1000/month. You\u2019re getting that level of leverage for a fraction of the price.",
  },
  {
    q: "Does this work on Windows?",
    a: "Yes! Claude Cowork is available as a desktop app on both Mac and Windows. It does not run in the browser or on Linux\u2014you\u2019ll need the desktop app installed on either a Mac or Windows machine.",
  },
  {
    q: "Is this self-paced or live?",
    a: "Live! We meet 3 times per week over 2 weeks (Mon/Wed/Fri at 3 PM ET). All sessions are recorded so you can rewatch anytime, but the live experience is where the magic happens.",
  },
  {
    q: "What commitment is required?",
    a: "Plan for about 1 hour per live session (3x/week) plus 30-60 minutes of practice between sessions. Total time commitment is roughly 6-9 hours over 2 weeks.",
  },
  {
    q: "What if I\u2019ve never used AI before?",
    a: "Perfect\u2014this bootcamp is designed for beginners. We start from scratch in Session 1 and build up. No coding, no terminal, no prior AI experience needed.",
  },
  {
    q: "What about AI agents?",
    a: ".Skills ARE the agent. When you build a .skill, you\u2019re essentially programming an AI agent to do a specific task your way, every time. No code required.",
  },
];

function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="bg-gradient-to-b from-[#161616] to-[#1a0a0a] py-24 sm:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center font-manrope font-bold text-3xl sm:text-4xl text-white mb-14">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className="border border-white/15 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between px-7 py-6 text-left"
              >
                <span className="font-manrope font-semibold text-white text-base">
                  {item.q}
                </span>
                <span className="text-[#D4714E] text-2xl leading-none ml-4">
                  {openIdx === i ? "\u2212" : "+"}
                </span>
              </button>
              {openIdx === i && (
                <div className="px-7 pb-6">
                  <p className="text-white/70 text-base leading-relaxed">
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── PAGE ─────────────────────────────── */
export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.animate-on-scroll, .slide-from-left, .slide-from-right').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Hero />

      {/* Featured quote — social proof right after hero */}
      <section className="bg-[#0f2847]">
        <InlineTestimonial
          size="featured"
          quote="Truly took my AI usage to the next level. This was the biggest shift in how I use AI to get things done since the beginning of the AI hype a few years ago."
          name="Sean S."
        />
      </section>

      <WhatsNew />
      <ScrollytellingCompact />
      <AreSkillsRight />

      {/* After "Are Skills Right" — skeptic-turned-believer */}
      <section className="bg-gradient-to-b from-[#BD3131] to-[#0f2847] py-2">
        <InlineTestimonial
          size="large"
          quote="I hesitated before signing up for the bootcamp but am extremely glad I did. The skills I learned took my understanding and practical use of AI to a completely different level."
          name="Eva M."
        />
      </section>

      <BigTypeStatement />
      <SessionOutline />

      {/* After skills grid — someone who built real things */}
      <section className="bg-[#0f2847]">
        <InlineTestimonial
          size="large"
          quote="Now I have pipelines that generate brand-compliant presentation decks and meeting prep kits from structured content. One skill replaced an entire workflow."
          name="G."
          role="Design Lead, NYC"
        />
      </section>

      <FreeBonuses />
      <Instructors />

      {/* After instructors — teaching quality */}
      <section className="bg-[#0f2847]">
        <InlineTestimonial
          size="large"
          quote="My overriding takeaway was how effective Mitch was as a teacher. Without doubt, the highlight was creating and deploying a landing page and e-book lead magnet in less than an hour."
          name="Morgan J."
        />
      </section>

      <Schedule />

      {/* Before pricing — ROI / transformation */}
      <section className="bg-[#0f2847]">
        <InlineTestimonial
          size="featured"
          quote="What Mitch built doesn't just save you time, it multiplies your output. Seeing how many ways these skills could be applied overwhelmed me (in the best way) and unleashed a flood of ideas."
          name="Alexander"
        />
      </section>

      <Pricing />

      {/* Big grid — all the rest */}
      <Testimonials />

      <GuaranteeCta />
      <FAQ />
    </main>
  );
}

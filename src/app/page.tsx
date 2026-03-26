"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import ScrollytellingCompact from "@/components/ScrollytellingCompact";

/* ───────────────────────── HERO ───────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-gradient-to-b from-[#0d2847] via-[#0a1628] to-[#0f1319] overflow-hidden">
      {/* Top banner pill */}
      <div className="flex justify-center pt-6">
        <div className="inline-flex items-center gap-2 border border-[#D4714E]/30 rounded-full px-5 py-2 text-sm font-inter">
          <Image src="/images/img-26.png" alt="" width={10} height={10} />
          <span className="text-white/90 tracking-wide text-xs sm:text-sm">
            2-WEEK BOOTCAMP KICKS OFF MONDAY, APRIL 6
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left column */}
        <div className="space-y-6">
          {/* Claude sparkle + text above logo */}
          <div className="flex items-center gap-2">
            <Image src="/images/img-26.png" alt="" width={16} height={16} />
            <span className="text-white/80 text-sm font-inter tracking-wide">Claude</span>
          </div>
          <Image
            src="/images/img-00.png"
            alt="Claude Cowork Bootcamp"
            width={568}
            height={306}
            className="w-full max-w-[520px]"
            priority
          />
          <h2 className="text-white font-manrope font-bold text-xl sm:text-2xl leading-snug">
            Turn Claude Into Your Highest Performing Employee By Building .skills
          </h2>
          <p className="text-white/70 text-base leading-relaxed max-w-lg">
            Any task you do more than once should be saved as a .skill.{" "}
            <em className="text-white font-semibold">
              This is how you build leverage forever.
            </em>
          </p>
          <p className="text-white/70 text-base leading-relaxed max-w-lg">
            Join us live for beginner-friendly training on{" "}
            <strong className="text-white">No-Code AI</strong> and the future of
            work.
          </p>
          <a
            href="#how-it-works"
            className="inline-block bg-yellow-cta text-[#0a1628] font-bold font-inter text-sm tracking-[0.2em] px-8 py-4 rounded-sm hover:bg-yellow-400 transition-colors"
          >
            HOW IT WORKS
          </a>
        </div>

        {/* Right column — instructor photo, bleeds right */}
        <div className="relative flex justify-center lg:justify-end lg:-mr-24 xl:-mr-32">
          {/* Teal glow behind photo */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[500px] rounded-full bg-[#D4714E]/10 blur-3xl" />
          </div>
          <Image
            src="/images/img-01.png"
            alt="Bootcamp instructors"
            width={720}
            height={908}
            className="relative w-full max-w-[700px] h-auto"
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
    <section id="how-it-works" className="bg-[#0f1319] py-20 px-6">
      <div className="max-w-6xl mx-auto">
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
            <h3 className="font-anton text-3xl sm:text-4xl text-white leading-tight">
              What if AI could do your job{" "}
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

          {/* Right — Mock Cowork UI */}
          <div className="animate-on-scroll bg-[#1a2030] rounded-2xl border border-white/15 overflow-hidden shadow-2xl shadow-black/40">
            {/* Top bar — Connected apps */}
            <div className="px-5 pt-5 pb-3">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] text-white/45 tracking-widest uppercase font-inter">
                  Connected
                </span>
              </div>
              <div className="flex gap-3">
                {[
                  { app: "Gmail", letter: "M", bg: "bg-red-600/80", text: "text-white" },
                  { app: "Drive", letter: "D", bg: "bg-green-600/80", text: "text-white" },
                  { app: "Calendar", letter: "C", bg: "bg-blue-600/80", text: "text-white" },
                  { app: "Notion", letter: "N", bg: "bg-white/90", text: "text-black" },
                ].map(({ app, letter, bg, text }) => (
                  <div
                    key={app}
                    className={`w-10 h-10 rounded-lg ${bg} flex items-center justify-center`}
                  >
                    <span className={`text-[10px] ${text} font-bold font-inter`}>
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
    <section className="bg-[#0f1319] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <span className="text-xs tracking-[0.2em] text-[#D4714E]/80 font-inter uppercase">
          The Unlock
        </span>
        <h2 className="font-manrope font-bold text-2xl sm:text-4xl text-white mt-3">
          .skills take AI to the{" "}
          <span className="text-[#D4714E]">next level</span>
        </h2>
        <p className="text-white/70 text-base mt-4 max-w-2xl mx-auto">
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
              className="flex-shrink-0 w-64 mx-3 bg-[#1a2030] border border-white/15 rounded-xl p-5 hover:border-[#D4714E]/30 transition-colors"
            >
              <h4 className="text-white font-manrope font-semibold text-sm mb-1">
                {cat.name}
              </h4>
              <p className="text-white/55 text-xs leading-relaxed">
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
    <section className="bg-[#0f1319] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <span className="text-xs tracking-[0.2em] text-[#D4714E]/80 font-inter uppercase">
          Get Started
        </span>
        <h2 className="font-manrope font-bold text-2xl sm:text-4xl text-white mt-3">
          .skills let you install expertise in{" "}
          <span className="text-[#D4714E]">two clicks</span>
        </h2>
        <p className="text-white/70 text-base mt-4 max-w-2xl mx-auto">
          Best practices, proven processes, and smart decision-making, all
          packaged into .skills you install once and use forever (even as your
          business evolves)
        </p>
        <p className="text-white/70 text-base mt-3 max-w-2xl mx-auto">
          Or build your own based on your expertise so the AI writes like you,
          acts like you, and thinks like you.
        </p>

        {/* Floppy disks */}
        <div className="flex flex-wrap justify-center gap-8 my-16 relative stagger-children">
          {/* Warm glow behind */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <Image
              src="/images/img-05.png"
              alt=""
              width={800}
              height={400}
              className="opacity-40"
            />
          </div>
          {[
            { src: "/images/img-06.png", w: 262, h: 273 },
            { src: "/images/img-08.png", w: 393, h: 409 },
            { src: "/images/img-10.png", w: 262, h: 273 },
          ].map((disk, i) => (
            <div key={i} className="animate-on-scroll relative z-10">
              <Image
                src={disk.src}
                alt="Skill floppy disk"
                width={disk.w}
                height={disk.h}
                className="w-52 sm:w-64 h-auto"
              />
            </div>
          ))}
        </div>

        <a
          href="#pricing"
          className="inline-block bg-yellow-cta text-[#0a1628] font-bold font-inter text-sm tracking-wider px-8 py-4 hover:bg-yellow-400 transition-colors"
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
    <section className="relative py-24 px-6 bg-gradient-to-b from-[#161616] via-[#3a0a0a] to-[#BD3131]">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="animate-on-scroll font-manrope font-bold text-3xl sm:text-5xl text-white">
          Are <span className="font-bold">.skills</span> Right For You?
        </h2>
        <p className="text-white/70 text-base mt-3 italic">
          Hmmm... let&rsquo;s see...
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
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
            className="animate-on-scroll bg-cream rounded-2xl p-8 text-left"
          >
            <h3 className="font-manrope font-bold text-lg text-[#1a1a1a] mb-4">
              {card.q}
            </h3>
            <p className="text-[#3a3a3a] text-sm leading-relaxed">
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
    <section className="bg-[#BD3131] py-20 sm:py-28 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-2">
        <h2 className="font-anton text-4xl sm:text-6xl lg:text-7xl text-white uppercase leading-none tracking-tight">
          Learning How To Use &
        </h2>
        <h2 className="font-anton text-4xl sm:text-6xl lg:text-7xl text-cream uppercase leading-none tracking-tight">
          Create .skills Is The Future
        </h2>
        <h2 className="font-anton text-4xl sm:text-6xl lg:text-7xl text-white uppercase leading-none tracking-tight">
          Of No-Code Work.
        </h2>

        <div className="pt-8" />

        <h2 className="font-anton text-4xl sm:text-6xl lg:text-7xl text-white uppercase leading-none tracking-tight">
          If Staying Relevant In Your
        </h2>
        <h2 className="font-anton text-4xl sm:text-6xl lg:text-7xl uppercase leading-none tracking-tight text-stroke-red">
          Industry Is A Priority,
        </h2>
        <h2 className="font-anton text-4xl sm:text-6xl lg:text-7xl text-white uppercase leading-none tracking-tight">
          Then .skills Are Right For You.
        </h2>
      </div>
    </section>
  );
}

/* ──────────────────── 5 SKILLS GRID ───────────────────── */
const SKILLS = [
  {
    num: 1,
    name: "Computer Organizer Skill",
    desc: 'clean up your downloads, organize your documents, and get back to "desktop zero"',
    img: "/images/img-06.png",
  },
  {
    num: 2,
    name: "Newsletter Skill",
    desc: "Use our category newsletter creation process and write in-depth thought leadership or curation newsletters in minutes",
    img: "/images/img-08.png",
  },
  {
    num: 3,
    name: "Meeting Prep Skill",
    desc: "Sales calls, presentations, board meetings, webinars\u2014prepare your mind and materials for any meeting on your calendar",
    img: "/images/img-10.png",
  },
  {
    num: 4,
    name: "Project Kit Skill",
    desc: "Move from creating single assets to full proposals, slide decks, or brand materials in an automatic process",
    img: "/images/img-12.png",
  },
  {
    num: 5,
    name: "Digital Product Skill",
    desc: "Leverage our product creation process directly in Cowork, and go from idea to selling your digital product in no time flat",
    img: "/images/img-14.png",
  },
  {
    num: 6,
    name: "Skill Maker",
    desc: "The secret sauce process even the creators of Cowork don\u2019t know about to make your custom skills bombproof",
    img: "/images/img-16.png",
  },
];

function SkillsGrid() {
  return (
    <section className="bg-[#BD3131] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center font-manrope font-bold text-2xl sm:text-4xl text-white mb-14">
          5 .skills to get you started:
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {SKILLS.map((skill) => (
            <div
              key={skill.num}
              className="animate-on-scroll bg-[#1a0a0a]/80 border border-red-brand/30 rounded-2xl p-6 text-center backdrop-blur-sm"
            >
              <span className="text-xs text-white/55 tracking-widest uppercase font-inter">
                Skill #{skill.num}
              </span>
              <div className="flex justify-center my-4">
                <Image
                  src={skill.img}
                  alt={skill.name}
                  width={200}
                  height={200}
                  className="w-40 sm:w-44 h-auto"
                />
              </div>
              <h3 className="font-manrope font-bold text-white text-base mb-2">
                {skill.name}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── FREE BONUSES ────────────────────── */
const BONUSES = [
  {
    num: 1,
    name: "State of AI Tools Guide",
    desc: "What tools actually matter right now. Updated every cohort.",
    value: "$99",
    img: "/images/img-17.png",
  },
  {
    num: 2,
    name: "Prompt Building Blocks Framework .skill",
    desc: 'The "lego brick" assembly method. One-shot any content type.',
    value: "$199",
    img: "/images/img-18.png",
  },
  {
    num: 3,
    name: "Personal Voice Training Masterclass .skill",
    desc: "Make AI sound indistinguishable from your writing.",
    value: "$199",
    img: "/images/img-19.png",
  },
  {
    num: 4,
    name: "Ship 30 for 30 Course (AI Version)",
    desc: "The original atomic essay system built directly into the Agent\u2019s brain. Learn the frameworks that made short-form writing viral.",
    value: "$350",
    img: "/images/img-20.png",
  },
  {
    num: 5,
    name: "Category Newsletter Creator Course (AI Version)",
    desc: "Build a newsletter that positions you as the go-to expert in your niche. Topic selection to monetization.",
    value: "$350",
    img: "/images/img-21.png",
  },
  {
    num: 6,
    name: "Low-Ticket Launchpad Course (AI Version)",
    desc: "A starter kit to package, position, and sell low-ticket offers without overthinking the tech or strategy.",
    value: "$350",
    img: "/images/img-22.png",
  },
];

function FreeBonuses() {
  return (
    <section className="bg-gradient-to-b from-[#BD3131] via-[#2a0a0a] to-[#0f1319] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center font-manrope font-bold text-2xl sm:text-4xl text-white mb-4">
          Free Bonuses Included
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 stagger-children">
          {BONUSES.map((bonus) => (
            <div
              key={bonus.num}
              className="animate-on-scroll bg-[#1a2030] border border-white/15 rounded-2xl p-6 flex flex-col"
            >
              <span className="text-xs text-[#D4714E]/80 tracking-widest uppercase font-inter mb-3">
                Bonus #{bonus.num}
              </span>
              <div className="flex justify-center mb-4">
                <Image
                  src={bonus.img}
                  alt={bonus.name}
                  width={240}
                  height={320}
                  className="w-48 h-auto rounded-lg object-contain"
                />
              </div>
              <h3 className="font-manrope font-bold text-white text-base mb-2">
                {bonus.name}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed flex-1">
                {bonus.desc}
              </p>
              <p className="mt-4 font-inter font-bold text-sm">
                <span className="text-[#D4714E]">{bonus.value}</span>{" "}
                <span className="text-white/70">value</span>
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
    <section className="bg-[#0f1319] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center font-manrope font-bold text-2xl sm:text-4xl text-white mb-3">
          Meet Your Instructors
        </h2>
        <p className="text-center text-white/70 text-base mb-16">
          Built by people who actually use this stuff every day
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 stagger-children">
          {INSTRUCTORS.map((inst) => (
            <div key={inst.name} className="animate-on-scroll text-center">
              <Image
                src={inst.img}
                alt={inst.name}
                width={360}
                height={360}
                className="w-40 h-40 rounded-full mx-auto mb-5 object-cover"
              />
              <h3 className="font-manrope font-bold text-white text-xl mb-4">
                {inst.name}
              </h3>
              <div className="space-y-3 text-left">
                {inst.bio.map((p, i) => (
                  <p key={i} className="text-white/70 text-sm leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
              {inst.quote && (
                <blockquote className="mt-5 text-left border-l-2 border-[#D4714E] pl-4">
                  <p className="text-white/70 text-sm italic leading-relaxed">
                    {inst.quote}
                  </p>
                </blockquote>
              )}
            </div>
          ))}
        </div>

        {/* Cole quote */}
        <blockquote className="animate-on-scroll max-w-3xl mx-auto mt-14 border-l-4 border-[#D4714E] pl-6 py-2">
          <p className="text-white/80 text-lg italic leading-relaxed font-manrope">
            &ldquo;After playing with Claude Cowork non-stop for the past week, I&rsquo;ve officially internalized how existential AI is. If you aren&rsquo;t learning these new AI skills, you&rsquo;re completely toast.&rdquo;
          </p>
          <footer className="text-white/70 text-sm mt-2 font-inter">&mdash; Nicolas Cole</footer>
        </blockquote>

        <p className="animate-on-scroll text-center text-white/80 text-lg sm:text-xl mt-12 font-manrope max-w-3xl mx-auto leading-relaxed">
          Three practitioners. Zero theorists.{" "}
          <strong className="text-white">Everything</strong> we teach, we use ourselves to run our{" "}
          <strong className="text-white">$8,000,000/yr business.</strong>
        </p>
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
    <section className="bg-gradient-to-b from-[#161616] to-[#1a0a0a] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center font-manrope font-bold text-2xl sm:text-3xl text-white mb-3">
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
                  "Session 1: Setup & First .skill, organizing your files",
                ],
                ["Wed 8", "Session 2: Newsletter .skill"],
                ["Fri 10", "Session 3: Meeting Prep .skill"],
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
                ["Mon 13", "Session 4: Chaining Workflows .skills"],
                ["Wed 15", "Session 5: Templates and Browser Automation"],
                ["Fri 17", "Session 6: Customizing Your .skills"],
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
    <section id="pricing" className="bg-[#0f1319] py-20 px-6">
      <div className="max-w-lg mx-auto">
        <div className="animate-on-scroll bg-[#1a2030] border border-[#D4714E]/20 rounded-2xl p-10 text-center">
          <p className="text-white/55 text-xs tracking-[0.2em] uppercase font-inter mb-2">
            Total Value
          </p>
          <p className="text-[#D4714E]/70 text-2xl font-manrope line-through mb-6">
            $3,800+
          </p>
          <p className="text-[#D4714E] text-sm font-inter mb-1">Your Price</p>
          <p className="text-white font-anton text-6xl sm:text-7xl mb-8">
            $800
          </p>
          <a
            href="#"
            className="block w-full bg-yellow-cta text-[#0a1628] font-bold font-inter text-base tracking-wider py-4 hover:bg-yellow-400 transition-colors rounded-lg"
          >
            JOIN CLAUDE COWORK BOOTCAMP
          </a>
          <p className="text-white/45 text-sm mt-4 font-inter">
            Starts April 6, 2026 &middot; Limited seats
          </p>
          <div className="flex justify-center mt-6">
            <Image
              src="/images/img-27.png"
              alt="Cowork Bootcamp"
              width={120}
              height={40}
              className="opacity-50"
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
    <section className="bg-[#0f1319] py-20 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Guarantee */}
        <div className="space-y-4">
          <h3 className="font-manrope font-bold text-xl text-white">
            <span className="border-b-2 border-[#D4714E]/50 pb-1">7-DAY MONEY-BACK GUARANTEE</span>
          </h3>
          <h4 className="font-manrope font-semibold text-white/80 text-lg">
            First-Week Guarantee
          </h4>
          <p className="text-white/70 text-sm leading-relaxed">
            If in the first week of the cohort you&rsquo;ve completed the
            assignments and still decide these aren&rsquo;t skills you want to
            build, just let us know and we&rsquo;ll give you a full
            refund—no questions asked.
          </p>
        </div>

        {/* Final CTA */}
        <div className="space-y-6 text-center md:text-left">
          <h3 className="font-manrope font-bold text-2xl text-white">
            Ready to Build Your First .skills?
          </h3>
          <a
            href="#"
            className="inline-block bg-yellow-cta text-[#0a1628] font-bold font-inter text-sm tracking-wider px-8 py-4 rounded-sm hover:bg-yellow-400 transition-colors"
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
    a: "Yes! Claude Cowork runs in the browser, so it works on Mac, Windows, Linux\u2014any modern computer with an internet connection.",
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
    <section className="bg-gradient-to-b from-[#161616] to-[#1a0a0a] py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center font-manrope font-bold text-2xl sm:text-3xl text-white mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className="border border-white/15 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-manrope font-semibold text-white text-base">
                  {item.q}
                </span>
                <span className="text-[#D4714E] text-2xl leading-none ml-4">
                  {openIdx === i ? "\u2212" : "+"}
                </span>
              </button>
              {openIdx === i && (
                <div className="px-6 pb-5">
                  <p className="text-white/70 text-sm leading-relaxed">
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

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Hero />
      <ScrollytellingCompact />
      <AreSkillsRight />
      <BigTypeStatement />
      <SkillsGrid />
      <FreeBonuses />
      <Instructors />
      <Schedule />
      <Pricing />
      <GuaranteeCta />
      <FAQ />
    </main>
  );
}

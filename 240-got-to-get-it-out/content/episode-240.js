/* =========================================================================
   TRXL Episode Content — 240
   The Next AEC Tech Stack, Arc 1 Episode 3 of 3 — closes the arc.
   Roundup format: two questions, eleven voices, no single guest. Uses
   `roster` instead of `guest` / `guests` — see the roster block in the HTML.

   Angle: does a new tool actually give you time back, or just give you more
   to spend it on, before a deadline that doesn't move? (Replaces an earlier
   draft built around "where should AI's judgment stop" — that material now
   only appears as supporting texture, not the spine.)

   `cite` fields are timestamps into the YouTube cut. They render as links
   that jump to the moment. Timestamps come directly from
   240-Ive-got-to-get-my-project-out-on-friday.md, which IS the assembled
   final-composition transcript for this episode (unlike ep239, there is no
   separate raw/final pair — this file's [HH:MM:SS] labels are already the
   real broadcast timeline). 240-hook.md's timestamps are on a DIFFERENT
   clock (raw pre-edit master) and must never be used here.
   ------------------------------------------------------------------------- */

window.TRXL_EPISODE = {
  number: 240,
  date: "September 2026",
  title: "I've Got to Get My Project Out on Friday",
  titleEm: "Friday",
  subtitle:
    "Eleven people building and using BIM 2.0 tools close the arc with one honest question: does a new tool actually buy you time, or just give you more to spend it on before the deadline that never moves?",

  youtube: "https://youtu.be/NGwB89LFZTg",

  // Full editions go to every subscriber, free accounts included — the free
  // signup is deliberate, it feeds the list. Partners funded the series.
  access:
    "Every edition of this series goes out in full to everyone on the list, free accounts included, because the partners paid for it. Sign up free at trxl.co — this closes Arc 1, and the remaining six episodes still come to you.",

  // Hero visual concept — the deadline that doesn't move
  hero: {
    concept:
      "A ring fills toward full and never empties back to zero — hours consumed, never freed — while a fixed bright notch at 12 o'clock marks the deadline itself, which never moves no matter how full the ring gets. A thin hand keeps sweeping past it on its own clock, indifferent to whether the ring filled with saved time or spent time.",
    elements: [
      "circular progress ring that climbs toward full, pulls back only part way, never returns to empty",
      "fixed bright notch at 12 o'clock marking the deadline — the one element that never animates",
      "a thin hand sweeping continuously around the dial, unrelated to the ring's fill state",
    ],
    cssNotes:
      "ep240-clock-frame, ep240-clock-dial-wrap, ep240-clock-track/-fill (SVG stroke-dashoffset animation), ep240-clock-mark, ep240-clock-hand, ep240-clock-grain; [data-motion=\"off\"] freezes the fill mid-cycle and stops the hand",
  },

  // Roundup episode — no single guest. The roster drives the hero badge and
  // the bottom-line list; there are no portraits by design.
  roster: {
    badge: "11 voices · 10 companies · 1 deadline",
    line: "The Next AEC Tech Stack · Arc 1: BIM 2.0 · Closing episode",
    // `avatar` is the hedcut, never the headshot.
    people: [
      { name: "Randall Stevens", firm: "AVAIL", avatar: "assets/hedcuts/randall-stevens.webp" },
      { name: "Carl Christensen", firm: "Autodesk", avatar: "assets/hedcuts/carl-christensen.webp" },
      { name: "Matt Wash", firm: "Bimbeats", avatar: "assets/hedcuts/matt-wash.webp" },
      { name: "Campbell Yule", firm: "AEC Tech Analyst", avatar: "assets/hedcuts/campbell-yule.webp" },
      { name: "Roderick Bates", firm: "Chaos", avatar: "assets/hedcuts/roderick-bates.webp" },
      { name: "Jesper Wallgren", firm: "Finch", avatar: "assets/hedcuts/jesper-wallgren.webp" },
      { name: "Gavin Nicholls", firm: "Architectus", avatar: "assets/hedcuts/gavin-nicholls.webp" },
      { name: "Holger Kreienbrink", firm: "Graphisoft", avatar: "assets/hedcuts/holger-kreienbrink.webp" },
      { name: "Marty Rozmanith", firm: "Skema", avatar: "assets/hedcuts/marty-rozmanith.webp" },
      { name: "Dimitrie Stefanescu", firm: "Speckle", avatar: "assets/hedcuts/dimitrie-stefanescu.webp" },
      { name: "Clifton Harness", firm: "TestFit", avatar: "assets/hedcuts/clifton-harness.webp" },
    ],
  },

  links: {
    listen: "https://trxl.co/240",
    newsletter: "https://www.trxl.co/leadership-edge-trxl-240/",
  },

  centralArgument:
    "Every vendor in this arc promises the same thing in different words: this tool gives you your time back. This closing episode asks the question that promise skips over. If a tool hands you a hundred more design options than you had last year, have you actually gained anything, or just found a new way to run out the clock before Friday? I put some version of that to eleven people building and using the BIM 2.0 stack, on camera, with no script and no approval over the final cut.",

  pullQuote: {
    text: "I don't know that these tools are gonna make it where what I used to do in ten hours now gets done in two. No, they're gonna consume ten hours to just do more options, or more whatever.",
    attribution: "Randall Stevens, CEO & Founder, AVAIL",
    cite: { ts: "8:10", who: "Randall Stevens" },
  },

  stats: [
    { value: "$50K/yr", label: "what a single Revit add-in used to cost Gavin Nicholls' firm — before AI let him build one in a day", cite: { ts: "1:06:10", who: "Gavin Nicholls" } },
    { value: "10 hrs", label: "the hours Randall Stevens says a tool fills with more options, not the two hours it was supposed to save", cite: { ts: "8:10", who: "Randall Stevens" } },
    { value: "95%", label: "the accuracy an algorithm can hit in 4% of the time — Clifton Harness's line, if you don't value your time, skip it", cites: [
      { ts: "21:30", who: "Clifton Harness" },
      { ts: "0:00", who: "Clifton Harness", label: "Clifton Harness — TRXL 238", youtube: "https://youtu.be/PEFq6grOj3Y" },
    ] },
  ],

  question:
    "If a tool actually did free up half your day this week, what would you spend it on, and is that answer something you could say out loud to the person who signs your paycheck?",

  analysis: [
    {
      title: "The trap in the promise",
      body: "Randall Stevens names the gap between what every BIM 2.0 vendor pitches and what actually happens on a project: a tool that could do ten hours of work in two almost never gets used that way. Designers occupy every hour a tool frees up exploring more options, not fewer, unless someone puts a hard business constraint on the process. The time doesn't disappear. It just gets spent somewhere else.",
      cites: [
        { ts: "7:00", who: "Randall Stevens" },
        { ts: "8:10", who: "Randall Stevens" },
      ],
    },
    {
      title: "The gut-check before the rabbit hole",
      body: "Gavin Nicholls is the one voice in this episode who treats a new tool as a cost decision before it's a capability decision. Every time a generative-design problem lands on his desk, the first question isn't whether the tool can do it, it's whether his team has the time and the budget for what he calls the rabbit hole. Jesper Wallgren's more optimistic framing, that quality replaces quantity as the competitive edge once a tool can generate endless options, only holds if a firm can actually afford to sit inside that many options in the first place.",
      cites: [
        { ts: "22:10", who: "Gavin Nicholls" },
        { ts: "19:10", who: "Jesper Wallgren" },
      ],
    },
    {
      title: "Same bet, opposite outcome",
      body: "Set Gavin's Revit add-in next to Randall's ten hours and the whole argument is right there. Gavin's firm used to pay upward of fifty thousand dollars a year for an add-in he can now build in a day, a bet on new tools that paid off in real, countable time. Randall's version of the same bet, more design options per hour, filled the hours back up instead of freeing them. Same category of claim, opposite outcome, and the difference isn't the tool, it's whether anyone put a constraint on what it was for.",
      cites: [
        { ts: "1:06:10", who: "Gavin Nicholls" },
        { ts: "8:10", who: "Randall Stevens" },
      ],
    },
  ],

  takeaways: [
    "Before adopting a tool that promises time back, write down what you'll do with the hours it frees, not just what it lets you produce faster.",
    "Ask Gavin Nicholls' question before touching any generative or auto-layout feature: do you actually have the time and the budget for this, or is it a rabbit hole disguised as a shortcut.",
    "Put a real constraint on exploration, the way Randall Stevens says a firm has to, or a tool built to save time will just get filled with more options instead.",
    "Test a new tool's ROI the way Gavin did: could you build or buy the same outcome in a day now, against what it used to cost every year.",
  ],

  // Deliberately NOT the moments cited in the analysis or stats above — the
  // point of this section is to send people somewhere new in the tape.
  // `prompt` turns each card back on the reader, re-angled toward the
  // time-cost theme where it fits naturally rather than forced onto every
  // voice.
  insightsKicker: "Additional key insights",
  insightsNote: "Eleven more moments worth your time, one from every voice in the episode and ranging well past the argument above. Each card jumps to that point in the tape.",
  insights: [
    {
      title: "The tool manages you, or you manage it",
      body: "Randall Stevens says every tool has always shaped the designs made with it, visible across twenty car manufacturers' worth of NURBS modeling, and the only real variable is whose hands it's in.",
      prompt: "Whose taste is actually showing up in your last project — yours, or the tool's defaults?",
      cite: { ts: "5:10", who: "Randall Stevens" },
    },
    {
      title: "The bridge too far",
      body: "Roderick Bates at Chaos won't let AI touch geometry or materials without the designer's direct input — the compromises a building demands are the judgment call of the designer, not overhead to automate away.",
      prompt: "What's the one decision on your projects you'd never hand to a tool, no matter how much time it claimed to save?",
      cite: { ts: "14:10", who: "Roderick Bates" },
    },
    {
      title: "Nobody benefits from a silo",
      body: "Carl Christensen's flat answer to who benefits when data gets stuck in tools or files: nobody. The value is in keeping information connected and reusable across the whole project life cycle, not in the time spent moving it around.",
      prompt: "How much of your week goes to moving data between tools instead of using it?",
      cite: { ts: "47:05", who: "Carl Christensen" },
    },
    {
      title: "Bringing the fun back",
      body: "Matt Wash hears the same pitch from every BIM 2.0 vendor he tracks: bringing the fun back to architecture, by shifting time away from producing drawings and toward the parts of the job people actually signed up for.",
      prompt: "If a tool freed up your afternoon tomorrow, would you spend it on the part of the job you actually wanted?",
      cite: { ts: "11:05", who: "Matt Wash" },
    },
    {
      title: "Even Excel is lock-in",
      body: "Gavin Nicholls reframes the whole lock-in conversation with one unglamorous example: choosing Microsoft Excel is lock-in too, we just never question the time it costs at the business level the way we question a new BIM platform.",
      prompt: "What's the 'Excel' in your firm — the tool everyone spends time on without ever asking if it's worth it?",
      cite: { ts: "1:05:00", who: "Gavin Nicholls" },
    },
    {
      title: "The one incumbent format that's actually verging on grand architecture",
      body: "Campbell Yule points to Qonic, built natively on IFC, as the one BIM 2.0 platform he thinks is getting close to the level of detail pre-modernist buildings like Budapest's parliament actually achieved.",
      prompt: "Is there a tool you've written off as niche that's quietly saving someone else's team real hours?",
      cite: { ts: "39:50", who: "Campbell Yule" },
    },
    {
      title: "Documentation lite",
      body: "Jesper Wallgren says Finch deliberately skips full construction-grade documentation in early phases, just enough compliance and accessibility checking to be useful, because nobody's chosen an MEP system yet, so why spend the time documenting like they have.",
      prompt: "How much of the documentation your team produces goes unread until the project's already built?",
      cite: { ts: "59:25", who: "Jesper Wallgren" },
    },
    {
      title: "People want the standard, not the file",
      body: "Holger Kreienbrink's line on why open BIM keeps stalling in practice: people say they want open standards, but nobody wants to spend time working with an IFC file directly. The standard has to disappear behind the workflow, not sit inside it.",
      prompt: "Does your firm actually want the open standard, or just the time it would save if data never got stuck?",
      cite: { ts: "1:15:50", who: "Holger Kreienbrink" },
    },
    {
      title: "Parallel project teams without the pain",
      body: "Marty Rozmanith's tagline for Skema, borrowed from a client who'd been fighting the problem for years: teams working at the same time shouldn't have to export a whole building through a format-changer just to synchronize with each other.",
      prompt: "Where in your process do two teams currently wait on each other instead of working in parallel?",
      cite: { ts: "1:23:45", who: "Marty Rozmanith" },
    },
    {
      title: "Interoperability on purpose, not by permission",
      body: "Dimitrie Stefanescu names 'adversarial interoperability' outright: building a connection into a product whose owner would rather you didn't. It's a day-to-day reality at Speckle, and it exists because waiting on permission costs time nobody has.",
      prompt: "Would you call your own workarounds around a vendor's limits 'hacking,' or is that just Tuesday?",
      cite: { ts: "1:30:45", who: "Dimitrie Stefanescu" },
    },
    {
      title: "A constellation, not a single star",
      body: "Clifton Harness points to Hundredfold Studio's founders, who argue that solving a real site or a real problem takes a constellation of people, the way an entire galaxy can look from far enough away like a single star.",
      prompt: "Is your firm built like one expert doing everything, or a constellation of people who each get their time back a different way?",
      cite: { ts: "1:54:15", who: "Clifton Harness" },
    },
  ],

  bottomLine:
    "Ask everyone in this episode whether a new tool actually buys them time, and the honest answer keeps splitting the same way. Gavin's add-in paid for itself in a day. Randall's ten hours just filled back up with more options. Roderick won't let a tool anywhere near the decisions that take real time because they matter, not because they're slow. None of that resolves into a clean rule, and the deadline doesn't care which answer is true. It's still Friday either way.",

  closingQuote:
    "I'm not going to go home early, I'm going to spend that afternoon designing, because that's the part of the job I actually wanted.",
  closingQuoteAttribution: "Evan Troxel",
  closingQuoteCite: null,
};

/* =========================================================================
   TRXL Episode Content — 239
   The Next AEC Tech Stack, Arc 1 Episode 2 of 3.
   Roundup format: one question, eleven voices, no single guest. Uses
   `roster` instead of `guest` / `guests` — see the roster block in the HTML.

   `cite` fields are timestamps into the YouTube cut. They render as links
   that jump to the moment. Timestamps come from 239-transcript-final.md
   (the Descript export of the actual assembled composition — real final-
   broadcast timeline). 239-transcript.md's [MM:SS] labels are source-clip
   timecodes from each guest's own interview, NOT final-timeline — never
   pull a cite timestamp from that file. Never hand-adjust a cite without
   re-checking 239-transcript-final.md.
   ------------------------------------------------------------------------- */

window.TRXL_EPISODE = {
  number: 239,
  date: "August 2026",
  title: "You're Not Going Home Early",
  titleEm: "Early",
  subtitle:
    "Eleven people building and using BIM 2.0 tools, all asked what switching platforms actually costs a firm. No two of them measured it the same way.",

  youtube: "https://youtu.be/1pqwfwuh-gY",

  // Full editions go to every subscriber, free accounts included — the free
  // signup is deliberate, it feeds the list. Partners funded the series.
  access:
    "Every edition of this series goes out in full to everyone on the list, free accounts included, because the partners paid for it. Sign up free at trxl.co and the remaining seven come to you.",

  // Hero visual concept — polishing the bars
  hero: {
    concept:
      "Gavin Nicholls' own image for building Revit add-ins: polishing the bars of a cell from the outside, making BIM 1.0 more comfortable without ever opening the door. A grid of cold steel-gray bars fills the hero; a warm sheen of light sweeps across them on load and drifts slowly on scroll, but the bars themselves never move, and nothing ever unlocks.",
    elements: [
      "full-height vertical bar grid, cold steel-gray gradient",
      "animated warm sheen (radial-gradient) sweeping left to right across the bars",
      "fine grain/noise overlay for texture, subtle parallax drift on scroll",
    ],
    cssNotes:
      "ep239-bars-frame, ep239-bars, ep239-sheen, ep239-grain; sheen animated via keyframed background-position on a 9s loop, grain is a static noise texture at low opacity, [data-motion=\"off\"] freezes the sheen sweep on its midpoint",
  },

  // Roundup episode — no single guest. The roster drives the hero badge and
  // the bottom-line list; there are no portraits by design.
  roster: {
    badge: "11 voices · 9 companies · 1 question",
    line: "The Next AEC Tech Stack · Arc 1: BIM 2.0",
    // `avatar` is the hedcut, never the headshot. Gavin's file is under his
    // former surname (Crump) in the guest portrait library — renamed on copy.
    people: [
      { name: "Randall Stevens", firm: "AVAIL", avatar: "assets/hedcuts/randall-stevens.webp" },
      { name: "Carl Christensen", firm: "Autodesk", avatar: "assets/hedcuts/carl-christensen.webp" },
      { name: "Matt Wash", firm: "Bimbeats", avatar: "assets/hedcuts/matt-wash.webp" },
      { name: "Ariel Cooke-Zamora", firm: "Bimbeats", avatar: "assets/hedcuts/ariel-cooke-zamora.webp" },
      { name: "Campbell Yule", firm: "AEC Tech Analyst", avatar: "assets/hedcuts/campbell-yule.webp" },
      { name: "Jesper Wallgren", firm: "Finch", avatar: "assets/hedcuts/jesper-wallgren.webp" },
      { name: "Gavin Nicholls", firm: "Architectus", avatar: "assets/hedcuts/gavin-nicholls.webp" },
      { name: "Holger Kreienbrink", firm: "Graphisoft", avatar: "assets/hedcuts/holger-kreienbrink.webp" },
      { name: "Marty Rozmanith", firm: "Skema", avatar: "assets/hedcuts/marty-rozmanith.webp" },
      { name: "Dimitrie Stefanescu", firm: "Speckle", avatar: "assets/hedcuts/dimitrie-stefanescu.webp" },
      { name: "Clifton Harness", firm: "TestFit", avatar: "assets/hedcuts/clifton-harness.webp" },
    ],
  },

  links: {
    listen: "https://trxl.co/239",
    newsletter: "https://www.trxl.co/leadership-edge-trxl-239/",
  },

  centralArgument:
    "Episode one of this series ended with a pitch: new tools give architects their day back. This episode asks the harder question, the one that comes right after a firm actually says yes to a new tool. I put some version of it to eleven people building and using the BIM 2.0 stack, on camera, with no script and no approval over the final cut: if a firm stops running one platform and starts running ten, what happens to twenty years of muscle memory while that shakes out?",

  pullQuote: {
    text: "Revit's a masterpiece, guys. You're never gonna build that. You're never gonna compete with that. It's a parametric propagation engine built before the age of AI by human hands, with more error checking and handling than you could ever imagine. Its value to humanity is keeping the contract documents in sync. It's not a design tool.",
    attribution: "Clifton Harness, CEO & co-founder, TestFit",
    cite: { ts: "1:30:57", who: "Clifton Harness" },
  },

  stats: [
    { value: "70%", label: "peak adoption Bimbeats measured on a real AutoCAD-to-Civil 3D migration, then it flatlined", cite: { ts: "1:56:03", who: "Matt Wash" } },
    { value: "11", label: "voices asked the same question about what switching platforms actually costs" },
    { value: "10%", label: "of firm revenue Randall Stevens calls a reasonable software spend, before training and disruption", cite: { ts: "1:50:48", who: "Randall Stevens" } },
  ],

  question:
    "Of the tools sitting in your firm's stack right now, how many are actually displacing an old workflow, and how many are just another window someone has to remember to check?",

  analysis: [
    {
      title: "The sunk cost nobody budgets for",
      body: "Gavin Nicholls named sunk cost fallacy before I could ask about it directly, then described his own Revit add-in work as polishing the prison bars from the other side. Holger Kreienbrink named the same resistance from the opposite chair: the former champions of whatever tool a firm is leaving, who lose status the moment their expertise stops mattering. Clifton Harness put a number on what doing this right actually costs — firms almost never budget to retrain people at all.",
      cites: [
        { ts: "2:25:12", who: "Gavin Nicholls" },
        { ts: "2:34:32", who: "Holger Kreienbrink" },
        { ts: "2:49:53", who: "Clifton Harness" },
      ],
    },
    {
      title: "The plateau nobody predicted",
      body: "Bimbeats measures tool usage down to the window title, which let Matt Wash show a real firm's AutoCAD-to-Civil 3D migration climb from thirty to seventy percent over eighteen months, then flatline completely. Ariel Cooke-Zamora reframed the flatline as the actual finding: the people still on the old tool aren't a training problem, they're a different problem that needs a different lever.",
      cites: [
        { ts: "1:56:03", who: "Matt Wash" },
        { ts: "1:58:59", who: "Ariel Cooke-Zamora" },
      ],
    },
    {
      title: "A Catch-22 with no easy exit",
      body: "Campbell Yule laid out the structural bind underneath every BIM 2.0 pitch: a new tool has to survive inside the world of the one it's replacing before it can generate the revenue that would ever let it escape. Carl Christensen's answer from inside Autodesk reads as the direct counter — building for a platform and an ecosystem, not a monolith, so customers can adopt new tools without leaving the old ones behind.",
      cites: [
        { ts: "2:13:59", who: "Campbell Yule" },
        { ts: "1:35:58", who: "Carl Christensen" },
      ],
    },
  ],

  takeaways: [
    "Before piloting a BIM 2.0 tool, write down the one specific task it has to replace, not augment.",
    "Name who currently owns that task, and measure their time on the old workflow for two weeks before handoff.",
    "Track adoption past the pilot phase — a plateau at seventy percent is a different problem than a slow start, and it needs a different fix.",
    "Budget retraining time explicitly, the way you'd budget the license fee. Almost nobody does.",
  ],

  // These are deliberately NOT the moments cited in the analysis above — the
  // point of this section is to send people somewhere new in the tape, so
  // every timestamp here is unused elsewhere on the page and the topics range
  // past the episode's main argument. Between these and the analysis cites,
  // all eleven voices get surfaced.
  // `prompt` turns each card back on the reader — the insight lands harder
  // as a question about their own firm than as a statement about the show.
  insightsKicker: "Additional key insights",
  insightsNote: "Eleven more moments worth your time, one from every voice in the episode and ranging well past the argument above. Each card jumps to that point in the tape.",
  insights: [
    {
      title: "Carrying capacity has a ceiling",
      body: "Everybody can write software now, but a firm can only actively manage so many tools before it just has to stop adding more.",
      prompt: "How many genuinely new tools has your firm adopted this year, versus just trialed?",
      cite: { ts: "15:58", who: "Randall Stevens" },
    },
    {
      title: "Nobody wants the magic button, they just think they do",
      body: "Ask an AI to design a three-story building in downtown Manhattan and you'll get something that skips every real trade-off an architect actually has to make.",
      prompt: "Where's the line on your team between automating drudgery and automating judgment?",
      cite: { ts: "32:26", who: "Carl Christensen" },
    },
    {
      title: "The dashboard that flags burnout risk",
      body: "Connecting an LLM to a firm's time-tracking data turned an invisible wellbeing problem into a 90-day report naming exactly who's most at risk.",
      prompt: "Would your firm rather find this out from a dashboard, or from an exit interview?",
      cite: { ts: "2:04:14", who: "Matt Wash" },
    },
    {
      title: "You don't feel your own screen time either",
      body: "Ariel compares BIMbeats to a phone's screen-time report: nobody thinks they need it until the number actually shows up.",
      prompt: "If someone measured your team's real tool-switching today, would the number surprise you?",
      cite: { ts: "2:07:39", who: "Ariel Cooke-Zamora" },
    },
    {
      title: "The one incumbent that's actually vulnerable",
      body: "Of everything on the market today, Campbell thinks SketchUp, not Revit or Archicad, is the only tool a BIM 2.0 challenger could realistically displace.",
      prompt: "Which tool in your stack is genuinely replaceable right now, versus which one only feels that way?",
      cite: { ts: "2:11:01", who: "Campbell Yule" },
    },
    {
      title: "Nobody asked for the PDF button",
      body: "The feature that actually moved adoption at Finch wasn't the AI agent, it was letting people export a plain PDF straight out of the browser.",
      prompt: "What's the boring feature in your stack that quietly removed the most friction?",
      cite: { ts: "2:24:02", who: "Jesper Wallgren" },
    },
    {
      title: "The software that keeps up with you",
      body: "The first time Gavin used Arcol, the thing that surprised him wasn't a feature — it was that the program loaded faster than he could click ahead of it.",
      prompt: "How much of your team's 'muscle memory' is actually just compensating for slow software?",
      cite: { ts: "1:04:11", who: "Gavin Nicholls" },
    },
    {
      title: "They deleted the old software on purpose",
      body: "One Graphisoft client uninstalled AutoCAD from every machine during a migration, specifically so nobody could quietly fall back to it.",
      prompt: "Would your firm ever go that far, or is the old tool always one click away?",
      cite: { ts: "2:36:37", who: "Holger Kreienbrink" },
    },
    {
      title: "Culture eats strategy for lunch",
      body: "Marty's framing, borrowed from a talk he gave on technology adoption: architects have to value their own time before they'll bother saving it.",
      prompt: "Does your firm actually bill in a way that rewards saved time, or just more hours?",
      cite: { ts: "2:47:29", who: "Marty Rozmanith" },
    },
    {
      title: "Some firms delete the model on purpose",
      body: "Dimitrie described teams intentionally deleting a Revit model before handoff, specifically so a messy file can't come back to bite them legally.",
      prompt: "Is your firm's instinct to share work in progress, or to protect it?",
      cite: { ts: "1:29:53", who: "Dimitrie Stefanescu" },
    },
    {
      title: "Nobody paid him to get good",
      body: "Clifton taught himself scripting on his own time because the firm never budgeted to train him, then realized designers were the ones getting shortchanged by that arrangement.",
      prompt: "Who on your team is investing in themselves that the firm should be investing in instead?",
      cite: { ts: "2:50:44", who: "Clifton Harness" },
    },
  ],

  bottomLine:
    "Ask everyone in this episode what switching actually costs, and no two answers use the same units. Gavin measures it in sunk cost and reputation. Bimbeats measures it in a flatlined adoption curve. Campbell measures it in the years a new tool has to survive inside the old one before it can compete with it. Clifton skips the software question and goes straight to the training budget nobody sets aside. None of them are wrong, and none of them add up to a clean answer.",

  closingQuote:
    "I often describe it as polishing the prison bars from the other side. I'm sort of standing on the outside of the prison and just making the bars look nice for everyone so they at least feel comfortable in BIM 1.0, at least.",
  closingQuoteCite: { ts: "2:26:09", who: "Gavin Nicholls" },
};

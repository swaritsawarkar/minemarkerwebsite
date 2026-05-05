"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BadgeCheck,
  CircleDot,
  Clock,
  Code2,
  Download,
  FileJson,
  Film,
  Flag,
  Gem,
  HeartPulse,
  ListChecks,
  Play,
  Scissors,
  ShieldCheck,
  Skull,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import type { ReactNode } from "react";

const betaDownloadUrl =
  "https://github.com/swaritsawarkar/minemarker/releases/download/v4.3.0/MineMarker-Timeline-Viewer-4.3.0-Portable-x64.exe";

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 34 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionIntro({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <Reveal className="mx-auto max-w-4xl text-center">
      <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-emerald-200/75">
        {eyebrow}
      </p>
      <h2 className="text-balance text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-300">{body}</p>
    </Reveal>
  );
}

function SectionShell({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative border-b border-white/10 px-5 py-24 sm:px-8 lg:py-32 ${className}`}
    >
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}

function MessyVsClean() {
  const messy = [
    ["00:03:14", "mining"],
    ["00:18:41", "?"],
    ["00:42:02", "maybe diamonds"],
    ["01:07:55", "death?"],
    ["01:31:20", "boring cave"],
  ];

  const clean = [
    ["00:07:42", "Diamond ore mined", "high"],
    ["00:12:18", "Player died", "high"],
    ["00:18:33", "Entered Nether", "high"],
    ["00:24:51", "Low health", "medium"],
    ["00:33:10", "Advancement", "medium"],
  ];

  return (
    <Reveal className="mt-16 grid gap-5 lg:grid-cols-2">
      <div className="border border-red-200/10 bg-red-950/[0.08] p-6">
        <div className="mb-7 flex items-center justify-between">
          <h3 className="text-2xl font-semibold tracking-[-0.02em] text-white">
            Raw footage guessing game
          </h3>
          <span className="text-xs uppercase tracking-[0.24em] text-red-200/70">Before</span>
        </div>
        <div className="space-y-3">
          {messy.map(([time, label], index) => (
            <div
              key={time}
              className="grid grid-cols-[5.5rem_1fr] items-center border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-stone-300"
              style={{ opacity: 1 - index * 0.1 }}
            >
              <span className="font-mono text-red-100/70">{time}</span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border border-emerald-200/20 bg-emerald-950/[0.08] p-6 shadow-[0_40px_100px_rgba(20,255,139,0.08)]">
        <div className="mb-7 flex items-center justify-between">
          <h3 className="text-2xl font-semibold tracking-[-0.02em] text-white">
            Organized creator timeline
          </h3>
          <span className="text-xs uppercase tracking-[0.24em] text-emerald-200">After</span>
        </div>
        <div className="space-y-3">
          {clean.map(([time, label, priority]) => (
            <div
              key={time}
              className="grid grid-cols-[5.5rem_1fr_4.5rem] items-center border border-emerald-200/15 bg-emerald-200/[0.04] px-4 py-3 text-sm text-stone-200"
            >
              <span className="font-mono text-emerald-200">{time}</span>
              <span>{label}</span>
              <span className="text-right text-[0.65rem] uppercase tracking-[0.18em] text-amber-200">
                {priority}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

const workflowSteps = [
  {
    icon: Play,
    title: "Play normally",
    body: "Start a MineMarker session alongside your recording. No cloud accounts, no editing software open.",
  },
  {
    icon: Flag,
    title: "Mark or auto-log moments",
    body: "Use manual markers while the mod records useful game events like deaths, valuable blocks, low health, and dimensions.",
  },
  {
    icon: Film,
    title: "Load the session later",
    body: "Open the local viewer, load the latest session JSON, then add your recorded video file.",
  },
  {
    icon: Scissors,
    title: "Jump to the good parts",
    body: "Use timestamps, filters, notes, and suggestions to move faster through the edit.",
  },
];

function Workflow() {
  return (
    <div className="mt-16 grid gap-4 lg:grid-cols-4">
      {workflowSteps.map((step, index) => {
        const Icon = step.icon;
        return (
          <Reveal key={step.title} className="relative border border-white/10 bg-white/[0.035] p-6">
            <div className="mb-8 flex items-center justify-between">
              <div className="grid size-12 place-items-center border border-emerald-200/25 bg-emerald-300/10 text-emerald-200">
                <Icon className="size-5" />
              </div>
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-stone-500">
                0{index + 1}
              </span>
            </div>
            <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">{step.title}</h3>
            <p className="mt-4 text-sm leading-7 text-stone-300">{step.body}</p>
          </Reveal>
        );
      })}
    </div>
  );
}

function InGameMockup() {
  return (
    <div className="min-h-[360px] border border-white/10 bg-[#07110d] p-5">
      <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-stone-400">
        <span>In-game marker</span>
        <span>Fabric mod</span>
      </div>
      <div className="relative h-64 overflow-hidden border border-white/10 bg-[linear-gradient(135deg,#172018,#0c130f)]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute left-10 top-10 grid grid-cols-3 gap-1">
          {Array.from({ length: 12 }).map((_, index) => (
            <span
              key={index}
              className={`size-10 ${index % 4 === 0 ? "bg-cyan-200 shadow-[0_0_22px_rgba(103,232,249,0.42)]" : "bg-stone-700/70"}`}
            />
          ))}
        </div>
        <div className="absolute bottom-5 left-5 right-5 border border-emerald-200/25 bg-black/55 p-4 backdrop-blur">
          <div className="font-mono text-sm text-emerald-200">
            /minemarker mark diamond_ore found diamonds near lava
          </div>
          <div className="mt-2 text-xs text-stone-300">Marker added at 00:07:42</div>
        </div>
      </div>
    </div>
  );
}

function JsonMockup() {
  const lines = [
    '{ "project": "MineMarker",',
    '  "session": "hardcore-ep-4",',
    '  "video_offset_seconds": 1.25,',
    '  "markers": [',
    '    { "time": "00:07:42",',
    '      "label": "diamond_ore" }',
    '  ],',
    '  "events": ["player_death"] }',
  ];

  return (
    <div className="min-h-[360px] border border-white/10 bg-[#06100d] p-5">
      <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-stone-400">
        <span>Clean exports</span>
        <FileJson className="size-4 text-cyan-200" />
      </div>
      <pre className="min-h-64 overflow-hidden border border-white/10 bg-black/40 p-5 text-sm leading-8 text-stone-300">
        {lines.map((line, index) => (
          <code
            key={line}
            className={index === 4 || index === 5 ? "block text-emerald-200" : "block"}
          >
            {line}
          </code>
        ))}
      </pre>
    </div>
  );
}

function TimelineMockup() {
  const events = [
    ["00:07:42", "Diamond Ore Mined", Gem, "high"],
    ["00:12:18", "Player Died", Skull, "high"],
    ["00:18:33", "Entered Nether", CircleDot, "high"],
    ["00:24:51", "Low Health", HeartPulse, "medium"],
  ];

  return (
    <div className="border border-emerald-200/15 bg-[#07100d] p-5 shadow-[0_34px_120px_rgba(32,255,141,0.08)] lg:col-span-2">
      <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.24em] text-emerald-200/75">
            Timeline viewer
          </div>
          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-white">
            Events, markers, video sync, and export notes in one place.
          </h3>
        </div>
        <span className="border border-white/10 px-3 py-2 text-xs uppercase tracking-[0.18em] text-stone-300">
          Load last session
        </span>
      </div>
      <div className="mb-5 h-2 overflow-hidden bg-white/10">
        <div className="h-full w-[71%] bg-gradient-to-r from-emerald-300 via-cyan-200 to-amber-200" />
      </div>
      <div className="space-y-3">
        {events.map(([time, label, Icon, priority]) => {
          const EventIcon = Icon as typeof Gem;
          return (
            <div
              key={label as string}
              className="grid grid-cols-[5.5rem_2rem_1fr_4.5rem] items-center border border-white/10 bg-white/[0.03] px-4 py-3 text-sm"
            >
              <span className="font-mono text-emerald-200">{time as string}</span>
              <EventIcon className="size-4 text-cyan-200" />
              <span className="text-stone-200">{label as string}</span>
              <span className="text-right text-[0.65rem] uppercase tracking-[0.18em] text-amber-200">
                {priority as string}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SuggestionsMockup() {
  return (
    <div className="min-h-[360px] border border-white/10 bg-[#07100d] p-5">
      <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-stone-400">
        <span>Creator suggestions</span>
        <WandSparkles className="size-4 text-emerald-200" />
      </div>
      <div className="space-y-3">
        {[
          ["Highlight moment", "Diamond find. Consider a zoom or sound cue."],
          ["Shorts candidate", "Death event with clear clip potential."],
          ["Montage potential", "Many valuable blocks in a short window."],
          ["Review gap", "Long stretch with no MineMarker events."],
        ].map(([title, body]) => (
          <div key={title} className="border border-white/10 bg-white/[0.035] p-4">
            <h4 className="font-semibold text-white">{title}</h4>
            <p className="mt-2 text-sm leading-6 text-stone-300">{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Showcase() {
  return (
    <div className="mt-16 grid gap-5 lg:grid-cols-2">
      <InGameMockup />
      <JsonMockup />
      <TimelineMockup />
      <SuggestionsMockup />
    </div>
  );
}

const features = [
  {
    icon: Flag,
    title: "Manual markers while playing",
    body: "Tag important moments with a label and note without leaving the session.",
  },
  {
    icon: Gem,
    title: "Automatic in-game events",
    body: "Log useful Minecraft events that normal video editors cannot understand from pixels alone.",
  },
  {
    icon: Film,
    title: "Local timeline viewer",
    body: "Load session JSON and video files locally, then jump through the edit with context.",
  },
  {
    icon: Clock,
    title: "Video offset correction",
    body: "Adjust sync when OBS or your recording started before the MineMarker session.",
  },
  {
    icon: ListChecks,
    title: "Exportable editing notes",
    body: "Generate JSON, TXT, and CSV outputs that are useful during editing.",
  },
  {
    icon: ShieldCheck,
    title: "Local-first beta",
    body: "No accounts, no cloud upload, and no telemetry in the current creator workflow.",
  },
];

function FeatureHighlights() {
  return (
    <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => {
        const Icon = feature.icon;
        return (
          <Reveal key={feature.title} className="border border-white/10 bg-white/[0.032] p-6">
            <Icon className="mb-7 size-6 text-emerald-200" />
            <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">{feature.title}</h3>
            <p className="mt-4 text-sm leading-7 text-stone-300">{feature.body}</p>
          </Reveal>
        );
      })}
    </div>
  );
}

const faqs = [
  {
    q: "What is MineMarker?",
    a: "MineMarker is a Minecraft creator editing assistant. It logs manual markers and useful game events, then exports them into a timeline workflow for editing.",
  },
  {
    q: "Is it a mod?",
    a: "Yes. The Minecraft side is a Fabric client-side mod, paired with a local desktop timeline viewer.",
  },
  {
    q: "Does it edit videos automatically?",
    a: "No. MineMarker helps you find and organize important moments faster. It does not automatically finish your video for you.",
  },
  {
    q: "Does it work with OBS?",
    a: "V1/V4 use manual video offset correction. Full OBS automation is not claimed yet.",
  },
  {
    q: "Does it upload recordings to the cloud?",
    a: "No. The current workflow is local-first and does not upload gameplay footage.",
  },
  {
    q: "Is it released yet?",
    a: "It is pre-release beta. Current builds are available, but the product is still being shaped and tested.",
  },
];

function FAQ() {
  return (
    <div className="mt-16 grid gap-4 lg:grid-cols-2">
      {faqs.map((faq) => (
        <Reveal key={faq.q} className="border border-white/10 bg-white/[0.03] p-6">
          <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">{faq.q}</h3>
          <p className="mt-4 text-sm leading-7 text-stone-300">{faq.a}</p>
        </Reveal>
      ))}
    </div>
  );
}

export function ProductStory() {
  return (
    <>
      <SectionShell className="bg-[#050806]">
        <SectionIntro
          eyebrow="The editing problem"
          title="Minecraft knows what happened. Your video editor does not."
          body="A normal editor only sees video and audio. MineMarker uses in-game context so creators do not have to scrub blindly through hours of raw gameplay."
        />
        <MessyVsClean />
      </SectionShell>

      <SectionShell id="how-it-works" className="bg-[#07100d]">
        <SectionIntro
          eyebrow="Workflow"
          title="Four steps from raw session to editing map."
          body="MineMarker stays out of the way while you play, then gives you structured timestamps when it is time to edit."
        />
        <Workflow />
      </SectionShell>

      <SectionShell id="showcase" className="bg-[radial-gradient(circle_at_50%_0%,rgba(70,255,160,0.13),transparent_35%),#050806]">
        <SectionIntro
          eyebrow="Product preview"
          title="Built around the moments creators actually need."
          body="The website mockups show the real product direction: Minecraft events, creator notes, video offset sync, and a local timeline viewer."
        />
        <Showcase />
      </SectionShell>

      <SectionShell>
        <SectionIntro
          eyebrow="Features"
          title="Not a replay mod. Not a generic marker script."
          body="MineMarker is focused on creator editing workflow: clean timestamps, useful events, local files, and notes you can actually edit from."
        />
        <FeatureHighlights />
      </SectionShell>

      <SectionShell className="bg-[#07100d]">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-emerald-200/75">
              Why different
            </p>
            <h2 className="text-balance text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">
              Stop treating gameplay like anonymous footage.
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone-300">
              Replay tools are great for cinematics. OBS markers are useful for timestamps.
              MineMarker sits in a different lane: it turns Minecraft context into editing
              context so creators can decide faster.
            </p>
          </Reveal>
          <Reveal className="grid gap-4">
            {[
              ["Normal editor", "Sees pixels, audio, and a long timeline."],
              ["MineMarker", "Sees markers, events, positions, labels, notes, and offset-adjusted times."],
              ["Creator result", "Less searching. More reviewing, cutting, and shaping the story."],
            ].map(([label, body]) => (
              <div key={label} className="border border-white/10 bg-white/[0.035] p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200">
                  {label}
                </span>
                <p className="mt-3 text-lg leading-7 text-white">{body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell id="early-access" className="bg-[#050806]">
        <div className="grid gap-10 border border-emerald-200/20 bg-emerald-300/[0.055] p-7 shadow-[0_36px_120px_rgba(52,255,150,0.08)] lg:grid-cols-[1fr_0.9fr] lg:p-10">
          <Reveal>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-emerald-200/75">
              Pre-release access
            </p>
            <h2 className="text-balance text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">
              Shape MineMarker before the wider launch.
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone-300">
              MineMarker is currently in beta and being shaped for Minecraft creators who
              want a faster editing workflow. Join the waitlist for updates, or download the
              current beta if you are comfortable testing early builds.
            </p>
          </Reveal>
          <Reveal className="grid content-center gap-3">
            <a
              href="#waitlist-form"
              className="inline-flex items-center justify-center gap-2 bg-emerald-300 px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#071008] transition hover:bg-emerald-200"
            >
              Join waitlist
              <Sparkles className="size-4" />
            </a>
            <a
              href={betaDownloadUrl}
              className="inline-flex items-center justify-center gap-2 border border-white/15 bg-white/[0.06] px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:border-emerald-200/55"
            >
              Download beta
              <Download className="size-4" />
            </a>
            <p className="text-sm leading-6 text-stone-400">
              Beta builds are early. In-game runtime testing and compatibility should be
              verified by each tester before relying on it for important recordings.
            </p>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell id="faq" className="bg-[#07100d]">
        <SectionIntro
          eyebrow="FAQ"
          title="Honest answers before you install anything."
          body="MineMarker is useful already, but it is still a pre-release creator tool. The site should make that clear."
        />
        <FAQ />
      </SectionShell>

      <SectionShell className="bg-[radial-gradient(circle_at_50%_30%,rgba(82,255,170,0.16),transparent_30%),#050806]">
        <Reveal className="mx-auto max-w-4xl text-center">
          <BadgeCheck className="mx-auto mb-7 size-9 text-emerald-200" />
          <h2 className="text-balance text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl">
            Make every long session easier to edit.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-300">
            MineMarker turns gameplay context into editing context. Join the beta list and
            help shape the workflow creators actually need.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#waitlist-form"
              className="inline-flex items-center justify-center bg-emerald-300 px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#071008] transition hover:bg-emerald-200"
            >
              Join early access
            </a>
            <a
              href="https://github.com/swaritsawarkar/minemarker"
              className="inline-flex items-center justify-center gap-2 border border-white/15 px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:border-emerald-200/55"
            >
              View GitHub
              <Code2 className="size-4" />
            </a>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}

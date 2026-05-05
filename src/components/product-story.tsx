"use client";

import { motion } from "framer-motion";
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
  ShieldCheck,
  Skull,
  WandSparkles,
} from "lucide-react";
import type { ReactNode } from "react";
import { WaitlistForm } from "./waitlist-form";

const betaDownloadUrl =
  "https://github.com/swaritsawarkar/minemarker/releases/download/v4.3.0/MineMarker-Timeline-Viewer-4.3.0-Portable-x64.exe";

const ingameVisual = "/visuals/ingame-marker-scene.png";
const exportVisual = "/visuals/export-data-flow.png";
const timelineVisual = "/visuals/timeline-viewer-product.png";
const suggestionsVisual = "/visuals/clip-suggestions.png";
const sessionVisual = "/visuals/session-summary.png";
const problemVisual = "/visuals/problem-before-after.png";
const earlyAccessVisual = "/visuals/early-access-launch.png";

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 1, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
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

function VisualImage({
  className,
  src,
  position = "center",
}: {
  className?: string;
  src: string;
  position?: string;
}) {
  return (
    <div
      className={`bg-cover bg-no-repeat ${className ?? ""}`}
      style={{ backgroundImage: `url(${src})`, backgroundPosition: position }}
      aria-hidden="true"
    />
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
        <VisualImage className="absolute inset-0 opacity-90" src={ingameVisual} position="center right" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,7,6,0.08),rgba(3,7,6,0.28)),radial-gradient(circle_at_45%_40%,transparent,rgba(3,7,6,0.55))]" />
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
      <div className="relative mb-4 h-36 overflow-hidden border border-white/10 bg-black">
        <VisualImage className="absolute inset-0 opacity-90" src={exportVisual} position="center" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06100d] via-transparent to-transparent" />
      </div>
      <pre className="overflow-hidden border border-white/10 bg-black/40 p-5 text-sm leading-8 text-stone-300">
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
      <div className="relative mb-4 h-40 overflow-hidden border border-white/10 bg-black">
        <VisualImage className="absolute inset-0 opacity-95" src={timelineVisual} position="center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/25" />
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
      <div className="relative mb-4 h-44 overflow-hidden border border-white/10 bg-black">
        <VisualImage className="absolute inset-0 opacity-95" src={suggestionsVisual} position="center" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07100d] via-transparent to-black/10" />
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

function SessionSummaryMockup() {
  return (
    <div className="min-h-[360px] border border-white/10 bg-[#07100d] p-5">
      <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-stone-400">
        <span>Session summary</span>
        <ListChecks className="size-4 text-emerald-200" />
      </div>
      <div className="relative h-64 overflow-hidden border border-white/10 bg-black">
        <VisualImage className="absolute inset-0 opacity-95" src={sessionVisual} position="center" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07100d] via-transparent to-black/10" />
        <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2 text-center text-xs text-stone-200">
          {[
            ["24", "markers"],
            ["57", "events"],
            ["1.25s", "offset"],
          ].map(([value, label]) => (
            <div key={label} className="border border-white/10 bg-black/55 p-3 backdrop-blur">
              <p className="font-mono text-lg text-emerald-200">{value}</p>
              <p className="mt-1 uppercase tracking-[0.16em] text-stone-400">{label}</p>
            </div>
          ))}
        </div>
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
      <SessionSummaryMockup />
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
      <SectionShell id="showcase" className="bg-[radial-gradient(circle_at_50%_0%,rgba(70,255,160,0.13),transparent_35%),#050806]">
        <SectionIntro
          eyebrow="Product preview"
          title="Built around the moments creators actually need."
          body="The website mockups show the real product direction: Minecraft events, creator notes, video offset sync, and a local timeline viewer."
        />
        <Showcase />
      </SectionShell>

      <SectionShell id="features">
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
          <Reveal className="overflow-hidden border border-white/10 bg-black">
            <div className="relative h-72">
              <VisualImage className="absolute inset-0 opacity-95" src={problemVisual} position="center" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07100d] via-black/10 to-transparent" />
            </div>
            <div className="grid gap-px bg-white/10 md:grid-cols-3">
            {[
              ["Normal editor", "Sees pixels, audio, and a long timeline."],
              ["MineMarker", "Sees markers, events, positions, labels, notes, and offset-adjusted times."],
              ["Creator result", "Less searching. More reviewing, cutting, and shaping the story."],
            ].map(([label, body]) => (
              <div key={label} className="bg-[#07100d] p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200">
                  {label}
                </span>
                <p className="mt-3 text-lg leading-7 text-white">{body}</p>
              </div>
            ))}
            </div>
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
            <div className="relative mt-8 min-h-[260px] overflow-hidden border border-emerald-200/15 bg-black">
              <VisualImage className="absolute inset-0 opacity-95" src={earlyAccessVisual} position="center" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/10" />
            </div>
          </Reveal>
          <Reveal className="grid content-center gap-5">
            <WaitlistForm />
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

      <SectionShell className="overflow-hidden bg-[#050806]">
        <VisualImage
          className="absolute inset-0 opacity-30"
          src={earlyAccessVisual}
          position="center"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(82,255,170,0.18),transparent_30%),linear-gradient(180deg,rgba(5,8,6,0.7),#050806_82%)]" />
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

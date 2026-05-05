"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Clock,
  Download,
  Film,
  Pickaxe,
  Search,
  Sparkles,
  TimerOff,
} from "lucide-react";
import dynamic from "next/dynamic";
import { SiteNav } from "./site-nav";

const VoxelScene = dynamic(() => import("./voxel-scene").then((mod) => mod.VoxelScene), {
  ssr: false,
});

const betaDownloadUrl =
  "https://github.com/swaritsawarkar/minemarker/releases/download/v4.3.0/MineMarker-Timeline-Viewer-4.3.0-Portable-x64.exe";

const heroFacts = ["Manual markers", "Automatic events", "Timeline viewer"];

const heroVisual = "/visuals/minemarker-cave-hero.png";
const productVisual = "/visuals/minemarker-product-shot.png";

const painItems = [
  {
    icon: Clock,
    title: "Record for hours",
    body: "Long sessions create tons of raw footage.",
  },
  {
    icon: Search,
    title: "Can't remember",
    body: "Good moments get buried or forgotten.",
  },
  {
    icon: Film,
    title: "Scrub forever",
    body: "Wasting time looking for the good parts.",
  },
  {
    icon: TimerOff,
    title: "Miss moments",
    body: "Great clips get skipped or lost forever.",
  },
];

const steps = [
  {
    title: "Play normally",
    body: "Record your session like you always do.",
    image: heroVisual,
  },
  {
    title: "Mark moments",
    body: "Add markers or let MineMarker auto-detect events.",
    image: productVisual,
  },
  {
    title: "Load your session",
    body: "Open your export in the timeline viewer.",
    image: productVisual,
  },
  {
    title: "Jump to the good parts",
    body: "Edit faster with timestamps, notes, and suggestions.",
    image: heroVisual,
  },
];

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

function HeroProductWindow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, rotateY: -7, rotateX: 3 }}
      animate={{ opacity: 1, y: 0, rotateY: -7, rotateX: 3 }}
      transition={{ delay: 0.18, duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-10 mx-auto w-full max-w-[760px] origin-center overflow-hidden border border-white/15 bg-[#050807]/90 p-3 shadow-[0_46px_130px_rgba(0,0,0,0.7)] [transform-style:preserve-3d] lg:translate-x-6"
    >
      <div className="mb-3 flex items-center justify-between border-b border-white/10 px-2 pb-3">
        <div className="flex items-center gap-2">
          <span className="grid size-5 place-items-center bg-emerald-300/15 text-[10px] font-black text-emerald-200">
            M
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-200">
            Mine Marker
          </span>
        </div>
        <span className="text-[0.62rem] uppercase tracking-[0.2em] text-emerald-200">
          v0.4.0 beta
        </span>
      </div>

      <div className="grid gap-3 lg:grid-cols-[0.28fr_0.72fr]">
        <div className="hidden border border-white/10 bg-black/35 p-3 text-xs text-stone-300 lg:block">
          <p className="text-[0.65rem] uppercase tracking-[0.24em] text-emerald-200">Session</p>
          <div className="mt-3 border border-white/10 bg-white/[0.03] p-3">
            <p className="font-semibold text-white">hardcore-ep-4</p>
            <p className="mt-1 font-mono text-2xl text-white">00:47:32</p>
            <button className="mt-3 w-full bg-emerald-300 px-3 py-2 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#061008]">
              Add marker
            </button>
          </div>
          <div className="mt-3 grid gap-2">
            {["Manual markers 24", "Automatic events 57", "Advancements 12", "Deaths 3"].map(
              (item) => (
                <div key={item} className="border border-white/10 bg-white/[0.025] px-2 py-2">
                  {item}
                </div>
              ),
            )}
          </div>
        </div>

        <div>
          <div className="relative h-[250px] overflow-hidden border border-white/10 bg-black sm:h-[340px]">
            <VisualImage
              className="absolute inset-0 opacity-95"
              src={productVisual}
              position="center"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_35%,transparent_0%,rgba(0,0,0,0.06)_50%,rgba(0,0,0,0.36)_100%)]" />
            <div className="absolute left-5 top-5 font-mono text-sm text-white">
              00:07:42 <span className="text-emerald-300">(+1.250s)</span>
            </div>
          </div>
          <div className="mt-3 h-2 bg-white/10">
            <div className="h-full w-[74%] bg-gradient-to-r from-emerald-300 via-cyan-200 to-amber-200" />
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 text-[0.65rem] text-stone-200 sm:grid-cols-4">
            {["Diamond mined", "Player died", "Entered Nether", "Low health"].map((event) => (
              <div key={event} className="border border-white/10 bg-white/[0.04] px-3 py-2">
                {event}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function StoryboardPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-20 mx-auto mt-14 w-full max-w-7xl border border-white/15 bg-[#07100d]/82 shadow-[0_40px_130px_rgba(0,0,0,0.48)] backdrop-blur-xl"
    >
      <div className="grid border-b border-white/10 lg:grid-cols-[0.28fr_0.72fr]">
        <div className="border-b border-white/10 p-6 lg:border-b-0 lg:border-r lg:p-9">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-300">
            The problem
          </p>
          <h2 className="mt-4 max-w-xs text-3xl font-semibold tracking-[-0.04em] text-white">
            Editing Minecraft videos shouldn&apos;t feel like this.
          </h2>
        </div>
        <div className="grid gap-px bg-white/10 md:grid-cols-4">
          {painItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="bg-[#07100d]/95 p-6 text-center">
                <div className="mx-auto grid size-12 place-items-center border border-white/10 bg-white/[0.06] text-emerald-200">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 text-sm font-semibold text-white">{item.title}</h3>
                <p className="mx-auto mt-2 max-w-[11rem] text-xs leading-5 text-stone-400">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid lg:grid-cols-[0.28fr_0.72fr]">
        <div className="border-b border-white/10 p-6 lg:border-b-0 lg:border-r lg:p-9">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-300">
            How it works
          </p>
          <h2 className="mt-4 max-w-xs text-3xl font-semibold tracking-[-0.04em] text-white">
            From raw gameplay to an editing timeline in four steps.
          </h2>
        </div>
        <div className="grid gap-4 p-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="overflow-hidden border border-white/12 bg-white/[0.035]">
              <div className="relative h-32 bg-black">
                <VisualImage className="absolute inset-0" src={step.image} position="center" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07100d] via-transparent to-transparent" />
                <span className="absolute left-4 top-4 text-4xl font-black text-emerald-300">
                  {index + 1}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-xs leading-5 text-stone-400">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function CinematicHero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-[#030706] pb-10">
      <SiteNav />

      <VisualImage
        className="absolute inset-y-0 right-0 top-0 w-[82%] opacity-95"
        src={heroVisual}
        position="center right"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#030706_0%,rgba(3,7,6,0.96)_25%,rgba(3,7,6,0.58)_58%,rgba(3,7,6,0.76)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_34%,rgba(88,255,190,0.18),transparent_35%),linear-gradient(180deg,rgba(3,7,6,0)_0%,#030706_94%)]" />
      <div className="absolute bottom-36 left-[42%] right-0 top-32 opacity-70 motion-reduce:hidden">
        <VoxelScene />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[700px] w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 pb-0 pt-28 sm:px-8 lg:grid-cols-[0.47fr_0.53fr] lg:pt-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            className="mb-7 inline-flex items-center gap-2 border border-emerald-300/35 bg-emerald-300/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-100 shadow-[0_0_28px_rgba(51,255,141,0.11)]"
          >
            <Pickaxe className="size-3.5" />
            Pre-release beta
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[780px] text-balance text-[clamp(2.35rem,9vw,3.1rem)] font-black leading-[0.98] tracking-[-0.06em] text-white sm:text-[clamp(3.25rem,6.65vw,5.7rem)] sm:leading-[0.91] sm:tracking-[-0.075em]"
          >
            Turn raw Minecraft gameplay into an{" "}
            <span className="text-emerald-300">organized</span> editing timeline.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-xl text-lg leading-8 text-stone-300"
          >
            MineMarker helps Minecraft creators find the best moments faster. Mark them
            while you play or let MineMarker log important events, then jump straight to
            what matters during editing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#early-access"
              className="inline-flex items-center justify-center gap-3 bg-emerald-300 px-7 py-4 text-sm font-black uppercase tracking-[0.15em] text-[#071008] shadow-[0_0_48px_rgba(64,255,150,0.22)] transition hover:bg-emerald-200"
            >
              Join the waitlist
              <Sparkles className="size-4" />
            </a>
            <a
              href={betaDownloadUrl}
              className="inline-flex items-center justify-center gap-3 border border-white/18 bg-[#08120f]/80 px-7 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition hover:border-emerald-200/55"
            >
              Download beta
              <Download className="size-4" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-3 border border-white/12 bg-black/30 px-7 py-4 text-sm font-bold uppercase tracking-[0.15em] text-stone-200 transition hover:border-emerald-200/45"
            >
              See how it works
              <ArrowDown className="size-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.42, duration: 0.8 }}
            className="mt-6 flex flex-wrap gap-5 text-sm text-stone-300"
          >
            {heroFacts.map((fact) => (
              <span key={fact} className="inline-flex items-center gap-2">
                <span className="size-2 rounded-full border border-emerald-200 bg-emerald-300/40" />
                {fact}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="relative min-h-[460px]">
          <HeroProductWindow />
        </div>
      </div>

      <div className="relative z-10 -mt-2 px-5 sm:px-8">
        <StoryboardPanel />
      </div>
    </section>
  );
}

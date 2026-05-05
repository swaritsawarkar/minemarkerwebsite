"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { SiteNav } from "./site-nav";
import { VoxelScene } from "./voxel-scene";

const betaDownloadUrl =
  "https://github.com/swaritsawarkar/minemarker/releases/download/v4.3.0/MineMarker-Timeline-Viewer-4.3.0-Portable-x64.exe";

const heroFacts = [
  "Manual markers",
  "Automatic game events",
  "Timeline viewer",
  "Local-first workflow",
];

export function CinematicHero() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative isolate min-h-screen overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_74%_28%,rgba(23,255,169,0.18),transparent_34%),radial-gradient(circle_at_30%_74%,rgba(80,218,255,0.14),transparent_28%),linear-gradient(180deg,#050806_0%,#07110c_56%,#050806_100%)]"
    >
      <SiteNav />

      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:46px_46px]" />
      <div className="absolute inset-x-0 top-20 h-px bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent" />

      <div className="mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:pb-10 lg:pt-24">
        <div className="relative z-10 max-w-3xl">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            className="mb-7 inline-flex items-center gap-2 border border-emerald-300/25 bg-emerald-300/[0.08] px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-100"
          >
            <span className="size-1.5 bg-emerald-300 shadow-[0_0_14px_rgba(52,255,146,0.9)]" />
            Pre-release beta
          </motion.div>

          <motion.h1
            initial={reducedMotion ? false : { opacity: 0, y: 28 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl text-balance text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-[5.7rem] lg:leading-[0.88]"
          >
            Turn raw Minecraft gameplay into an organized editing timeline.
          </motion.h1>

          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 22 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-2xl text-lg leading-8 text-stone-300 sm:text-xl"
          >
            Minecraft creators record for hours, then lose time hunting for diamonds, deaths,
            Nether entry, funny fails, and build progress. MineMarker logs the moments while
            you play, then turns them into clean timestamps and editing notes.
          </motion.p>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#early-access"
              className="inline-flex items-center justify-center gap-2 bg-emerald-300 px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#071008] shadow-[0_0_42px_rgba(64,255,150,0.18)] transition hover:bg-emerald-200"
            >
              Join the waitlist
              <Sparkles className="size-4" />
            </a>
            <a
              href={betaDownloadUrl}
              className="inline-flex items-center justify-center gap-2 border border-white/15 bg-white/[0.06] px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:border-emerald-200/55 hover:bg-white/[0.1]"
            >
              Download beta
              <Download className="size-4" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 px-4 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-stone-300 transition hover:text-emerald-100"
            >
              See how it works
              <ArrowDown className="size-4" />
            </a>
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={reducedMotion ? undefined : { opacity: 1 }}
            transition={{ delay: 0.42, duration: 0.8 }}
            className="mt-10 grid grid-cols-2 gap-3 border-l border-t border-white/10 sm:grid-cols-4"
          >
            {heroFacts.map((fact) => (
              <div key={fact} className="border-b border-r border-white/10 bg-white/[0.025] p-4">
                <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200/80">
                  {fact}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, scale: 0.96, y: 28 }}
          animate={reducedMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative min-h-[460px] lg:min-h-[660px]"
          aria-label="Animated MineMarker product preview"
        >
          {!reducedMotion && <VoxelScene />}
          <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.015))] shadow-[0_40px_120px_rgba(0,0,0,0.55)] backdrop-blur-[2px]" />
          <div className="absolute left-6 right-6 top-8 border border-white/15 bg-[#07100d]/88 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.46)] sm:left-10 sm:right-10 sm:top-14">
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-sm font-semibold text-white">hardcore-ep-4</span>
              <span className="text-xs uppercase tracking-[0.22em] text-emerald-200">Live session</span>
            </div>
            <div className="relative h-36 overflow-hidden border border-white/10 bg-[#0b1511] sm:h-48">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(58,255,142,0.16)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:18px_18px]" />
              <div className="absolute left-6 top-6 border border-cyan-200/30 bg-cyan-200/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                Diamond ore mined
              </div>
              <div className="absolute bottom-5 left-6 right-6 h-2 bg-white/10">
                <div className="h-full w-[62%] bg-gradient-to-r from-emerald-300 to-cyan-200" />
              </div>
            </div>
            <div className="mt-4 grid gap-2 text-xs text-stone-300">
              {[
                ["00:07:42", "Diamond Ore Mined", "High"],
                ["00:12:18", "Player Died", "High"],
                ["00:18:33", "Entered Nether", "High"],
              ].map(([time, label, priority]) => (
                <div
                  key={label}
                  className="grid grid-cols-[5.5rem_1fr_4rem] items-center border border-white/10 bg-white/[0.03] px-3 py-2"
                >
                  <span className="font-mono text-emerald-200">{time}</span>
                  <span>{label}</span>
                  <span className="text-right text-[0.65rem] uppercase tracking-[0.16em] text-amber-200">
                    {priority}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

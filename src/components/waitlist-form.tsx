"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Loader2, ShieldCheck } from "lucide-react";
import { hasSupabaseConfig, supabase } from "@/lib/supabase";

type SubmitState =
  | { status: "idle"; message: string }
  | { status: "loading"; message: string }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

function readableError(error: { code?: string; message?: string }) {
  if (error.code === "23505") {
    return "That email is already on the MineMarker early-access list.";
  }

  return error.message || "Something went wrong while joining the waitlist.";
}

export function WaitlistForm() {
  const [state, setState] = useState<SubmitState>({
    status: "idle",
    message: "Join the early-access list. No spam, no fake countdowns.",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!hasSupabaseConfig || !supabase) {
      setState({
        status: "error",
        message:
          "The waitlist database is not configured yet. Add Supabase environment variables in Vercel to enable signups.",
      });
      return;
    }

    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") || "").trim().toLowerCase();
    const creatorName = String(form.get("creator_name") || "").trim();
    const channelUrl = String(form.get("channel_url") || "").trim();
    const creatorType = String(form.get("creator_type") || "").trim();
    const notes = String(form.get("notes") || "").trim();

    if (!email || !email.includes("@")) {
      setState({
        status: "error",
        message: "Enter a valid email so I can send early-access updates.",
      });
      return;
    }

    setState({ status: "loading", message: "Adding you to the MineMarker waitlist..." });

    const { error } = await supabase.from("waitlist_signups").insert({
      email,
      creator_name: creatorName || null,
      channel_url: channelUrl || null,
      creator_type: creatorType || "minecraft_creator",
      notes: notes || null,
      source: "minemarkerwebsite",
    });

    if (error) {
      setState({ status: "error", message: readableError(error) });
      return;
    }

    event.currentTarget.reset();
    setState({
      status: "success",
      message: "You are on the early-access list. I'll send MineMarker beta updates there.",
    });
  }

  return (
    <form
      id="waitlist-form"
      onSubmit={handleSubmit}
      className="border border-emerald-200/20 bg-[#07100d] p-5 shadow-[0_34px_120px_rgba(32,255,141,0.08)]"
    >
      <div className="mb-6 flex items-center gap-3">
        <div className="grid size-11 place-items-center border border-emerald-200/25 bg-emerald-300/10 text-emerald-200">
          <ShieldCheck className="size-5" />
        </div>
        <div>
          <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">
            Early access waitlist
          </h3>
          <p className="text-sm text-stone-400">For Minecraft creators and beta testers.</p>
        </div>
      </div>

      <div className="grid gap-3">
        <label className="grid gap-2 text-sm font-medium text-stone-200">
          Email
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            placeholder="creator@example.com"
            className="border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder:text-stone-500 focus:border-emerald-200"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-stone-200">
          Creator name
          <input
            name="creator_name"
            type="text"
            autoComplete="name"
            placeholder="Your name or channel"
            className="border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder:text-stone-500 focus:border-emerald-200"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-stone-200">
          Channel link
          <input
            name="channel_url"
            type="url"
            placeholder="https://youtube.com/@..."
            className="border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder:text-stone-500 focus:border-emerald-200"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-stone-200">
          What do you make?
          <select
            name="creator_type"
            defaultValue="minecraft_creator"
            className="border border-white/10 bg-[#0a1511] px-4 py-3 text-white focus:border-emerald-200"
          >
            <option value="minecraft_creator">Minecraft videos</option>
            <option value="shorts_creator">Shorts / clips</option>
            <option value="streamer">Streaming</option>
            <option value="tester">Beta testing</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-stone-200">
          Notes
          <textarea
            name="notes"
            rows={3}
            placeholder="What would make MineMarker useful for your editing workflow?"
            className="resize-none border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder:text-stone-500 focus:border-emerald-200"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={state.status === "loading"}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 bg-emerald-300 px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#071008] transition hover:bg-emerald-200 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state.status === "loading" ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <ArrowRight className="size-4" />
        )}
        Request early access
      </button>

      <p
        role="status"
        className={`mt-4 text-sm leading-6 ${
          state.status === "success"
            ? "text-emerald-200"
            : state.status === "error"
              ? "text-amber-200"
              : "text-stone-400"
        }`}
      >
        {state.message}
      </p>
    </form>
  );
}

# MineMarker Website

Premium pre-release product website for MineMarker, a Minecraft creator editing assistant that turns long gameplay recordings into organized editing timelines.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- React Three Fiber / Three.js
- Framer Motion
- Supabase waitlist

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Supabase Waitlist

The waitlist form writes to a `waitlist_signups` table. It only shows a success state after Supabase confirms the insert. Without Supabase environment variables, the form shows a configuration error instead of pretending to work.

1. Create a Supabase project.
2. Run `supabase/migrations/20260505000000_create_waitlist_signups.sql`.
3. Add these environment variables locally and in Vercel:

```bash
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

## Build

```bash
npm run lint
npm run build
```

## Product Positioning

MineMarker is pre-release beta software. The site intentionally avoids claiming automatic video editing, full OBS automation, cloud sync, universal Minecraft compatibility, or finished launch status.

# MineMarker Website

Premium pre-release product website for MineMarker, a Minecraft creator editing assistant that turns long gameplay recordings into organized editing timelines.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- React Three Fiber / Three.js
- Framer Motion
- Supabase waitlist

## Visual System

The landing page uses a dedicated generated asset set in `public/visuals/`:

- `hero-cave-timeline.png` for the cinematic hero environment
- `timeline-viewer-product.png` for the desktop timeline viewer product shot
- `ingame-marker-scene.png` for the in-game marker moment
- `export-data-flow.png` for JSON/TXT/CSV export storytelling
- `clip-suggestions.png` for creator suggestion visuals
- `session-summary.png` for edit-plan/session summary visuals
- `problem-before-after.png` for raw footage versus organized timeline storytelling
- `early-access-launch.png` for beta/waitlist launch sections

Readable product UI, buttons, labels, and website copy are rendered in code so the page does not rely on cropped screenshots or distorted embedded text.

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

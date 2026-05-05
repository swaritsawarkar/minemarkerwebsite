# Deployment

## Vercel

This repository is prepared for Vercel as a Next.js project.

- Build command: `npm run build`
- Install command: `npm install`
- Framework: Next.js

## Required Environment Variables

The site can build without Supabase variables, but the waitlist form will show a configuration error until these are set in Vercel:

```bash
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

## Supabase

Run the SQL migration in `supabase/migrations/20260505000000_create_waitlist_signups.sql` before enabling signups.

The migration enables row-level security and grants anonymous users insert-only access. It does not create a public read policy.

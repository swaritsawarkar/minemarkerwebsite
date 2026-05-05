create table if not exists public.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  creator_name text,
  channel_url text,
  creator_type text not null default 'minecraft_creator',
  notes text,
  source text not null default 'minemarkerwebsite',
  created_at timestamptz not null default now()
);

create unique index if not exists waitlist_signups_email_lower_idx
  on public.waitlist_signups (lower(email));

alter table public.waitlist_signups enable row level security;

drop policy if exists "Allow anonymous waitlist inserts" on public.waitlist_signups;

create policy "Allow anonymous waitlist inserts"
  on public.waitlist_signups
  for insert
  to anon
  with check (
    email is not null
    and length(trim(email)) > 3
    and position('@' in email) > 1
  );

drop policy if exists "Allow authenticated waitlist inserts" on public.waitlist_signups;

create policy "Allow authenticated waitlist inserts"
  on public.waitlist_signups
  for insert
  to authenticated
  with check (
    email is not null
    and length(trim(email)) > 3
    and position('@' in email) > 1
  );

revoke all on public.waitlist_signups from anon;
grant insert on public.waitlist_signups to anon;

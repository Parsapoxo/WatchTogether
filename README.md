# Together

A site for you and a friend to watch a video at the same time — when one of you pauses/plays/seeks, the same thing happens for the other.

## How it works

- Videos aren't uploaded to the site; only their direct links (in `videos.js`) are used.
- To pass playback messages between the two browsers instantly, this uses **Supabase Realtime** — a free service that works from anywhere without a VPN.
- A small database table stores each room's chosen video, so the second person (joining with a room code) can find it.

## Step 1: Create a free Supabase project

1. Go to [supabase.com](https://supabase.com) and sign up with GitHub or email.
2. Click "New project".
3. Give it a name (e.g. `watch-together`), set a database password (you only need to save it somewhere, you won't need it again), and pick a nearby region.
4. Wait a few minutes for the project to finish setting up.

## Step 2: Create the rooms table

1. From the left sidebar, go to **SQL Editor**.
2. Click "New query" and run this:

```sql
create table rooms (
  code text primary key,
  video jsonb not null,
  created_at timestamptz default now()
);

alter table rooms enable row level security;

create policy "anyone can read rooms"
  on rooms for select
  using (true);

create policy "anyone can create rooms"
  on rooms for insert
  with check (true);

create policy "anyone can update rooms"
  on rooms for update
  using (true);
```

This creates a `rooms` table and lets anyone (since your site is public but the room code is only known by the two of you) create, read, and update a room — the update permission is what lets switching to the next/previous episode inside a room work.

For shared watch progress, run this too, in the same SQL Editor:

```sql
create table progress (
  video_id text primary key,
  fraction float8 not null default 0,
  updated_at timestamptz default now()
);

alter table progress enable row level security;

create policy "anyone can read progress"
  on progress for select
  using (true);

create policy "anyone can insert progress"
  on progress for insert
  with check (true);

create policy "anyone can update progress"
  on progress for update
  using (true);
```

## Step 3: Find the values you need for the code

1. From the left sidebar, go to **Project Settings** (the gear icon near the bottom) → **API**.
2. You'll need two values from this page:
   - **Project URL** → goes into the `SUPABASE_URL` variable
   - **anon public** key (under Project API keys) → goes into the `SUPABASE_ANON_KEY` variable
3. These are already filled in inside `supabase-config.js`.

> Note: the anon public key is meant for public/browser use and is safe to have in your site's code. The one you should never put anywhere is the `service_role` key, which this project doesn't need at all.

## Step 4: Adding videos

Open `videos.js` and add your video links, following the same shape as the existing entries.

## Step 5: Upload to GitHub and turn on GitHub Pages

1. Create a new repository and push all the files in this folder (`index.html`, `room.html`, `style.css`, `common.js`, `videos.js`, `supabase-config.js`).
2. Go to the repository's settings → **Pages** → under Branch, pick `main` and `/root`, then Save.
3. After a few minutes, your site will be live at something like `https://username.github.io/repo-name/`.

## Usage

1. One of you opens the site, enters a name, picks a video from the list on the right, and clicks "Start room".
2. Using the "Copy invite link" button, send the room link to the other person (e.g. over Telegram).
3. The second person opens the link, enters their name, and joins.
4. From then on, whoever plays/pauses/seeks, the other person's player follows.
5. Inside a room, "Previous"/"Next" switches the episode for both of you without leaving the room or sharing a new code.

## Versioning

This project follows **Semantic Versioning** (`MAJOR.MINOR.PATCH`). See `CHANGELOG.md` for what changed in each version, and the app version is shown next to the site name.

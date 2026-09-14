# Together

A site for you and a friend to watch a video at the same time — when one of you pauses/plays/seeks, the same thing happens for the other.

## How it works

- Videos aren't uploaded to the site; only their direct links (in `videos.js`) are used.
- Each episode is its own fixed, always-on space — like a voice channel in Discord. There's no "create a room" or "room code" step: you just pick an episode and go. If your friend picks the same episode, you're automatically in sync together there; different episodes stay completely independent.
- To pass playback messages between the two browsers instantly, this uses **Supabase Realtime** — a free service that works from anywhere without a VPN.
- A small database table stores shared watch progress, so both of you see the same percentage for each episode.

## Step 1: Create a free Supabase project

1. Go to [supabase.com](https://supabase.com) and sign up with GitHub or email.
2. Click "New project".
3. Give it a name (e.g. `watch-together`), set a database password (you only need to save it somewhere, you won't need it again), and pick a nearby region.
4. Wait a few minutes for the project to finish setting up.

## Step 2: Create the progress table

From the left sidebar, go to **SQL Editor**, click "New query", and run this:

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

This is the only table the site needs. (An earlier version of this project also used a `rooms` table for room codes — that concept doesn't exist anymore, so if you have a leftover `rooms` table from before, it's safe to ignore or delete.)

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

1. Open the site, enter your name, pick an episode from the list, and click "Start".
2. You're taken straight to that episode's watch page. If your friend opens the site and picks the same episode (or opens the "Copy episode link" you send them), you'll both land in the same space and stay in sync — play, pause, and seek follow each other.
3. Inside the watch page, "Previous"/"Next" moves *you* to the next episode, without affecting your friend if they're somewhere else — just like switching voice channels.

## Versioning

This project follows **Semantic Versioning** (`MAJOR.MINOR.PATCH`). See `CHANGELOG.md` for what changed in each version, and the app version is shown next to the site name.

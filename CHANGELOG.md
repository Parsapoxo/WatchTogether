# Changelog

This project follows **Semantic Versioning**: version numbers look like `MAJOR.MINOR.PATCH` (e.g. `1.1.0`), and go up according to this rule:

- **MAJOR** (first number) goes up for a change that breaks compatibility with the previous version (e.g. the database structure changes and old rooms stop working).
- **MINOR** (middle number) goes up when a new feature is added without breaking anything that already worked.
- **PATCH** (last number) goes up when only a bug is fixed, with no new feature.

The current version number lives in `common.js` (the `APP_VERSION` variable) and is shown in the corner of the site, next to the "Together" name.

## [3.1.0]

### Added
- The ChatGPT course, with its logo: two sections ("An Initial Introduction to ChatGPT" with 9 episodes and "Advanced Prompt Engineering Skills" with 2 episodes), taken from the course document. The logo was recoloured to the site's light text colour so it stays visible on the dark theme.

## [3.0.0]

### Changed
- The site is no longer just for Python. Content is now organised as **Course → Section → Episode** (e.g. Python → Beginner → 1 - Installing Python). The home page shows one box per course with its logo on the left and a progress ring on the right; clicking a course shows its sections, and clicking a section shows its episodes. "Back" buttons on each level take you one step up, and "Back to episodes" in the watch room returns you to the section you were in.
- **`videos.js` has a new format** (this is why this is a major version): it now holds a nested `COURSES` list instead of a flat list with a `section` field on every episode. Every existing episode keeps its `id`, so watch progress and chat history are untouched. The comment at the top of the file explains how to add an episode, a section or a course.
- Previous/Next in the watch room now walk through the episodes of the same course (across its sections) and never jump into a different course.
- Under the title, the watch room now shows "Course · Section" instead of "Episode X of Y".

### Added
- The Git course, with all 12 episodes organised into its four sections as listed in the course document, plus the Python and Git logos (in the new `assets` folder). A course without a logo shows its first letter instead.
- A friendly console warning if the same episode or section id is used twice in `videos.js`.

## [2.7.0]

### Changed
- The watch page now shares the home page's look: the same soft amber/teal glow in the background, a rounded video box with a deeper shadow, a glass-style chat sidebar (with a live dot, softer message bubbles, and a pill-shaped send button), pill-shaped header buttons, and a gentle fade-in on load. The episode number now sits in the same amber tile used on the home page, with the rest of the title next to it.

### Fixed
- The home page showed a vertical scrollbar with empty space at the bottom even when everything fit on screen. The extra bottom space (reserved for the "Start watching" bar) is now only added inside a section's episode list, where that bar actually appears.

## [2.6.0]

### Changed
- Watch page: the whole page now fits the screen with no vertical scrolling. "Copy episode link" and "Back to episodes" moved up into a compact header next to the title and who's watching. The video box now fills all the remaining height and width, and the chat sidebar is exactly the same height as the video box. Status messages ("Your friend paused", buffering notices) now appear as a small pill on top of the video and fade away on their own.
- "Back to episodes" now returns you to the section's episode list with the episode you were watching already selected.
- Home page fully redesigned: a big welcome with an animated pair of lamps, a "Continue watching" card that takes you to your next episode in one click, live stats (episodes finished, % of the course, episodes to go), and large section cards with animated progress rings. Opening a section shows its episodes as cards (number, title, progress bar), with search, and a "Start watching" bar once you pick one (double-clicking an episode starts it right away). Your name moved to a small field in the top corner; if it's empty when you press start, the field shakes and asks for it.
- Episodes whose titles don't start with a number (e.g. in the Git section) now show their position in the section on their card instead of a bullet.

## [2.5.0]

### Changed
- Redesigned the watch page into a Twitch/Kick-style layout: the video now sits on the left and is as large as the screen allows (it scales with the window, up to the full available height), while the chat moves to a full-height sidebar on the right. The title, who's watching, status, and episode-link buttons sit around the video. On narrower screens the chat drops below the video.

## [2.4.0]

### Added / Fixed
- Fixed the two of you drifting out of sync when one person's video buffers/stalls due to a slow connection. Previously the stalled side would silently fall behind and only catch up with a jarring jump once the other person did something (even just pausing). Now, the moment either side's playback stalls, it tells the other to pause and wait; once the stalled side recovers, both resume together automatically — avoiding the big catch-up jump and the confusing multi-second freeze.

## [2.3.0]

### Added
- A fully custom video player, replacing the browser's built-in controls entirely: hand-built play/pause, a draggable seek bar, volume with mute, and fullscreen — all styled to match the site. Previous/Next episode buttons and the emoji reactions now live directly in the player's control bar instead of being separate rows. Controls fade out automatically while playing and idle, and show again on movement or when paused.
- Chat messages — yours and your friend's — now also pop up briefly (3 seconds) in the top-right corner of the video itself, not just in the chat panel below.

## [2.2.1]

### Fixed
- Sending a message with line breaks (e.g. pasted code) collapsed it onto one line, because the chat box was a single-line input that couldn't hold newlines and submitted on Enter. It's now a growing text box where Enter sends and Shift+Enter adds a new line, and messages display with their original line breaks and spacing preserved.

## [2.2.0]

### Added
- A chat panel below the video, scoped to each episode: messages are saved (in a new `messages` table) and delivered instantly to whoever else is watching, so history is still there if you reload or come back later.
- Quick emoji reactions (👍 😂 ❤️ 😮) in the corner of the player — clicking one shows a small floating animation on both your screen and your friend's, instantly, with nothing to type.

## [2.1.1]

### Fixed
- Opening a section made both boxes grow to fit the full episode list (no scrolling, no fixed size), because the panel's height was based on its own content instead of being fixed. Both boxes now have a fixed height that never changes, and the episode list scrolls inside it as before.

### Added
- Episode/section rows now fade in with a small staggered animation when a section is opened or you go back, instead of appearing abruptly.

## [2.1.0]

### Added
- Episodes are now grouped into sections (Beginner: 107 episodes, Advanced: 45 episodes). The panel now shows the two sections first, each with its own progress bar (based on the section's full episode count), and clicking one opens that section's episode list.

### Changed
- The name/start card and the section/episode panel are now the same height and centered together, and both are larger, so the page doesn't feel as empty on wide screens.

## [2.0.0]

### Changed
- Removed room codes entirely. There's no more "Start a room" / "Join a room" with a shareable code — instead, every episode is its own fixed, always-on space (like a voice channel): pick an episode and you're taken straight to its watch page. If your friend picks the same episode, you're in sync together automatically; other episodes stay independent. This replaces the old flow, so old `room.html?room=CODE` links no longer work — that's why this is a major version bump.
- "Previous"/"Next" inside the watch page now only move you, not your friend (since there's no longer a shared "current video" per room to update).
- The `rooms` database table is no longer used by the site. The `progress` table is the only one still needed.
- Unified the site's fonts — headings no longer switch to a different typeface than the rest of the interface.

## [1.5.3]

### Fixed
- The "Continue"/"Up next" badge's outline was getting clipped, because it sat inside the same text element that truncates long titles (which needs `overflow: hidden`). The badge is now a separate element next to the title, with more row padding, so its border shows fully.

## [1.5.2]

### Fixed
- A fully-watched episode could still show the "Continue" badge instead of clearing it: when a video ended naturally, the browser's reported current time was sometimes a fraction of a percent short of the true duration, which rounded to "100%" on screen but didn't count as complete internally. Now, when a video actually reaches its end, it's explicitly marked as 100% watched, and the "Continue" badge logic compares against the same rounded percentage shown on screen.

## [1.5.1]

### Fixed
- If saving watch progress to Supabase failed for any reason (missing table, permissions, etc.), the failure was silently swallowed and never showed up anywhere, including the browser console — making it impossible to tell why a percentage wasn't updating. Now the actual error is logged to the console, so it can be diagnosed.

## [1.5.0]

### Changed
- The episode picker was redesigned again: instead of a compact number grid, there's now a full list panel (using the previously empty space on the sides of the page) showing every episode's title and a progress bar, so you don't have to guess what a number means.
- Added a search box above the list to filter episodes by number or title text.

## [1.4.0]

### Added
- "Previous" and "Next" buttons inside the watch room, to move to the previous/next episode without leaving the room and creating a new one. Clicking either one switches the episode for both people at once (no need to send a new room code).

### Fixed
- A bug that could incorrectly lower a finished episode's saved progress: when joining a room, if playback started or someone seeked backward before the real progress had finished loading from the server, the site would think you were starting from zero and overwrite the correct progress with a lower number. Now nothing is saved until the real progress has loaded.

## [1.3.1]

### Fixed
- The outline around a selected tile in the episode grid looked cut off on the left edge (clipped by the grid's own edge); fixed by giving the tiles some breathing room.
- The scrollbar next to the episode grid, which looked out of place, is now hidden; scrolling (by mouse or touch) still works.
- The grid's columns didn't line up with the "Jump to episode number" box and the card above it; fixed by using a fixed number of columns (6) and symmetric padding.

## [1.3.0]

### Changed
- The video-picking section was redesigned: instead of a long, scrolling list, there's now a small card at the top showing the episode you should continue watching (or the next one up), plus a compact grid of episode numbers and a "Jump to episode number" box that jumps straight to that episode when you type a number and press Enter.
- Fully watched episodes are marked with color only (no icon or dot).

## [1.2.0]

### Changed
- Watch progress is no longer stored only in the browser; it's now kept in a shared Supabase table, so both of you see the same percentage (whoever watched further, that's the percentage shown).
- This needs a new `progress` table — the SQL to create it is in the README.

## [1.1.0]

### Added
- The site's version number is now shown on the page.
- A percentage indicator next to each video in the list, which fills in as it's watched (progress is saved on whichever browser you watched it on).

## [1.0.0]

### Added
- Creating and joining a room with a code.
- Real-time play/pause/seek sync between two people, using Supabase Realtime.
- A fully English interface with entrance animations, a "friend is here" pulse, and a brief glow when playback syncs.

# Changelog

This project follows **Semantic Versioning**: version numbers look like `MAJOR.MINOR.PATCH` (e.g. `1.1.0`), and go up according to this rule:

- **MAJOR** (first number) goes up for a change that breaks compatibility with the previous version (e.g. the database structure changes and old rooms stop working).
- **MINOR** (middle number) goes up when a new feature is added without breaking anything that already worked.
- **PATCH** (last number) goes up when only a bug is fixed, with no new feature.

The current version number lives in `common.js` (the `APP_VERSION` variable) and is shown in the corner of the site, next to the "Together" name.

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

# Changelog

This project follows **Semantic Versioning**: version numbers look like `MAJOR.MINOR.PATCH` (e.g. `1.1.0`), and go up according to this rule:

- **MAJOR** (first number) goes up for a change that breaks compatibility with the previous version (e.g. the database structure changes and old rooms stop working).
- **MINOR** (middle number) goes up when a new feature is added without breaking anything that already worked.
- **PATCH** (last number) goes up when only a bug is fixed, with no new feature.

The current version number lives in `common.js` (the `APP_VERSION` variable) and is shown in the corner of the site, next to the "Together" name.

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

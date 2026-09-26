# Chronicles of the Ethereal Ruins — Site Instructions

## Scope & Purpose

- This repository hosts the public marketing website, privacy policy, and support pages for the game **Chronicles of the Ethereal Ruins** (《灵墟纪》).
- Published URL: <https://liuyang1520.github.io/chronicles-of-the-ethereal-ruins-site/>
- The game implementation repository is located at `../xiuxian-sim` (`~/src/xiuxian-sim`).

## Architecture & Conventions

- The site is static semantic HTML5 and vanilla CSS (`assets/styles.css`).
- Do not introduce heavy frontend frameworks, client-side build tools, analytics scripts, or cookie trackers.
- All deployments are handled automatically upon push to `main` via `.github/workflows/pages.yml`.

## Synchronization with Game

- When new game content, realms, languages, artisan features, or mechanics are added to `xiuxian-sim`, update this site accordingly:
  - Feature highlights & screenshots in `index.html`.
  - Common questions in `support/index.html`.
  - Privacy policy in `privacy/index.html` if data/notification behavior changes.
  - Music prompt catalog in `docs/bgm.md`.

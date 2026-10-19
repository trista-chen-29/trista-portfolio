# trista.chen — Personal Portfolio

A single-page portfolio for firmware, robotics, validation, and software roles. Built with Next.js, Tailwind CSS, and Framer Motion.

Live: https://www.yichichen.dev

## Tech Stack

- **Framework:** Next.js 16 (App Router), React Compiler on
- **Styling:** Tailwind CSS v4 + CSS variables (`src/app/globals.css`)
- **Fonts:** Instrument Serif · Figtree · Geist Mono (via `next/font`)
- **Deployment:** Vercel, through GitHub Actions

## What is on the page

One scrolling page, in this order: hero with a cursor-reactive scope trace, a Hall-sensor homing demo, featured work, a compact list of more projects, an experience timeline, skills, about, and contact.

- Light and dark theme. The choice is saved in `localStorage` when the browser allows it.
- `⌘K` / `Ctrl+K` opens a keyboard command palette (jump to a section, open a project, copy email, toggle theme).
- Every animation has a reduced-motion fallback.
- The old `/experience` and `/projects` URLs redirect to the matching section of the home page.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Editing content

All copy lives in `src/data/`. Components only render it, so most updates never touch a component.

| File | What it controls |
| --- | --- |
| `projects.js` | Featured case studies (`featured: true`) and the compact "More projects" list |
| `experience.js` | The timeline. Roles dated before 2025 collapse under "Earlier" |
| `skills.js` | Skill chips or bars, and the proof line shown on hover or focus |
| `contact.js` | Email, LinkedIn, GitHub, resume path, location |

Rules the components follow:

- Empty placeholders never render. A project with `metric: null` shows no metric line, and a role whose bullets start with `TODO` shows no bullets.
- Skills show as chips until at least one `depth` (0–1) is set, then switch to bars.
- Only write numbers you measured and can explain in an interview.

Before a release, list anything unfinished:

```bash
npm run content:check            # report
npm run content:check -- --strict   # exit 1 if any placeholder remains
```

## Project Structure

```
src/
├── app/
│   ├── layout.js            # fonts, metadata, theme bootstrap, nav, footer
│   ├── page.js              # composes the sections
│   ├── globals.css          # design tokens and all styles
│   ├── opengraph-image.js   # social preview image
│   └── icon.svg
├── components/
│   ├── Nav.jsx              # sticky anchor nav, theme toggle, ⌘K hint
│   ├── Hero.jsx             # intro, resume/contact buttons, at-a-glance line
│   ├── ScopeTrace.jsx       # canvas oscilloscope that follows the cursor
│   ├── LivePortrait.jsx     # portrait that tracks the pointer or arrow keys
│   ├── HallSensorDemo.jsx   # interactive model of dual Hall-sensor homing
│   ├── FeaturedProjects.jsx # case studies rendered from data
│   ├── MoreProjects.jsx     # filterable compact list
│   ├── ExperienceTimeline.jsx
│   ├── SkillsSpectrum.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── CommandPalette.jsx   # loaded on first use (PaletteHost)
│   ├── SiteCat.jsx          # the cat (CatHost loads it when idle)
│   └── ThemeProvider.jsx
└── data/                    # projects, experience, skills, contact
scripts/
└── check-content.mjs        # placeholder report
public/
├── projects/                # case-study images
├── orgs/                    # employer and club logos
└── Yi-Chi_Trista_Chen_Resume.pdf
```

## Deployment

GitHub Actions runs lint and `next build` on every pull request and push to `main`.

On `main`, the same workflow deploys production to Vercel. Pull requests get a preview URL commented on the PR.

Required repository secrets:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

# saiteja.pro

Personal portfolio site for Sai Teja Bhoomraogari. Built with React 17 and deployed to Netlify at [saiteja.pro](https://saiteja.pro).

## Running locally

```bash
npm install
npm start
```

The dev server starts at `http://localhost:3000`.

## Building

```bash
npm run build
```

Output goes to `build/`. The site is a single-page app, so the `public/_redirects` file configures Netlify to serve `index.html` for all routes.

## Structure

```
src/
  components/     React components, one directory per component
  data/           Content data files (experience, projects, etc.)
  pages/          Page-level components (Main, Blog)
  contexts/       React context (theme)
  theme/          Theme token definitions
  assets/         Fonts, images, PDFs
```

Content is separated from components. To update portfolio content (projects, experience bullets, etc.), edit the files in `src/data/`. No rebuild is needed in development; the dev server hot-reloads on save.

## Design decisions

**Typography:** DM Serif Display for headings, DM Sans for body copy, DM Mono for labels and metadata. The DM family was chosen for its restraint and legibility at both small and large sizes.

**Color:** Near-black base (`#0d0d0d`) with a single warm-gold accent (`#c8a96e`). The accent is used only on interactive states, section labels, and bullet markers to keep visual noise low.

**Motion:** Intersection Observer-based section reveals. No looping animations in the main page flow. The command palette (Cmd+K) is the only interaction with a spring-physics feel.

**Command palette:** Pressing Cmd+K (or Ctrl+K) opens a keyboard-navigable command palette for jumping to sections, opening the resume, or copying the contact email. This replaces a complex nav structure with something faster for keyboard users.

**Resume PDF route:** The resume is served as a static asset at `/static/media/Sai_Teja_Bhoomraogari_Resume.pdf` after the CRA build. The `target="_blank"` link in the hero opens it directly. On Netlify, this works without any special routing config because it is a physical file in the build output.

## Dependencies worth noting

- `react-router-dom` v5: used for the `/` and `/blog` routes. The blog page exists but is not linked from the main nav; it lives at `/blog` if needed.
- `react-router-hash-link`: smooth-scroll to hash anchors for section navigation.
- `react-helmet`: page-level meta tag management.
- `react-icons`: icon library used for UI icons only (no skill icon grid).

No CSS framework is used. All styles are vanilla CSS with custom properties defined in `src/index.css`.

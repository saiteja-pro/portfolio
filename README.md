# saiteja.pro

Personal portfolio site for Sai Teja Bhoomraogari. Built with React 17 and deployed to Cloudflare at [saiteja.pro](https://saiteja.pro).

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

Output goes to `build/`. The site is a single-page app, so the `public/_redirects` file configures Cloudflare to serve `index.html` for all routes.

## Structure

```
src/
  components/     React components, one directory per component
  data/           Content data files (experience, projects, etc.)
  pages/          Page-level components (Main, Blog)
  contexts/       React context (theme)
  theme/          Theme token definitions and image exports
  assets/         Fonts, images, PDFs
  utils/          Helper utilities (skill icon mapping, etc.)
```

Content is separated from components. To update portfolio content (projects, experience, skills, recommendations, etc.), edit the files in `src/data/`. The dev server hot-reloads on save.

## Features

**Shimeji mascot:** An interactive SVG cat mascot that sits at the bottom of the screen. It walks, sleeps, types on a laptop, and responds to click/drag interactions with tech-related quips. Uses `requestAnimationFrame` and CSS `transform: translate3d()` for GPU-accelerated rendering. Walking is disabled on mobile to preserve battery and frame rate.

**Command palette:** Pressing Cmd+K (or Ctrl+K) opens a keyboard-navigable command palette for jumping to sections, opening the resume, or copying the contact email.

**Recommendations:** An editorial blockquote layout for LinkedIn endorsements, with Intersection Observer scroll reveals and grayscale-to-color avatar transitions on hover.

**Headshot section:** Professional headshot displayed in the About section with a warm gold border accent.

## Design decisions

**Typography:** DM Serif Display for headings, DM Sans for body copy, DM Mono for labels and metadata. The DM family was chosen for its restraint and legibility at both small and large sizes.

**Color:** Near-black base (`#0d0d0d`) with a single warm-gold accent (`#c8a96e`). The accent is used only on interactive states, section labels, and bullet markers to keep visual noise low.

**Motion:** Intersection Observer-based section reveals. No looping animations in the main page flow. The Shimeji mascot uses pure `requestAnimationFrame` loops for physics and walking, with reduced animation complexity on mobile devices.

**Resume PDF route:** The resume is served as a static asset after the CRA build. The `target="_blank"` link in the hero opens it directly. On Cloudflare, this works without any special routing config because it is a physical file in the build output.

## SEO and Open Graph

Meta tags are managed in `public/index.html` and cover primary meta, Open Graph, Twitter Card, and JSON-LD structured data. The OG preview image (`public/og-image.png`) is a branded typographic card.

Keywords target cloud infrastructure, backend engineering, distributed systems, and related FAANG search terms.

## Dependencies worth noting

- `react-router-dom` v5: used for the `/` and `/blog` routes. The blog page exists but is not linked from the main nav; it lives at `/blog` if needed.
- `react-router-hash-link`: smooth-scroll to hash anchors for section navigation.
- `react-helmet`: page-level meta tag management.
- `react-icons`: icon library used for UI icons and the LinkedIn link in recommendations.

No CSS framework is used. All styles are vanilla CSS with custom properties defined in `src/index.css`.

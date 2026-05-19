# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start dev server (Next.js + Turbopack) at http://localhost:3000
- `npm run build` — production build (also uses Turbopack)
- `npm start` — run the built app
- `npm run lint` — ESLint (extends `next/core-web-vitals` + `next/typescript`)

No test framework is configured.

## Architecture

Single-page marketing site for "WF3 Solutions" (Portuguese / pt-BR copy). Next.js 16 App Router, React 19, TypeScript strict, Tailwind CSS v4, shadcn/ui (New York style), Radix primitives, framer-motion.

### Page composition

- [app/layout.tsx](app/layout.tsx) is the root layout. It mounts the fixed `Header` so it persists across the page and loads the Geist sans/mono fonts via `next/font`. Poppins is the default body font, loaded via `@import` at the top of [app/globals.css](app/globals.css).
- [app/page.tsx](app/page.tsx) is the only route. It stacks the page sections in order: `HeroSection` → `ServicesSection` → `ClientsSection` → `AboutSection` → `ContactSection` → `Footer`. To add or reorder content, edit this file — there are no other routes.
- Each section in [app/components/](app/components/) is self-contained and uses an `id` (e.g. `#hero`, `#contact`) so the menu can anchor-scroll to it.

### Two component directories (intentional split)

- [app/components/](app/components/) — page-specific section components (Hero, Services, Contact, Header/menus, etc.). These are `"use client"` because they use framer-motion or local state.
- [components/ui/](components/ui/) — shadcn/ui primitives (`button`, `card`, `sheet`). Managed by the shadcn CLI per [components.json](components.json). When adding new shadcn components, they will land here.

### Path aliases

`tsconfig.json` maps `@/*` to the project root, so imports like `@/components/ui/button` and `@/lib/utils` work from anywhere. [components.json](components.json) declares additional shadcn aliases (`@/hooks`, `@/lib`), but note the actual hooks directory in this repo is [app/hooks/](app/hooks/) — `@/hooks` is not currently wired to a real folder.

### Styling system

Tailwind v4 with the new `@theme inline` block in [app/globals.css](app/globals.css). Colors are CSS variables (`--primary`, `--secondary`, `--background`, etc.) defined twice: under `:root` (light) and `.dark` (dark). All Tailwind utilities (e.g. `bg-primary`, `text-muted-foreground`) resolve to these vars. Use the `cn()` helper from [lib/utils.ts](lib/utils.ts) (`clsx` + `tailwind-merge`) when composing conditional class strings. Dark mode is opt-in via a `.dark` class on an ancestor; no toggle is wired up yet.

### Scroll & motion

- [app/hooks/UseSmoothScrool.ts](app/hooks/UseSmoothScrool.ts) exposes `useSmoothScroll()` which animates `window.scrollTo` via framer-motion's `animate()`. The menu components call `scrollToId(id)` to jump between sections — prefer this over native `scrollIntoView` for consistency.
- The `Header` listens to `window.scroll` and swaps its background once it passes the hero height; section components use framer-motion `whileInView` with `viewport={{ once: true }}` for reveal animations.

### Contact form

[app/components/ContactSection.tsx](app/components/ContactSection.tsx) submits to `https://formsubmit.co/ajax/contato@wf3solutions.com` as JSON, with a 10-second `AbortController` timeout and inline success/error states. There is no backend in this repo — changing the destination email means editing the URL in this file.

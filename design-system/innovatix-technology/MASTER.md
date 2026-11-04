# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/innovatix-technology/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file. Otherwise follow the rules below.

---

**Project:** Innovatix Technology
**Updated:** 2026-10-03 (replaces the earlier dark/immersive direction at the client's request)
**Direction:** Classy editorial minimalism: Swiss grid + one serif italic accent. Less content, more whitespace.
**Source of truth for tokens:** `src/index.css` `@theme` block.

---

## Brand

- Logo: `public/innovatix-logo.png` (official, navy wordmark with blue check-mark V). Never recolor except pure white on navy (`brightness(0) invert(1)`).
- Signature motif: the logo's check-mark (thick navy stroke + thin navy→sky slash). Reuse sparingly as a section accent.

## Color

| Role | Hex | Token |
|------|-----|-------|
| Background | `#F6F5F1` | `paper` |
| Surface alt | `#EEECE5` | `paper-2` |
| Text / primary | `#0B1A3A` | `ink` |
| Secondary text | `#545E73` | `ink-soft` (5.8:1 on paper) |
| Brand | `#13318C` | `brand` |
| Accent | `#2F8BE6` | `sky` (decorative only: lines, numerals, gradients; not body text) |
| Hairlines | `ink` at 6–10% opacity | |

Max one gradient: `brand → sky`, only on the serif accent word or the signature mark.

## Typography

| Use | Font | Notes |
|-----|------|-------|
| Display / headings | Inter Tight 500 | `tracking-[-0.045em]`, `leading-[0.98]` |
| Body / UI | Inter 400–500 | 15–17px body, `leading-relaxed` |
| Accent | Playfair Display *italic* | one word per heading max; numerals `01–04` |
| Eyebrows | Inter 500 uppercase | `text-xs tracking-[0.22em]`, preceded by an 8px sky hairline |

## Layout

- Container `max-w-[1400px]`, padding `px-6 md:px-10`.
- Visible 4-column hairline guides (2 on mobile) behind content.
- Generous vertical rhythm; one idea per section. Avoid cards-in-cards, badges, emoji, stats that are not real.

## Components

- **Primary CTA:** ink pill + paper circle with `ArrowUpRight`; brand fill rises on hover; magnetic (`MagneticButton`).
- **Secondary CTA:** text link with 1px underline that wipes on hover.
- **Nav links:** `ink-soft` → `ink`, underline draws from left.
- **Lists:** hairline top border, serif italic sky index (`01`), hover draws an ink line across.

## Motion

- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (`ease-expo`), 0.6–1.1s; page curtains `cubic-bezier(0.76, 0, 0.24, 1)`.
- Patterns: masked line reveals (y 105% → 0), blur-crossfade word swap, SVG path drawing, gentle mouse parallax (≤24px), scroll fade/lift.
- Intro curtain plays once per session (`src/lib/intro.ts`), skipped for reduced motion.
- `MotionConfig reducedMotion="user"` wraps the app; loops are disabled under reduced motion.

## Pre-delivery checklist

- [ ] Text contrast ≥ 4.5:1 (no `sky` for body text)
- [ ] Visible focus (`sky` 2px outline)
- [ ] `cursor-pointer` + hover state on every interactive element
- [ ] Reduced motion respected
- [ ] No horizontal scroll at 375 / 768 / 1024 / 1440

# SyntaxHeist implementation plan

## Product scope

SyntaxHeist is a responsive, publicly accessible two-page event website for IEEE FISAT Student Branch's hypothetical 24-hour open technology and innovation hackathon. The two routes are `/` for the event story and `/register.html` for registration. The site uses the provided sample event details: 20 March 2027, 10:00 AM to 21 March 2027, 10:00 AM at Federal Institute of Science and Technology (FISAT), Angamaly, Kerala.

The implementation intentionally uses plain HTML, CSS, and JavaScript with no framework, dependencies, database, authentication, or build step. `serve.sh` serves the committed `public/` directory on the configured port. Form submissions are validated client-side and confirm locally; no participant data is sent to a third-party service.

## Project structure

- `public/index.html`: landing page with hero, event context, tracks, prizes, timeline, venue, FAQs, and footer links.
- `public/register.html`: dedicated registration page and form.
- `public/styles.css`: shared responsive design system, layout, components, state styles, and mobile breakpoints.
- `public/script.js`: shared navigation behavior and registration validation/confirmation interaction.
- `public/manus-routes.json`: route manifest for the two page routes.
- `serve.sh`: dependency-free local/preview server.
- `plan.md`, `TODO.md`: implementation intent and acceptance outcomes.

## Design direction

Three possible directions were considered:

1. **Midnight terminal / editorial control room** — 0.07
2. **Neon arcade / playful cyberpunk** — 0.04
3. **Minimal greenroom / institutional modernism** — 0.08

### Chosen movement: Midnight terminal / editorial control room

A high-contrast event identity that treats the hackathon like a live control room: crisp information hierarchy, oversized editorial type, code-like labels, and a calm but urgent green signal against near-black surfaces.

### Core principles

- Make the event feel like a real call to action, not a generic campus notice.
- Put dates, duration, and the registration action in the first screen.
- Use asymmetric, left-anchored compositions with deliberate empty space instead of a uniform card grid.
- Keep every interaction legible: obvious focus states, clear validation, and a useful success state.

### Color philosophy

Near-black is the workbench. Signal green is reserved for decisions, links, and the moments that say “go”; softer mint and paper white create enough contrast for long reading. A single acid-lime accent makes the event ownable without leaning into a noisy cyberpunk palette.

### Layout paradigm

The landing page moves as a vertical editorial sequence: an asymmetric hero, a compressed event facts rail, wide content bands, and a timeline that runs like a horizontal log. Cards are used only when they help compare tracks or prizes; major sections use open edges and anchored labels.

### Signature elements

- A bracketed `SH/27` wordmark and small monospace command labels.
- Hairline borders with corner brackets and tiny green signal dots.
- A recurring “24 / 00 / 00” time readout that makes the 24-hour promise tangible.

### Interaction philosophy and animation

Interactions should feel like a terminal responding, not a game interface. Buttons lift by a few pixels, links reveal a short underline, and the mobile menu opens without page movement. Motion is limited to a slow pulse on signal dots and a brief form confirmation entrance; reduced-motion preferences disable those effects.

### Typography system

Use a system sans stack for large editorial headings and body copy, paired with `ui-monospace` for labels, timestamps, and metadata. H1 is compact and oversized with tight leading; section headings are sentence-case and anchored by uppercase monospace eyebrows; body copy stays at a comfortable 1.6 line-height.

### Brand essence and voice

**Positioning:** The 24-hour build room for students who would rather ship an idea than pitch a safe one.

Personality: direct, curious, conspiratorial.

Brand voice examples: “Bring the rough idea. Leave with something real.” and “No prescribed stack. Just a clock and a room full of people making things.”

### Wordmark and signature color

The wordmark is a compact `SH/27` bracket mark paired with the SyntaxHeist name. The ownable signature color is **Signal Lime** `#c8ff4a`, used sparingly as a visual permission slip to act.

## Implementation decisions

- Use semantic HTML for navigation, sections, forms, details/summary FAQs, and accessible labels.
- Keep the registration form on its own page so it is easy to share and review.
- Use native required, email, select, and checkbox validation plus a small JavaScript submit handler for the confirmation message.
- Use an external Google Maps search URL for the FISAT venue link and explicit external social links in the footer.
- Keep all browser-facing links relative; the preview and published site will handle origin routing.

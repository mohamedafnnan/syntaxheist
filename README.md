# SyntaxHeist

A responsive two-page event website for **SyntaxHeist — 24-Hour Hackathon**, organized by IEEE FISAT Student Branch.

## Stack

- Plain HTML5 for semantic page structure
- CSS3 for the responsive visual system
- Vanilla JavaScript for mobile navigation and registration validation/confirmation
- Python's built-in `http.server` for dependency-free local serving

## Notable features

The site uses a distinctive “midnight terminal / editorial control room” identity: near-black surfaces, signal-lime actions, monospace metadata, bracketed corners, and a recurring 24-hour readout. The landing page covers the event brief, tracks, prizes, timeline, venue/directions, FAQs, and contact/social links. Registration lives on its own page with required fields, email/contact validation, rules confirmation, and an in-page success state.

## Run locally

```bash
./serve.sh
```

Then open `http://localhost:3000`.

This demo keeps submissions local to the browser; no registration data is sent to a backend.

# AGENTS.md: rules for this project

1. Read /docs/01-identity.md, /docs/02-creative-direction.md and /docs/03-build-spec.md before any work. They are the source of truth.
2. Never invent facts, metrics, dates, photos, URLs or achievements. Items under "NEEDS CONFIRMATION" in 01-identity.md must not be rendered. If data is missing, hide the element.
3. Stack: Next.js, TypeScript, SCSS. No Tailwind. Check dependency compatibility before installing; no unnecessary packages.
4. GSAP owns all timelines. Use @gsap/react, kill timelines and ScrollTriggers on unmount, drive Lenis from the GSAP ticker. No AnimeJS.
5. No logo, no monogram, no name-as-logo anywhere (nav, loader, footer, favicon). Navigation is plain text.
6. Positioning is Open to Work (nav chip, hero, final chapter). No work orders, proposals, pilots or deployment-phase language. No government rates or tax figures.
7. All social/contact links and the resume path come only from src/content/links.ts. Empty value means do not render.
8. Use only real photos from /assets/photos for the person. Mood images in /assets/references are references, never site assets.
9. Highway Road Accident Prevention is "In development": no outcomes or claims.
10. No custom cursor. Respect prefers-reduced-motion. Provide a no-WebGL fallback.
11. Performance targets: mobile Lighthouse 95+, LCP under 2.0s. The hero text is the LCP element; the 3D scene loads after first paint.
12. After every phase: run `next build`, fix errors, and report real measured results.
13. Project images are not supplied yet. Build every project case study with clearly marked placeholders: neutral frames labelled "Screenshot coming soon", plus architecture/workflow diagrams drawn as SVG from the facts in 01-identity.md. NEVER generate fake screenshots, segmentation masks, detection boxes, confidence values, or results. Each project's images are listed in src/content/projects.ts as paths; a missing file must show the placeholder, not break the page.
14. Always operate in planning mode first: present a clear step-by-step plan and wait for user confirmation before modifying or creating code files.


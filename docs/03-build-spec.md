# Build Spec: Mani Saideep Chintha Portfolio
Act as a Creative Developer, Senior Frontend Engineer, UI/UX Designer, Motion Designer and 3D Web Developer. Build a premium, futuristic, immersive personal portfolio positioning Mani as an AI/ML Engineer, Computer Vision Developer and AI Product Builder who is open to work.

## 1. Sources of truth
- /AGENTS.md (rules, read first)
- /docs/01-identity.md (facts; section 9 items must not be rendered)
- /docs/02-creative-direction.md (approved design; do not redesign)
- /assets/photos (his real photos), /assets/references (six mood images, reference only), /assets/projects (project evidence)
Do not ask for information already in these files. If something is missing, hide the element or leave a clearly marked placeholder in content files; never invent facts.

## 2. Positioning
Primary roles: AI/ML Engineer, Computer Vision Developer, Applied AI Engineer, AI Product Builder. He takes ideas from problem to model, backend, mobile app and testing. Do not claim a Product Manager role. Open to Work availability appears in the nav (small chip), the hero and the final chapter. Calls to action: Explore My Work, Let's Connect, Download Resume.

## 3. Stack (strict)
Next.js (App Router), React, TypeScript, SCSS with a design-token system (variables, mixins, functions, CSS Modules or an ordered SCSS architecture). No Tailwind. Three.js, React Three Fiber, Drei, GLSL. GSAP + ScrollTrigger + @gsap/react, Lenis. Framer Motion only for mount/unmount or route transitions where GSAP is awkward. No AnimeJS. Check dependency compatibility with the installed Next/React versions before installing anything; install nothing unnecessary.

## 4. Structure (chapters)
00 The Beginning, 01 The Person, 02 The Journey, 03 The Mind, 04 The Builds, 05 The Impact, 06 Beyond the Horizon, 07 Let's Connect. Content and flow per 02-creative-direction.md section 10, content from 01-identity.md.
- 00: loader hands off to hero; infinity particle scene; headline "I turn curiosity into working systems."; supporting line "Exploring Artificial Intelligence, Computer Vision, and intelligent products. Building technology that solves real-world problems." Do not force a long intro.
- 01: real portrait; personal, specific writing from the identity doc, not a resume summary.
- 02: timeline with only confirmed dates.
- 03: interactive skills map (nodes/orbits), no logo walls.
- 04: cinematic case studies. Granite and Highway get the strongest presentation. Highway is marked In development with no outcomes. Every project: problem, solution, my contribution, stack, implementation, architecture/workflow, real visuals, verified outcome.
- 05: RTGS Hackathon first prize as the single featured achievement. No work orders, proposals, pilots or numbers.
- 06: aspirations and exploration areas.
- 07: headline "The next interesting idea could start with a conversation."; Download Resume, Email, LinkedIn, GitHub; Open to Work statement.
Include an "At a glance" strip near the top for recruiters.

## 5. Navigation
Plain-text numbered chapter links, current-chapter indicator, progress indicator, Open to Work chip, mobile overlay menu (Escape closes, focus trapped), social links from links.ts. No logo, no monogram, no name mark. Optional command terminal (about, journey, projects, experience, skills, connect) as a secondary feature; standard navigation always available. No custom cursor.

## 6. Photos
Use only /assets/photos. Select the best hero photo, state which photo is used where, and flag unsuitable ones. Preserve his real face; no face edits or generated faces. Treatments per 02-creative-direction.md section 6.

## 7. Animation architecture
- GSAP is the single owner of timelines. Create src/lib/animation: central manager, named timeline registry, one master timeline per chapter, shared easing/duration tokens from the spec.
- useGSAP/gsap.context for scoped cleanup; every timeline and ScrollTrigger killed on unmount; no orphaned listeners.
- Lenis driven by the GSAP ticker (lenis.on('scroll', ScrollTrigger.update); gsap.ticker.add). Disabled for reduced motion.
- All interactions and micro-interactions use the shared tokens; same easing language everywhere.
- Heavy 3D loaded with dynamic import (ssr:false) after first paint, not on the critical path.

## 8. 3D
One persistent canvas, one reusable scene. Infinity particle system, photo-to-particle reveal, gravitational and tunnel environments as scene states, per 02-creative-direction.md section 8. Adaptive particle counts, instanced rendering, pause offscreen, dispose resources, static SVG/CSS fallback when WebGL is unavailable or on weak devices.

## 9. Loading page
Lightweight CSS/SVG infinity, no name or logo. Max about 1s, never blocks LCP, skipped on repeat visits. Content is server-rendered underneath.

## 10. Performance, SEO, accessibility
- Mobile Lighthouse 95+; LCP under 2.0s; FCP under 1.0s; CLS under 0.05; INP under 200ms.
- next/font for Space Grotesk, Manrope, IBM Plex Mono. next/image with AVIF/WebP, explicit sizes, priority only on the hero image. Compress video, use posters, lazy-load media. Code-split per chapter. Add @next/bundle-analyzer and web-vitals.
- SEO/AEO: SSR content, semantic HTML, one h1, metadata, canonical, Open Graph, sitemap.xml, robots.txt allowing major search and AI crawlers.
- JSON-LD Person (with availability/jobTitle and sameAs from links.ts), WebSite, and CreativeWork/SoftwareSourceCode for projects.
- /llms.txt and /llms-full.txt: plain-markdown facts derived from docs/01-identity.md only, including Open to Work and links.
- All text is real DOM text. WCAG AA, keyboard navigation, skip link, reduced-motion support, alt text on real images.

## 11. Code architecture
Reusable components, TypeScript types, modular SCSS, central tokens, reusable animation utilities, data-driven content in src/content (identity, projects, links). src/content/links.ts holds linkedin, github, instagram, youtube, email, resume; empty values hide the link. No giant page component, no duplicated styles, no inline-style sprawl, no console errors.

## 12. Workflow (one phase per conversation; wait for approval after each plan)
1. Research and plan: read all docs/assets, produce photo-to-section map, gaps, conflicts, proposed structure. No code.
2. Scaffold: Next.js + SCSS, fonts, tokens, animation manager, Lenis, preloader, empty chapter shells. `next build`.
3. Navigation, content layer, links.ts, Chapters 00 and 01.
4a. Chapters 02, 03 and the Experience content. 4b. Chapters 04, 05, 06, 07 and At a glance.
5a. Infinity hero scene and fallbacks. 5b. Photo-to-particle, scroll transitions, micro-interactions.
6. Optimization, SEO, JSON-LD, llms.txt, Lighthouse.
7. Testing: build, links, console, mobile/tablet/desktop overflow, reduced motion, WebGL off. Report real measured numbers.
Do not stop at a prototype; finish every chapter, phase by phase.

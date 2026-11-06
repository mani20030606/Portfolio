# Creative Direction: THE INFINITE BUILDER
Approved design spec. Follow exactly. Version 1.1 · 6 Nov 2026

## 0. Locked decisions
- Concept: THE INFINITE BUILDER. Tagline: "A journey through curiosity, intelligence, and creation." Hero line: "I turn curiosity into working systems."
- Motif: a mathematically accurate infinity symbol (learn, explore, experiment, build, fail, improve, build again). It is the recurring visual identity, not a logo.
- No logo, no monogram, no name-as-logo anywhere (nav, loader, footer, favicon). Navigation is plain text with numbered chapters.
- Stack: Next.js, React, TypeScript, SCSS (no Tailwind), Three.js/R3F/Drei, GLSL, GSAP + ScrollTrigger, Lenis.
- Real photographs only for the person; real screenshots and overlays for projects. Cosmic imagery is atmosphere, never project evidence.
- Job-seeking is explicit: restrained "Open to Work" in the nav (small status chip), one line in the hero, and the final chapter. Confident, never pleading.
- No custom cursor. Subtle hover states only. Optional command-terminal is secondary; standard navigation is always available.
- No excessive neon, no random 3D objects, no invented content or metrics.

## 1. Concept and mapping
Engineering is a loop, not a line. Curiosity (expanding particles), intelligence (structured geometry and nodes), experimentation (morphing formations), engineering (measurement lines, coordinates), persistence (the infinity loop), creation (particles resolving into real project imagery). Personality: cinematic, technical, controlled, human. Credibility comes from real project evidence; atmosphere comes from the 3D.

## 2. Reference sites: take / discard
- Sarthak Sharma: take chapter storytelling, person-before-work order, contribution-focused project text. Discard its metrics, educator/speaker framing, exact layout.
- Vectors Group: take big confident type, numbered sections, negative space. Discard corporate agency tone and client-logo walls.
- ToyFight: take memorable transitions, compact nav, the optional terminal idea. Discard playful mascot branding and anything that slows access to content.
- La Haute Société: take image-led project showcases and consistent project composition. Discard agency service categories and campaign aesthetics.
Do not claim which libraries these sites use.

## 3. Mood images (six files in /assets/references)
These are references, not portfolio assets and never photos of Mani. Recreate principles in Three.js/GLSL; do not use them as backgrounds.
1. Black-hole vortex: gravitational particle field with central negative space, orbital layers, silver-white highlights. Chapters 00, 05. Do not make a literal black hole the logo.
2. Purple nebula: soft layered haze, slow starfield. Chapter 06. Use #BBA7FF at low intensity, no stronger purple.
3. Architectural tunnel: repeated luminous frames, vanishing point, brushed metal. Chapters 02, 04; frames become measurement lines and then project screenshots. Ignore its gold reflections; use lavender, icy blue, silver-white.
4. Human inside a particle wave: small human, huge system. Chapters 01 and 06 as a framing idea only. Never substitute its silhouette for Mani's portrait.
5. Luminous infinity trails: the identity reference. Two loops, bright core, parallel trails. Chapters 00, 04, 05, 07.
6. Futuristic helmet poster: editorial layout only (large type, small mono metadata, subject isolated in fog). Discard the helmet, the word FUTURISTIC, barcode and the grey-white background. Chapters 03, 04, 07 typography.

## 4. Color tokens (contrast verified against #05060A / #151925)
| Token | Hex | Contrast on bg / elevated |
|---|---|---|
| bg-primary | #05060A | - |
| bg-secondary | #090A10 | - |
| bg-elevated | #151925 | - |
| text-primary | #F3F2F7 | 18.18 / 15.74 |
| text-secondary | #A3A6B1 | 8.34 / 7.22 |
| accent-lavender | #BBA7FF | 9.73 / 8.42 |
| accent-icy | #78D8F5 | 12.48 / 10.80 |
| accent-red (rare) | #FF755F | 7.68 / 6.65 |
Extended: surface-hover #1C2130, surface-active #252B3C, border-subtle #252A37, border-visible #383F51. lavender-muted #75679F (4.05) and icy-muted #477F91 (4.54) are DECORATIVE ONLY, never text.
Rules: 75-85% dark neutral; lavender is the identity accent; icy blue is for technical data; red only for warnings or one rare emphasis; gradients stay within #BBA7FF to #78D8F5; primary button text is #05060A on lavender (9.73).

## 5. Typography
Space Grotesk (display), Manrope (body), IBM Plex Mono (metadata). Load via next/font, subset, preload only the weights used above the fold.
| Role | Desktop | Mobile | Weight |
|---|---|---|---|
| Hero | 88-112px | 44-56px | 600 |
| Chapter title | 64-80px | 40-48px | 600 |
| Section | 44-56px | 32-38px | 600 |
| Project title | 36-48px | 28-34px | 600 |
| Subhead | 24-30px | 20-24px | 500 |
| Body | 16-20px | 15-18px | 400 |
| Metadata (mono, uppercase) | 11-12px | 10-11px | 500 |
Use clamp(). Line length 55-75 characters. Body never below 16px on desktop, 15px on mobile. Mono for labels only.

## 6. Photography (Mani's real photos)
- Hero: real portrait, right half on desktop, headline left; subtle lavender/icy rim light at the background edge only; natural skin tones; fine grain; very light vignette. No face reshaping or AI replacement.
- About: natural, medium shot. Experience: documentary work photos if they exist. Achievement: real RTGS photo/certificate only if supplied. Contact: close, direct portrait with negative space.
- Set object-position separately for desktop and mobile after inspecting each file. Never invent a photo.

## 7. Project visual treatments
- Granite: input photo, YOLO mask (icy blue), refined mask (translucent lavender), ArUco corners, measurement lines (white with blue endpoints), real mobile screenshots. Toggle original / mask / measurements. If a real output is missing, show a clearly labelled diagram, not a fake result.
- Highway: real road/dataset images with detection boxes from real runs; before/after slider; quiet "In development" status; pipeline Dataset > Experiments > Detections. No accuracy, safety or deployment claims.
- GraphRAG: designed knowledge-graph visual (lavender nodes, icy edges, highlighted retrieval path) with node detail panel, plus real app screenshot. Label the graph as an illustration if it is not live data.
- CareerPilot: real UI screenshots and a workflow diagram (upload > analysis > skill gaps > roadmap > mock interview > tracking). Show only features confirmed as built.

## 8. 3D and shaders
- One persistent WebGL canvas, one primary scene reused across chapters (change geometry, camera, uniforms).
- Infinity: parametric lemniscate; layers core, trails, ambient; left loop lavender to right loop icy blue, blended at the crossing; slow rotation with depth, subtle mouse parallax; bright core.
- Photo-to-particle reveal: sample the real portrait (luminance/alpha), particles settle on the silhouette then flow to the infinity curve; reversible on scroll back; real photo remains underneath as fallback. Used as a transition, not a replacement.
- Particle budgets (REVISED, adaptive via drei PerformanceMonitor): high-end desktop 25-40k, standard desktop 12-25k, modern mobile 4-8k, low-end mobile static or under 3k. Instanced/buffer-attribute rendering only; cap DPR at 1.5-2; additive blending sparingly; pause offscreen and on hidden tab.
- Shaders: particle vertex/fragment (soft sprite), curl-noise displacement (infinity geometry stays stable), threshold-noise dissolve for the photo transition, light depth fog for the tunnel, gradient uniforms for chapter atmosphere. No heavy bloom.
- Fallback without WebGL: static SVG infinity plus CSS gradients; chapters still transition with CSS.

## 9. Motion system
Tokens: instant 120ms, fast 220ms, standard 400ms, reveal 650ms, cinematic 1000ms, hero formation 1600ms (runs after content is visible, never blocking it).
Easings: standard cubic-bezier(0.22,1,0.36,1); scene cubic-bezier(0.65,0,0.35,1); enter cubic-bezier(0.16,1,0.3,1); exit cubic-bezier(0.7,0,0.84,0).
Stagger: metadata 40ms, heading lines 100ms, paragraphs 80ms, project items 120ms, nav 50ms. At most three groups animate together.
Loader: CSS/SVG infinity, no name, no logo, 1s maximum or until fonts and hero text are ready, skipped on repeat visits. It must never delay LCP; the SSR hero text is the LCP element.
Scroll: Lenis synced to the GSAP ticker; native scroll semantics; no snap; pinning only for major sequences; anchors and back/forward work.
Closing: complexity reverses, infinity stabilizes, contact actions fully visible without animation.
Reduced motion: no particle travel, parallax, dissolve or pinning; static compositions; all content visible.

## 10. Chapter flow
Every chapter defines: sees / understands / interaction / animation / assets / transition.
- 00 The Beginning. Sees: dark gravitational field resolving into the infinity, headline, tagline, "Open to Work" line, actions Explore My Work, Let's Connect, Download Resume. Assets: real hero portrait (or portrait revealed in 01 if the hero stays type-led on mobile). Transition: infinity expands into particles that reveal the portrait.
- 01 The Person. Sees: real portrait in a particle wave (ref 4), short factual intro, location, technical identity. Transition: portrait fades to a timeline line.
- 02 The Journey. Sees: Diploma, B.Tech, Huebits internship, verified milestones on a drawn timeline (tunnel frames, ref 3). Only confirmed dates. Transition: timeline points become graph nodes.
- 03 The Mind. Sees: interactive map of computer vision, detection, segmentation, ML, edge AI, backend, mobile, RAG; select a node to see tech and related projects (2D on mobile). Transition: nodes converge into the project framework.
- 04 The Builds. Sees: four case studies (Granite and Highway get the strongest treatment; Highway marked In development). Interaction: overlay toggles, before/after, workflow stages. Vertical scroll must work without any carousel. Transition: imagery dissolves into particles for 05.
- 05 The Impact. Sees: RTGS Hackathon first prize as one strong feature, plus evidence if supplied, plus the CareerPilot hackathon participation as a secondary line. No numbers, no work-order language. Transition: field expands to open space.
- 06 Beyond the Horizon. Sees: nebula atmosphere, exploration areas (computer vision, edge AI, mobile inference, RAG, applied AI). Transition: quiet minimal space.
- 07 Let's Connect. Headline: "The next interesting idea could start with a conversation." Actions: Download Resume, Email Me, LinkedIn, GitHub (from links.ts; hide empty ones). Open to Work statement. Real contact portrait.
Add an "At a glance" strip near the top for recruiters: target roles, key skills, current role, RTGS first prize, location, resume link.

## 11. Hero
Left: chapter label "00 / The Beginning", Open to Work (small), hero line, tagline, "AI / ML · Computer Vision · Engineering", Explore button. Right: infinity scene with real portrait. Bottom: chapter progress, scroll cue. Mobile order: chapter number, availability, headline, tagline, portrait, infinity, button.

## 12. Case-study layout (all projects)
Status badge, first visual, problem, approach, my contribution, architecture, technology, real evidence, challenges and decisions, verified outcome, links when they exist. Previous/next project navigation. Ordering of first visual: Granite segmentation result, Highway detection output, GraphRAG graph, CareerPilot dashboard.

## 13. Mobile
Designed separately: compact numbered menu with the Open to Work chip, stacked hero, vertical timeline, 2D skills graph, full-width stacked project cards, tap instead of hover, reduced particles, single canvas, no horizontal gestures required for essential content.

## 14. UI rules
Grid: desktop 12 col, max 1440px, gap 24, margin 48-80; tablet 8 col; mobile 4 col, margin 20. Spacing tokens 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160. Section spacing 120-180 desktop, 72-104 mobile. Borders 1px #252A37 (strong #383F51). Radii: buttons 10-12, cards 16, media 20, pills 999. Buttons 48-54px high. Hover 150-220ms, small border/background change, 1-2px lift at most, no scaling, no magnetic effects. Touch targets 44px minimum. Visible focus rings (lavender).

## 15. Performance and accessibility targets
LCP under 2.0s, FCP under 1.0s, CLS under 0.05, INP under 200ms (mobile Lighthouse 95+). Initial route JS (excluding the lazy 3D chunk) under 200KB compressed; Three/R3F loaded dynamically after first paint, with ssr:false. next/image with AVIF/WebP and explicit sizes; priority only on the hero image. next/font. Server-rendered content so text is real DOM. WCAG AA contrast, semantic landmarks, skip link, keyboard navigation, Escape closes overlays, focus trap in the mobile menu, alt text on every real image, prefers-reduced-motion honored, status never conveyed by color alone. Test Chrome, Edge, Firefox, Safari, Android Chrome, iOS Safari, WebGL off, slow network.

## 16. Alternatives considered
Neural Architect (strong AI identity but generic, weak on the journey) and Digital Frontier (cinematic but weak engineering link, risk of a space-themed look). The Infinite Builder wins because one metaphor joins the person, the work and the future.

## 17. Asset checklist (critical items marked)
Hero portrait (critical), about/work/achievement/contact photos, granite input + masks + mobile screenshots (critical), highway real detections, GraphRAG screenshots, CareerPilot UI screenshots, architecture diagrams, resume PDF (critical), email (critical). Put them in /assets by section; if an asset is missing, hide the element.

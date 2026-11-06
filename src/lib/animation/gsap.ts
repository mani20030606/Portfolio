'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins once
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Locked easing and duration constants matching SCSS tokens
export const ANIMATION_TOKENS = {
  durations: {
    instant: 0.12,
    fast: 0.22,
    standard: 0.4,
    reveal: 0.65,
    cinematic: 1.0,
    hero: 1.6,
  },
  easings: {
    standard: 'power2.out',
    scene: 'power3.inOut',
    enter: 'power2.out',
    exit: 'power3.in',
  },
  staggers: {
    metadata: 0.04,
    headingLines: 0.1,
    paragraphs: 0.08,
    projectItems: 0.12,
    nav: 0.05,
  },
};

export { gsap, ScrollTrigger };

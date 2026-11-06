'use client';

import { RefObject } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger, ANIMATION_TOKENS } from './gsap';

export interface ChapterRevealOptions {
  headings?: string;
  metadata?: string;
  body?: string;
  rule?: string;
  items?: string;
  start?: string;
  once?: boolean;
  onTimelineCreated?: (tl: gsap.core.Timeline) => void;
}

export function useChapterReveal(
  containerRef: RefObject<HTMLElement | null>,
  options: ChapterRevealOptions = {}
) {
  const {
    headings = '.js-reveal-heading',
    metadata = '.js-reveal-meta',
    body = '.js-reveal-body',
    rule = '.js-reveal-rule',
    items = '.js-reveal-item',
    start = 'top 80%',
    once = true,
    onTimelineCreated,
  } = options;

  useGSAP(
    () => {
      if (!containerRef.current || typeof window === 'undefined') return;

      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // If user prefers reduced motion, set final visible state without motion
      if (prefersReduced) {
        gsap.set(
          [headings, metadata, body, rule, items],
          { opacity: 1, y: 0, x: 0, scaleX: 1, scaleY: 1, clearProps: 'all' }
        );
        return;
      }

      const q = gsap.utils.selector(containerRef);
      const ruleEls = q(rule);
      const metaEls = q(metadata);
      const headingEls = q(headings);
      const bodyEls = q(body);
      const itemEls = q(items);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start,
          once,
        },
      });

      // 1. Horizontal or vertical decorative rules
      if (ruleEls.length > 0) {
        tl.fromTo(
          ruleEls,
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1,
            duration: ANIMATION_TOKENS.durations.reveal,
            ease: ANIMATION_TOKENS.easings.standard,
          },
          0
        );
      }

      // 2. Metadata & Eyebrow labels
      if (metaEls.length > 0) {
        tl.fromTo(
          metaEls,
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: ANIMATION_TOKENS.durations.standard,
            stagger: ANIMATION_TOKENS.staggers.metadata,
            ease: ANIMATION_TOKENS.easings.standard,
          },
          0.1
        );
      }

      // 3. Main chapter headings
      if (headingEls.length > 0) {
        tl.fromTo(
          headingEls,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: ANIMATION_TOKENS.durations.reveal,
            stagger: ANIMATION_TOKENS.staggers.headingLines,
            ease: ANIMATION_TOKENS.easings.standard,
          },
          0.2
        );
      }

      // 4. Body narrative paragraphs
      if (bodyEls.length > 0) {
        tl.fromTo(
          bodyEls,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: ANIMATION_TOKENS.durations.standard,
            stagger: ANIMATION_TOKENS.staggers.paragraphs,
            ease: ANIMATION_TOKENS.easings.standard,
          },
          0.35
        );
      }

      // 5. Grid cards, milestone list items, stack tags, or interactive elements
      if (itemEls.length > 0) {
        tl.fromTo(
          itemEls,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: ANIMATION_TOKENS.durations.standard,
            stagger: ANIMATION_TOKENS.staggers.projectItems,
            ease: ANIMATION_TOKENS.easings.standard,
          },
          0.45
        );
      }

      if (onTimelineCreated) {
        onTimelineCreated(tl);
      }
    },
    { scope: containerRef }
  );
}

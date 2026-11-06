'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap, ANIMATION_TOKENS } from '@/lib/animation/gsap';
import styles from './Chapter00Beginning.module.scss';
import { identity } from '@/content/identity';
import { links } from '@/content/links';
import { ShinyText } from '@/components/ui/ShinyText/ShinyText';
import { AnimatedContent } from '@/components/ui/AnimatedContent/AnimatedContent';

export function Chapter00Beginning() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current || typeof window === 'undefined') return;

      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) return;

      const tl = gsap.timeline({ delay: 0.15 });

      tl.fromTo(
        `.${styles.labelRow}`,
        { opacity: 0, y: -12 },
        { opacity: 1, y: 0, duration: 0.5, ease: ANIMATION_TOKENS.easings.standard }
      );

      tl.fromTo(
        `.${styles.headline}`,
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.8, ease: ANIMATION_TOKENS.easings.standard },
        '-=0.3'
      );

      tl.fromTo(
        `.${styles.portraitArea}`,
        { opacity: 0, scale: 0.97 },
        { opacity: 1, scale: 1, duration: 1.0, ease: 'power2.out' },
        '-=0.6'
      );

      tl.fromTo(
        `.${styles.descriptor}`,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, ease: ANIMATION_TOKENS.easings.standard },
        '-=0.5'
      );

      tl.fromTo(
        `.${styles.ctas} > *`,
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.08,
          ease: ANIMATION_TOKENS.easings.standard,
        },
        '-=0.3'
      );

      tl.fromTo(
        `.${styles.scrollCue}`,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: 'power2.out' },
        '-=0.2'
      );
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} id="beginning" className={styles.section} aria-label="The Beginning">
      {/* Chapter label row */}
      <div className={styles.labelRow}>
        <span className={styles.chapterLabel}>00 / The Beginning</span>
        <span className={styles.openToWork}>
          <span className={styles.otwDot} aria-hidden="true" />
          Open to Work
        </span>
      </div>

      {/* Headline — full editorial width with universal shining gleam */}
      <div className={styles.headlineWrap}>
        <h1 className={styles.headline}>
          <ShinyText color="#C5C6C7" shineColor="#FFFFFF" speed={2.8} glow={0.2} angle={120}>
            I turn
          </ShinyText><br />
          <ShinyText
            color="#FFFFFF"
            shineColor="#FFFFFF"
            speed={2.2}
            shineWidth={60}
            softness={0.7}
            glow={0.35}
            angle={120}
            className={styles.headlineAccent}
          >
            curiosity
          </ShinyText><br />
          <ShinyText color="#C5C6C7" shineColor="#FFFFFF" speed={3.0} glow={0.2} angle={120}>
            into working
          </ShinyText><br />
          <ShinyText color="#C5C6C7" shineColor="#FFFFFF" speed={3.2} glow={0.2} angle={120}>
            systems.
          </ShinyText>
        </h1>
      </div>

      {/* Portrait — positioned right, behind/beside headline */}
      <div className={styles.portraitArea} aria-label="Mani Saideep Chintha — Portrait">
        <div className={styles.heroImgWrap}>
          <Image
            src="/assets/photos/hero-01.png"
            alt="Mani Saideep Chintha"
            fill
            priority
            sizes="(max-width: 768px) 80vw, 42vw"
            className={styles.heroImg}
          />
          <div className={styles.portraitFade} />
        </div>
      </div>

      {/* Bottom row: description + CTAs */}
      <AnimatedContent distance={30} trigger="mount" delay={0.4} className={styles.bottomRow}>
        <div className={styles.descriptor}>
          <p className={styles.roleTag}>AI · ML · Computer Vision</p>
          <p className={styles.tagline}>{identity.tagline}</p>
        </div>

        <div className={styles.ctas}>
          <a href="#builds" className={styles.primaryCta}>
            Explore My Work
          </a>
          <a href="#connect" className={styles.secondaryCta}>
            Let&apos;s Connect
          </a>
          {links.resume && (
            <a
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryCta}
            >
              Resume ↗
            </a>
          )}
        </div>
      </AnimatedContent>

      {/* Scroll cue */}
      <div className={styles.scrollCue} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span className={styles.scrollLabel}>Scroll</span>
      </div>
    </section>
  );
}

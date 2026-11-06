'use client';

import { useRef } from 'react';
import Image from 'next/image';
import styles from './Chapter07Connect.module.scss';
import { identity } from '@/content/identity';
import { links } from '@/content/links';
import { ShinyText } from '@/components/ui/ShinyText/ShinyText';
import { AnimatedContent } from '@/components/ui/AnimatedContent/AnimatedContent';

export function Chapter07Connect() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section ref={containerRef} id="connect" className={styles.section} aria-label="Let's Connect">
      <div className={styles.inner}>
        {/* Content left */}
        <div className={styles.contentCol}>
          <AnimatedContent distance={30} duration={0.8}>
            <div className={styles.sectionMeta}>
              <span className={styles.sectionNum}>07</span>
              <span className={styles.sectionName}>Let&apos;s Connect</span>
            </div>

            <h2 className={styles.heading}>
              <ShinyText color="#D8D8D8" shineColor="#FFFFFF" speed={3.2} glow={0.25} angle={120}>
                The next<br />interesting idea<br />
                <span className={styles.headingMuted}>could start with</span><br />
                a conversation.
              </ShinyText>
            </h2>

            {/* Status */}
            <div className={styles.statusRow}>
              <span className={styles.statusDot} aria-hidden="true" />
              <div>
                <span className={styles.statusTitle}>{identity.status}</span>
                <span className={styles.statusSep}> · </span>
                <span className={styles.statusSub}>{identity.statusDetail}</span>
              </div>
            </div>
          </AnimatedContent>

          {/* Links */}
          <AnimatedContent distance={25} stagger={0.08} duration={0.7} className={styles.linkGrid}>
            <nav aria-label="Contact links">
              {links.email && (
                <a href={`mailto:${links.email}`} className={styles.contactLink}>
                  <span className={styles.linkLabel}>Email</span>
                  <span className={styles.linkArrow}>↗</span>
                </a>
              )}
              {links.resume && (
                <a href={links.resume} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                  <span className={styles.linkLabel}>Download Resume</span>
                  <span className={styles.linkArrow}>↗</span>
                </a>
              )}
              {links.linkedin && (
                <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                  <span className={styles.linkLabel}>LinkedIn</span>
                  <span className={styles.linkArrow}>↗</span>
                </a>
              )}
              {links.github && (
                <a href={links.github} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                  <span className={styles.linkLabel}>GitHub</span>
                  <span className={styles.linkArrow}>↗</span>
                </a>
              )}
              {links.kaggle && (
                <a href={links.kaggle} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                  <span className={styles.linkLabel}>Kaggle</span>
                  <span className={styles.linkArrow}>↗</span>
                </a>
              )}
            </nav>
          </AnimatedContent>

          <footer className={styles.footerNote}>
            <p>Designed & built with Next.js, TypeScript, SCSS, GSAP, and Three.js.</p>
            <p>All content derived from verified sources — zero fabricated metrics.</p>
          </footer>
        </div>

        {/* Portrait right */}
        <div className={styles.portraitCol}>
          <AnimatedContent distance={40} duration={0.9}>
            <div className={styles.portraitFrame}>
              <Image
                src="/assets/photos/black_white_portrait_2x.png"
                alt="Mani Saideep Chintha — Contact"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className={styles.portrait}
              />
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}

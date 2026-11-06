'use client';

import { useRef } from 'react';
import Image from 'next/image';
import styles from './Chapter01Person.module.scss';
import { identity } from '@/content/identity';
import { ShinyText } from '@/components/ui/ShinyText/ShinyText';
import { AnimatedContent } from '@/components/ui/AnimatedContent/AnimatedContent';

export function Chapter01Person() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section ref={containerRef} id="person" className={styles.section} aria-label="The Person">
      <div className={styles.inner}>
        {/* Full-bleed portrait left */}
        <div className={styles.portraitCol}>
          <AnimatedContent distance={40} duration={0.9} ease="power3.out">
            <div className={styles.portraitFrame}>
              <Image
                src="/assets/photos/portrait_half_body_upscaled_b&w.png"
                alt="Mani Saideep Chintha"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className={styles.portrait}
              />
            </div>
          </AnimatedContent>
        </div>

        {/* Content right */}
        <div className={styles.contentCol}>
          <AnimatedContent distance={30} duration={0.7} ease="power3.out">
            <div className={styles.sectionMeta}>
              <span className={styles.sectionNum}>01</span>
              <span className={styles.sectionName}>The Person</span>
            </div>

            <h2 className={styles.heading}>
              <ShinyText color="#D8D8D8" shineColor="#FFFFFF" speed={3.2} glow={0.25} angle={120}>
                Building systems that<br />
                connect algorithms<br />
                to reality.
              </ShinyText>
            </h2>
          </AnimatedContent>

          <AnimatedContent distance={25} stagger={0.08} duration={0.7} className={styles.facts}>
            <div className={styles.factRow}>
              <span className={styles.factKey}>Role</span>
              <span className={styles.factVal}>{identity.title}</span>
            </div>
            <div className={styles.factRow}>
              <span className={styles.factKey}>Based in</span>
              <span className={styles.factVal}>{identity.location}</span>
            </div>
            <div className={styles.factRow}>
              <span className={styles.factKey}>Focus</span>
              <span className={styles.factVal}>Computer Vision · Edge AI · Applied ML</span>
            </div>
          </AnimatedContent>

          <AnimatedContent distance={30} stagger={0.1} duration={0.8} className={styles.bio}>
            <p>
              I work at the intersection of machine learning research and real-world
              engineering. My goal is complete systems — not just trained models, but
              the backend services, mobile integrations, and field-tested tools that
              make them useful.
            </p>
            <p>
              {identity.positioning}
            </p>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}

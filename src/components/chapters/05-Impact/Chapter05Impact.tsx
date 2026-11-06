'use client';

import { useRef } from 'react';
import Image from 'next/image';
import styles from './Chapter05Impact.module.scss';
import { identity } from '@/content/identity';
import { ShinyText } from '@/components/ui/ShinyText/ShinyText';
import { AnimatedContent } from '@/components/ui/AnimatedContent/AnimatedContent';

export function Chapter05Impact() {
  const containerRef = useRef<HTMLElement>(null);
  const primary = identity.achievements.find((a) => a.isPrimary);
  const secondary = identity.achievements.filter((a) => !a.isPrimary);

  return (
    <section ref={containerRef} id="impact" className={styles.section} aria-label="The Impact">
      <div className={styles.inner}>
        <div className={styles.sectionMeta}>
          <span className={styles.sectionNum}>05</span>
          <span className={styles.sectionName}>The Impact</span>
        </div>
      </div>

      {primary && (
        <AnimatedContent distance={40} duration={0.9} className={styles.featureBlock}>
          <div className={styles.inner}>
            <div className={styles.featureGrid}>
              {/* Left: editorial text */}
              <div className={styles.featureText}>
                <span className={styles.prizeBadge}>1st Prize</span>
                <h2 className={styles.prizeEvent}>
                  <ShinyText color="#FFFFFF" shineColor="#FFFFFF" speed={2.5} glow={0.35} angle={120}>
                    {primary.event}
                  </ShinyText>
                </h2>
                <p className={styles.prizeDesc}>{primary.description}</p>

                <div className={styles.significance}>
                  <span className={styles.sigLabel}>Significance</span>
                  <p className={styles.sigText}>
                    Validated the AI-Powered Granite Measurement System among
                    state-level engineering prototypes for practical utility
                    and field deployability.
                  </p>
                </div>
              </div>

              {/* Right: evidence photo — no border frame */}
              <div className={styles.featureMedia}>
                <div className={styles.photoFrame}>
                  <Image
                    src="/assets/photos/achievement-rtgs-01.png"
                    alt="RTGS Hackathon First Prize Award"
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className={styles.photo}
                  />
                </div>
                <span className={styles.photoCaption}>Award ceremony documentation</span>
              </div>
            </div>
          </div>
        </AnimatedContent>
      )}

      {/* Secondary participations */}
      {secondary.length > 0 && (
        <div className={styles.inner}>
          <AnimatedContent distance={30} stagger={0.1} duration={0.75} className={styles.secondaryRow}>
            {secondary.map((item) => (
              <div key={item.id} className={styles.secondaryItem}>
                <span className={styles.secBadge}>{item.title}</span>
                <h3 className={styles.secEvent}>{item.event}</h3>
                <p className={styles.secDesc}>{item.description}</p>
              </div>
            ))}
          </AnimatedContent>
        </div>
      )}
    </section>
  );
}

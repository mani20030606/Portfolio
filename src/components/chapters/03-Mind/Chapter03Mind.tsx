'use client';

import { useState, useRef } from 'react';
import styles from './Chapter03Mind.module.scss';
import { skillClusters } from '@/content/skills';
import { ShinyText } from '@/components/ui/ShinyText/ShinyText';
import { AnimatedContent } from '@/components/ui/AnimatedContent/AnimatedContent';

export function Chapter03Mind() {
  const [expanded, setExpanded] = useState<string | null>(skillClusters[0].id);
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section ref={containerRef} id="mind" className={styles.section} aria-label="The Mind: Technical Skills">
      <div className={styles.inner}>
        <AnimatedContent distance={30} duration={0.75} className={styles.header}>
          <div className={styles.sectionMeta}>
            <span className={styles.sectionNum}>03</span>
            <span className={styles.sectionName}>The Mind</span>
          </div>
          <h2 className={styles.heading}>
            <ShinyText color="#D8D8D8" shineColor="#FFFFFF" speed={3.2} glow={0.25} angle={120}>
              Applied intelligence<br />& core skills
            </ShinyText>
          </h2>
          <p className={styles.sub}>
            Evidence inventory across vision, ML, edge deployment, and integration.
          </p>
        </AnimatedContent>

        {/* Flat cluster list — no tabs, no cards */}
        <AnimatedContent distance={30} stagger={0.07} duration={0.75} className={styles.clusterList}>
          {skillClusters.map((cluster) => {
            const isOpen = expanded === cluster.id;
            return (
              <div key={cluster.id} className={styles.cluster}>
                <button
                  className={styles.clusterHeader}
                  onClick={() => setExpanded(isOpen ? null : cluster.id)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.clusterName}>{cluster.name}</span>
                  <span className={styles.clusterArrow} aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <div className={`${styles.clusterBody} ${isOpen ? styles.open : ''}`}>
                  <p className={styles.clusterDesc}>{cluster.description}</p>
                  <div className={styles.skillRow}>
                    {cluster.skills.map((skill, idx) => (
                      <span key={idx} className={styles.skillTag}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </AnimatedContent>
      </div>
    </section>
  );
}

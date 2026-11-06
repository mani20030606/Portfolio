'use client';

import { useRef } from 'react';
import styles from './Chapter06Beyond.module.scss';
import { ShinyText } from '@/components/ui/ShinyText/ShinyText';
import { AnimatedContent } from '@/components/ui/AnimatedContent/AnimatedContent';

const domains = [
  {
    area: 'Edge AI & On-Device Compression',
    desc: 'Pushing state-of-the-art vision models onto ultra-low-power embedded chips and mobile devices using INT8 quantization, pruning, and knowledge distillation.',
  },
  {
    area: 'Multi-Modal Retrieval & Knowledge Graphs',
    desc: 'Connecting structural graph traversal with dense vector embeddings to build verifiable, hallucination-resistant retrieval architectures for factual AI systems.',
  },
  {
    area: 'Vision-Language & Spatial Intelligence',
    desc: 'Exploring open-vocabulary segmentation, metric scene understanding, and real-time hazard forecasting in dynamic physical environments.',
  },
];

export function Chapter06Beyond() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section ref={containerRef} id="beyond" className={styles.section} aria-label="Beyond the Horizon">
      <div className={styles.nebula} aria-hidden="true" />
      <div className={styles.inner}>
        <AnimatedContent distance={30} duration={0.8}>
          <div className={styles.sectionMeta}>
            <span className={styles.sectionNum}>06</span>
            <span className={styles.sectionName}>Beyond the Horizon</span>
          </div>

          <h2 className={styles.heading}>
            <ShinyText color="#D8D8D8" shineColor="#FFFFFF" speed={3.0} glow={0.25} angle={120}>
              Exploration &<br />next horizons
            </ShinyText>
          </h2>
        </AnimatedContent>

        <AnimatedContent distance={35} stagger={0.12} duration={0.8} className={styles.domains}>
          {domains.map((d, idx) => (
            <div key={idx} className={styles.domain}>
              <span className={styles.domainIdx}>0{idx + 1}</span>
              <div className={styles.domainContent}>
                <h3 className={styles.domainArea}>{d.area}</h3>
                <p className={styles.domainDesc}>{d.desc}</p>
              </div>
            </div>
          ))}
        </AnimatedContent>
      </div>
    </section>
  );
}

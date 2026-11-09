'use client';

import { useState, useRef } from 'react';
import styles from './Chapter03Mind.module.scss';
import { skillClusters } from '@/content/skills';
import { ShinyText } from '@/components/ui/ShinyText/ShinyText';
import { AnimatedContent } from '@/components/ui/AnimatedContent/AnimatedContent';
import CircularCarousel, { type CircularCarouselItem } from '@/components/ui/CircularCarousel/CircularCarousel';

// Shuffled skill category cards for dynamic 3D visual distribution
const carouselItems: CircularCarouselItem[] = [
  {
    src: '/assets/skills/computer-vision.png',
    alt: 'Computer Vision & Edge AI',
    title: 'Computer Vision & Edge AI',
    subtitle: 'YOLOv8 · OpenCV · MobileSAM · Edge CV',
  },
  {
    src: '/assets/skills/backend-apis.png',
    alt: 'Backend & APIs',
    title: 'Backend & APIs',
    subtitle: 'FastAPI · REST APIs · Python AsyncIO',
  },
  {
    src: '/assets/skills/ai-ml-core.png',
    alt: 'AI & Machine Learning Core',
    title: 'AI & Machine Learning Core',
    subtitle: 'PyTorch · TensorFlow · Scikit-Learn · NumPy',
  },
  {
    src: '/assets/skills/databases-tooling.png',
    alt: 'Databases & Tooling',
    title: 'Databases & Tooling',
    subtitle: 'MySQL · MongoDB · Supabase · Git · Streamlit',
  },
  {
    src: '/assets/skills/mobile-frontend.png',
    alt: 'Mobile & Frontend Product',
    title: 'Mobile & Frontend Product',
    subtitle: 'React Native · TypeScript · Expo · Modern UI',
  },
  {
    src: '/assets/skills/optimization-deployment.png',
    alt: 'Optimization & Deployment',
    title: 'Optimization & Deployment',
    subtitle: 'ONNX · TFLite · Quantization · Edge AI',
  },
  {
    src: '/assets/skills/programming-languages.png',
    alt: 'Programming Languages',
    title: 'Programming Languages',
    subtitle: 'Python · C++ · C · TypeScript · JavaScript · SQL',
  },
  {
    src: '/assets/skills/retrieval-knowledge.png',
    alt: 'Retrieval & Knowledge Systems',
    title: 'Retrieval & Knowledge Systems',
    subtitle: 'RAG · GraphRAG · Embeddings · Vector DBs',
  },
];

export function Chapter03Mind() {
  const [expanded, setExpanded] = useState<string | null>(skillClusters[0].id);
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section ref={containerRef} id="mind" className={styles.section} aria-label="The Mind: Technical Skills">
      <div className={styles.inner}>
        {/* LEFT COLUMN: Section Heading, Description & All Expandable Skill Categories */}
        <div className={styles.leftCol}>
          <AnimatedContent distance={35} duration={0.75} ease="power3.out" className={styles.header}>
            <div className={styles.sectionMeta}>
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

          {/* Flat cluster list with preserved ReactBits entrance animation */}
          <AnimatedContent distance={30} stagger={0.08} duration={0.75} ease="power3.out" className={styles.clusterList}>
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

        {/* RIGHT COLUMN: 3D React Bits CircularCarousel */}
        <div className={styles.rightCol} aria-label="3D Technology Stack Orbit">
          <AnimatedContent distance={35} duration={0.85} ease="power3.out" className={styles.carouselContainer}>
            <CircularCarousel
              items={carouselItems}
              preset="orbit"
              intro="rise"
              cardWidth={260}
              aspectRatio={0.75}
              speed={14}
              captions={false}
              gap={0}
              tilt={-16}
              curve={0}
              perspective={1500}
              stretch={0.19}
              fadeColor="#000000"
              className={styles.skillCarousel}
            />
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}

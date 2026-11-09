'use client';

import { useState, useEffect, type CSSProperties } from 'react';
import styles from './Chapter05Impact.module.scss';
import { ShinyText } from '@/components/ui/ShinyText/ShinyText';
import { AnimatedContent } from '@/components/ui/AnimatedContent/AnimatedContent';
import ReflectiveCard from '@/components/ui/ReflectiveCard/ReflectiveCard';

function BriefcaseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.45 1-1 1H7c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1h-2c-.55 0-1-.45-1-1v-2.34" />
      <path d="M6 2h12v7a6 6 0 0 1-12 0V2z" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

const reflectiveMetallicStyle: CSSProperties = {
  '--rc-base': '#101012',
  '--rc-rim': 'rgba(255, 255, 255, 0.12)',
  '--rc-rim-highlight': 'rgba(255, 255, 255, 0.28)',
  '--rc-shadow': '0 24px 48px -18px rgba(0, 0, 0, 0.85), 0 8px 24px -8px rgba(0, 0, 0, 0.6)',
} as CSSProperties;

export function Chapter05Impact() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || window.matchMedia('(hover: none)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="impact" className={styles.section} aria-label="Achievements">
      <div className={styles.inner}>
        {/* Section Header */}
        <AnimatedContent distance={30} duration={0.8} ease="power3.out" className={styles.headerBlock}>
          <div className={styles.sectionMeta}>
            <span className={styles.sectionNum}>05</span>
            <span className={styles.sectionName}>Achievements</span>
          </div>
          <h2 className={styles.heading}>
            <ShinyText color="#D8D8D8" shineColor="#FFFFFF" speed={3.0} glow={0.25} angle={120}>
              Achievements
            </ShinyText>
          </h2>
          <p className={styles.subtitle}>
            Verified milestones and recognized outcomes across industry and competitive engineering.
          </p>
        </AnimatedContent>

        {/* Two Equal-Width Reflective Cards Side by Side */}
        <AnimatedContent distance={35} stagger={0.12} duration={0.8} ease="power3.out" className={styles.cardsGrid}>
          {/* CARD 01: CAREER PROGRESSION */}
          <ReflectiveCard
            webcam={false}
            tint="#ffffff"
            metalness={1}
            roughness={0.3}
            blurStrength={6}
            shine={1}
            glare={0.5}
            theme="dark"
            radius={16}
            width="100%"
            height="100%"
            enableTilt={true}
            tiltStrength={isMobile ? 2 : 7}
            intro={false}
            className={styles.achievementCard}
            style={reflectiveMetallicStyle}
          >
            <div className={styles.cardTop}>
              <div className={styles.cardHeaderRow}>
                <div className={styles.iconBox} aria-hidden="true">
                  <BriefcaseIcon />
                </div>
                <span className={styles.cardBadge}>Career Progression</span>
              </div>

              <h3 className={styles.cardTitle}>
                From College to Paid Internship at Huebits
              </h3>

              <p className={styles.cardDescription}>
                Progressed from an engineering student to a Computer Vision Engineering Intern at Huebits, eventually moving into a paid, onsite internship.
              </p>
            </div>

            {/* Visual Progression */}
            <div className={styles.progressionSection}>
              <span className={styles.progressionLabel}>Progression</span>
              <div className={styles.progressionFlow}>
                <span className={styles.progressionStep}>COLLEGE</span>
                <span className={styles.flowArrow}><ArrowRightIcon /></span>
                <span className={styles.progressionStep}>INTERNSHIP</span>
                <span className={styles.flowArrow}><ArrowRightIcon /></span>
                <span className={styles.progressionStepHighlight}>PAID INTERNSHIP AT HUEBITS</span>
              </div>
            </div>
          </ReflectiveCard>

          {/* CARD 02: COMPETITIVE RECOGNITION */}
          <ReflectiveCard
            webcam={false}
            tint="#ffffff"
            metalness={1}
            roughness={0.3}
            blurStrength={6}
            shine={1}
            glare={0.5}
            theme="dark"
            radius={16}
            width="100%"
            height="100%"
            enableTilt={true}
            tiltStrength={isMobile ? 2 : 7}
            intro={false}
            className={styles.achievementCard}
            style={reflectiveMetallicStyle}
          >
            <div className={styles.cardTop}>
              <div className={styles.cardHeaderRow}>
                <div className={styles.iconBox} aria-hidden="true">
                  <TrophyIcon />
                </div>
                <span className={styles.cardBadgeHighlight}>First Prize</span>
              </div>

              <h3 className={styles.cardTitle}>
                Represented Huebits at Government Hackathon &amp; Won First Prize
              </h3>

              <p className={styles.cardDescription}>
                Participated in the RTGS Government Hackathon while working at Huebits, representing the company with the AI-Powered Granite Measurement System and securing First Prize.
              </p>
            </div>

            {/* Visual Indicators */}
            <div className={styles.progressionSection}>
              <span className={styles.progressionLabel}>Recognition</span>
              <div className={styles.progressionFlow}>
                <span className={styles.progressionStep}>RTGS GOVERNMENT HACKATHON</span>
                <span className={styles.flowArrow}><ArrowRightIcon /></span>
                <span className={styles.progressionStepHighlight}>FIRST PRIZE</span>
              </div>
            </div>
          </ReflectiveCard>
        </AnimatedContent>
      </div>
    </section>
  );
}

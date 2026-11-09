'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import styles from './Chapter02Journey.module.scss';
import { ShinyText } from '@/components/ui/ShinyText/ShinyText';
import { AnimatedContent } from '@/components/ui/AnimatedContent/AnimatedContent';

interface MilestoneData {
  id: string;
  period: string;
  category: string;
  role: string;
  institution: string;
  inlineDetail?: string;
  logo: string;
  logoAlt: string;
  previewImage: string;
  previewAlt: string;
  isGif?: boolean;
  imageFitContain?: boolean;
  whiteBackdrop?: boolean;
  stat1: { value: string; label: string; icon: 'check' | 'chart' | 'trophy' };
  stat2: { value: string; label: string; icon: 'calendar' };
  stat3: { value: string; label: string; icon: 'cap' | 'code' };
  description: string;
}

const milestones: MilestoneData[] = [
  {
    id: 'diploma',
    period: '2019 – 2022',
    category: 'EDUCATION',
    role: 'Completed Diploma',
    institution: 'Smt. B. Seetha Polytechnic College',
    logo: '/assets/logos/vishnu-logo.png',
    logoAlt: 'Vishnu Educational Society Logo',
    previewImage: '/assets/journey/diploma.gif',
    previewAlt: 'Smt. B. Seetha Polytechnic College Campus Gate',
    isGif: true,
    stat1: { value: 'Completed', label: 'Status', icon: 'check' },
    stat2: { value: '3 Years', label: 'Duration', icon: 'calendar' },
    stat3: { value: 'Diploma', label: 'Engineering', icon: 'cap' },
    description:
      'Completed my Diploma in Engineering, where I built a strong foundation in core engineering concepts and practical problem-solving.',
  },
  {
    id: 'btech',
    period: '2022 – 2026',
    category: 'EDUCATION',
    role: 'B.Tech in CSE – AI & ML',
    institution: 'Sasi Institute of Technology and Engineering',
    inlineDetail: 'CGPA: 8.15',
    logo: '/assets/logos/sasi-logo.png',
    logoAlt: 'Sasi Institute of Technology and Engineering Logo',
    previewImage: '/assets/journey/engg.webp',
    previewAlt: 'Sasi Institute of Technology and Engineering Banner',
    imageFitContain: true,
    whiteBackdrop: true,
    stat1: { value: '8.15', label: 'CGPA', icon: 'chart' },
    stat2: { value: '4 Years', label: 'Duration', icon: 'calendar' },
    stat3: { value: 'B.Tech', label: 'CSE (AI & ML)', icon: 'cap' },
    description:
      'Pursuing B.Tech in Computer Science and Engineering specializing in AI & Machine Learning, building applied systems at the intersection of computer vision, deep learning, and software engineering.',
  },
  {
    id: 'huebits',
    period: 'Jan 2026 – Present',
    category: 'EXPERIENCE',
    role: 'Computer Vision Engineering Intern',
    institution: 'Huebits · Visakhapatnam · Paid, Onsite',
    inlineDetail: 'Led Granite Measurement System → 1st Prize RTGS Hackathon',
    logo: '/assets/logos/huebits-logo.png',
    logoAlt: 'Huebits Logo',
    previewImage: '/assets/journey/huebits-preview.png',
    previewAlt: 'Huebits Smart Synergies',
    imageFitContain: true,
    whiteBackdrop: true,
    stat1: { value: '1st Prize', label: 'RTGS Hackathon', icon: 'trophy' },
    stat2: { value: '6 Months', label: 'Duration', icon: 'calendar' },
    stat3: { value: 'Edge CV', label: 'Engineering', icon: 'code' },
    description:
      'Working as a Computer Vision Engineering Intern at Huebits, developing real-time edge computer vision pipelines and leading the Granite Measurement System that won 1st Prize at the Smart India Hackathon RTGS.',
  },
];

function RenderIcon({ type }: { type: string }) {
  switch (type) {
    case 'check':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      );
    case 'chart':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      );
    case 'trophy':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.45 1-1 1H8c-.55 0-1 .45-1 1v1h10v-1c0-.55-.45-1-1-1h-1c-.55 0-1-.45-1-1v-2.34" />
          <path d="M6 4h12v5a6 6 0 0 1-12 0V4z" />
        </svg>
      );
    case 'calendar':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );
    case 'cap':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      );
    case 'code':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    default:
      return null;
  }
}

export function Chapter02Journey() {
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const activeMilestone = milestones[activeIdx] ?? milestones[0];

  return (
    <section ref={containerRef} id="journey" className={styles.section} aria-label="The Journey">
      <div className={styles.inner}>
        {/* Header Block: Eyebrow, Main Title with Shiny Accent, Subtitle */}
        <AnimatedContent distance={25} duration={0.7} ease="power3.out" className={styles.headerBlock}>
          <div className={styles.labelRow}>
            <span className={styles.chapterLabel}>THE JOURNEY</span>
            <span className={styles.labelLine} aria-hidden="true" />
          </div>

          <h2 className={styles.heading}>
            Education & Engineering{' '}
            <ShinyText
              color="#B8B8B8"
              shineColor="#FFFFFF"
              speed={2.4}
              glow={0.5}
              shineWidth={65}
              softness={0.6}
              angle={120}
              className={styles.headlineAccent}
            >
              Trajectory
            </ShinyText>
          </h2>

          <p className={styles.subtitle}>
            A timeline of my academic foundation and professional journey.
          </p>
        </AnimatedContent>

        {/* Two-Column Grid: Timeline on Left (~58%), Dynamic Detail Preview on Right (~42%) */}
        <div className={styles.gridContainer}>
          {/* LEFT COLUMN: Interactive Timeline */}
          <div className={styles.timelineCol}>
            <ol className={styles.timelineList} aria-label="Milestones">
              {milestones.map((m, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <li
                    key={m.id}
                    className={`${styles.milestoneRow} ${isActive ? styles.activeRow : ''}`}
                    onMouseEnter={() => setActiveIdx(idx)}
                    onClick={() => setActiveIdx(idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveIdx(idx);
                      }
                    }}
                    aria-selected={isActive}
                  >
                    {/* Date & Category */}
                    <div className={styles.metaCol}>
                      <span className={styles.periodText}>{m.period}</span>
                      <span className={styles.categoryText}>{m.category}</span>
                    </div>

                    {/* Timeline Track with Glow Indicator */}
                    <div className={styles.trackCol}>
                      <span
                        className={`${styles.trackDot} ${isActive ? styles.activeDot : ''}`}
                        aria-hidden="true"
                      />
                      {idx < milestones.length - 1 && (
                        <span className={styles.trackLine} aria-hidden="true" />
                      )}
                    </div>

                    {/* Milestone Card Content */}
                    <div className={`${styles.cardCol} ${isActive ? styles.activeCardCol : ''}`}>
                      <div className={styles.cardHeader}>
                        <div className={styles.timelineLogoBadge}>
                          <Image
                            src={m.logo}
                            alt={m.logoAlt}
                            width={34}
                            height={34}
                            className={styles.timelineLogoImg}
                          />
                        </div>
                        <div className={styles.cardDetails}>
                          <h3 className={styles.milestoneTitle}>{m.role}</h3>
                          <p className={styles.institutionSubtitle}>{m.institution}</p>
                          {m.inlineDetail && (
                            <p className={styles.metricBadge}>{m.inlineDetail}</p>
                          )}
                        </div>
                      </div>

                      {/* Divider line between rows */}
                      {idx < milestones.length - 1 && (
                        <div className={styles.rowDivider} aria-hidden="true" />
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* RIGHT COLUMN: Persistent Dynamic Detail Preview Card */}
          <aside className={styles.previewCol} aria-label="Milestone Detail Preview">
            <div className={styles.previewCard}>
              {/* Media Frame with smooth Crossfade */}
              <div className={styles.mediaFrame}>
                {milestones.map((m, idx) => {
                  const isCurActive = idx === activeIdx;
                  return (
                    <div
                      key={m.id}
                      className={`${styles.mediaLayer} ${isCurActive ? styles.activeMedia : ''} ${
                        m.whiteBackdrop ? styles.whiteMediaLayer : ''
                      }`}
                      aria-hidden={!isCurActive}
                    >
                      <Image
                        src={m.previewImage}
                        alt={m.previewAlt}
                        fill
                        unoptimized={m.isGif}
                        sizes="(max-width: 768px) 100vw, 42vw"
                        className={`${styles.previewImg} ${
                          m.imageFitContain ? styles.containFit : styles.coverFit
                        }`}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Dynamic Information Container */}
              <div key={activeMilestone.id} className={styles.infoContent}>
                {/* Header Row: Logo badge + Title + Institution */}
                <div className={styles.previewHeaderRow}>
                  <div className={styles.previewLogoBadge}>
                    <Image
                      src={activeMilestone.logo}
                      alt={activeMilestone.logoAlt}
                      width={38}
                      height={38}
                      className={styles.previewLogoImg}
                    />
                  </div>
                  <div className={styles.previewHeaderText}>
                    <h3 className={styles.previewTitle}>{activeMilestone.role}</h3>
                    <p className={styles.previewInstitution}>{activeMilestone.institution}</p>
                    <span className={styles.previewPeriod}>{activeMilestone.period}</span>
                  </div>
                </div>

                {/* 3-Column Stats Strip */}
                <div className={styles.statsStrip}>
                  <div className={styles.statCol}>
                    <span className={styles.statIcon} aria-hidden="true">
                      <RenderIcon type={activeMilestone.stat1.icon} />
                    </span>
                    <div className={styles.statData}>
                      <span className={styles.statVal}>{activeMilestone.stat1.value}</span>
                      <span className={styles.statLbl}>{activeMilestone.stat1.label}</span>
                    </div>
                  </div>

                  <div className={styles.statDivider} aria-hidden="true" />

                  <div className={styles.statCol}>
                    <span className={styles.statIcon} aria-hidden="true">
                      <RenderIcon type={activeMilestone.stat2.icon} />
                    </span>
                    <div className={styles.statData}>
                      <span className={styles.statVal}>{activeMilestone.stat2.value}</span>
                      <span className={styles.statLbl}>{activeMilestone.stat2.label}</span>
                    </div>
                  </div>

                  <div className={styles.statDivider} aria-hidden="true" />

                  <div className={styles.statCol}>
                    <span className={styles.statIcon} aria-hidden="true">
                      <RenderIcon type={activeMilestone.stat3.icon} />
                    </span>
                    <div className={styles.statData}>
                      <span className={styles.statVal}>{activeMilestone.stat3.value}</span>
                      <span className={styles.statLbl}>{activeMilestone.stat3.label}</span>
                    </div>
                  </div>
                </div>

                {/* Description Paragraph */}
                <p className={styles.previewDescription}>{activeMilestone.description}</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

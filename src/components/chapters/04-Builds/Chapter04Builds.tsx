'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Chapter04Builds.module.scss';
import { projects } from '@/content/projects';
import { ShinyText } from '@/components/ui/ShinyText/ShinyText';
import { AnimatedContent } from '@/components/ui/AnimatedContent/AnimatedContent';
import { TechLogo } from '@/components/ui/TechLogo/TechLogo';

// Geometric monochromatic project icons for right selector list
function ProjectIcon({ type }: { type: 'cube' | 'road' | 'crosshair' | 'graph' }) {
  switch (type) {
    case 'cube':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      );
    case 'road':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M4 19L9 5M20 19L15 5" />
          <line x1="12" y1="7" x2="12" y2="9" strokeDasharray="2 2" strokeWidth="2" />
          <line x1="12" y1="13" x2="12" y2="17" strokeDasharray="2 2" strokeWidth="2" />
        </svg>
      );
    case 'crosshair':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <circle cx="12" cy="12" r="8" />
          <line x1="12" y1="2" x2="12" y2="6" />
          <line x1="12" y1="18" x2="12" y2="22" />
          <line x1="2" y1="12" x2="6" y2="12" />
          <line x1="18" y1="12" x2="22" y2="12" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      );
    case 'graph':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <circle cx="6" cy="6" r="2.5" />
          <circle cx="18" cy="7" r="2.5" />
          <circle cx="12" cy="18" r="3" />
          <line x1="8.3" y1="7" x2="15.7" y2="7" />
          <line x1="7.5" y1="8.2" x2="10.8" y2="15.5" />
          <line x1="16.5" y1="9.2" x2="13.2" y2="15.5" />
        </svg>
      );
    default:
      return null;
  }
}

// Minimal icons for the 4 specifications rows
function SpecIcon({ type }: { type: 'problem' | 'approach' | 'solution' | 'outcome' }) {
  switch (type) {
    case 'problem':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <circle cx="12" cy="16" r="0.8" fill="currentColor" />
        </svg>
      );
    case 'approach':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case 'solution':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
    case 'outcome':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      );
    default:
      return null;
  }
}

export function Chapter04Builds() {
  const [selectedId, setSelectedId] = useState<string>('granite-measurement');
  const activeProject = projects.find((p) => p.id === selectedId) || projects[0];

  return (
    <section id="builds" className={styles.section} aria-label="The Builds">
      {/* Chapter Header */}
      <AnimatedContent distance={30} duration={0.8} className={styles.sectionHeader}>
        <div className={styles.inner}>
          <div className={styles.headerTop}>
            <div>
              <div className={styles.sectionMeta}>
                <span className={styles.sectionName}>The Builds</span>
              </div>
              <h2 className={styles.heading}>
                <ShinyText color="#F5F5F5" shineColor="#FFFFFF" speed={3.0} glow={0.2} angle={120}>
                  Case studies &amp;<br />engineered systems
                </ShinyText>
              </h2>
            </div>
            <p className={styles.sub}>
              Real evidence, verified milestones, zero invented metrics. Four engineered systems
              spanning edge computer vision, hazard detection, and hybrid retrieval architectures.
            </p>
          </div>
        </div>
      </AnimatedContent>

      {/* Split-Panel Interactive Showcase */}
      <div className={styles.showcaseContainer}>
        <div className={styles.showcaseInner}>
          {/* ════════════════ LEFT PANEL: Selected Project Details (~60%) ════════════════ */}
          <AnimatedContent
            key={activeProject.id}
            trigger="mount"
            distance={10}
            duration={0.35}
            ease="power2.out"
            className={styles.leftPanel}
          >
            {/* Top Meta Bar */}
            <div className={styles.panelTopBar}>
              <span className={styles.indexCount}>
                {activeProject.index} <span className={styles.indexMuted}>/ 0{projects.length}</span>
              </span>

              {/* Affiliation / Huebits Branding (Replaces text on Projects 01 & 02) */}
              {activeProject.origin === 'huebits' ? (
                <div className={styles.huebitsBrandBadge} title="Huebits — Smart Synergies">
                  <Image
                    src="/assets/logos/huebits-smart-synergies.png"
                    alt="Huebits Smart Synergies Logo"
                    width={105}
                    height={35}
                    className={styles.huebitsLogoImg}
                    priority
                  />
                </div>
              ) : (
                <div className={styles.attributionIndependent}>
                  <span className={styles.attributionDot} />
                  <span>Independent Engineering</span>
                </div>
              )}
            </div>

            {/* Title & Category Tags */}
            <div className={styles.titleSection}>
              <h3 className={styles.projectTitle}>
                <ShinyText color="#F5F5F5" shineColor="#FFFFFF" speed={2.8} glow={0.15} angle={120}>
                  {activeProject.title}
                </ShinyText>
              </h3>
              <p className={styles.projectSubtitle}>{activeProject.subtitle}</p>
            </div>

            {/* Short Description */}
            <p className={styles.projectDescription}>{activeProject.description}</p>

            {/* Interior 2-Column Grid */}
            <div className={styles.detailsGrid}>
              {/* Left Sub-Column: 4 Spec Rows */}
              <div className={styles.specsColumn}>
                {/* Problem */}
                <div className={styles.specRow}>
                  <div className={styles.specIconBox}>
                    <SpecIcon type="problem" />
                  </div>
                  <div className={styles.specContent}>
                    <span className={styles.specLabel}>Problem</span>
                    <p className={styles.specText}>{activeProject.problem}</p>
                  </div>
                </div>

                {/* Approach */}
                <div className={styles.specRow}>
                  <div className={styles.specIconBox}>
                    <SpecIcon type="approach" />
                  </div>
                  <div className={styles.specContent}>
                    <span className={styles.specLabel}>Approach</span>
                    <p className={styles.specText}>{activeProject.approach}</p>
                  </div>
                </div>

                {/* Solution */}
                <div className={styles.specRow}>
                  <div className={styles.specIconBox}>
                    <SpecIcon type="solution" />
                  </div>
                  <div className={styles.specContent}>
                    <span className={styles.specLabel}>Solution</span>
                    <p className={styles.specText}>{activeProject.solution}</p>
                  </div>
                </div>

                {/* Outcome */}
                <div className={styles.specRow}>
                  <div className={styles.specIconBox}>
                    <SpecIcon type="outcome" />
                  </div>
                  <div className={styles.specContent}>
                    <span className={styles.specLabel}>Outcome</span>
                    <p className={styles.specText}>{activeProject.outcome}</p>
                  </div>
                </div>
              </div>

              {/* Right Sub-Column: Tech Stack & Key Results */}
              <div className={styles.rightSubColumn}>
                {/* Tech Stack with Logos (Staggered Animation) */}
                <div className={styles.techStackBlock}>
                  <h4 className={styles.subBlockTitle}>Tech Stack</h4>
                  <AnimatedContent
                    key={`stack-${activeProject.id}`}
                    trigger="mount"
                    distance={6}
                    stagger={0.025}
                    duration={0.3}
                    ease="power2.out"
                    className={styles.stackPills}
                  >
                    {activeProject.stack.map((tech, i) => (
                      <span key={i} className={styles.techPill}>
                        <TechLogo name={tech} size={13} className={styles.techLogo} />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </AnimatedContent>
                </div>

                {/* Key Results Stats with Champagne Gold Highlights */}
                <div className={styles.keyResultsBlock}>
                  <h4 className={styles.subBlockTitle}>Key Results</h4>
                  <div className={styles.resultsGrid}>
                    {activeProject.keyResults.map((result, idx) => (
                      <div key={idx} className={styles.resultBox}>
                        {result.isGold ? (
                          <span className={styles.resultValueGold}>
                            <ShinyText
                              color="#D6B46A"
                              shineColor="#F3D58A"
                              speed={3.0}
                              glow={0.2}
                              angle={120}
                            >
                              {result.value}
                            </ShinyText>
                          </span>
                        ) : (
                          <span className={styles.resultValue}>{result.value}</span>
                        )}
                        <span className={styles.resultLabel}>{result.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedContent>

          {/* ════════════════ RIGHT PANEL: Project Selector List (~40%) ════════════════ */}
          <div className={styles.rightPanel}>
            <div className={styles.listHeader}>
              <div className={styles.listHeaderTitle}>
                <span className={styles.projectsTitle}>Projects</span>
                <span className={styles.projectsCount}>0{projects.length}</span>
              </div>
              <span className={styles.listHelper}>Hover or select to view</span>
            </div>

            <div className={styles.projectsList} role="tablist" aria-label="Project selection list">
              {projects.map((proj) => {
                const isSelected = proj.id === selectedId;
                return (
                  <button
                    key={proj.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedId(proj.id)}
                    onMouseEnter={() => setSelectedId(proj.id)}
                    onFocus={() => setSelectedId(proj.id)}
                    className={`${styles.projectItem} ${isSelected ? styles.projectItemSelected : ''}`}
                  >
                    <div className={styles.itemLeft}>
                      <span className={styles.itemIndex}>{proj.index}</span>
                      <div className={styles.itemIconBox}>
                        <ProjectIcon type={proj.iconType} />
                      </div>
                      <div className={styles.itemInfo}>
                        <span className={styles.itemTitle}>{proj.listTitle}</span>
                        <span className={styles.itemTags}>{proj.listTags}</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

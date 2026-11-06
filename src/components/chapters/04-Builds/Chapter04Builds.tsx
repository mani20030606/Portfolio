'use client';

import { useRef } from 'react';
import styles from './Chapter04Builds.module.scss';
import { projects } from '@/content/projects';
import { ProjectDiagram } from '@/components/ui/ProjectDiagram/ProjectDiagram';
import { ShinyText } from '@/components/ui/ShinyText/ShinyText';
import { AnimatedContent } from '@/components/ui/AnimatedContent/AnimatedContent';

export function Chapter04Builds() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section ref={containerRef} id="builds" className={styles.section} aria-label="The Builds">
      <AnimatedContent distance={30} duration={0.8} className={styles.sectionHeader}>
        <div className={styles.inner}>
          <div className={styles.sectionMeta}>
            <span className={styles.sectionNum}>04</span>
            <span className={styles.sectionName}>The Builds</span>
          </div>
          <h2 className={styles.heading}>
            <ShinyText color="#D8D8D8" shineColor="#FFFFFF" speed={3.0} glow={0.25} angle={120}>
              Case studies &<br />engineered systems
            </ShinyText>
          </h2>
          <p className={styles.sub}>
            Real evidence, verified milestones, zero invented metrics.
            Photography and screenshots appear as they become available.
          </p>
        </div>
      </AnimatedContent>

      {projects.map((project, idx) => (
        <AnimatedContent key={project.id} distance={40} duration={0.85} className={styles.project}>
          <article>
            {/* Full-width project title bar */}
          <div className={styles.projectBar}>
            <div className={styles.inner}>
              <div className={styles.projectBarLeft}>
                <span className={styles.projectIndex}>0{idx + 1}</span>
                {project.isInDevelopment && (
                  <span className={styles.inDevBadge}>In Development</span>
                )}
              </div>
              <h3 className={styles.projectTitle}>
                <ShinyText color="#E8E8E8" shineColor="#FFFFFF" speed={2.8} glow={0.2} angle={120}>
                  {project.title}
                </ShinyText>
              </h3>
            </div>
          </div>

          <div className={styles.inner}>
            <p className={styles.projectSubtitle}>{project.subtitle}</p>

            {/* Problem / Stack */}
            <div className={styles.projectGrid}>
              <div className={styles.projectBlock}>
                <span className={styles.blockLabel}>The Problem</span>
                <p className={styles.blockText}>{project.problem}</p>
              </div>
              <div className={styles.projectBlock}>
                <span className={styles.blockLabel}>Stack</span>
                <div className={styles.stackRow}>
                  {project.stack.map((tech, ti) => (
                    <span key={ti} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contribution */}
            <div className={styles.contribBlock}>
              <span className={styles.blockLabel}>My Contribution</span>
              <ul className={styles.contribList}>
                {project.myContribution.map((item, ci) => (
                  <li key={ci}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Verified outcome */}
            {project.verifiedOutcome && (
              <div className={styles.outcomeBar}>
                <span className={styles.outcomeLabel}>Verified Outcome</span>
                <span className={styles.outcomeText}>{project.verifiedOutcome}</span>
              </div>
            )}

            {/* Placeholder frames */}
            <div className={styles.placeholderGrid}>
              {project.imagePlaceholders.map((ph, pi) => (
                <div key={pi} className={styles.placeholderFrame}>
                  <span className={styles.phMarker} aria-hidden="true">
                    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="0" y1="20" x2="40" y2="20" stroke="#383F51" strokeWidth="1"/>
                      <line x1="20" y1="0" x2="20" y2="40" stroke="#383F51" strokeWidth="1"/>
                    </svg>
                  </span>
                  <span className={styles.phBadge}>Screenshot coming soon</span>
                  <span className={styles.phLabel}>{ph.label}</span>
                </div>
              ))}
            </div>

            {/* Architecture diagram */}
            <ProjectDiagram diagramKey={project.diagramSvgKey} />

            {/* Repo link */}
            {project.repoUrl && (
              <div className={styles.repoRow}>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.repoLink}
                >
                  Source Repository ↗
                </a>
              </div>
            )}
          </div>
        </article>
      </AnimatedContent>
    ))}
    </section>
  );
}

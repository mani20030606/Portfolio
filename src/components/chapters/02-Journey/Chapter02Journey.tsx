'use client';

import { useRef } from 'react';
import Image from 'next/image';
import styles from './Chapter02Journey.module.scss';
import { identity } from '@/content/identity';
import { ShinyText } from '@/components/ui/ShinyText/ShinyText';
import { AnimatedContent } from '@/components/ui/AnimatedContent/AnimatedContent';

const milestones = [
  {
    period: '2019 – 2022',
    role: 'Diploma in Engineering',
    place: 'Smt. B. Seetha Polytechnic College',
    detail: '77%',
    type: 'Education',
  },
  {
    period: '2023 – 2026',
    role: 'B.Tech CSE — AI & ML',
    place: 'Sasi Institute of Technology and Engineering',
    detail: 'CGPA 8.15',
    type: 'Education',
  },
  {
    period: 'Jan 2026 – Present',
    role: 'Computer Vision Engineering Intern',
    place: 'Huebits · Visakhapatnam · Paid, Onsite',
    detail: 'Led Granite Measurement System → 1st Prize RTGS Hackathon',
    type: 'Experience',
  },
];

export function Chapter02Journey() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section ref={containerRef} id="journey" className={styles.section} aria-label="The Journey">
      <div className={styles.inner}>
        {/* Left: timeline */}
        <div className={styles.timelineCol}>
          <AnimatedContent distance={30} duration={0.7}>
            <div className={styles.sectionMeta}>
              <span className={styles.sectionNum}>02</span>
              <span className={styles.sectionName}>The Journey</span>
            </div>

            <h2 className={styles.heading}>
              <ShinyText color="#D8D8D8" shineColor="#FFFFFF" speed={3.0} glow={0.25} angle={120}>
                Education &<br />Engineering<br />Trajectory
              </ShinyText>
            </h2>
          </AnimatedContent>

          <AnimatedContent distance={35} stagger={0.12} duration={0.8}>
            <ol className={styles.timeline} aria-label="Career timeline">
              {milestones.map((m, idx) => (
                <li key={idx} className={styles.milestone}>
                  <div className={styles.milestoneLeft}>
                    <span className={styles.milestonePeriod}>{m.period}</span>
                    <span className={styles.milestoneType}>{m.type}</span>
                  </div>
                  <div className={styles.milestoneDivider}>
                    <span className={styles.dot} aria-hidden="true" />
                    {idx < milestones.length - 1 && (
                      <span className={styles.line} aria-hidden="true" />
                    )}
                  </div>
                  <div className={styles.milestoneRight}>
                    <h3 className={styles.milestoneRole}>{m.role}</h3>
                    <p className={styles.milestonePlace}>{m.place}</p>
                    {m.detail && (
                      <p className={styles.milestoneDetail}>{m.detail}</p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </AnimatedContent>

          {/* Responsibilities */}
          <AnimatedContent distance={30} duration={0.7} className={styles.respBlock}>
            <span className={styles.respLabel}>Work at Huebits</span>
            <ul className={styles.respList}>
              {identity.experience[0].responsibilities.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </AnimatedContent>
        </div>

        {/* Right: documentary photo */}
        <div className={styles.mediaCol}>
          <AnimatedContent distance={40} duration={0.9}>
            <div className={styles.mediaFrame}>
              <Image
                src="/assets/photos/work-huebits-01.png"
                alt="Mani Saideep Chintha at Huebits workspace"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className={styles.workPhoto}
              />
              <div className={styles.mediaCaption}>
                <span className={styles.captionTag}>Documentary</span>
                <span className={styles.captionText}>Computer Vision engineering at Huebits</span>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}

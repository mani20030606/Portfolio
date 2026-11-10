'use client';

import { useRef } from 'react';
import Image from 'next/image';
import styles from './Chapter07Connect.module.scss';
import { links } from '@/content/links';
import { ShinyText } from '@/components/ui/ShinyText/ShinyText';
import { AnimatedContent } from '@/components/ui/AnimatedContent/AnimatedContent';

export function Chapter07Connect() {
  const containerRef = useRef<HTMLElement>(null);

  const contactCards = [
    {
      title: 'Email',
      subtitle: 'Get in touch directly',
      href: links.email ? `mailto:${links.email}` : '#',
      external: false,
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#E5E5E5"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="2" y="4" width="20" height="16" rx="3" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      title: 'Download Resume',
      subtitle: 'Manisaideep_chintha.pdf',
      href: links.resume || '#',
      external: true,
      download: 'Manisaideep_chintha.pdf',
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#E5E5E5"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
      ),
    },
    {
      title: 'LinkedIn',
      subtitle: 'Professional updates',
      href: links.linkedin || '#',
      external: true,
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="#0A66C2"
          aria-hidden="true"
        >
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.84 6.7a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
        </svg>
      ),
    },
    {
      title: 'GitHub',
      subtitle: 'Projects & source code',
      href: links.github || '#',
      external: true,
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="#FFFFFF"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section ref={containerRef} id="connect" className={styles.section} aria-label="Connect">
      <div className={styles.inner}>
        {/* Content Column (Left) */}
        <div className={styles.contentCol}>
          {/* Header Block */}
          <AnimatedContent distance={30} duration={0.8} className={styles.headerBlock}>
            <div className={styles.sectionMeta}>
              <span className={styles.sectionName}>CONNECT</span>
            </div>

            <h2 className={styles.heading}>
              Let&apos;s build<br />
              something{' '}
              <ShinyText
                color="#D6B46A"
                shineColor="#FFF4D4"
                speed={2.8}
                glow={0.35}
                angle={120}
                className={styles.impactfulText}
              >
                impactful.
              </ShinyText>
            </h2>

            <p className={styles.sub}>
              Open to opportunities in AI/ML and Computer Vision. Always excited to collaborate on
              real-world, meaningful problems.
            </p>

            {/* Status Pill */}
            <div className={styles.statusPill}>
              <span className={styles.statusDot} aria-hidden="true" />
              <span className={styles.statusPillTitle}>Open to Work</span>
              <span className={styles.statusDivider} aria-hidden="true">|</span>
              <span className={styles.statusPillDetail}>
                Available for Intern · Full-time · Project Collaboration
              </span>
            </div>
          </AnimatedContent>

          {/* 2-Column Cards Grid */}
          <AnimatedContent
            distance={25}
            stagger={0.08}
            duration={0.7}
            className={styles.cardsGrid}
          >
            {contactCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                target={card.external ? '_blank' : undefined}
                rel={card.external ? 'noopener noreferrer' : undefined}
                download={card.download ? card.download : undefined}
                className={styles.card}
              >
                <div className={styles.cardLeft}>
                  <div className={styles.cardIconWrapper}>{card.icon}</div>
                  <div className={styles.cardInfo}>
                    <span className={styles.cardTitle}>{card.title}</span>
                    <span className={styles.cardSubtitle}>{card.subtitle}</span>
                  </div>
                </div>
                <span className={styles.cardArrow} aria-hidden="true">↗</span>
              </a>
            ))}
          </AnimatedContent>
        </div>

        {/* Portrait Column (Right) */}
        <div className={styles.portraitCol}>
          <AnimatedContent distance={40} duration={0.9}>
            <div className={styles.portraitFrame}>
              <Image
                src="/assets/photos/black_white_portrait_2x.png"
                alt="Mani Saideep Chintha — Contact"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 420px"
                className={styles.portrait}
                priority={false}
              />
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}

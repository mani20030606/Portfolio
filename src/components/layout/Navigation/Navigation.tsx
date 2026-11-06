'use client';

import { useState, useEffect } from 'react';
import styles from './Navigation.module.scss';
import { links } from '@/content/links';

const chapters = [
  { num: '00', name: 'Beginning', id: 'beginning' },
  { num: '01', name: 'Person', id: 'person' },
  { num: '02', name: 'Journey', id: 'journey' },
  { num: '03', name: 'Mind', id: 'mind' },
  { num: '04', name: 'Builds', id: 'builds' },
  { num: '05', name: 'Impact', id: 'impact' },
  { num: '06', name: 'Beyond', id: 'beyond' },
  { num: '07', name: 'Connect', id: 'connect' },
];

export function Navigation() {
  const [activeChapter, setActiveChapter] = useState('00');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress((window.scrollY / docHeight) * 100);
      }

      // Check current visible chapter
      const chapterElements = chapters.map((c) => ({
        num: c.num,
        el: document.getElementById(c.id),
      }));

      for (const item of chapterElements.reverse()) {
        if (item.el) {
          const rect = item.el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            setActiveChapter(item.num);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trap Escape key for accessibility in mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={styles.navbar}>
        {/* Top Scroll Progress Indicator */}
        <div
          className={styles.progressBar}
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />

        <div className={styles.navContainer}>
          {/* Status Chip (Plain text, No Logo) */}
          <div className={styles.statusChip}>
            <span className={styles.statusDot} aria-hidden="true" />
            <span className={styles.statusText}>Open to Work</span>
          </div>

          {/* Desktop Chapter Links (Numbered Plain Text) */}
          <nav className={styles.desktopNav} aria-label="Main Navigation">
            {chapters.map((ch) => (
              <a
                key={ch.num}
                href={`#${ch.id}`}
                className={`${styles.chapterLink} ${
                  activeChapter === ch.num ? styles.active : ''
                }`}
              >
                <span className={styles.chapterNum}>{ch.num}</span>
                <span className={styles.chapterName}>{ch.name}</span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            className={styles.menuToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className={styles.menuLabel}>
              {mobileMenuOpen ? 'Close' : 'Menu'}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className={styles.mobileOverlay} role="dialog" aria-modal="true">
          <div className={styles.mobileDrawer}>
            <nav className={styles.mobileNav} aria-label="Mobile Navigation">
              {chapters.map((ch) => (
                <a
                  key={ch.num}
                  href={`#${ch.id}`}
                  className={`${styles.mobileLink} ${
                    activeChapter === ch.num ? styles.active : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className={styles.mobileNum}>{ch.num}</span>
                  <span className={styles.mobileName}>{ch.name}</span>
                </a>
              ))}
            </nav>

            <div className={styles.mobileSocials}>
              {links.github && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  GitHub
                </a>
              )}
              {links.linkedin && (
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

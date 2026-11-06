'use client';

import { useState, useEffect } from 'react';
import styles from './Navigation.module.scss';
import { links } from '@/content/links';

const navLinks = [
  { num: '01', name: 'Home', id: 'beginning' },
  { num: '02', name: 'About', id: 'person' },
  { num: '03', name: 'Projects', id: 'builds' },
  { num: '04', name: 'Experience', id: 'journey' },
  { num: '05', name: 'Achievements', id: 'impact' },
  { num: '06', name: 'Contact', id: 'connect' },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState('beginning');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress((window.scrollY / docHeight) * 100);
      }

      // Check current visible section
      const sectionElements = navLinks.map((c) => ({
        id: c.id,
        el: document.getElementById(c.id),
      }));

      for (const item of sectionElements.reverse()) {
        if (item.el) {
          const rect = item.el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            setActiveSection(item.id);
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
          {/* Brand Left: Infinity Icon + MANI SAIDEEP CHINTHA */}
          <a href="#beginning" className={styles.brand} aria-label="Mani Saideep Chintha — Home">
            <svg
              viewBox="0 0 28 14"
              className={styles.infinityIcon}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M 7,7 C 7,3.5 10.5,3.5 14,7 C 17.5,10.5 21,10.5 21,7 C 21,3.5 17.5,3.5 14,7 C 10.5,10.5 7,10.5 7,7 Z" />
            </svg>
            <span className={styles.brandName}>MANI SAIDEEP CHINTHA</span>
          </a>

          {/* Desktop Links: 01 Home, 02 About, 03 Projects, 04 Experience, 05 Achievements, 06 Contact */}
          <nav className={styles.desktopNav} aria-label="Main Navigation">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`${styles.navItem} ${
                  activeSection === item.id ? styles.active : ''
                }`}
              >
                <span className={styles.navNum}>{item.num}</span>
                <span className={styles.navText}>{item.name}</span>
                {activeSection === item.id && (
                  <span className={styles.activeUnderline} aria-hidden="true" />
                )}
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
              {navLinks.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`${styles.mobileLink} ${
                    activeSection === item.id ? styles.active : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className={styles.mobileNum}>{item.num}</span>
                  <span className={styles.mobileName}>{item.name}</span>
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

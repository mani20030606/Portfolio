'use client';

import { useState, useEffect } from 'react';
import styles from './Navigation.module.scss';
import PillNav, { type PillNavItem } from '@/components/ui/PillNav/PillNav';
import { links } from '@/content/links';
import { getLenis } from '@/lib/animation/lenis';

const navLinks = [
  { name: 'Home', id: 'beginning', href: '#beginning' },
  { name: 'About', id: 'person', href: '#person' },
  { name: 'Journey', id: 'journey', href: '#journey' },
  { name: 'Technologies', id: 'mind', href: '#mind' },
  { name: 'Projects', id: 'builds', href: '#builds' },
  { name: 'Achievements', id: 'impact', href: '#impact' },
  { name: 'Contact', id: 'connect', href: '#connect' },
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

      // Check current visible section in sequential order
      const sectionElements = navLinks.map((c) => ({
        id: c.id,
        el: document.getElementById(c.id),
      }));

      for (const item of sectionElements.slice().reverse()) {
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

    // Connect to Lenis smooth scroll
    const lenis = getLenis();
    if (lenis) {
      lenis.on('scroll', handleScroll);
    }

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (lenis) {
        lenis.off('scroll', handleScroll);
      }
    };
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

  const pillItems = navLinks.map((item) => ({
    label: item.name,
    href: item.href,
    ariaLabel: item.name,
  }));

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
          {/* Brand Left: Infinity Icon + MANI SAIDEEP CHINTHA with wide gap to right */}
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

          {/* Desktop Nav on the right with PillNav effect */}
          <div className={styles.navRight}>
            <PillNav
              items={pillItems}
              activeHref={`#${activeSection}`}
              onItemClick={(item, index, event) => {
                const targetId = item.href?.replace('#', '');
                if (targetId) {
                  setActiveSection(targetId);
                  const el = document.getElementById(targetId);
                  if (el) {
                    event.preventDefault();
                    const lenis = getLenis();
                    if (lenis) {
                      lenis.scrollTo(el, { offset: -60, duration: 1.2 });
                    } else {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }
              }}
              itemStyle="pill"
              hoverEffect="fill"
              indicator="dot"
              theme="dark"
              size="sm"
              collapse="auto"
            />
          </div>
        </div>
      </header>

      {/* Fallback Mobile Drawer Navigation */}
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

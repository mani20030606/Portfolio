'use client';

import { useEffect, useState } from 'react';
import styles from './Preloader.module.scss';

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Check if visited previously in this session to respect max 1s / repeat visit rule
    const hasVisited = sessionStorage.getItem('infinite_builder_visited');
    if (hasVisited) {
      setVisible(false);
      return;
    }

    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 700);

    const removeTimer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem('infinite_builder_visited', 'true');
    }, 1000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`${styles.preloader} ${fading ? styles.fading : ''}`}
      aria-hidden="true"
    >
      <div className={styles.inner}>
        <svg
          viewBox="0 0 160 80"
          className={styles.infinitySvg}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background subtle track */}
          <path
            d="M 40,40 C 40,22 62,22 80,40 C 98,58 120,58 120,40 C 120,22 98,22 80,40 C 62,58 40,58 40,40 Z"
            className={styles.trackPath}
          />
          {/* Animated drawing pulse */}
          <path
            d="M 40,40 C 40,22 62,22 80,40 C 98,58 120,58 120,40 C 120,22 98,22 80,40 C 62,58 40,58 40,40 Z"
            className={styles.pulsePath}
          />
        </svg>
      </div>
    </div>
  );
}

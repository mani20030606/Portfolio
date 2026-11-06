'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { FallbackInfinity } from './FallbackInfinity';
import styles from './CanvasContainer.module.scss';

// Dynamically import LemniscateScene with ssr: false per spec Section 15
const LemniscateScene = dynamic(
  () => import('./LemniscateScene').then((mod) => mod.LemniscateScene),
  {
    ssr: false,
    loading: () => <FallbackInfinity />,
  }
);

export function CanvasContainer() {
  const [mounted, setMounted] = useState(false);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // Check WebGL availability
    const hasWebGL = (() => {
      try {
        const canvas = document.createElement('canvas');
        return !!(
          window.WebGLRenderingContext &&
          (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
        );
      } catch {
        return false;
      }
    })();

    if (prefersReducedMotion || !hasWebGL) {
      setUseFallback(true);
    }
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={styles.canvasWrapper} aria-hidden="true">
      {useFallback ? <FallbackInfinity /> : <LemniscateScene />}
    </div>
  );
}


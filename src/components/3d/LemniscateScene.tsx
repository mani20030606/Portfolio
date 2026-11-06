'use client';

import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { LemniscateParticles } from './LemniscateParticles';

export function LemniscateScene() {
  const [particleCount, setParticleCount] = useState(18000);
  const [isTabActive, setIsTabActive] = useState(true);

  useEffect(() => {
    // Adapt particle count to device class per spec
    const isMobile = window.innerWidth < 768;
    setParticleCount(isMobile ? 6000 : 22000);

    // Pause rendering on hidden tab per spec
    const handleVisibilityChange = () => {
      setIsTabActive(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  if (!isTabActive) return null;

  return (
    <Canvas
      camera={{ position: [0, 0, 10.5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: false,
        powerPreference: 'high-performance',
        alpha: true,
      }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    >
      <LemniscateParticles particleCount={particleCount} />
    </Canvas>
  );
}


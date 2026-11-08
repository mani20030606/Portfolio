'use client';

import { useEffect } from 'react';
import { Preloader } from '@/components/ui/Preloader/Preloader';
import { Navigation } from '@/components/layout/Navigation/Navigation';
import { RecruiterStrip } from '@/components/ui/RecruiterStrip/RecruiterStrip';
import { CanvasContainer } from '@/components/3d/CanvasContainer';
import { Chapter00Beginning } from '@/components/chapters/00-Beginning/Chapter00Beginning';
import { Chapter01Person } from '@/components/chapters/01-Person/Chapter01Person';
import { Chapter02Journey } from '@/components/chapters/02-Journey/Chapter02Journey';
import { Chapter03Mind } from '@/components/chapters/03-Mind/Chapter03Mind';
import { Chapter04Builds } from '@/components/chapters/04-Builds/Chapter04Builds';
import { Chapter05Impact } from '@/components/chapters/05-Impact/Chapter05Impact';
import { Chapter06Beyond } from '@/components/chapters/06-Beyond/Chapter06Beyond';
import { Chapter07Connect } from '@/components/chapters/07-Connect/Chapter07Connect';
import { initSmoothScroll, destroySmoothScroll } from '@/lib/animation/lenis';

export default function Home() {
  useEffect(() => {
    initSmoothScroll();
    return () => {
      destroySmoothScroll();
    };
  }, []);

  return (
    <>
      <Preloader />
      <Navigation />
      {/* 3D background loop disabled per user request */}
      {/* <CanvasContainer /> */}

      <main id="main-content">
        <Chapter00Beginning />
        <RecruiterStrip />
        <Chapter01Person />
        <Chapter02Journey />
        <Chapter03Mind />
        <Chapter04Builds />
        <Chapter05Impact />
        <Chapter06Beyond />
        <Chapter07Connect />
      </main>
    </>
  );
}

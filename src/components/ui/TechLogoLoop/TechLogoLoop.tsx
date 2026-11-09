'use client';

import LogoLoop, { type LogoItem } from '@/components/ui/LogoLoop/LogoLoop';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiPytorch,
  SiOpencv,
  SiTensorflow,
  SiFastapi,
  SiDocker,
  SiNvidia,
  SiGit,
} from 'react-icons/si';
import styles from './TechLogoLoop.module.scss';

const techLogos: LogoItem[] = [
  { node: <SiPython />, title: 'Python', href: 'https://python.org', hoverColor: '#3776AB' },
  { node: <SiPytorch />, title: 'PyTorch', href: 'https://pytorch.org', hoverColor: '#EE4C2C' },
  { node: <SiOpencv />, title: 'OpenCV', href: 'https://opencv.org', hoverColor: '#5C3EE8' },
  { node: <SiTensorflow />, title: 'TensorFlow', href: 'https://tensorflow.org', hoverColor: '#FF6F00' },
  { node: <SiFastapi />, title: 'FastAPI', href: 'https://fastapi.tiangolo.com', hoverColor: '#009688' },
  { node: <SiDocker />, title: 'Docker', href: 'https://docker.com', hoverColor: '#2496ED' },
  { node: <SiNvidia />, title: 'NVIDIA CUDA', href: 'https://developer.nvidia.com', hoverColor: '#76B900' },
  { node: <SiReact />, title: 'React', href: 'https://react.dev', hoverColor: '#61DAFB' },
  { node: <SiNextdotjs />, title: 'Next.js', href: 'https://nextjs.org', hoverColor: '#FFFFFF' },
  { node: <SiTypescript />, title: 'TypeScript', href: 'https://typescriptlang.org', hoverColor: '#3178C6' },
  { node: <SiTailwindcss />, title: 'Tailwind CSS', href: 'https://tailwindcss.com', hoverColor: '#38BDF8' },
  { node: <SiGit />, title: 'Git', href: 'https://git-scm.com', hoverColor: '#F05032' },
];

export function TechLogoLoop() {
  return (
    <section className={styles.section} aria-label="Engineered with modern technologies">
      <div className={styles.container}>
        <div className={styles.eyebrow}>
          <span className={styles.dot} aria-hidden="true" />
          <span>ENGINEERED WITH MODERN TECHNOLOGIES</span>
        </div>

        <div className={styles.loopWrap}>
          <LogoLoop
            logos={techLogos}
            speed={55}
            direction="left"
            logoHeight={34}
            gap={48}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutWidth={0.14}
            ariaLabel="Engineered with modern technologies"
          />
        </div>

        {/* Centered Footer at the very bottom of the page */}
        <footer className={styles.footerNote}>
          <p>© {new Date().getFullYear()} Mani Saideep Chintha. All rights reserved.</p>
          <p>Designed & built with Next.js, TypeScript, SCSS, GSAP, and Three.js.</p>
        </footer>
      </div>
    </section>
  );
}
export default TechLogoLoop;

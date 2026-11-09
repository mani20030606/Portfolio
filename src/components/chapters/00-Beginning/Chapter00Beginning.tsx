'use client';

import Image from 'next/image';
import styles from './Chapter00Beginning.module.scss';
import { ShinyText } from '@/components/ui/ShinyText/ShinyText';
import { AnimatedContent } from '@/components/ui/AnimatedContent/AnimatedContent';

export function Chapter00Beginning() {
  return (
    <section id="beginning" className={styles.section} aria-label="The Beginning">
      {/* Chapter eyebrow row with extending rule */}
      <AnimatedContent distance={20} direction="vertical" duration={0.6} trigger="mount" delay={0.1} className={styles.labelRow}>
        <span className={styles.chapterLabel}>00 / THE BEGINNING</span>
        <span className={styles.labelLine} aria-hidden="true" />
      </AnimatedContent>

      {/* Main content: Headline, Subtitle, CTAs staggering in turn */}
      <div className={styles.contentWrap}>
        <AnimatedContent
          distance={45}
          direction="vertical"
          duration={0.85}
          ease="power3.out"
          stagger={0.12}
          trigger="mount"
          delay={0.18}
          className={styles.headlineWrap}
        >
          <h1 className={styles.headline}>
            <ShinyText color="#A8A8A8" shineColor="#FFFFFF" speed={2.8} glow={0.3} angle={120}>
              I turn
            </ShinyText>
            <br />
            <span className={styles.headlineLine2}>
              <ShinyText
                color="#C0C0C0"
                shineColor="#FFFFFF"
                speed={2.2}
                shineWidth={70}
                softness={0.6}
                glow={0.55}
                angle={120}
                className={styles.headlineAccent}
              >
                curiosity
              </ShinyText>
              <ShinyText color="#A8A8A8" shineColor="#FFFFFF" speed={2.8} glow={0.3} angle={120}>
                into
              </ShinyText>
            </span>
            <br />
            <ShinyText color="#A8A8A8" shineColor="#FFFFFF" speed={3.0} glow={0.3} angle={120}>
              working systems.
            </ShinyText>
          </h1>

          <p className={styles.subtitle}>
            AI/ML Engineer and Computer Vision Developer building real-world solutions at the intersection of data, vision and impact.
          </p>

          <div className={styles.ctas}>
            <a href="#builds" className={styles.primaryBtn}>
              <span>Explore My Work</span>
              <span className={styles.btnArrow} aria-hidden="true">↗</span>
            </a>
            <a href="#connect" className={styles.secondaryBtn}>
              <span>Get in Touch</span>
            </a>
          </div>
        </AnimatedContent>
      </div>

      {/* Center-Right Hero Portrait (Substantially larger and commanding) */}
      <AnimatedContent
        distance={40}
        direction="vertical"
        duration={1.0}
        ease="power3.out"
        trigger="mount"
        delay={0.22}
        className={styles.portraitArea}
        aria-label="Mani Saideep Chintha — Portrait"
      >
        <div className={styles.heroImgWrap}>
          <Image
            src="/assets/photos/hero-01.png"
            alt="Mani Saideep Chintha"
            fill
            priority
            sizes="(max-width: 768px) 95vw, 60vw"
            className={styles.heroImg}
          />
          <div className={styles.portraitFade} />
        </div>
      </AnimatedContent>

      {/* Right vertical technical domain sidebar */}
      <aside className={styles.rightSidebar} aria-label="Core Engineering Domains">
        <div className={styles.sidebarLine} aria-hidden="true" />
        <AnimatedContent
          distance={25}
          direction="horizontal"
          duration={0.8}
          ease="power3.out"
          stagger={0.08}
          trigger="mount"
          delay={0.4}
          className={styles.sidebarTags}
        >
          <span className={styles.sidebarTag}>AI/ML</span>
          <span className={styles.sidebarTag}>COMPUTER VISION</span>
          <span className={styles.sidebarTag}>DEEP LEARNING</span>
          <span className={styles.sidebarTag}>PRODUCT ENGINEERING</span>
        </AnimatedContent>
      </aside>
    </section>
  );
}

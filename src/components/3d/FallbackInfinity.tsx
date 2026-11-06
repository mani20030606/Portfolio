import styles from './FallbackInfinity.module.scss';

export function FallbackInfinity() {
  return (
    <div className={styles.fallbackWrapper} aria-hidden="true">
      <svg
        viewBox="0 0 200 100"
        className={styles.infinitySvg}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="fallbackGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#777777" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#AAAAAA" stopOpacity="0.6" />
          </linearGradient>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient Glow Trail */}
        <path
          d="M 50,50 C 50,28 78,28 100,50 C 122,72 150,72 150,50 C 150,28 122,28 100,50 C 78,72 50,72 50,50 Z"
          className={styles.glowTrack}
          stroke="url(#fallbackGrad)"
          filter="url(#softGlow)"
        />

        {/* Core Sharp Stroke */}
        <path
          d="M 50,50 C 50,28 78,28 100,50 C 122,72 150,72 150,50 C 150,28 122,28 100,50 C 78,72 50,72 50,50 Z"
          className={styles.coreTrack}
          stroke="url(#fallbackGrad)"
        />
      </svg>
    </div>
  );
}


import styles from './RecruiterStrip.module.scss';
import { links } from '@/content/links';

export function RecruiterStrip() {
  return (
    <aside className={styles.strip} aria-label="Recruiter quick summary">
      <div className={styles.container}>
        <div className={styles.item}>
          <span className={styles.label}>Role</span>
          <span className={styles.value}>AI/ML · Computer Vision Engineer</span>
        </div>
        <div className={styles.divider} aria-hidden="true" />
        <div className={styles.item}>
          <span className={styles.label}>Now</span>
          <span className={styles.value}>CV Intern @ Huebits</span>
        </div>
        <div className={styles.divider} aria-hidden="true" />
        <div className={styles.item}>
          <span className={styles.label}>Location</span>
          <span className={styles.value}>Visakhapatnam, India</span>
        </div>
        {links.resume && (
          <a
            href={links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeBtn}
          >
            Resume ↗
          </a>
        )}
      </div>
    </aside>
  );
}

import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { projects, type ProjectItem } from '@/content/projects';
import styles from './ProjectPage.module.scss';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) return {};

  const title = `${project.title} | Mani Saideep Chintha`;
  const description = `${project.description} Engineered with ${project.stack.slice(0, 4).join(', ')}.`;
  const canonicalUrl = `/projects/${project.id}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'article',
      url: `https://manisaideep-chintha-portfolio.vercel.app/projects/${project.id}`,
      title,
      description,
      siteName: 'Mani Saideep Chintha Portfolio',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `${project.title} — Mani Saideep Chintha`,
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.jpg'],
      creator: '@manisaideep03',
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  const projectJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `https://manisaideep-chintha-portfolio.vercel.app/projects/${project.id}#software`,
    name: project.title,
    headline: project.subtitle,
    description: project.description,
    applicationCategory: 'Computer Vision & AI Engineering',
    operatingSystem: 'Cross-platform, Edge AI, Linux',
    author: {
      '@type': 'Person',
      name: 'Mani Saideep Chintha',
      url: 'https://manisaideep-chintha-portfolio.vercel.app',
      sameAs: [
        'https://www.linkedin.com/in/mani-saideep-chintha-95bb07298/',
        'https://github.com/mani20030606',
      ],
    },
    creator: {
      '@type': 'Person',
      name: 'Mani Saideep Chintha',
    },
    keywords: project.stack.join(', '),
    url: `https://manisaideep-chintha-portfolio.vercel.app/projects/${project.id}`,
  };

  return (
    <div className={styles.pageWrapper}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <div className={styles.container}>
        {/* Top Navigation */}
        <header className={styles.navBar}>
          <Link href="/#builds" className={styles.backLink}>
            <span aria-hidden="true">←</span> Back to Portfolio
          </Link>
          <span className={styles.brandTitle}>Mani Saideep Chintha</span>
        </header>

        {/* Project Header */}
        <section className={styles.projectHeader}>
          <div className={styles.badgeRow}>
            <span className={styles.projectIndex}>CASE STUDY #{project.index}</span>
            <span className={styles.statusBadge}>{project.badgeText}</span>
          </div>

          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.subtitle}>{project.subtitle}</p>

          <div className={styles.attribution}>
            <span>{project.attribution}</span>
          </div>
        </section>

        {/* Key Metrics Strip */}
        {project.keyResults && project.keyResults.length > 0 && (
          <section className={styles.keyResultsSection} aria-label="Key Measurable Results">
            {project.keyResults.map((result, i) => (
              <div key={i} className={styles.resultCard}>
                <span className={`${styles.resultValue} ${result.isGold ? styles.gold : ''}`}>
                  {result.value}
                </span>
                <span className={styles.resultLabel}>{result.label}</span>
              </div>
            ))}
          </section>
        )}

        {/* Problem & Solution Block */}
        <section className={styles.contentBlock}>
          <h2 className={styles.sectionHeading}>The Problem</h2>
          <p className={styles.paragraph}>{project.problem}</p>

          <h2 className={styles.sectionHeading} style={{ marginTop: '28px' }}>
            Engineering Approach & Solution
          </h2>
          <p className={styles.paragraph}>{project.approach}</p>
          <p className={styles.paragraph}>{project.solution}</p>
          {project.outcome && <p className={styles.paragraph}>{project.outcome}</p>}
        </section>

        {/* My Engineering Contributions */}
        {project.myContribution && project.myContribution.length > 0 && (
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionHeading}>My Direct Contributions</h2>
            <ul className={styles.contributionList}>
              {project.myContribution.map((contrib, i) => (
                <li key={i} className={styles.contributionItem}>
                  <span className={styles.bulletDot} aria-hidden="true" />
                  <span>{contrib}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Technology Stack */}
        <section className={styles.contentBlock}>
          <h2 className={styles.sectionHeading}>Technology Stack & Architecture</h2>
          <div className={styles.techStackGrid}>
            {project.stack.map((tech) => (
              <span key={tech} className={styles.techPill}>
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Footer Actions */}
        <footer className={styles.footerActions}>
          <Link href="/#builds" className={styles.primaryCta}>
            <span>Explore All Projects</span>
            <span aria-hidden="true">→</span>
          </Link>
          <Link href="/#connect" className={styles.secondaryCta}>
            <span>Get in Touch</span>
          </Link>
        </footer>
      </div>
    </div>
  );
}


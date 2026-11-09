import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.scss';

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mani Saideep Chintha — portfolio',
  description:
    'AI/ML Engineer · Computer Vision Developer · AI Product Builder. Turning curiosity into working systems. Open to Work.',
  keywords: [
    'Mani Saideep Chintha',
    'AI Engineer',
    'Computer Vision',
    'YOLOv8',
    'FastAPI',
    'React Native',
    'Edge AI',
    'Machine Learning',
  ],
  authors: [{ name: 'Mani Saideep Chintha' }],
  metadataBase: new URL('https://manisaideep.dev'),
  openGraph: {
    title: 'Mani Saideep Chintha — The Infinite Builder',
    description:
      'AI/ML Engineer · Computer Vision Developer. I turn curiosity into working systems. Open to Work.',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mani Saideep Chintha',
  jobTitle: 'AI/ML Engineer & Computer Vision Developer',
  url: 'https://manisaideep.dev',
  email: 'mailto:manisaideep03@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Visakhapatnam',
    addressRegion: 'Andhra Pradesh',
    addressCountry: 'India',
  },
  alumniOf: [
    {
      '@type': 'EducationalOrganization',
      name: 'Sasi Institute of Technology and Engineering',
    },
    {
      '@type': 'EducationalOrganization',
      name: 'Smt. B. Seetha Polytechnic College',
    },
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Huebits',
  },
  sameAs: [
    'https://github.com/mani20030606',
    'https://linkedin.com/in/mani-saideep-chintha',
    'https://kaggle.com/manisaideepchintha',
  ],
  knowsAbout: [
    'Computer Vision',
    'YOLOv8',
    'MobileSAM',
    'Object Detection',
    'Edge AI',
    'FastAPI',
    'React Native',
    'GraphRAG',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${roboto.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#beginning" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}

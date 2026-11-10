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
  metadataBase: new URL('https://manisaideep-chintha-portfolio.vercel.app'),
  title: 'Mani Saideep Chintha | AI/ML Engineer & Computer Vision',
  description:
    'Portfolio of Mani Saideep Chintha, AI/ML Engineer and Computer Vision Developer building intelligent systems through deep learning, edge AI, and real-world engineering.',
  keywords: [
    'Mani Saideep Chintha',
    'AI Engineer',
    'AI/ML Engineer',
    'Computer Vision Developer',
    'Edge AI',
    'Deep Learning',
    'YOLOv8',
    'MobileSAM',
    'FastAPI',
    'React Native',
    'PyTorch',
    'OpenCV',
    'GraphRAG',
  ],
  authors: [{ name: 'Mani Saideep Chintha', url: 'https://manisaideep-chintha-portfolio.vercel.app' }],
  creator: 'Mani Saideep Chintha',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/Golden%20Infinity%20Ribbon%20Logo.png', type: 'image/png' },
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/Golden%20Infinity%20Ribbon%20Logo.png',
    apple: '/Golden%20Infinity%20Ribbon%20Logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://manisaideep-chintha-portfolio.vercel.app',
    siteName: 'Mani Saideep Chintha Portfolio',
    title: 'Mani Saideep Chintha | AI/ML Engineer & Computer Vision',
    description:
      'Portfolio of Mani Saideep Chintha, AI/ML Engineer and Computer Vision Developer building intelligent systems through deep learning, edge AI, and real-world engineering.',
    images: [
      {
        url: '/assets/photos/hero-01.png',
        width: 1122,
        height: 1402,
        alt: 'Mani Saideep Chintha — AI/ML Engineer and Computer Vision Developer',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mani Saideep Chintha | AI/ML Engineer & Computer Vision',
    description:
      'Portfolio of Mani Saideep Chintha, AI/ML Engineer and Computer Vision Developer building intelligent systems through deep learning, edge AI, and real-world engineering.',
    images: ['/assets/photos/hero-01.png'],
    creator: '@manisaideep03',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://manisaideep-chintha-portfolio.vercel.app/#person',
      name: 'Mani Saideep Chintha',
      givenName: 'Mani Saideep',
      familyName: 'Chintha',
      jobTitle: 'AI/ML Engineer and Computer Vision Developer',
      description:
        'AI/ML Engineer and Computer Vision Developer building intelligent systems through deep learning, edge AI, and real-world engineering.',
      url: 'https://manisaideep-chintha-portfolio.vercel.app',
      image: 'https://manisaideep-chintha-portfolio.vercel.app/assets/photos/hero-01.png',
      sameAs: [
        'https://www.linkedin.com/in/mani-saideep-chintha-95bb07298/',
        'https://github.com/mani20030606',
        'https://kaggle.com/manisaideepchintha',
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'Huebits',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Visakhapatnam',
          addressRegion: 'Andhra Pradesh',
          addressCountry: 'India',
        },
      },
      alumniOf: [
        {
          '@type': 'EducationalOrganization',
          name: 'Sasi Institute of Technology and Engineering',
          department: 'Computer Science and Engineering (AI & ML)',
        },
        {
          '@type': 'EducationalOrganization',
          name: 'Smt. B. Seetha Polytechnic College',
          department: 'Computer Engineering',
        },
      ],
      knowsAbout: [
        'Computer Vision',
        'Deep Learning',
        'Edge AI',
        'YOLOv8',
        'MobileSAM',
        'PyTorch',
        'OpenCV',
        'FastAPI',
        'React Native',
        'GraphRAG',
        'Camera Calibration',
        'Model Quantization',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://manisaideep-chintha-portfolio.vercel.app/#website',
      name: 'Mani Saideep Chintha | AI/ML Engineer & Computer Vision',
      url: 'https://manisaideep-chintha-portfolio.vercel.app',
      description:
        'Portfolio of Mani Saideep Chintha, AI/ML Engineer and Computer Vision Developer building intelligent systems through deep learning, edge AI, and real-world engineering.',
      inLanguage: 'en-US',
      publisher: {
        '@id': 'https://manisaideep-chintha-portfolio.vercel.app/#person',
      },
    },
    {
      '@type': 'ProfilePage',
      '@id': 'https://manisaideep-chintha-portfolio.vercel.app/#profilepage',
      name: 'Mani Saideep Chintha | AI/ML Engineer & Computer Vision',
      url: 'https://manisaideep-chintha-portfolio.vercel.app',
      isPartOf: {
        '@id': 'https://manisaideep-chintha-portfolio.vercel.app/#website',
      },
      mainEntity: {
        '@id': 'https://manisaideep-chintha-portfolio.vercel.app/#person',
      },
      description:
        'Portfolio of Mani Saideep Chintha, AI/ML Engineer and Computer Vision Developer building intelligent systems through deep learning, edge AI, and real-world engineering.',
    },
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

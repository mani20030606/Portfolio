export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  detail: string;
}

export interface ExperienceItem {
  company: string;
  location: string;
  period: string;
  role: string;
  type: string;
  summary: string;
  responsibilities: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  event: string;
  description: string;
  isPrimary: boolean;
}

export const identity = {
  name: 'Mani Saideep Chintha',
  location: 'Visakhapatnam, Andhra Pradesh, India',
  title: 'AI/ML Engineer and Computer Vision Developer',
  status: 'Open to meaningful connections',
  statusDetail: 'Open to meaningful connections, collaborations, and engineering conversations.',
  heroHeadline: 'I turn curiosity into working systems.',
  tagline: 'A journey through curiosity, intelligence, and creation.',
  heroDescription:
    'Exploring Artificial Intelligence, Computer Vision, and intelligent products. Building technology that solves real-world problems.',
  positioning:
    'Takes problems from research through model training, backend APIs, mobile app integration, and testing.',
  
  education: [
    {
      period: '2019 – 2022',
      degree: 'Diploma in Engineering',
      institution: 'Smt. B. Seetha Polytechnic College',
      detail: '77%',
    },
    {
      period: '2023 – 2026',
      degree: 'B.Tech CSE (AI & ML)',
      institution: 'Sasi Institute of Technology and Engineering, Tadepalligudem',
      detail: 'CGPA 8.15',
    },
  ] as EducationItem[],

  experience: [
    {
      company: 'Huebits',
      location: 'Visakhapatnam, India',
      period: 'Jan 2026 – Present',
      role: 'Computer Vision Engineering Intern',
      type: 'Paid · Onsite',
      summary:
        'Led end-to-end computer vision engineering, including data pipelines, segmentation models, API backends, and on-device deployment.',
      responsibilities: [
        'Dataset preparation, curation, and precision annotation for vision models',
        'Object detection and segmentation model training and evaluation',
        'Model optimization, quantization, and conversion for edge deployment',
        'FastAPI backend service development and API integration',
        'React Native + TypeScript (Expo) mobile client integration',
        'End-to-end prototype development and testing in real-world scenarios',
      ],
    },
  ] as ExperienceItem[],

  achievements: [
    {
      id: 'rtgs-hackathon',
      title: 'First Prize',
      event: 'RTGS Hackathon',
      description:
        'Awarded First Prize for leading the development of the AI-Powered Granite Measurement System during the Huebits internship.',
      isPrimary: true,
    },
    {
      id: 'product-space-hackathon',
      title: 'Hackathon Participant',
      event: 'AI Hackathon by Product Space × Wispr Flow',
      description:
        'Built CareerPilot AI—an end-to-end AI career copilot with resume analysis, skill-gap detection, and mock interviews.',
      isPrimary: false,
    },
  ] as AchievementItem[],
};

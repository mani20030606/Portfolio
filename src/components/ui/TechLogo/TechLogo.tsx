import React from 'react';

interface TechLogoProps {
  name: string;
  size?: number;
  className?: string;
}

export function TechLogo({ name, size = 14, className }: TechLogoProps) {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, '');

  switch (normalized) {
    case 'python':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M11.9 2C6.8 2 7.1 4.2 7.1 4.2l.01 2.3h4.9v.7H5.2S2 6.8 2 11.9s2.8 4.9 2.8 4.9h1.7v-2.4s-.1-2.8 2.8-2.8h4.8s2.7.1 2.7-2.7V4.7s.4-2.7-4.9-2.7zm-2.7 1.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z"
            fill="#3776AB"
          />
          <path
            d="M12.1 22c5.1 0 4.8-2.2 4.8-2.2l-.01-2.3H12v-.7h6.8s3.2.4 3.2-4.7-2.8-4.9-2.8-4.9h-1.7v2.4s.1 2.8-2.8 2.8H9.9s-2.7-.1-2.7 2.7v4.1s-.4 2.8 4.9 2.8zm2.7-1.5c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z"
            fill="#FFD43B"
          />
        </svg>
      );

    case 'pytorch':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M13.5 2.5a.7.7 0 0 0-.9.2L11 5.3a8.5 8.5 0 1 0 6.6 4 .7.7 0 1 0-1.2.7 7.1 7.1 0 1 1-5.5-3.3l1.8-2.9a.7.7 0 0 0-.2-1.3z"
            fill="#EE4C2C"
          />
          <circle cx="16.5" cy="5.5" r="1.5" fill="#EE4C2C" />
        </svg>
      );

    case 'opencv':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="7" r="4" stroke="#EA2F2F" strokeWidth="2" />
          <circle cx="7" cy="16" r="4" stroke="#46B432" strokeWidth="2" />
          <circle cx="17" cy="16" r="4" stroke="#256CE8" strokeWidth="2" />
        </svg>
      );

    case 'reactnative':
    case 'react':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
        </svg>
      );

    case 'fastapi':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="10" fill="#009688" />
          <path d="M13 4L6 13h5l-1 7 8-10h-5l1-6z" fill="#FFFFFF" />
        </svg>
      );

    case 'yolov8':
    case 'yolo':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <path d="M3 8V5a2 2 0 0 1 2-2h3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2v-3" />
          <circle cx="12" cy="12" r="3" fill="#A855F7" stroke="none" />
        </svg>
      );

    case 'mobilesam':
    case 'sam':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" stroke="#38BDF8" />
          <polyline points="2 17 12 22 22 17" stroke="#38BDF8" />
          <polyline points="2 12 12 17 22 12" stroke="#38BDF8" />
        </svg>
      );

    case 'aruco':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <rect x="3" y="3" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" />
          <rect x="6" y="6" width="4" height="4" />
          <rect x="14" y="6" width="4" height="4" />
          <rect x="10" y="10" width="4" height="4" />
          <rect x="6" y="14" width="4" height="4" />
          <rect x="14" y="14" width="4" height="4" />
        </svg>
      );

    case 'tflite':
    case 'tensorflow':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 2L4 6.5V11l8-4.5L20 11V6.5L12 2z" fill="#FF6F00" />
          <path d="M4 12v5.5L12 22v-5.5L4 12z" fill="#FF8F00" />
          <path d="M12 16.5L20 12v5.5L12 22v-5.5z" fill="#FFA000" />
        </svg>
      );

    case 'sqlite':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#003B57" strokeWidth="2" className={className}>
          <ellipse cx="12" cy="5" rx="8" ry="3" fill="#003B57" />
          <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
          <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
        </svg>
      );

    case 'supabase':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M13.2 21.6c-.7.8-2 .3-2-.7v-7.1h-7c-1 0-1.6-1.1-.9-1.9L12.5 1.5c.7-.8 2-.3 2 .7v7.1h7c1 0 1.6 1.1.9 1.9l-9.2 10.4z"
            fill="#3ECF8E"
          />
        </svg>
      );

    case 'neo4j':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="6" cy="6" r="3" fill="#008CC1" />
          <circle cx="18" cy="8" r="3" fill="#008CC1" />
          <circle cx="12" cy="18" r="3.5" fill="#013B63" />
          <line x1="8.5" y1="7" x2="15.5" y2="7.8" stroke="#008CC1" strokeWidth="1.5" />
          <line x1="7.5" y1="8.5" x2="10.5" y2="15" stroke="#008CC1" strokeWidth="1.5" />
          <line x1="16.5" y1="10.5" x2="13.5" y2="15" stroke="#008CC1" strokeWidth="1.5" />
        </svg>
      );

    case 'chromadb':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="7" cy="12" r="4" fill="#FF5C35" />
          <circle cx="14" cy="7" r="4" fill="#1DE9B6" />
          <circle cx="17" cy="16" r="4" fill="#7C4DFF" />
        </svg>
      );

    case 'langchain':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" className={className}>
          <rect x="3" y="8" width="8" height="8" rx="2" />
          <rect x="13" y="8" width="8" height="8" rx="2" />
          <line x1="11" y1="12" x2="13" y2="12" stroke="#22C55E" strokeWidth="3" />
        </svg>
      );

    case 'sentencetransformers':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <circle cx="6" cy="6" r="2.5" fill="#38BDF8" stroke="none" />
          <circle cx="6" cy="18" r="2.5" fill="#38BDF8" stroke="none" />
          <circle cx="18" cy="12" r="3" fill="#818CF8" stroke="none" />
          <path d="M8.5 7.5L15 11M8.5 16.5L15 13" stroke="#94A3B8" />
        </svg>
      );

    case 'streamlit':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <polygon points="12 4 15 11 22 11 17 15 19 22 12 18 5 22 7 15 2 11 9 11 12 4" fill="#FF4B4B" />
        </svg>
      );

    case 'edgeai':
    case 'edgecomputing':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <rect x="8" y="8" width="8" height="8" rx="1" fill="currentColor" opacity="0.3" />
          <line x1="9" y1="1" x2="9" y2="4" />
          <line x1="15" y1="1" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="23" />
          <line x1="15" y1="20" x2="15" y2="23" />
        </svg>
      );

    case 'computervision':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <circle cx="12" cy="12" r="3" fill="currentColor" />
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
        </svg>
      );

    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <circle cx="12" cy="12" r="4" />
        </svg>
      );
  }
}


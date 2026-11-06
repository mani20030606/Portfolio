export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  status: 'Complete' | 'In development' | 'Hackathon Project' | 'Repository Available';
  isInDevelopment?: boolean;
  problem: string;
  solution: string;
  myContribution: string[];
  stack: string[];
  verifiedOutcome?: string;
  repoUrl?: string;
  imagePlaceholders: {
    label: string;
    description: string;
    path: string;
  }[];
  diagramSvgKey: string;
}

export const projects: ProjectItem[] = [
  {
    id: 'granite-measurement',
    title: 'AI-Powered Granite Measurement System',
    subtitle: 'Edge Computer Vision & Real-World Metric Scale Estimation',
    status: 'Complete',
    problem:
      'Measuring large, irregular granite blocks in the field traditionally requires manual tape measurements across rough surfaces, leading to human error, safety risks, and operational delays.',
    solution:
      'An end-to-end mobile and edge vision system that segments block faces, refines boundaries, and estimates metric dimensions in real-time using ArUco homography and multi-face averaging.',
    myContribution: [
      'Led the end-to-end engineering of the system during internship at Huebits',
      'Implemented YOLO object segmentation paired with MobileSAM for boundary refinement',
      'Built ArUco marker detection and perspective homography for accurate pixel-to-millimeter scaling',
      'Developed multi-view dimension averaging algorithm across four block faces',
      'Built FastAPI backend inference services and converted models for offline on-device deployment',
      'Integrated live camera and measurement inspection into a React Native (Expo) mobile client',
    ],
    stack: [
      'Python',
      'YOLOv8',
      'MobileSAM',
      'OpenCV',
      'ArUco',
      'FastAPI',
      'React Native',
      'TypeScript',
      'Expo',
      'Edge AI',
    ],
    verifiedOutcome: 'Awarded First Prize at the RTGS Hackathon.',
    imagePlaceholders: [
      {
        label: 'Raw Field Block Photo',
        description: 'Captured quarry block prior to segmentation',
        path: '/assets/projects/granite/raw-sample.jpg',
      },
      {
        label: 'MobileSAM Refined Segmentation',
        description: 'Sub-pixel contour boundary mask on block face',
        path: '/assets/projects/granite/mask-refinement.jpg',
      },
      {
        label: 'ArUco Metric Scaling Overlay',
        description: 'Real-world homography calibration and dimension lines',
        path: '/assets/projects/granite/dimension-overlay.jpg',
      },
      {
        label: 'React Native Mobile App UI',
        description: 'Inspection preview, measurement log, and sync screen',
        path: '/assets/projects/granite/mobile-app.jpg',
      },
    ],
    diagramSvgKey: 'granite-architecture',
  },
  {
    id: 'highway-accident-prevention',
    title: 'Highway Road Accident Prevention System',
    subtitle: 'Real-Time Edge Hazard & Traffic Object Detection',
    status: 'In development',
    isInDevelopment: true,
    problem:
      'High-speed highway transit demands sub-hundred-millisecond hazard detection for stationary vehicles, pedestrian crossings, and missing signage under diverse lighting conditions.',
    solution:
      'A multi-class visual detection architecture optimized for real-time edge streaming, safety telemetry, and localized hazard alerts.',
    myContribution: [
      'Initiated in relation to the HRAP-2026 innovation challenge',
      'Curated and annotated custom vision datasets across vehicles, pedestrians, and traffic markers',
      'Designed and benchmarked detection models prioritizing low-latency inference',
      'Explored quantized inference models for vehicle-mounted edge processors',
    ],
    stack: ['Python', 'PyTorch', 'YOLOv8', 'OpenCV', 'Edge Computing', 'Computer Vision'],
    imagePlaceholders: [
      {
        label: 'Highway Dataset Sample',
        description: 'Annotated day and night vehicular camera frame',
        path: '/assets/projects/highway/dataset-sample.jpg',
      },
      {
        label: 'Edge Detection Pipeline',
        description: 'Multi-class bounding box stream with velocity vectors',
        path: '/assets/projects/highway/detection-stream.jpg',
      },
    ],
    diagramSvgKey: 'highway-pipeline',
  },
  {
    id: 'hybrid-graphrag',
    title: 'Hybrid GraphRAG Intelligence System',
    subtitle: 'Knowledge Graph & Vector-Augmented Retrieval Engine',
    status: 'Repository Available',
    problem:
      'Pure vector-based RAG engines struggle with multi-hop questions and entity relationship traversal across dense technical corpora.',
    solution:
      'A hybrid architecture combining Neo4j graph traversal with ChromaDB vector embeddings and lightweight LLM synthesis for context-rich answers.',
    myContribution: [
      'Architected hybrid retrieval combining Neo4j graph nodes and ChromaDB vector embeddings',
      'Integrated all-MiniLM-L6-v2 sentence embeddings for dense document chunk indexing',
      'Built interactive exploration and query workbench with Streamlit',
      'Implemented entity-relationship extraction pipeline for incoming documents',
    ],
    stack: [
      'Python',
      'Neo4j',
      'ChromaDB',
      'Sentence Transformers',
      'LangChain',
      'Streamlit',
    ],
    repoUrl: 'https://github.com/mani20030606/Hybrid_RAG',
    imagePlaceholders: [
      {
        label: 'Knowledge Graph Visualization',
        description: 'Extracted entity relationship clusters and cross-links',
        path: '/assets/projects/rag/graph-visualization.jpg',
      },
      {
        label: 'Streamlit Query Interface',
        description: 'Side-by-side vector vs graph retrieval breakdown',
        path: '/assets/projects/rag/streamlit-ui.jpg',
      },
    ],
    diagramSvgKey: 'graphrag-architecture',
  },
  {
    id: 'careerpilot-ai',
    title: 'CareerPilot AI',
    subtitle: 'Autonomous Career Copilot & Technical Gap Analyzer',
    status: 'Hackathon Project',
    problem:
      'Engineers lack objective, feedback-driven breakdowns of their skill readiness and clear project pathways to bridge career requirements.',
    solution:
      'An intelligent copilot that ingests technical resumes, parses role requirements, isolates skill deficits, and drafts personalized interview simulations.',
    myContribution: [
      'Engineered resume text parsing and structured skill-gap analysis pipeline',
      'Integrated LLM reasoning for customized learning roadmap generation',
      'Built backend API services with FastAPI and connected interactive frontend interface',
      'Demonstrated prototype at the Product Space × Wispr Flow AI Hackathon',
    ],
    stack: [
      'React',
      'TypeScript',
      'FastAPI',
      'Python',
      'Gemini 1.5 Flash',
      'GPT-4o-mini',
    ],
    verifiedOutcome: 'Demonstrated at the AI Hackathon by Product Space with Wispr Flow.',
    imagePlaceholders: [
      {
        label: 'Skill Gap Matrix UI',
        description: 'Categorized technical proficiencies vs target role specs',
        path: '/assets/projects/careerpilot/gap-matrix.jpg',
      },
      {
        label: 'AI Mock Interview Session',
        description: 'Dynamic conversational prompt with real-time rubric evaluation',
        path: '/assets/projects/careerpilot/interview-view.jpg',
      },
    ],
    diagramSvgKey: 'careerpilot-workflow',
  },
];

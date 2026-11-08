export interface KeyResult {
  value: string;
  label: string;
}

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  listTitle: string;
  subtitle: string;
  listTags: string;
  status: string;
  badgeText: string;
  badgeType: 'gold' | 'cyan' | 'neutral' | 'purple';
  origin: 'huebits' | 'independent';
  attribution: string;
  isInDevelopment?: boolean;
  description: string;
  problem: string;
  approach: string;
  solution: string;
  outcome: string;
  myContribution: string[];
  stack: string[];
  keyResults: KeyResult[];
  iconType: 'cube' | 'road' | 'crosshair' | 'graph';
}

export const projects: ProjectItem[] = [
  {
    id: 'granite-measurement',
    index: '01',
    title: 'AI-Powered Granite Measurement System',
    listTitle: 'AI-Powered Granite Measurement',
    subtitle: 'Computer Vision • Mobile AI • Real-World Measurement',
    listTags: 'Computer Vision • Measurement • Mobile AI',
    status: 'First Prize',
    badgeText: 'First Prize — RTGS Hackathon',
    badgeType: 'purple',
    origin: 'huebits',
    attribution: 'Built while working as an intern at Huebits',
    description:
      'A mobile-based system that measures granite block dimensions from images, estimates volume, and classifies slabs using computer vision and geometric calibration.',
    problem:
      'Manual tape measurements across rough, irregular quarry surfaces lead to human error, safety risks, and operational delays.',
    approach:
      'ArUco marker calibration, perspective homography, and YOLOv8 paired with MobileSAM for sub-pixel boundary refinement.',
    solution:
      'React Native mobile client with offline on-device inference, multi-face dimension averaging, and FastAPI cloud sync.',
    outcome:
      'Working prototype tested on field blocks, achieving 95–98% measurement accuracy and awarded First Prize at the RTGS Hackathon.',
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
      'TFLite',
      'SQLite',
      'Supabase',
    ],
    keyResults: [
      { value: '95–98%', label: 'Measurement Accuracy' },
      { value: 'Offline', label: 'On-Device Inference' },
      { value: 'Real-World', label: 'Quarry Testing' },
    ],
    iconType: 'cube',
  },
  {
    id: 'highway-accident-prevention',
    index: '02',
    title: 'Highway Road Accident Prevention System',
    listTitle: 'Highway Road Accident Prevention',
    subtitle: 'Real-Time Edge Hazard & Traffic Object Detection',
    listTags: 'Vehicle • Pothole • Road Safety',
    status: 'Prototype',
    badgeText: 'Ongoing at Huebits — Prototype',
    badgeType: 'cyan',
    origin: 'huebits',
    attribution: 'Ongoing under Huebits · Internship Project',
    isInDevelopment: true,
    description:
      'A multi-class visual detection architecture optimized for real-time edge streaming, safety telemetry, and localized hazard alerts to prevent roadway collisions.',
    problem:
      'High-speed highway transit demands sub-100ms hazard detection for stationary vehicles, pedestrian crossings, and missing signage under diverse lighting conditions.',
    approach:
      'Custom vision dataset curation across vehicles, potholes, and obstacles with quantized edge model benchmarking.',
    solution:
      'Low-latency PyTorch YOLO pipeline optimized for vehicle-mounted edge processors with automated spatial alert dispatch.',
    outcome:
      'Functional vehicle-edge detection pipeline achieving low-latency inference on road streaming feeds.',
    myContribution: [
      'Initiated and developed under Huebits for real-time roadway hazard detection',
      'Curated and annotated custom vision datasets across vehicles, pedestrians, and traffic markers',
      'Designed and benchmarked detection models prioritizing low-latency inference',
      'Explored quantized inference models for vehicle-mounted edge processors',
    ],
    stack: ['Python', 'PyTorch', 'YOLOv8', 'OpenCV', 'Edge AI', 'Computer Vision'],
    keyResults: [
      { value: '<100ms', label: 'Inference Latency' },
      { value: 'Edge', label: 'On-Vehicle Vision' },
      { value: 'Real-Time', label: 'Hazard Alerting' },
    ],
    iconType: 'road',
  },
  {
    id: 'weapon-detection',
    index: '03',
    title: 'Real-Time Weapon & Threat Detection System',
    listTitle: 'Firearm Detection',
    subtitle: 'Edge Vision & Surveillance Anomaly Detection Pipeline',
    listTags: 'Object Detection • Real-Time • Surveillance',
    status: 'Deployed',
    badgeText: 'Personal Project — Deployed',
    badgeType: 'gold',
    origin: 'independent',
    attribution: 'Independent Engineering Project (My Own)',
    description:
      'A high-precision edge computer vision pipeline trained to detect multi-class weapons (firearms, cold weapons) in real-time video streams with low latency and minimal false alarms.',
    problem:
      'Surveillance feeds in sensitive public and private zones require instantaneous threat detection without reliance on human monitoring fatigue.',
    approach:
      'Curated and augmented specialized threat object datasets, spatial bounding boxes, and precision-recall curve tuning.',
    solution:
      'Real-time CCTV inference pipeline with edge YOLOv8 processing and automated alert dispatch.',
    outcome:
      'Engineered personal project achieving reliable real-time detection on edge camera streams with minimal false alarms.',
    myContribution: [
      'Curated and augmented specialized weapon and threat object datasets across varied lighting and angles',
      'Fine-tuned lightweight YOLOv8 models optimized for low-latency CCTV edge processing',
      'Implemented automated bounding-box alert dispatch and spatial tracking pipeline',
      'Evaluated precision-recall curves to minimize false positive triggers in crowded environments',
    ],
    stack: ['Python', 'PyTorch', 'YOLOv8', 'OpenCV', 'Edge AI', 'Computer Vision'],
    keyResults: [
      { value: 'Real-Time', label: 'Surveillance Stream' },
      { value: 'Multi-Class', label: 'Threat Objects' },
      { value: 'Edge AI', label: 'YOLOv8 Processing' },
    ],
    iconType: 'crosshair',
  },
  {
    id: 'hybrid-graphrag',
    index: '04',
    title: 'GraphRAG Knowledge System',
    listTitle: 'GraphRAG',
    subtitle: 'Knowledge Graph & Vector-Augmented Retrieval Engine',
    listTags: 'Knowledge Graph • RAG • Semantic Search',
    status: 'In Progress',
    badgeText: 'Independent Project — In Progress',
    badgeType: 'neutral',
    origin: 'independent',
    attribution: 'Independent Engineering Project (My Own)',
    description:
      'A hybrid architecture combining Neo4j graph traversal with ChromaDB vector embeddings and lightweight LLM synthesis for context-rich answers.',
    problem:
      'Pure vector-based RAG engines struggle with multi-hop questions and entity relationship traversal across dense technical corpora.',
    approach:
      'Dual-engine retrieval uniting Neo4j graph schemas and ChromaDB dense vector indexing with sentence-transformer embeddings.',
    solution:
      'Streamlit interactive workbench with entity-relationship extraction pipeline and structured LLM reasoning synthesis.',
    outcome:
      'Open-source repository available on GitHub with documented retrieval benchmarks across multi-hop technical queries.',
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
    keyResults: [
      { value: 'Hybrid', label: 'Neo4j + Chroma' },
      { value: 'Multi-Hop', label: 'Graph Traversal' },
      { value: 'Dense', label: 'Vector Embeddings' },
    ],
    iconType: 'graph',
  },
];

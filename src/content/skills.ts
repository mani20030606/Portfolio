export interface SkillCluster {
  id: string;
  name: string;
  description: string;
  skills: string[];
}

export const skillClusters: SkillCluster[] = [
  {
    id: 'computer-vision',
    name: 'Computer Vision & Edge AI',
    description: 'Object detection, instance segmentation, marker tracking, and on-device optimization',
    skills: ['YOLOv8', 'OpenCV', 'MobileSAM', 'DINOv2', 'EfficientNet', 'ArUco Tracking', 'Ultralytics'],
  },
  {
    id: 'ai-ml-engineering',
    name: 'AI & Machine Learning Core',
    description: 'Model architecture, fine-tuning, evaluation, and numerical computing',
    skills: ['PyTorch', 'TensorFlow', 'scikit-learn', 'NumPy', 'Pandas'],
  },
  {
    id: 'edge-optimization',
    name: 'Optimization & Deployment',
    description: 'Quantization, edge conversion, and latency reduction for embedded targets',
    skills: ['ONNX', 'TensorFlow Lite', 'FP16 / INT8 Quantization', 'Edge AI', 'Offline Inference'],
  },
  {
    id: 'backend-systems',
    name: 'Backend & APIs',
    description: 'High-throughput async inference services and clean REST endpoints',
    skills: ['FastAPI', 'REST APIs', 'Python AsyncIO'],
  },
  {
    id: 'mobile-frontend',
    name: 'Mobile & Frontend Product',
    description: 'Production mobile applications with native hardware and camera bindings',
    skills: ['React Native', 'TypeScript', 'Expo', 'React', 'HTML / CSS / SCSS'],
  },
  {
    id: 'retrieval-nlp',
    name: 'Retrieval & Knowledge Systems',
    description: 'Graph-augmented search, dense vector embeddings, and LLM reasoning pipelines',
    skills: ['RAG', 'GraphRAG', 'Sentence Transformers', 'Neo4j', 'ChromaDB', 'FAISS'],
  },
  {
    id: 'databases-tools',
    name: 'Databases & Tooling',
    description: 'Data persistence, versioning, workflows, and developer platforms',
    skills: ['MySQL', 'MongoDB', 'SQLite', 'Supabase', 'Git & GitHub', 'Jupyter', 'Colab', 'Kaggle', 'Streamlit'],
  },
];

import styles from './ProjectDiagram.module.scss';

interface ProjectDiagramProps {
  diagramKey: string;
}

export function ProjectDiagram({ diagramKey }: ProjectDiagramProps) {
  if (diagramKey === 'granite-architecture') {
    return (
      <div className={styles.diagramBox} aria-label="Granite Measurement Architecture Diagram">
        <div className={styles.diagramTitle}>SYSTEM PIPELINE ARCHITECTURE</div>
        <svg viewBox="0 0 800 240" className={styles.diagramSvg} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Step 1: Input */}
          <rect x="20" y="80" width="130" height="80" rx="8" className={styles.nodeBox} />
          <text x="85" y="115" className={styles.nodeTitle} textAnchor="middle">FIELD IMAGE</text>
          <text x="85" y="135" className={styles.nodeMeta} textAnchor="middle">Quarry Raw Capture</text>

          {/* Arrow 1 */}
          <path d="M 150 120 L 190 120" className={styles.arrow} markerEnd="url(#arrowhead)" />

          {/* Step 2: YOLO & MobileSAM */}
          <rect x="190" y="60" width="160" height="120" rx="8" className={styles.nodeBoxAccent} />
          <text x="270" y="95" className={styles.nodeTitle} textAnchor="middle">SEGMENTATION</text>
          <text x="270" y="115" className={styles.nodeMeta} textAnchor="middle">YOLOv8 Coarse Mask</text>
          <text x="270" y="135" className={styles.nodeMeta} textAnchor="middle">+ MobileSAM Refinement</text>
          <text x="270" y="155" className={styles.nodeTag} textAnchor="middle">Sub-pixel Contours</text>

          {/* Arrow 2 */}
          <path d="M 350 120 L 390 120" className={styles.arrow} />

          {/* Step 3: ArUco & Scale */}
          <rect x="390" y="70" width="170" height="100" rx="8" className={styles.nodeBox} />
          <text x="475" y="105" className={styles.nodeTitle} textAnchor="middle">METRIC SCALING</text>
          <text x="475" y="125" className={styles.nodeMeta} textAnchor="middle">ArUco Marker Corners</text>
          <text x="475" y="145" className={styles.nodeMeta} textAnchor="middle">Planar Homography Matrix</text>

          {/* Arrow 3 */}
          <path d="M 560 120 L 600 120" className={styles.arrow} />

          {/* Step 4: Averaging & Deployment */}
          <rect x="600" y="60" width="180" height="120" rx="8" className={styles.nodeBoxAccent} />
          <text x="690" y="95" className={styles.nodeTitle} textAnchor="middle">OUTPUT ESTIMATION</text>
          <text x="690" y="115" className={styles.nodeMeta} textAnchor="middle">4-Face Dimension Averaging</text>
          <text x="690" y="135" className={styles.nodeMeta} textAnchor="middle">FastAPI + React Native</text>
          <text x="690" y="155" className={styles.nodeTag} textAnchor="middle">On-device / Offline Ready</text>
        </svg>
      </div>
    );
  }

  if (diagramKey === 'highway-pipeline') {
    return (
      <div className={styles.diagramBox} aria-label="Highway Hazard Detection Pipeline Diagram">
        <div className={styles.diagramTitle}>DETECTION PIPELINE (IN DEVELOPMENT)</div>
        <svg viewBox="0 0 800 200" className={styles.diagramSvg} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="30" y="60" width="160" height="80" rx="8" className={styles.nodeBox} />
          <text x="110" y="95" className={styles.nodeTitle} textAnchor="middle">DATASET INGESTION</text>
          <text x="110" y="115" className={styles.nodeMeta} textAnchor="middle">Vehicle / Pedestrian / Signs</text>

          <path d="M 190 100 L 250 100" className={styles.arrow} />

          <rect x="250" y="50" width="220" height="100" rx="8" className={styles.nodeBoxAccent} />
          <text x="360" y="85" className={styles.nodeTitle} textAnchor="middle">EXPERIMENTATION</text>
          <text x="360" y="105" className={styles.nodeMeta} textAnchor="middle">Real-Time YOLOv8 Training</text>
          <text x="360" y="125" className={styles.nodeTag} textAnchor="middle">Latency vs Accuracy Benchmarks</text>

          <path d="M 470 100 L 530 100" className={styles.arrow} />

          <rect x="530" y="60" width="220" height="80" rx="8" className={styles.nodeBox} />
          <text x="640" y="95" className={styles.nodeTitle} textAnchor="middle">EDGE TELEMETRY</text>
          <text x="640" y="115" className={styles.nodeMeta} textAnchor="middle">Real-Time Hazard Alerting Stream</text>
        </svg>
      </div>
    );
  }

  if (diagramKey === 'graphrag-architecture') {
    return (
      <div className={styles.diagramBox} aria-label="GraphRAG Architecture Diagram">
        <div className={styles.diagramTitle}>HYBRID RETRIEVAL ARCHITECTURE</div>
        <svg viewBox="0 0 800 220" className={styles.diagramSvg} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="70" width="140" height="80" rx="8" className={styles.nodeBox} />
          <text x="90" y="105" className={styles.nodeTitle} textAnchor="middle">CORPUS</text>
          <text x="90" y="125" className={styles.nodeMeta} textAnchor="middle">Document Chunks</text>

          <path d="M 160 90 L 240 60" className={styles.arrow} />
          <path d="M 160 130 L 240 160" className={styles.arrow} />

          <rect x="240" y="30" width="180" height="70" rx="8" className={styles.nodeBoxAccent} />
          <text x="330" y="60" className={styles.nodeTitle} textAnchor="middle">NEO4J GRAPH</text>
          <text x="330" y="80" className={styles.nodeMeta} textAnchor="middle">Entity Relationships & Hops</text>

          <rect x="240" y="125" width="180" height="70" rx="8" className={styles.nodeBox} />
          <text x="330" y="155" className={styles.nodeTitle} textAnchor="middle">CHROMADB</text>
          <text x="330" y="175" className={styles.nodeMeta} textAnchor="middle">MiniLM-L6 Embeddings</text>

          <path d="M 420 65 L 500 95" className={styles.arrow} />
          <path d="M 420 160 L 500 125" className={styles.arrow} />

          <rect x="500" y="65" width="260" height="90" rx="8" className={styles.nodeBoxAccent} />
          <text x="630" y="100" className={styles.nodeTitle} textAnchor="middle">HYBRID CONTEXT SYNTHESIS</text>
          <text x="630" y="120" className={styles.nodeMeta} textAnchor="middle">Multi-modal Graph + Vector Retrieval</text>
          <text x="630" y="138" className={styles.nodeTag} textAnchor="middle">Streamlit User Interface</text>
        </svg>
      </div>
    );
  }

  // Default to careerpilot
  return (
    <div className={styles.diagramBox} aria-label="CareerPilot AI Workflow Diagram">
      <div className={styles.diagramTitle}>CAREERPILOT INTELLIGENCE PIPELINE</div>
      <svg viewBox="0 0 800 200" className={styles.diagramSvg} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="60" width="130" height="80" rx="8" className={styles.nodeBox} />
        <text x="85" y="95" className={styles.nodeTitle} textAnchor="middle">RESUME INGEST</text>
        <text x="85" y="115" className={styles.nodeMeta} textAnchor="middle">Text Parsing</text>

        <path d="M 150 100 L 200 100" className={styles.arrow} />

        <rect x="200" y="60" width="160" height="80" rx="8" className={styles.nodeBoxAccent} />
        <text x="280" y="95" className={styles.nodeTitle} textAnchor="middle">SKILL GAP ANALYSIS</text>
        <text x="280" y="115" className={styles.nodeMeta} textAnchor="middle">Role Benchmark Engine</text>

        <path d="M 360 100 L 410 100" className={styles.arrow} />

        <rect x="410" y="60" width="170" height="80" rx="8" className={styles.nodeBox} />
        <text x="495" y="95" className={styles.nodeTitle} textAnchor="middle">LEARNING ROADMAP</text>
        <text x="495" y="115" className={styles.nodeMeta} textAnchor="middle">Curated Step Path</text>

        <path d="M 580 100 L 630 100" className={styles.arrow} />

        <rect x="630" y="60" width="150" height="80" rx="8" className={styles.nodeBoxAccent} />
        <text x="705" y="95" className={styles.nodeTitle} textAnchor="middle">AI INTERVIEW</text>
        <text x="705" y="115" className={styles.nodeMeta} textAnchor="middle">Gemini 1.5 & GPT-4o</text>
      </svg>
    </div>
  );
}

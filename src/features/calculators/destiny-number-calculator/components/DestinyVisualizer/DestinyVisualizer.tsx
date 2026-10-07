import React from "react";
import { Share2 } from "lucide-react";
import { PinnacleCycle } from "../../types/destiny-number-calculator.types";
import styles from "./destiny-visualizer.module.scss";

interface DestinyVisualizerProps {
  pinnacleCycles: PinnacleCycle[];
}

export const DestinyVisualizer: React.FC<DestinyVisualizerProps> = ({
  pinnacleCycles,
}) => {
  return (
    <div className={styles.visualizerContainer}>
      <div className={styles.leftPane}>
        <div className={styles.svgWrapper}>
          <svg viewBox="0 0 200 200" className={styles.yantraSvg}>
            {/* Outer Circle */}
            <circle cx="100" cy="100" r="90" className={styles.outerCircle} />
            <circle cx="100" cy="100" r="85" className={styles.innerCircle} />

            {/* Triangles for Hexagram */}
            <polygon
              points="100,20 170,140 30,140"
              className={styles.triangleUp}
            />
            <polygon
              points="100,180 30,60 170,60"
              className={styles.triangleDown}
            />

            {/* Inner Core */}
            <circle cx="100" cy="100" r="25" className={styles.coreCircle} />
            <text x="100" y="105" className={styles.coreText}>
              9
            </text>

            {/* Nodes */}
            <circle cx="100" cy="20" r="4" className={styles.nodeGold} />
            <circle cx="170" cy="140" r="4" className={styles.nodeCyan} />
            <circle cx="30" cy="140" r="4" className={styles.nodeCyan} />

            <circle cx="100" cy="180" r="4" className={styles.nodeGold} />
            <circle cx="30" cy="60" r="4" className={styles.nodeCyan} />
            <circle cx="170" cy="60" r="4" className={styles.nodeCyan} />
          </svg>
        </div>
        <div className={styles.label}>
          KARMIC TRIANGULATION OVERVIEW [3-6-9 MATURATION]
        </div>
      </div>

      <div className={styles.rightPane}>
        <div className={styles.headerBox}>
          <div className={styles.eyebrow}>
            PINNACLE TRIAD & DHARMIC CYCLE DETECTION
          </div>
          <div className={styles.subtext}>
            <Share2 size={12} className={styles.iconGold} />
            Base Frame, Maturity, and Master Culmination timelines. Traced from
            birth until completion.
          </div>
        </div>

        <div className={styles.cyclesGrid}>
          {pinnacleCycles.map((cycle, idx) => (
            <div key={idx} className={styles.cycleCard}>
              <div className={styles.cTitle}>{cycle.title}</div>
              <div className={styles.cCalc}>{cycle.calculation}</div>
              <p className={styles.cDesc}>{cycle.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.keywordsGrid}>
          <div className={styles.kBadge}>
            <span className={styles.kLabel}>Phase 1/2 Overlay</span>
            <span className={styles.kValue}>Karmic Ignition</span>
          </div>
          <div className={styles.kBadgeActive}>
            <span className={styles.kLabel}>Peak Maturation</span>
            <span className={styles.kValue}>Evolutionary Zenith (Active)</span>
          </div>
          <div className={styles.kBadge}>
            <span className={styles.kLabel}>Dharmic Culmination</span>
            <span className={styles.kValue}>Universal Teacher</span>
          </div>
        </div>
      </div>
    </div>
  );
};

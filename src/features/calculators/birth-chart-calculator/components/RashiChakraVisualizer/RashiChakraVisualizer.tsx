import React from "react";
import { Compass, Maximize2, Settings2 } from "lucide-react";
import { BirthChartTelemetryData } from "../../types/birth-chart.types";
import styles from "./rashi-chakra-visualizer.module.scss";

interface RashiChakraVisualizerProps {
  data: BirthChartTelemetryData;
}

export const RashiChakraVisualizer: React.FC<RashiChakraVisualizerProps> = ({
  data,
}) => {
  const rc = data.rashiChakra;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>
          <Compass size={16} /> D1 RASHI CHAKRA (NATAL GEO-SPHERE)
        </span>
        <div className={styles.controls}>
          <button className={styles.active}>NORTH INDIAN</button>
          <button>SOUTH INDIAN</button>
          <button>
            <Settings2 size={12} />
          </button>
          <button>
            <Maximize2 size={12} />
          </button>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.chartVisualArea}>
          {/* North Indian Diamond Chart SVG representation */}
          <svg viewBox="0 0 300 300" className={styles.chartSVG}>
            {/* Outer Box */}
            <rect x="10" y="10" width="280" height="280" fill="none" stroke="currentColor" strokeWidth="1.5" />
            
            {/* Cross Lines */}
            <line x1="10" y1="10" x2="290" y2="290" />
            <line x1="10" y1="290" x2="290" y2="10" />
            
            {/* Diamond Lines */}
            <line x1="150" y1="10" x2="290" y2="150" />
            <line x1="290" y1="150" x2="150" y2="290" />
            <line x1="150" y1="290" x2="10" y2="150" />
            <line x1="10" y1="150" x2="150" y2="10" />

            {/* House Numbers (Ascendant is 8 Scorpio) */}
            <text x="150" y="100" className={styles.signNumber}>8</text>
            <text x="80" y="50" className={styles.signNumber}>9</text>
            <text x="50" y="80" className={styles.signNumber}>10</text>
            <text x="100" y="150" className={styles.signNumber}>11</text>
            <text x="50" y="220" className={styles.signNumber}>12</text>
            <text x="80" y="250" className={styles.signNumber}>1</text>
            <text x="150" y="200" className={styles.signNumber}>2</text>
            <text x="220" y="250" className={styles.signNumber}>3</text>
            <text x="250" y="220" className={styles.signNumber}>4</text>
            <text x="200" y="150" className={styles.signNumber}>5</text>
            <text x="250" y="80" className={styles.signNumber}>6</text>
            <text x="220" y="50" className={styles.signNumber}>7</text>

            {/* Planets */}
            <text x="150" y="70" className={`${styles.planetText} ${styles.lagna}`}>Asc (Ke)</text>
            <text x="200" y="130" className={styles.planetText}>Su</text>
            <text x="260" y="190" className={styles.planetText}>Mo, Ju</text>
            <text x="150" y="240" className={`${styles.planetText} ${styles.malefic}`}>Ra</text>
            <text x="50" y="150" className={styles.planetText}>Me, Ve</text>
            <text x="150" y="150" className={`${styles.planetText} ${styles.malefic}`}>Ma (D3)</text>
            {/* Just a simplified approximation for visual purpose */}
          </svg>
        </div>

        <div className={styles.sidePanel}>
          <div className={styles.dataRow}>
            <span className={styles.label}>ASCENDANT (LAGNA)</span>
            <span className={`${styles.value} ${styles.highlight}`}>{rc.ascendant}</span>
          </div>
          <div className={styles.dataRow}>
            <span className={styles.label}>MOON SIGN (RASHI)</span>
            <span className={styles.value}>{rc.moonSign}</span>
          </div>
          <div className={styles.dataRow}>
            <span className={styles.label}>SUN SIGN</span>
            <span className={styles.value}>{rc.sunSign}</span>
          </div>
          <div className={styles.dataRow}>
            <span className={styles.label}>NAKSHATRA</span>
            <span className={styles.value}>{rc.nakshatra}</span>
          </div>
          <div className={styles.dataRow}>
            <span className={styles.label}>CHART BALANCE</span>
            <span className={styles.value}>{rc.chartBalance}</span>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <span>EPHEMERIS: SWISS (DE441)</span>
        <span className={styles.status}>LIVE CHART RENDERED</span>
      </div>
    </div>
  );
};

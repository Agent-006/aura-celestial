import React from "react";
import { KakshyaPartition } from "../../types/transit.types";
import { Grid3X3 } from "lucide-react";
import styles from "./ashtakavarga-heatmap.module.scss";

interface AshtakavargaHeatmapProps {
  heatmap: KakshyaPartition[];
}

export const AshtakavargaHeatmap: React.FC<AshtakavargaHeatmapProps> = ({ heatmap }) => {
  return (
    <div className={styles.heatmapContainer}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <Grid3X3 size={16} /> Ashtakavarga Transit Heatmap & Kakshya Partitions
        </div>
        <div className={styles.subtitle}>TOTAL ASTROMETRIC BINDU SUM: 337 (HIGH)</div>
      </div>

      <div className={styles.housesGrid}>
        {heatmap.map((partition) => (
          <div key={partition.house} className={`${styles.houseBox} ${styles[partition.status]}`}>
            <span className={styles.houseLabel}>HOUSE {partition.house}</span>
            <span className={styles.binduVal}>{partition.bindu}</span>
            <span className={styles.statusLabel}>
              {partition.status === 'peak' ? 'PEAK' : 
               partition.status === 'high' ? 'HIGH' : 
               partition.status === 'neutral' ? 'NEUTRAL' : 'LOW'}
            </span>
          </div>
        ))}
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.descBox}>
          <h4>Sub-Arc Kakshya Division Analysis (337 Micro Bindu)</h4>
          <p>
            The aggregate Bindu score of 337 translates to extreme peak auspiciousness 
            for the Native. Focus purely on House 4 (38 Bindu) & House 5 (36 Bindu) spanning assets, 
            investments, and intellect.
          </p>
        </div>
        
        <div className={styles.statsSummary}>
          <div className={styles.statBox}>
            <span className={styles.statLabel}>POSITIVE KAKSHYAS</span>
            <span className={styles.statValGold}>5 / 7 Grahas</span>
          </div>
          <div className={styles.statBoxActive}>
            <span className={styles.statLabel}>NEGATIVE KAKSHYAS</span>
            <span className={styles.statValCyan}>0 Active</span>
          </div>
        </div>
      </div>
    </div>
  );
};

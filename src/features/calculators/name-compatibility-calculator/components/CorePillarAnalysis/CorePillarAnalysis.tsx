import React from "react";
import { PillarAnalysis } from "../../types/name-compatibility.types";
import { BookOpen } from "lucide-react";
import styles from "./core-pillar-analysis.module.scss";

interface CorePillarAnalysisProps {
  pillars: PillarAnalysis[];
}

export const CorePillarAnalysis: React.FC<CorePillarAnalysisProps> = ({
  pillars,
}) => {
  return (
    <div className={styles.pillarContainer}>
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <BookOpen size={16} />
          <h3>Multidimensional Core Pillar Analysis</h3>
        </div>
        <p className={styles.subtitle}>
          Vectors are extracted from Chaldean numerical values and
          cross-referenced with Chaldean numerology meanings.
        </p>
      </div>

      <div className={styles.pillarsGrid}>
        {pillars.map((pillar, index) => (
          <div key={index} className={styles.pillarCard}>
            <div className={styles.cardHeader}>
              <span className={styles.statusBadge} data-status={pillar.status}>
                {pillar.status}
              </span>
            </div>

            <div className={styles.scoresRow}>
              <div className={styles.scoreBox}>
                <span className={styles.label}>PERSON A VECTOR</span>
                <span className={styles.valueGold}>{pillar.valA}</span>
              </div>
              <div className={styles.vsDivider}>VS</div>
              <div className={styles.scoreBox}>
                <span className={styles.label}>PERSON B VECTOR</span>
                <span className={styles.valueCyan}>{pillar.valB}</span>
              </div>
            </div>

            <h4 className={styles.pillarTitle}>{pillar.title}</h4>
            <p className={styles.pillarDesc}>{pillar.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

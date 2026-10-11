import React from "react";
import { FlamesDimension } from "../../types/flames.types";
import styles from "./six-dimensions.module.scss";

interface SixDimensionsProps {
  dimensions: FlamesDimension[];
}

export const SixDimensions: React.FC<SixDimensionsProps> = ({ dimensions }) => {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.eyebrow}>DIMENSIONS / VARGAS</div>
          <h2 className={styles.title}>The Six Dimensions of FLAMES</h2>
        </div>
        <div className={styles.rightText}>
          Each outcome in the traditional F.L.A.M.E.S framework corresponds mathematically to a specific house (Bhava), planetary ruler (Lord), and karmic orientation from the Bhrigu Nandi Nadi framework.
        </div>
      </div>

      <div className={styles.grid}>
        {dimensions.map((dim) => (
          <div key={dim.id} className={`${styles.card} ${dim.isResult ? styles.activeResult : ''}`}>
            {dim.isResult && <div className={styles.activeBadge}>ACTIVE OUTCOME</div>}
            <div className={styles.cardHeader}>
              <span className={styles.letter}>{dim.id}</span>
              <span className={styles.planet}>RULER: {dim.rulingPlanet}</span>
            </div>
            <h3 className={styles.cardTitle}>{dim.title}</h3>
            <p className={styles.description}>{dim.description}</p>
            <div className={styles.footer}>
              <span className={styles.element}>Primal Matrix: {dim.elementalForce}</span>
              <span className={styles.outcome}>Karmic Vector: {dim.karmicOutcome}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

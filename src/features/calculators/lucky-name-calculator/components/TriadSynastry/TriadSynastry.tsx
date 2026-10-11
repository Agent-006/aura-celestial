import React from "react";
import { LuckyNameTelemetryData } from "../../types/lucky-name-calculator.types";
import styles from "./triad-synastry.module.scss";

interface TriadSynastryProps {
  triad: LuckyNameTelemetryData["triad"];
}

export const TriadSynastry: React.FC<TriadSynastryProps> = ({ triad }) => {
  return (
    <div className={styles.triadContainer}>
      <div className={styles.left}>
        <div className={styles.eyebrow}>
          TRIAD SYNASTRY (MULANK / BHAGYANK / NAMANK)
        </div>
        <div className={styles.title}>
          Isomorphic Triad Convergence: Mulank {triad.mulank || "?"} × Bhagyank {triad.bhagyank || "?"} × Namank {triad.namank}
        </div>
        <div className={styles.description}>{triad.description}</div>
      </div>
      <div className={styles.right}>
        <div className={styles.triadBox}>
          <span className={styles.label}>MULANK</span>
          <span className={styles.value}>{triad.mulank || "-"}</span>
        </div>
        <div className={styles.triadBox}>
          <span className={styles.label}>BHAGYANK</span>
          <span className={styles.value}>{triad.bhagyank || "-"}</span>
        </div>
        <div className={styles.triadBox}>
          <span className={styles.label}>NAMANK</span>
          <span className={styles.valueGold}>{triad.namank}</span>
        </div>
      </div>
    </div>
  );
};

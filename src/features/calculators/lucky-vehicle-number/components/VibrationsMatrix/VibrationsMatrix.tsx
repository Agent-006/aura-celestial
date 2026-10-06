import React from "react";
import { VibrationMatrixNode } from "../../types/lucky-vehicle.types";
import styles from "./vibrations-matrix.module.scss";

interface VibrationsMatrixProps {
  vibrations: VibrationMatrixNode[];
}

export const VibrationsMatrix: React.FC<VibrationsMatrixProps> = ({ vibrations }) => {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.eyebrow}>VAHAN TATTVA EPHEMERIS INDEX</div>
          <h2 className={styles.title}>The 9 Single-Digit Vehicle Vibrations Matrix</h2>
        </div>
        <div className={styles.rightText}>
          A comprehensive breakdown mapping planetary digits 1 through 9 into their governing mechanical directives, machine forces, and resonant attributes.
        </div>
      </div>

      <div className={styles.grid}>
        {vibrations.map((node) => (
          <div key={node.number} className={`${styles.card} ${node.isActive ? styles.active : ''}`}>
            <div className={styles.cardHeader}>
              <span className={styles.number}>{node.number}</span>
              <span className={styles.planet}>{node.planet}</span>
            </div>
            <p className={styles.description}>{node.description}</p>
            <div className={styles.colors}>{node.colors}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

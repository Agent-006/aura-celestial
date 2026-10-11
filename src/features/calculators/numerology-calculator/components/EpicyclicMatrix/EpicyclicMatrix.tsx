import React from "react";
import { PersonalYear } from "../../types/numerology.types";
import styles from "./epicyclic-matrix.module.scss";

interface EpicyclicMatrixProps {
  matrix: PersonalYear[];
}

export const EpicyclicMatrix: React.FC<EpicyclicMatrixProps> = ({ matrix }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>
          9-Year Epicyclic Transmutation Timeline
        </h3>
        <p className={styles.subtitle}>Current Life-Cycle Vibrations</p>
      </div>

      <div className={styles.timelineWrapper}>
        <div className={styles.timelineLine}></div>
        <div className={styles.timelineGrid}>
          {matrix.map((entry) => (
            <div
              key={entry.year}
              className={`${styles.node} ${entry.isActive ? styles.activeNode : ""}`}
            >
              <div className={styles.year}>{entry.year}</div>
              <div className={styles.point}>
                <div className={styles.innerPoint}></div>
              </div>
              <div className={styles.content}>
                <span className={styles.number}>
                  Year {entry.personalYearNumber}
                </span>
                <span className={styles.label}>{entry.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

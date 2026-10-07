import React from "react";
import { LuckyNameTelemetryData } from "../../types/lucky-name-calculator.types";
import styles from "./letter-decomposition.module.scss";

interface LetterDecompositionProps {
  data: LuckyNameTelemetryData["decomposition"];
}

export const LetterDecomposition: React.FC<LetterDecompositionProps> = ({
  data,
}) => {
  return (
    <div className={styles.decompositionContainer}>
      <div className={styles.header}>
        <h3 className={styles.title}>
          Onomastic Lexico-Syllabic Navagraha Decomposition
        </h3>
        <p className={styles.subtitle}>
          Chaldean string traversal mapping letters to corresponding Graha (planetary) quantum resonance.
        </p>
      </div>

      <div className={styles.gridWrapper}>
        <div className={styles.gridLetters}>
          {data.letters.map((l, i) => (
            <div key={i} className={styles.letterBox}>
              <span className={styles.letter}>{l.char}</span>
              <span className={styles.value}>{l.val}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.summary}>
        <div className={styles.summaryItem}>
          <span className={styles.label}>Compound Namank Total:</span>
          <span className={styles.value}>{data.total}</span>
        </div>
        <div className={styles.summaryItem}>
          <span className={styles.label}>Root Namank Synthesis:</span>
          <span className={styles.valueGold}>{data.root}</span>
        </div>
      </div>
    </div>
  );
};

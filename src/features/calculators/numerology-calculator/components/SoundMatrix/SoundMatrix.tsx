import React from "react";
import { PhoneticMatrixEntry } from "../../types/numerology.types";
import styles from "./sound-matrix.module.scss";

interface SoundMatrixProps {
  matrix: PhoneticMatrixEntry[];
  totalValue: number;
}

export const SoundMatrix: React.FC<SoundMatrixProps> = ({
  matrix,
  totalValue,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.title}>Chaldean Phonetic Sound Matrix</h3>
          <p className={styles.subtitle}>
            Sound Frequency & Numerical Value Breakdown
          </p>
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.matrixTable}>
          <thead>
            <tr>
              <th>Index</th>
              <th>Phonetic Node</th>
              <th>Chaldean Vibrational Matrix</th>
              <th>Value Assigned</th>
            </tr>
          </thead>
          <tbody>
            {matrix.map((entry, index) => (
              <tr key={index}>
                <td className={styles.index}>{index + 1}</td>
                <td className={styles.letter}>{entry.LetterText}</td>
                <td className={styles.dots}>
                  {Array.from({ length: entry.value }).map((_, i) => (
                    <span key={i} className={styles.dot}></span>
                  ))}
                </td>
                <td className={styles.value}>{entry.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.footer}>
        <span className={styles.footerLabel}>
          Matrix Compound Frequency Subtotal:
        </span>
        <span className={styles.footerValue}>{totalValue}</span>
      </div>
    </div>
  );
};

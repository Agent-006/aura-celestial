import React from "react";
import { DualEphemerisRow } from "../../types/flames.types";
import styles from "./dual-ephemeris-matrix.module.scss";

interface DualEphemerisMatrixProps {
  ephemeris: DualEphemerisRow[];
}

export const DualEphemerisMatrix: React.FC<DualEphemerisMatrixProps> = ({ ephemeris }) => {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>NUMEROLOGY & SOUND SYLLABAS</div>
        <h2 className={styles.title}>Dual Ephemeris & Phonetic Akshara Matrix</h2>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Harmonizing Metric</th>
              <th>Subject A (Aarav)</th>
              <th>Subject B (Aanya)</th>
              <th>Synthesized Concordance</th>
              <th className={styles.rightAlign}>Astral Vector</th>
            </tr>
          </thead>
          <tbody>
            {ephemeris.map((row, idx) => (
              <tr key={idx}>
                <td className={styles.metricCell}>{row.metric}</td>
                <td className={styles.subjectCell}>{row.subjectA}</td>
                <td className={styles.subjectCell}>{row.subjectB}</td>
                <td className={styles.concordanceCell}>{row.concordance}</td>
                <td className={styles.vectorCell}>{row.astralVector}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

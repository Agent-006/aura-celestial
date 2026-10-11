import React from "react";
import { ConcordanceRow } from "../../types/lucky-vehicle.types";
import styles from "./structural-concordance.module.scss";

interface StructuralConcordanceProps {
  concordances: ConcordanceRow[];
}

export const StructuralConcordance: React.FC<StructuralConcordanceProps> = ({ concordances }) => {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>PLANETARY GRAHA MATRIX & STRUCTURAL CONCORDANCE</div>
        <h2 className={styles.title}>Astrometric Vehicle Compatibility & Color-Tattva Matrix</h2>
      </div>

      <div className={styles.tableContainer}>
        <table>
          <thead>
            <tr>
              <th>Astrometric Telemetry Vector</th>
              <th>Yantra / Concordance</th>
              <th>Vibrational Consequence</th>
              <th>Graha Matrix Status</th>
              <th style={{ textAlign: 'right' }}>Astrometric Concordance</th>
            </tr>
          </thead>
          <tbody>
            {concordances.map((row, index) => (
              <tr key={index}>
                <td className={styles.vector}>
                  <span className={styles.indicator}></span>
                  {row.vector}
                </td>
                <td className={styles.yantra}>{row.yantra}</td>
                <td>{row.consequence}</td>
                <td className={styles.status}>
                  <span className={`${styles.badge} ${index % 2 === 0 ? styles.gold : styles.cyan}`}>
                    {row.status}
                  </span>
                </td>
                <td className={styles.percentage}>{row.percentage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

import React from "react";
import { MobileMatrixRow } from "../../types/mobile-number-calculator.types";
import styles from "./mobile-matrix.module.scss";

interface MobileMatrixProps {
  matrix: MobileMatrixRow[];
}

export const MobileMatrix: React.FC<MobileMatrixProps> = ({ matrix }) => {
  return (
    <div className={styles.matrixContainer}>
      <div className={styles.header}>
        <div className={styles.leftGroup}>
          <span className={styles.eyebrow}>SYNASTRY CORRELATION</span>
          <h3 className={styles.title}>
            Mobile Total Compound Root Matrix (1 through 9)
          </h3>
        </div>
        <div className={styles.rightGroup}>
          <span>
            YOUR COMPOUND ROOT: <span className={styles.goldText}>8</span>
          </span>
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.matrixTable}>
          <thead>
            <tr>
              <th>ROOT NUMBER</th>
              <th>PLANETARY RULER</th>
              <th>WEALTH / BUSINESS</th>
              <th>RELATIONSHIPS / HEALTH</th>
              <th>PROFESSIONAL SUITABILITY</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {matrix.map((row) => (
              <tr
                key={row.number}
                className={row.number === 8 ? styles.activeRow : undefined}
              >
                <td>
                  {row.number === 8 && (
                    <span className={styles.badgeIndicator}>MATCH</span>
                  )}
                  {row.number}
                </td>
                <td
                  className={
                    row.number === 8 ? styles.highlightText : undefined
                  }
                >
                  {row.planetaryRuler}
                </td>
                <td
                  className={
                    row.number === 8 ? styles.highlightCyan : undefined
                  }
                >
                  {row.wealthBusiness}
                </td>
                <td>{row.relationshipsHealth}</td>
                <td>{row.suitabilityStatus}</td>
                <td>
                  {row.number === 8 ? (
                    <span className={styles.statusBadgeActive}>
                      ACTIVE VECTOR
                    </span>
                  ) : (
                    <span className={styles[`statusBadge_${row.statusType}`]}>
                      {row.statusType.toUpperCase()}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

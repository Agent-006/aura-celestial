import React from "react";
import { Grid } from "lucide-react";
import { LuckyNameTelemetryData } from "../../types/lucky-name-calculator.types";
import styles from "./lucky-name-matrix.module.scss";

interface LuckyNameMatrixProps {
  matrix: LuckyNameTelemetryData["matrix"];
}

export const LuckyNameMatrix: React.FC<LuckyNameMatrixProps> = ({ matrix }) => {
  return (
    <div className={styles.matrixContainer}>
      <div className={styles.header}>
        <div className={styles.leftGroup}>
          <Grid size={14} className={styles.iconGold} />
          <h3 className={styles.title}>Complete 1 to 9 Namank Ephemeris Directory</h3>
        </div>
        <div className={styles.rightGroup}>
          <span className={styles.subtitle}>
            COMPARATIVE ALIGNMENT PROJECTIONS
          </span>
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.matrixTable}>
          <thead>
            <tr>
              <th>NAMANK ROOT</th>
              <th>RULING PLANET</th>
              <th>ELEMENT</th>
              <th>CORE ARCHETYPE</th>
              <th>ALLIES (0)</th>
              <th>OPPONENTS (X)</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {matrix.map((row) => (
              <tr
                key={row.number}
                className={row.number === 9 ? styles.activeRow : undefined}
              >
                <td>{row.number}</td>
                <td className={row.number === 9 ? styles.highlightText : undefined}>
                  {row.ruler}
                </td>
                <td>{row.element}</td>
                <td>{row.archetype}</td>
                <td className={styles.alliesText}>{row.allies}</td>
                <td className={styles.opponentsText}>{row.opponents}</td>
                <td>
                  {row.number === 9 ? (
                    <span className={styles.statusBadgeActive}>ACTIVE VECTOR</span>
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

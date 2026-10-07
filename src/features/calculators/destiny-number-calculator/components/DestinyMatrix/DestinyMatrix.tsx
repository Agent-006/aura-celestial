import React from "react";
import { Grid } from "lucide-react";
import { DestinyMatrixRow } from "../../types/destiny-number-calculator.types";
import styles from "./destiny-matrix.module.scss";

interface DestinyMatrixProps {
  matrix: DestinyMatrixRow[];
}

export const DestinyMatrix: React.FC<DestinyMatrixProps> = ({ matrix }) => {
  return (
    <div className={styles.matrixContainer}>
      <div className={styles.header}>
        <div className={styles.leftGroup}>
          <Grid size={14} className={styles.iconGold} />
          <h3 className={styles.title}>
            Sacred Destiny Synastry Directory (1-9 Matrix)
          </h3>
        </div>
        <div className={styles.rightGroup}>
          <span className={styles.subtitle}>
            COMPARATIVE ALIGNMENT PROJECTIONS (ACTIVE VECTOR = 9)
          </span>
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.matrixTable}>
          <thead>
            <tr>
              <th>DESTINY ROOT</th>
              <th>RULING PLANET</th>
              <th>ELEMENT</th>
              <th>CORE DHARMIC ARCHETYPE</th>
              <th>NATURAL ALLIES (0)</th>
              <th>NATURAL OPPONENTS (X)</th>
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
                <td
                  className={
                    row.number === 9 ? styles.highlightText : undefined
                  }
                >
                  {row.ruler}
                </td>
                <td>{row.element}</td>
                <td>{row.archetype}</td>
                <td className={styles.alliesText}>{row.allies}</td>
                <td className={styles.opponentsText}>{row.opponents}</td>
                <td>
                  {row.number === 9 ? (
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

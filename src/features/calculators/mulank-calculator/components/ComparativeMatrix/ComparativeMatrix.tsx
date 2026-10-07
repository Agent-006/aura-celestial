import React from "react";
import { MulankMatrixRow } from "../../types/mulank-calculator.types";
import styles from "./comparative-matrix.module.scss";

interface ComparativeMatrixProps {
  matrix: MulankMatrixRow[];
}

export const ComparativeMatrix: React.FC<ComparativeMatrixProps> = ({
  matrix,
}) => {
  return (
    <div className={styles.matrixContainer}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>NUMEROLOGICAL SYNASTRY</span>
        <h3 className={styles.title}>
          Complete 1 to 9 Mulank Comparative Matrix
        </h3>
        <p className={styles.subtitle}>
          Karmic interactions across the entire numerological spectrum, mapped
          against your core resonance (Mulank 9 highlighted).
        </p>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.matrixTable}>
          <thead>
            <tr>
              <th>MULANK</th>
              <th>PLANETARY RULER</th>
              <th>TATTVA (ELEMENT)</th>
              <th>PRIMARY PSYCHOLOGICAL TRAIT</th>
              <th>KARMIC ALLIES (HARMONIOUS)</th>
              <th>KARMIC ENEMIES (DISCORDANT)</th>
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
                  {row.planetaryRuler}
                </td>
                <td
                  className={
                    row.number === 9 ? styles.highlightCyan : undefined
                  }
                >
                  {row.tattva}
                </td>
                <td>{row.primaryTrait}</td>
                <td className={styles.greenText}>{row.allies}</td>
                <td className={styles.redText}>{row.enemies}</td>
                <td>
                  {row.number === 9 ? (
                    <span className={styles.statusBadgeActive}>
                      ACTIVE MATRIX
                    </span>
                  ) : (
                    <span className={styles.statusBadgeInactive}>
                      {row.status}
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

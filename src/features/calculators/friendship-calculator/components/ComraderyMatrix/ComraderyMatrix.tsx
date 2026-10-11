import React from "react";
import { CircleDot } from "lucide-react";
import { ComraderyConcordanceRow } from "../../types/friendship.types";
import styles from "./comradery-matrix.module.scss";

interface ComraderyMatrixProps {
  concordances: ComraderyConcordanceRow[];
}

export const ComraderyMatrix: React.FC<ComraderyMatrixProps> = ({
  concordances,
}) => {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.eyebrow}>SYNASTRY COMPATIBILITY VECTORS</div>
          <h2 className={styles.title}>
            Inter-Planetary Comradery Concordance Matrix
          </h2>
        </div>
        <div className={styles.right}>
          <span className={styles.indicatorCyan}></span> EXPORT DOSSIER
          COMPATIBILITY DATA
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table>
          <thead>
            <tr>
              <th>Astrometric Vector</th>
              <th>Native Alpha</th>
              <th>Native Beta</th>
              <th>Vibrational Consequence</th>
              <th style={{ textAlign: "right" }}>Astrometric Status</th>
            </tr>
          </thead>
          <tbody>
            {concordances.map((row, index) => (
              <tr key={index}>
                <td className={styles.vector}>
                  <CircleDot size={14} className={styles.indicator} />
                  {row.vector}
                </td>
                <td className={styles.alpha}>{row.alphaPlacement}</td>
                <td className={styles.beta}>{row.betaPlacement}</td>
                <td className={styles.consequence}>{row.consequence}</td>
                <td
                  className={`${styles.status} ${index % 2 !== 0 ? styles.cyan : ""}`}
                >
                  {row.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

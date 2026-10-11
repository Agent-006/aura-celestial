import React from "react";
import { CircleDot } from "lucide-react";
import { MangalDoshaTelemetryData } from "../../types/mangal-dosha.types";
import styles from "./tricameral-diagnostic-matrix.module.scss";

interface TricameralDiagnosticMatrixProps {
  data: MangalDoshaTelemetryData;
}

export const TricameralDiagnosticMatrix: React.FC<
  TricameralDiagnosticMatrixProps
> = ({ data }) => {
  const getBadgeClass = (status: string) => {
    const l = status.toLowerCase();
    if (l.includes("no")) return "";
    if (l.includes("mild")) return styles.mild;
    if (l.includes("moderate")) return styles.moderate;
    if (l.includes("severe")) return styles.severe;
    return "";
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>
          <CircleDot size={14} /> ADVANCED MEASUREMENT MATRIX
        </div>
        <h2 className={styles.title}>Tricameral Martian Diagnostic Matrix</h2>
        <p className={styles.description}>
          Parashari dosha science mandates evaluating Kuja affliction across
          three distinct energetic reference coordinates to ascertain true
          martial and physical/social karma: Mars in Houses 1, 2, 4, 7, 8, or 12
          generates variable friction.
        </p>
      </div>

      <div className={styles.grid}>
        {data.diagnosticMatrix.map((card, index) => (
          <div key={card.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.vantage}>APEX VANTAGE 0{index + 1}</span>
              <span
                className={`${styles.badge} ${getBadgeClass(card.badgeStatus)}`}
              >
                {card.badgeStatus}
              </span>
            </div>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <div className={styles.cardVantagePoint}>{card.vantagePoint}</div>
            <p className={styles.cardDesc}>{card.description}</p>
            <div className={styles.cardFooter}>
              <span>{card.bottomLabel}</span>
              <span>{card.bottomValue}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

import React from "react";
import { MasterNumber, KarmicDebt } from "../../types/numerology.types";
import styles from "./master-karmic.module.scss";

interface MasterKarmicTelemetryProps {
  masterNumbers: MasterNumber[];
  karmicDebts: KarmicDebt[];
}

export const MasterKarmicTelemetry: React.FC<MasterKarmicTelemetryProps> = ({
  masterNumbers,
  karmicDebts,
}) => {
  return (
    <div className={styles.container}>
      {/* Master Numbers */}
      <div className={styles.panel}>
        <div className={styles.header}>
          <span className={styles.title}>Master Number Telemetry</span>
          <span className={styles.badge}>HIGHER OCTAVES</span>
        </div>

        <div className={styles.list}>
          {masterNumbers.map((mn) => (
            <div
              key={mn.number}
              className={`${styles.item} ${mn.isActive ? styles.active : ""}`}
            >
              <div className={styles.itemMain}>
                <span className={styles.number}>{mn.number}</span>
                <div className={styles.details}>
                  <span className={styles.name}>
                    The{" "}
                    {mn.number === 11
                      ? "Illuminator"
                      : mn.number === 22
                        ? "Master Builder"
                        : "Master Teacher"}
                  </span>
                  {mn.isActive && (
                    <span className={styles.source}>Source: {mn.source}</span>
                  )}
                </div>
              </div>
              <span className={styles.status}>
                {mn.isActive ? "ACTIVE" : "DORMANT"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Karmic Debt */}
      <div className={styles.panel}>
        <div className={styles.header}>
          <span className={styles.title}>Karmic Debt Diagnostic</span>
          <span className={styles.badge}>PAST LIFE PATTERNS</span>
        </div>

        <div className={styles.grid}>
          {karmicDebts.map((kd) => (
            <div
              key={kd.number}
              className={`${styles.debtCard} ${kd.isActive ? styles.active : ""}`}
            >
              <div className={styles.debtHeader}>
                <span className={styles.number}>Debt {kd.number}</span>
                <span className={styles.status}>
                  {kd.isActive ? "ACTIVE" : "CLEAR"}
                </span>
              </div>
              <span className={styles.desc}>
                {kd.number === 13 && "Hard work & Discipline"}
                {kd.number === 14 && "Freedom & Restraint"}
                {kd.number === 16 && "Ego & Responsibility"}
                {kd.number === 19 && "Independence & Support"}
              </span>
            </div>
          ))}
        </div>

        <div className={styles.disclaimer}>
          <span className={styles.icon}>✧</span>
          <p>
            Presence of karmic numbers indicates intense past-life karma that
            requires specific conscious refinement in this incarnation.
          </p>
        </div>
      </div>
    </div>
  );
};

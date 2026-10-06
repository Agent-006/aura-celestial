import React from "react";
import { SynergyMetric } from "../../types/atmakaraka.types";
import styles from "./synergy-calculus.module.scss";

interface SynergyCalculusProps {
  metrics: SynergyMetric[];
}

export const SynergyCalculus: React.FC<SynergyCalculusProps> = ({
  metrics,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>
          Atmakaraka & Darakaraka Synergy Calculus
        </h3>
        <p className={styles.subtitle}>
          The dynamic interaction between the soul&apos;s primary desire (AK)
          and the soul&apos;s partner (DK).
        </p>
      </div>

      <div className={styles.grid}>
        {metrics.map((metric, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconBox}>✧</div>
              <div className={styles.scoreBox}>
                <span className={styles.score}>{metric.score}</span>
                <span className={styles.max}>/100</span>
              </div>
            </div>
            <h4 className={styles.cardTitle}>{metric.title}</h4>
            <p className={styles.cardDesc}>{metric.description}</p>

            <div className={styles.progressBarBg}>
              <div
                className={styles.progressBarFill}
                style={{ width: `${metric.score}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

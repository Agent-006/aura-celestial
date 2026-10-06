import React from "react";
import { ClassicalFormation } from "../../types/kaal-sarp.types";
import styles from "./classical-formations.module.scss";

interface ClassicalFormationsProps {
  formations: ClassicalFormation[];
}

export const ClassicalFormations: React.FC<ClassicalFormationsProps> = ({
  formations,
}) => {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <div>
          <div className={styles.eyebrow}>DIAGNOSTIC ENUMERATION</div>
          <h2 className={styles.title}>
            The 12 Classical Kaal Sarp Formations
          </h2>
        </div>
        <div className={styles.subtitle}>
          DIAGNOSTIC ALGORITHM: EXACT ZODIAC SIGN + LAGNA ENCASEMENT AXIS |
          CANONICAL DOSHA TYPES
        </div>
      </div>

      <div className={styles.grid}>
        {formations.map((formation) => (
          <div
            key={formation.id}
            className={`${styles.card} ${formation.isActive ? styles.active : ""}`}
          >
            <div className={styles.cardHeader}>
              <div className={styles.subtitle}>{formation.subtitle}</div>
              {formation.isActive && (
                <div className={styles.badge}>ACTIVE MUTATION</div>
              )}
            </div>

            <h3 className={styles.cardTitle}>{formation.title}</h3>
            <p className={styles.cardDesc}>{formation.description}</p>

            <div className={styles.footerRow}>
              <span>Status Level</span>
              <span
                className={`${styles.status} ${formation.isActive ? styles.cyan : ""}`}
              >
                {formation.statusLabel}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

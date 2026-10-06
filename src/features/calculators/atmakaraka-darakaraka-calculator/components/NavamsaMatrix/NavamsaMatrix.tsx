import React from "react";
import { AtmakarakaTelemetry } from "../../types/atmakaraka.types";
import styles from "./navamsa-matrix.module.scss";

interface NavamsaMatrixProps {
  navamsaPlacement: AtmakarakaTelemetry["navamsaPlacement"];
  atmakaraka: AtmakarakaTelemetry["atmakaraka"];
}

export const NavamsaMatrix: React.FC<NavamsaMatrixProps> = ({
  navamsaPlacement,
  atmakaraka,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {/* Left Side: Navamsa Chart visual */}
        <div className={styles.chartSection}>
          <h4 className={styles.sectionTitle}>
            Navamsa (D-9) Atmakaraka Placement
          </h4>
          <div className={styles.chartVisual}>
            <div className={styles.diamondOuter}>
              <div className={styles.diamondInner}>
                <div className={styles.placementInfo}>
                  <span className={styles.planet}>
                    {atmakaraka.planet} (AK)
                  </span>
                  <span className={styles.sign}>{navamsaPlacement.sign}</span>
                  <span className={styles.house}>
                    {navamsaPlacement.house}th House
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Soul Evolution */}
        <div className={styles.evolutionSection}>
          <h4 className={styles.sectionTitle}>Soul Evolution Matrix</h4>
          <p className={styles.subtitle}>
            The Navamsa (D-9) reveals the hidden, spiritual reality of the
            Atmakaraka. It shows the ultimate path of the soul&apos;s evolution.
          </p>

          <div className={styles.dignityCard}>
            <div className={styles.dignityRow}>
              <span className={styles.label}>Planetary Dignity</span>
              <span className={styles.value}>{navamsaPlacement.dignity}</span>
            </div>
          </div>

          <div className={styles.karmicLesson}>
            <h5 className={styles.lessonTitle}>
              The Challenge of {atmakaraka.planet}
            </h5>
            <p className={styles.lessonText}>{atmakaraka.karmicLesson}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import styles from "./love-compatibility-data-grids.module.scss";
import { AshtakootaMatrix } from "../AshtakootaMatrix/AshtakootaMatrix";
import { PlanetarySynastry } from "../PlanetarySynastry/PlanetarySynastry";

export function LoveCompatibilityDataGrids() {
  return (
    <section className={styles.gridsContainer}>
      <div className={styles.grid}>
        <AshtakootaMatrix />
        <PlanetarySynastry />
      </div>
    </section>
  );
}

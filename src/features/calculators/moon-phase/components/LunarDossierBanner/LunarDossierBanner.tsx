import React from "react";
import styles from "./lunar-dossier-banner.module.scss";

export function LunarDossierBanner() {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.content}>
        <span className={styles.eyebrow}>
          DATA INGESTION COMPLETE // METRICS RENDERED
        </span>
        <h2 className={styles.title}>
          Topocentric Lunar Dossier & Panchang Chronograph
        </h2>
        <p className={styles.desc}>
          Extract the full ephemeris calculations, minute-by-minute phase
          transitions, and personalized lunar geometry rules.
        </p>
      </div>
      <div className={styles.action}>
        <button className={styles.btnDownload}>
          ✦ Download Full PDF Dossier ✦
        </button>
      </div>
    </div>
  );
}

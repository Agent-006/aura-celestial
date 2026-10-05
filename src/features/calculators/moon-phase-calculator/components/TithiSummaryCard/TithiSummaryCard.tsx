import React from "react";
import styles from "./tithi-summary-card.module.scss";

export function TithiSummaryCard() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>LUNAR PHASE CLASSIFICATION</span>
        <span className={styles.badge}>TRADITIONAL PANCHANG</span>
      </div>
      <h3 className={styles.title}>
        Ekadashi{" "}
        <span className={styles.subtitle}>(11th Tithi — Nanda Category)</span>
      </h3>
      <div className={styles.metadataGrid}>
        <div className={styles.metaItem}>
          <span className={styles.label}>START TIME (LOCAL)</span>
          <span className={styles.value}>May 18, 08:42 AM</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.label}>END TIME (LOCAL)</span>
          <span className={styles.value}>May 19, 06:15 AM</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.label}>RULING DEITY</span>
          <span className={styles.value}>Vishvedevas</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.label}>AUSPICIOUSNESS</span>
          <span className={styles.valueHighlight}>Highly Auspicious</span>
        </div>
      </div>
      <blockquote className={styles.quote}>
        When the Moon separates from the Sun by twelve degrees, one tithi is
        generated. In Shukla it creates dharma, wealth and ritual purity.
      </blockquote>
      <div className={styles.footer}>
        MOON SIGN: TAURUS (VRISHABHA) // NAKSHATRA: ROHINI (PADA 2) // ACTIVE
        YOGA: SHIVA
      </div>
    </div>
  );
}

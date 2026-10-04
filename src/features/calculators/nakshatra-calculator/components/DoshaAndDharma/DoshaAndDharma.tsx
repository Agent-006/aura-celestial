"use client";

import React from "react";
import { useDoshaAndDharma } from "../../hooks/useDoshaAndDharma";
import { ShieldAlert, BookOpen } from "lucide-react";
import styles from "./dosha-dharma.module.scss";

export function DoshaAndDharma() {
  const { data, isLoading } = useDoshaAndDharma();

  if (isLoading || !data) {
    return <div className={styles.section}>Loading Protocols...</div>;
  }

  const { dosha, dharma } = data;

  return (
    <section className={styles.section}>
      {/* Left Card: Dosha Analysis */}
      <div className={styles.card}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <ShieldAlert size={24} color="#e6b553" />
            Mula / Gandanta Dosha Analysis
          </h2>
          <span className={styles.subtitle}>
            Karmic friction points at the junction of fire and water signs.
          </span>
        </div>

        <ul className={styles.doshaList}>
          {dosha.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>

        {dosha.warningMessage && (
          <div className={styles.warningBox}>
            <div className={styles.statusLine}>
              Dosha Status: {dosha.status}
            </div>
            <p>{dosha.warningMessage}</p>
          </div>
        )}

        <button className={styles.readMoreBtn}>READ FULL DOSHA REPORT →</button>
      </div>

      {/* Right Card: Dharma Protocol */}
      <div className={styles.card}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <BookOpen size={24} color="#e6b553" />
            Your Specific Dharma Protocol
          </h2>
          <span className={styles.subtitle}>
            Remedial measures for balancing and optimizing this energy.
          </span>
        </div>

        <div className={styles.dharmaGrid}>
          <div className={styles.dharmaItem}>
            <span className={styles.label}>GEMSTONE</span>
            <span className={styles.value}>{dharma.gemstone}</span>
            <span className={styles.desc}>{dharma.gemDesc}</span>
          </div>
          <div className={styles.dharmaItem}>
            <span className={styles.label}>MANTRA</span>
            <span className={styles.value}>{dharma.mantra}</span>
            <span className={styles.desc}>{dharma.mantraDesc}</span>
          </div>
          <div className={styles.dharmaItem}>
            <span className={styles.label}>DEITY</span>
            <span className={styles.value}>{dharma.deity}</span>
            <span className={styles.desc}>{dharma.deityDesc}</span>
          </div>
        </div>

        <div className={styles.actionBox}>
          <span className={styles.actionTitle}>✦ {dharma.actionTitle}</span>
          <button className={styles.btnSolid}>View Guide</button>
        </div>
      </div>
    </section>
  );
}

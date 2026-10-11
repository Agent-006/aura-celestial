"use client";

import React from "react";
import { useHarmonyProtocols } from "../../hooks/useHarmonyProtocols";
import styles from "./harmony-protocols.module.scss";

export function HarmonyProtocols() {
  const { protocols, isLoading } = useHarmonyProtocols();

  if (isLoading) {
    return <div className={styles.container}>Loading protocols...</div>;
  }

  return (
    <section className={styles.container}>
      <span className={styles.eyebrow}>
        ACTIONABLE METRICS // SYNERGISTIC CORRELATIONS
      </span>
      <h2 className={styles.title}>
        Lunar Harmony Protocols for Shukla Ekadashi
      </h2>

      <div className={styles.grid}>
        {protocols.map((p, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.icon}>{p.icon}</div>
            <span className={styles.cardEyebrow}>{p.title}</span>
            <h4 className={styles.cardTitle}>{p.header}</h4>
            <p className={styles.cardDesc}>{p.desc}</p>
            <a href="#" className={styles.link}>
              {p.link}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

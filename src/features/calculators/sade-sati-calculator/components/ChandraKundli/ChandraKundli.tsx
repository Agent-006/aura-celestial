"use client";

import React from "react";
import { useSadeSatiTelemetry } from "../../hooks/useSadeSatiTelemetry";
import styles from "./chandra-kundli.module.scss";

export function ChandraKundli() {
  const { data, isLoading } = useSadeSatiTelemetry();

  if (isLoading || !data) return null;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Chandra Kundli & Shani Drishti Rays</h2>
      </div>
      <div className={styles.layoutGrid}>
        <div className={styles.chartColumn}>
          <div className={styles.chartContainer}>
            {/* North Indian Diamond Chart SVG */}
            <svg viewBox="0 0 100 100" className={styles.kundliSvg}>
              <rect x="5" y="5" width="90" height="90" />
              <line x1="5" y1="5" x2="95" y2="95" />
              <line x1="5" y1="95" x2="95" y2="5" />
              <polygon points="50,5 95,50 50,95 5,50" />
              <text x="50" y="25" className={styles.moon}>
                1. MOON (Kumbha)
              </text>
              <text x="50" y="32" className={styles.shani}>
                SHANI (12th)
              </text>
              <text x="25" y="15">
                2
              </text>
              <text x="15" y="25">
                3
              </text>
              <text x="25" y="50">
                4
              </text>
              <text x="15" y="75">
                5
              </text>
              <text x="25" y="85">
                6
              </text>
              <text x="50" y="75">
                7 (3rd Drishti)
              </text>
              <text x="75" y="85">
                8
              </text>
              <text x="85" y="75">
                9
              </text>
              <text x="75" y="50">
                10 (7th Drishti)
              </text>
              <text x="85" y="25">
                11
              </text>
              <text x="75" y="15">
                12 (10th Drishti)
              </text>
            </svg>
          </div>
          <div className={styles.drishtiRow}>
            {data.drishti.map((ray, idx) => (
              <div key={idx} className={styles.drishtiCard}>
                <span className={styles.drishtiTitle}>
                  {ray.ray} • {ray.house}
                </span>
                <span className={styles.drishtiDesc}>{ray.effect}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.rightColumn}>
          <h3 className={styles.cardTitle}>Shani Dhaiya (Kantaka & Ashtama)</h3>
          <p className={styles.cardSubtitle}>
            Apart from the 7.5-year Sade Sati, Saturn&apos;s 2.5-year transits
            through the 4th (Kantaka) and 8th (Ashtama) houses from your natal
            Moon carry independent karmic weight.
          </p>
          <div className={styles.dhaiyaBlock}>
            <div className={styles.blockHeader}>
              <span className={styles.name}>Kantaka Shani (4th House)</span>
              <span className={styles.badge}>PENDING TRANSIT</span>
            </div>
            <p className={styles.desc}>
              Transiting the house of domestic peace, properties, and mother.
              Creates restlessness and sudden domestic changes.
            </p>
          </div>
          <div className={styles.dhaiyaBlock}>
            <div className={styles.blockHeader}>
              <span className={styles.name}>Ashtama Shani (8th House)</span>
              <span className={`${styles.badge} ${styles.active}`}>
                ACTIVE DHAIYA
              </span>
            </div>
            <p className={styles.desc}>
              Transiting the house of longevity, hidden matters, and sudden
              events. Demands extreme caution in health and financial
              investments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

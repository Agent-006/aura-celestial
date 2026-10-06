"use client";

import React from "react";
import { Brain, Activity, Clock } from "lucide-react";
import { RashiTelemetryData } from "../../types/rashi.types";
import styles from "./rashi-destiny.module.scss";

interface RashiDestinyProps {
  data: RashiTelemetryData;
}

export const RashiDestiny: React.FC<RashiDestinyProps> = ({ data }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case "core":
        return <Brain size={24} />;
      case "vimshottari":
        return <Activity size={24} />;
      case "gochar":
        return <Clock size={24} />;
      default:
        return <Brain size={24} />;
    }
  };

  return (
    <div className={styles.destinySection}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>
          SOUL ARCHITECTONICS & KARMIC TIMELINES
        </span>
        <h3 className={styles.title}>
          Why Chandra Rashi Governs Your Natal Destiny
        </h3>
        <p className={styles.subtitle}>
          In Vedic astrology (Jyotish), the Moon (Chandra) is the matrix of
          consciousness (Mind/Perception) and provides the anchor point for
          defining the nature of the soul&apos;s journey in this life, dictating
          timelines (Dasha) and transits (Gochar).
        </p>
      </div>

      <div className={styles.cardsGrid}>
        {data.destinyPoints.map((point) => (
          <div key={point.id} className={styles.destinyCard}>
            <div
              className={`${styles.iconWrapper} ${point.iconType === "vimshottari" ? styles.cyan : ""}`}
            >
              {getIcon(point.iconType)}
            </div>
            <h4 className={styles.cardTitle}>{point.title}</h4>
            <p className={styles.cardDesc}>{point.description}</p>
            <span className={styles.cardLink}>
              Explore {point.title.split(".")[1]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

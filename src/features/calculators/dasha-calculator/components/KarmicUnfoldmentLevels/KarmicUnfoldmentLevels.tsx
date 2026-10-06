"use client";

import React from "react";
import { CircleDot, Circle, Target } from "lucide-react";
import { DashaTelemetryData } from "../../types/dasha.types";
import styles from "./karmic-unfoldment-levels.module.scss";

interface KarmicUnfoldmentLevelsProps {
  data: DashaTelemetryData;
}

export const KarmicUnfoldmentLevels: React.FC<KarmicUnfoldmentLevelsProps> = ({
  data,
}) => {
  const getIcon = (type: string) => {
    switch (type) {
      case "mahadasa":
        return <CircleDot size={24} />;
      case "antardasha":
        return <Circle size={24} />;
      case "pratyantardasha":
        return <Target size={24} />;
      default:
        return <CircleDot size={24} />;
    }
  };

  const getColorClass = (type: string) => {
    switch (type) {
      case "mahadasa":
        return "";
      case "antardasha":
        return styles.cyan;
      case "pratyantardasha":
        return styles.white;
      default:
        return "";
    }
  };

  return (
    <div className={styles.levelsSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>TECHNICAL TIMELINE DYNAMICS</span>
        <h3 className={styles.title}>The Three Levels of Karmic Unfoldment</h3>
        <p className={styles.subtitle}>
          Vimshottari timelines operate on macro and micro scales,
          systematically modulating individual conscious focus and external
          reality matrices.
        </p>
      </div>

      <div className={styles.cardsGrid}>
        {data.unfoldmentLevels.map((level) => (
          <div key={level.id} className={styles.levelCard}>
            <div
              className={`${styles.iconWrapper} ${getColorClass(level.iconType)}`}
            >
              {getIcon(level.iconType)}
            </div>
            <span className={styles.cardLabel}>LEVEL {level.id} TIMELINE</span>
            <h4
              className={`${styles.cardTitle} ${level.iconType === "antardasha" ? styles.cyan : ""}`}
            >
              {level.title}
            </h4>
            <p className={styles.cardDesc}>{level.description}</p>

            <div className={styles.cardFooter}>
              <span className={styles.timeline}>Guru 1 - 20 YEARS</span>
              <span className={styles.tag}>{level.tagText}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

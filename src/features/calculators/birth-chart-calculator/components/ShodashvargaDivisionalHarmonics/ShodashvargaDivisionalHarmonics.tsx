import React from "react";
import { CircleDot } from "lucide-react";
import { BirthChartTelemetryData } from "../../types/birth-chart.types";
import styles from "./shodashvarga-divisional-harmonics.module.scss";

interface ShodashvargaDivisionalHarmonicsProps {
  data: BirthChartTelemetryData;
}

export const ShodashvargaDivisionalHarmonics: React.FC<
  ShodashvargaDivisionalHarmonicsProps
> = ({ data }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case "square":
        return (
          <svg viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" />
            <line x1="3" y1="3" x2="21" y2="21" />
            <line x1="21" y1="3" x2="3" y2="21" />
          </svg>
        );
      case "diamond":
        return (
          <svg viewBox="0 0 24 24" className={styles.cyanStroke}>
            <polygon points="12,2 22,12 12,22 2,12" />
          </svg>
        );
      case "hexagon":
        return (
          <svg viewBox="0 0 24 24">
            <polygon points="12,2 22,7 22,17 12,22 2,17 2,7" />
          </svg>
        );
      case "split":
        return (
          <svg viewBox="0 0 24 24" className={styles.cyanStroke}>
            <rect x="3" y="3" width="18" height="18" />
            <line x1="12" y1="3" x2="12" y2="21" />
          </svg>
        );
      case "triangle":
        return (
          <svg viewBox="0 0 24 24">
            <polygon points="12,2 22,20 2,20" />
          </svg>
        );
      case "circle":
        return (
          <svg viewBox="0 0 24 24" className={styles.cyanStroke}>
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
          </svg>
        );
      case "heptagon":
        return (
          <svg viewBox="0 0 24 24">
            <polygon points="12,2 20,6 22,14 16,21 8,21 2,14 4,6" />
          </svg>
        );
      case "rectangle":
        return (
          <svg viewBox="0 0 24 24" className={styles.cyanStroke}>
            <rect x="4" y="2" width="16" height="20" />
            <line x1="4" y1="12" x2="20" y2="12" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
          </svg>
        );
    }
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>
          <CircleDot size={14} /> VARGA CHAKRA (HARMONIC DIVISIONS)
        </div>
        <h2 className={styles.title}>Shodashvarga Divisional Harmonics</h2>
        <p className={styles.subtitle}>
          Micro-scans of specific life areas (Vargas)
        </p>
      </div>

      <div className={styles.grid}>
        {data.divisionalHarmonics.map((varga) => (
          <div key={varga.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.code}>{varga.code}</span>
              <button className={styles.viewBtn}>VIEW CHART</button>
            </div>
            <h3 className={styles.cardTitle}>{varga.title}</h3>
            
            <div className={styles.visualArea}>
              {getIcon(varga.iconType)}
            </div>

            <p className={styles.description}>{varga.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

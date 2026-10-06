import React from "react";
import { CircleDot, Info } from "lucide-react";
import { BirthChartTelemetryData } from "../../types/birth-chart.types";
import styles from "./bhava-house-significators.module.scss";

interface BhavaHouseSignificatorsProps {
  data: BirthChartTelemetryData;
}

export const BhavaHouseSignificators: React.FC<
  BhavaHouseSignificatorsProps
> = ({ data }) => {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>
          <CircleDot size={14} /> KARMIC ARENAS & CORE FOCUS
        </div>
        <h2 className={styles.title}>12 Bhava (House) Cusps & Significators</h2>
      </div>

      <div className={styles.grid}>
        {data.bhavaSignificators.map((house) => {
          const isOccupied = house.occupants !== "None";
          return (
            <div key={house.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.title}>{house.houseTitle}</h3>
                <span
                  className={`${styles.badge} ${
                    isOccupied ? styles.highlight : ""
                  }`}
                >
                  {isOccupied ? "Occupied" : "Empty"}
                </span>
              </div>
              <p className={styles.subtitle}>{house.subtitle}</p>

              <div className={styles.detailsGrid}>
                <div className={styles.detailItem}>
                  <span className={styles.label}>Rashi / Sign</span>
                  <span className={styles.value}>{house.rashi}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.label}>Lord</span>
                  <span className={styles.value}>{house.lord}</span>
                </div>
                <div className={`${styles.detailItem} ${styles.fullWidth}`}>
                  <span className={styles.label}>Occupants</span>
                  <span className={styles.value}>{house.occupants}</span>
                </div>
              </div>

              <div className={styles.description}>
                <Info size={14} className={styles.icon} />
                <span>{house.description}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

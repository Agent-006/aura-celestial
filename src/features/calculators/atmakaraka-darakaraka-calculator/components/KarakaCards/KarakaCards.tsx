import React from "react";
import { KarakaPlanet } from "../../types/atmakaraka.types";
import styles from "./karaka-cards.module.scss";

interface KarakaCardsProps {
  atmakaraka: KarakaPlanet;
  darakaraka: KarakaPlanet;
}

export const KarakaCards: React.FC<KarakaCardsProps> = ({
  atmakaraka,
  darakaraka,
}) => {
  // Degree is out of 30 in a sign
  const getDegreePercentage = (degree: number) => (degree / 30) * 100;

  const renderCard = (karaka: KarakaPlanet, type: "ak" | "dk") => {
    const isAK = type === "ak";
    const percentage = getDegreePercentage(karaka.degree);

    return (
      <div className={`${styles.card} ${isAK ? styles.akCard : styles.dkCard}`}>
        <div className={styles.cardHeader}>
          <div className={styles.titleArea}>
            <span className={styles.roleTag}>
              {karaka.role} (Highest Degree)
            </span>
            <h3 className={styles.title}>{karaka.title}</h3>
            <div className={styles.planetValue}>{karaka.planet}</div>
          </div>
          <div className={styles.iconBox}>{isAK ? "👑" : "💍"}</div>
        </div>

        <p className={styles.description}>{karaka.description}</p>

        <div className={styles.statsGrid}>
          <div className={styles.stat}>
            <span className={styles.label}>Zodiac Sign (Rashi)</span>
            <span className={styles.value}>{karaka.sign}</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.label}>Nakshatra (Star)</span>
            <span className={styles.value}>{karaka.nakshatra}</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.label}>House Placement</span>
            <span className={styles.value}>{karaka.house}th House</span>
          </div>
        </div>

        <div className={styles.degreeSection}>
          <div className={styles.degreeHeader}>
            <span className={styles.label}>Degree Intensity</span>
            <span className={styles.value}>
              {karaka.degree.toFixed(2)}° / 30.00°
            </span>
          </div>
          <div className={styles.progressBarBg}>
            <div
              className={styles.progressBarFill}
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {renderCard(atmakaraka, "ak")}
      {renderCard(darakaraka, "dk")}
    </div>
  );
};

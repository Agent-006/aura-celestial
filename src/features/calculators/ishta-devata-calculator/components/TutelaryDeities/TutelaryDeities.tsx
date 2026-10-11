import React from "react";
import { TutelaryDeity } from "../../types/ishta-devata.types";
import { Share2, Users } from "lucide-react";
import styles from "./tutelary-deities.module.scss";

interface TutelaryDeitiesProps {
  deities: TutelaryDeity[];
}

export const TutelaryDeities: React.FC<TutelaryDeitiesProps> = ({
  deities,
}) => {
  return (
    <div className={styles.tutelaryContainer}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <Users size={18} /> The Triad of Tutelary Deities Matrix
        </div>
        <p className={styles.subtitle}>
          Vedic astrology (Jyotish) assigns three distinct tutelary deities for
          absolute spiritual resonance, life purpose, and material sustenance in
          the current incarnation.
        </p>
      </div>

      <div className={styles.cardsGrid}>
        {deities.map((deity, idx) => (
          <div key={idx} className={styles.deityCard}>
            <div className={styles.cardHeader}>
              <span className={styles.typeLabel}>{deity.type}</span>
              <Share2 size={12} className={styles.icon} />
            </div>

            <h3 className={styles.title}>{deity.title}</h3>
            <div className={styles.planetInfo}>{deity.planet}</div>

            <p className={styles.description}>{deity.description}</p>

            <div className={styles.cardFooter}>
              <div className={styles.footerCol}>
                <span className={styles.label}>TUTELARY MANTRA</span>
                <span className={styles.valCyan}>{deity.mantra}</span>
                <span className={styles.subtext}>
                  {deity.mantraDescription}
                </span>
              </div>
              <div className={styles.footerCol}>
                <span className={styles.label}>SACRED OFFERING</span>
                <span className={styles.valGold}>{deity.offering}</span>
                <span className={styles.subtext}>
                  {deity.offeringDescription}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

import React from "react";
import { CircleDot, Gem, HeartHandshake } from "lucide-react";
import { MangalDoshaTelemetryData } from "../../types/mangal-dosha.types";
import styles from "./martian-remedies.module.scss";

interface MartianRemediesProps {
  data: MangalDoshaTelemetryData;
}

export const MartianRemedies: React.FC<MartianRemediesProps> = ({ data }) => {
  const { mantra, gemstone, charity } = data.remedies;

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>
          <CircleDot size={14} /> TANTRIK & VEDIC REMEDIAL ALIGNMENT
        </div>
        <h2 className={styles.title}>
          Martian Harmonization Protocol & Sacred Astrological Corrections
        </h2>
        <p className={styles.description}>
          Harmonizing Kuja energy transmutes volatile friction into unwavering
          courage, physical vitality, and sovereign spiritual purpose.
        </p>
      </div>

      <div className={styles.grid}>
        {/* Mantra Card */}
        <div className={`${styles.card} ${styles.mantraCard}`}>
          <div className={styles.cardHeader}>
            <span className={styles.eyebrow}>{mantra.eyebrow}</span>
            <CircleDot size={16} className={styles.icon} />
          </div>
          <h3 className={styles.cardTitle}>{mantra.title}</h3>
          <div className={`${styles.primaryText} ${styles.mantraText}`}>
            {mantra.primary}
          </div>
          <p className={styles.description}>{mantra.description}</p>
          <div className={styles.footer}>
            <span>{mantra.footer}</span>
            <span className={styles.footerHighlight}>Deity: Kartikeya</span>
          </div>
        </div>

        {/* Gemstone Card */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.eyebrow}>{gemstone.eyebrow}</span>
            <Gem size={16} className={styles.icon} />
          </div>
          <h3 className={styles.cardTitle}>{gemstone.title}</h3>
          <div className={styles.primaryText}>{gemstone.primary}</div>
          <p className={styles.description}>{gemstone.description}</p>
          <div className={styles.footer}>
            <span>{gemstone.footer}</span>
            <span className={styles.footerHighlight}>Stone: Prabal (Red Coral)</span>
          </div>
        </div>

        {/* Charity Card */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.eyebrow}>{charity.eyebrow}</span>
            <HeartHandshake size={16} className={styles.icon} />
          </div>
          <h3 className={styles.cardTitle}>{charity.title}</h3>
          <ul className={`${styles.primaryText} ${styles.listText}`}>
            <li>
              Donate split red lentils (Masoor Dal), jaggery, or red cloth to
              local orphanages/laborers on Tuesdays.
            </li>
            <li>
              Recite the sacred Hanuman Chalisa daily at dusk. Dedicate 20
              minutes to rigorous physical martial arts or bodyweight exercise to
              channel the kinetic force.
            </li>
          </ul>
          <p className={styles.description}></p>
          <div className={styles.footer}>
            <span>{charity.footer}</span>
            <span className={styles.footerHighlight}>High Karmic Yield</span>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { CircleDot, Gem, HeartHandshake, Sparkles } from "lucide-react";
import { BirthChartTelemetryData } from "../../types/birth-chart.types";
import styles from "./natal-harmonization-shield.module.scss";

interface NatalHarmonizationShieldProps {
  data: BirthChartTelemetryData;
}

export const NatalHarmonizationShield: React.FC<
  NatalHarmonizationShieldProps
> = ({ data }) => {
  const { gemstone, charity, mantra } = data.remedies;

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>
          <CircleDot size={14} /> CORRECTIVE ASTRAL VECTORS (UPAYAS)
        </div>
        <h2 className={styles.title}>Natal Harmonization & Remedial Shield</h2>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.eyebrow}>{gemstone.eyebrow}</span>
            <Gem size={16} className={styles.icon} />
          </div>
          <h3 className={styles.cardTitle}>{gemstone.title}</h3>
          <div className={styles.primaryText}>{gemstone.primary}</div>
          <p className={styles.description}>{gemstone.description}</p>
          <div className={styles.footer}>
            <span className={styles.footerHighlight}>{gemstone.footer}</span>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.eyebrow}>{charity.eyebrow}</span>
            <HeartHandshake size={16} className={styles.icon} />
          </div>
          <h3 className={styles.cardTitle}>{charity.title}</h3>
          <div className={styles.primaryText}>{charity.primary}</div>
          <p className={styles.description}>{charity.description}</p>
          <div className={styles.footer}>
            <span className={styles.footerHighlight}>{charity.footer}</span>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.eyebrow}>{mantra.eyebrow}</span>
            <Sparkles size={16} className={styles.icon} />
          </div>
          <h3 className={styles.cardTitle}>{mantra.title}</h3>
          <div className={styles.primaryText}>{mantra.primary}</div>
          <p className={styles.description}>{mantra.description}</p>
          <div className={styles.footer}>
            <span className={styles.footerHighlight}>{mantra.footer}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

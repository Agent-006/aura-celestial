import React from "react";
import { SpiritualSadhanaProtocol } from "../../types/ishta-devata.types";
import { BookOpen } from "lucide-react";
import styles from "./spiritual-sadhana.module.scss";

interface SpiritualSadhanaProps {
  protocols: SpiritualSadhanaProtocol[];
}

export const SpiritualSadhana: React.FC<SpiritualSadhanaProps> = ({
  protocols,
}) => {
  return (
    <div className={styles.sadhanaContainer}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <BookOpen size={18} /> Consecrated Sadhana & Spiritual Harmonization
        </div>
        <p className={styles.subtitle}>
          Specific spiritual protocols, mantras, and karmic actions derived from
          the D9 Navamsha chart to align with your Ishta Devata.
        </p>
      </div>

      <div className={styles.protocolsGrid}>
        {protocols.map((protocol) => (
          <div key={protocol.id} className={styles.protocolCard}>
            <div className={styles.cardHeader}>
              <span className={styles.typeBadge}>{protocol.type}</span>
              <span className={styles.statusDot}></span>
            </div>

            <h3 className={styles.title}>{protocol.title}</h3>

            <div className={styles.mantraBox}>
              <span className={styles.mantraText}>
                {protocol.mantraOrAction}
              </span>
            </div>

            <p className={styles.description}>{protocol.description}</p>

            <div className={styles.cardAction}>
              <button className={styles.actionBtn}>
                Download Ritual Guide
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

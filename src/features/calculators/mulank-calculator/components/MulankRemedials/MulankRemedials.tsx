import React from "react";
import { ShieldCheck, Music, Home } from "lucide-react";
import styles from "./mulank-remedials.module.scss";

export const MulankRemedials: React.FC = () => {
  const remedials = [
    {
      title: "Mangala Bija Mantra & Japa",
      icon: <Music size={16} />,
      content: (
        <div className={styles.mantraBox}>
          <div className={styles.mantraText}>
            "ॐ क्रां क्रीं क्रौं सः भौमाय नमः"
          </div>
          <div className={styles.mantraDesc}>
            Recite 10,000 times on Tuesdays starting during the bright half of
            the lunar month (Shukla Paksha) to pacify Kuja Dosha or excess
            martial fire.
          </div>
        </div>
      ),
      type: "success",
    },
    {
      title: "Mineral & Talismanic Shield",
      icon: <ShieldCheck size={16} />,
      content: (
        <div className={styles.shieldGrid}>
          <div className={styles.sRow}>
            <span>Primary Gemstone:</span>
            <span className={styles.valGold}>
              Red Coral (Moonga) at 5.25 Ratti
            </span>
          </div>
          <div className={styles.sRow}>
            <span>Ring Finger / Metal:</span>
            <span className={styles.valCyan}>Anamika (Ring Finger) / Gold</span>
          </div>
          <div className={styles.sRow}>
            <span>Day / Time / Nakshatra:</span>
            <span className={styles.val}>
              Tuesday, Mars Hora / Mrigashira, Chitra, Dhanishta
            </span>
          </div>
        </div>
      ),
      type: "warning",
    },
    {
      title: "Spatial Vastu & Daanam",
      icon: <Home size={16} />,
      content: (
        <div className={styles.vastuBox}>
          <div className={styles.vHeader}>
            DIRECTION CONFORMITY AND DO NOT-DO DONATIONS
          </div>
          <p>
            Maintain clear and heavy Southern areas. Keep South zone well-lit
            and active. Face East or North during critical tasks.
          </p>
          <div className={styles.vHighlight}>
            <span>DONATION PROTOCOL:</span> Donate red lentils (Masoor Dal),
            copper vessels, or sweet jaggery (Gur) on Tuesdays to offset intense
            9-karmas.
          </div>
        </div>
      ),
      type: "info",
    },
  ];

  return (
    <div className={styles.remedialsContainer}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>KARMIC HARMONIZATION</span>
        <h3 className={styles.title}>
          Consecrated Remedial Protocols & Harmonization Sadhana
        </h3>
        <p className={styles.subtitle}>
          Calibrated corrective measures for Mangala (Mars), Root 9. Use to
          pacify hyper-kinetic energy, avert conflicts, and heal physical/mental
          burnout.
        </p>
      </div>

      <div className={styles.cardsGrid}>
        {remedials.map((remedial, idx) => (
          <div
            key={idx}
            className={styles.remedialCard}
            data-type={remedial.type}
          >
            <div className={styles.cardHeader}>
              <h4 className={styles.cardTitle}>{remedial.title}</h4>
              <div className={styles.iconWrap}>{remedial.icon}</div>
            </div>

            <div className={styles.cardContent}>{remedial.content}</div>

            <div className={styles.cardAction}>
              <span className={styles.actionLabel}>
                IMPLEMENTATION TIMELINE
              </span>
              <span className={styles.actionText}>BEGIN IMMEDIATELY</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

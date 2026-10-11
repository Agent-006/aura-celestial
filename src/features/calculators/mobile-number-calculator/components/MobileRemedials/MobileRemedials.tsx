import React from "react";
import { Zap, Shield, Image as ImageIcon } from "lucide-react";
import styles from "./mobile-remedials.module.scss";

export const MobileRemedials: React.FC = () => {
  const remedials = [
    {
      title: "Wallpaper Yantra & Screen Geometry",
      icon: <ImageIcon size={16} />,
      content: (
        <div className={styles.rBox}>
          <p>
            Set the mobile lock screen wallpaper to a{" "}
            <strong>Shree Yantra</strong> or a blue/black geometric pattern.
            This calms the aggressive Martian energy and aligns the Saturnian
            frequency with structural wealth.
          </p>
        </div>
      ),
      type: "success",
    },
    {
      title: "Time-Shift Stigma Volatilization",
      icon: <Zap size={16} />,
      content: (
        <div className={styles.rBox}>
          <p>
            Avoid initiating critical business calls between{" "}
            <strong>12:00 PM and 1:30 PM</strong> (Rahu Kaal) on Tuesdays. The
            heavy Mars-Saturn clash in this timeframe causes rapid communication
            breakdown.
          </p>
        </div>
      ),
      type: "warning",
    },
    {
      title: '"Un-blocking" 8th & 12th House Energy',
      icon: <Shield size={16} />,
      content: (
        <div className={styles.rBox}>
          <p>
            To clear the static, donate old electronics or chargers on a
            Saturday. This discharges the stagnant energy trapped in the 8th
            house of transformation.
          </p>
        </div>
      ),
      type: "info",
    },
  ];

  return (
    <div className={styles.remedialsContainer}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>CELLULAR HARMONIZATION</span>
        <h3 className={styles.title}>
          Consecrated Remedial Protocols & Device Energization
        </h3>
      </div>

      <div className={styles.remedialsGrid}>
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
          </div>
        ))}
      </div>
    </div>
  );
};

import React from "react";
import { LongevitySadhanaProtocol } from "../../types/age-calculator.types";
import { CheckCircle, AlertTriangle, Info, Clock } from "lucide-react";
import styles from "./longevity-sadhana.module.scss";

interface LongevitySadhanaProps {
  sadhana: LongevitySadhanaProtocol[];
}

export const LongevitySadhana: React.FC<LongevitySadhanaProps> = ({
  sadhana,
}) => {
  const getIcon = (type: LongevitySadhanaProtocol["type"]) => {
    switch (type) {
      case "success":
        return <CheckCircle size={16} />;
      case "warning":
        return <AlertTriangle size={16} />;
      case "info":
        return <Info size={16} />;
      default:
        return <Clock size={16} />;
    }
  };

  return (
    <div className={styles.sadhanaContainer}>
      <div className={styles.header}>
        <div className={styles.titleWrap}>
          <h3>Consecrated Temporal Remedial Protocols & Longevity Sadhana</h3>
        </div>
        <p className={styles.subtitle}>
          Astronomically calculated remedial measures designed to align
          cell-level biological chronometry with upcoming planetary and sidereal
          angular milestones (Varshphal).
        </p>
      </div>

      <div className={styles.cardsGrid}>
        {sadhana.map((protocol, idx) => (
          <div
            key={idx}
            className={styles.protocolCard}
            data-type={protocol.type}
          >
            <div className={styles.cardHeader}>
              <h4 className={styles.cardTitle}>{protocol.title}</h4>
              <div className={styles.iconWrap}>{getIcon(protocol.type)}</div>
            </div>

            <p className={styles.cardDesc}>{protocol.description}</p>

            <div className={styles.cardAction}>
              <span className={styles.actionLabel}>RECOMMENDED TIMING</span>
              <span className={styles.actionText}>{protocol.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

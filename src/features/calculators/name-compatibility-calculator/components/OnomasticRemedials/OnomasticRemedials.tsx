import React from "react";
import { RemedialProtocol } from "../../types/name-compatibility.types";
import { Wrench, CheckCircle, AlertTriangle, Info } from "lucide-react";
import styles from "./onomastic-remedials.module.scss";

interface OnomasticRemedialsProps {
  remedials: RemedialProtocol[];
}

export const OnomasticRemedials: React.FC<OnomasticRemedialsProps> = ({
  remedials,
}) => {
  const getIcon = (type: RemedialProtocol["type"]) => {
    switch (type) {
      case "success":
        return <CheckCircle size={16} />;
      case "warning":
        return <AlertTriangle size={16} />;
      case "info":
        return <Info size={16} />;
      default:
        return <Wrench size={16} />;
    }
  };

  return (
    <div className={styles.remedialsContainer}>
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <Wrench size={16} />
          <h3>Onomastic Remedial Protocols & Sonic Alignment</h3>
        </div>
        <p className={styles.subtitle}>
          Actionable adjustments to nicknames, signatures, and daily
          communication to harmonize discordant vibratory intersections.
        </p>
      </div>

      <div className={styles.protocolsGrid}>
        {remedials.map((protocol, idx) => (
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
              <span className={styles.actionLabel}>RECOMMENDED ACTION</span>
              <span className={styles.actionText}>{protocol.action}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

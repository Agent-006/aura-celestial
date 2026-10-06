import React from "react";
import { TransitRemedialProtocol } from "../../types/transit.types";
import { ShieldAlert, Download } from "lucide-react";
import styles from "./transit-remedial-protocols.module.scss";

interface TransitRemedialProtocolsProps {
  protocols: TransitRemedialProtocol[];
}

export const TransitRemedialProtocols: React.FC<TransitRemedialProtocolsProps> = ({ protocols }) => {
  return (
    <div className={styles.protocolsContainer}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <ShieldAlert size={16} /> Consecrated Sidereal Remedial Protocols
        </div>
        <div className={styles.subtitle}>DOSSIER GENERATED FOR GOCHAR 2026</div>
      </div>

      <div className={styles.protocolsGrid}>
        {protocols.map((protocol) => (
          <div key={protocol.id} className={styles.protocolCard}>
            <div className={styles.cardHeader}>
              <span className={styles.typeBadge}>{protocol.type}</span>
              <span className={styles.statusDot}></span>
            </div>
            
            <h3 className={styles.title}>{protocol.title}</h3>
            <p className={styles.description}>{protocol.description}</p>
            
            <div className={styles.cardAction}>
              <button className={styles.actionBtn}>
                Initiate Ritual / Unlock Mantras
              </button>
            </div>
            
            <div className={styles.cardFooter}>
              <span>Requires daily synchronization</span>
              <span>Next phase in 30 days</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

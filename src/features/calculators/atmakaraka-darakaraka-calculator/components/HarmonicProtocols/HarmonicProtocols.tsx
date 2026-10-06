import React from "react";
import { UpayaProtocol } from "../../types/atmakaraka.types";
import styles from "./harmonic-protocols.module.scss";

interface HarmonicProtocolsProps {
  protocols: UpayaProtocol;
}

export const HarmonicProtocols: React.FC<HarmonicProtocolsProps> = ({
  protocols,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>Harmonic Protocols (Remedies)</h3>
        <p className={styles.subtitle}>
          Practices to align with your Atmakaraka and harmonize your Darakaraka.
        </p>
      </div>

      <div className={styles.listContainer}>
        <div className={styles.coreUpaya}>
          <h4 className={styles.sectionTitle}>Core Upaya</h4>
          <p>{protocols.coreUpaya}</p>
        </div>

        <div className={styles.gemstone}>
          <h4 className={styles.sectionTitle}>Recommended Gemstone</h4>
          <p>{protocols.gemstone}</p>
        </div>

        <div className={styles.austerities}>
          <h4 className={styles.sectionTitle}>Austerities & Mantras</h4>
          <ul className={styles.protocolList}>
            {protocols.austerities.map((protocol, index) => (
              <li key={index} className={styles.protocolItem}>
                <span className={styles.bullet}>✧</span>
                <span className={styles.text}>{protocol}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { Download, MessageSquare, Crosshair, Diamond, Hands } from "lucide-react";
import { HarmonizationProtocol } from "../../types/flames.types";
import styles from "./flames-harmonization.module.scss";

interface FlamesHarmonizationProps {
  protocols: HarmonizationProtocol[];
}

export const FlamesHarmonization: React.FC<FlamesHarmonizationProps> = ({ protocols }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case "mantra":
        return <Crosshair size={16} />;
      case "gem":
        return <Diamond size={16} />;
      case "seva":
        return <Hands size={16} />;
      default:
        return <Crosshair size={16} />;
    }
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>REMEDIAL & KARMIC SHIELDING</div>
        <h2 className={styles.title}>Consecrated Harmonization & Remedial Protocols</h2>
        <p className={styles.description}>
          To amplify the Shukra-Rahu karmic matrix outcome and safeguard against transit major frictions, calibrate your resonance with classical Vedic remediation.
        </p>
      </div>

      <div className={styles.grid}>
        {protocols.map((protocol) => (
          <div key={protocol.id} className={styles.card}>
            <div className={styles.iconWrapper}>
              {getIcon(protocol.id)}
            </div>
            <div className={styles.type}>{protocol.type}</div>
            <h3 className={styles.title}>{protocol.title}</h3>
            <p className={styles.desc}>{protocol.description}</p>
            <div className={styles.instructions}>{protocol.instructions}</div>
          </div>
        ))}
      </div>

      <div className={styles.footerAction}>
        <div className={styles.leftInfo}>
          <div className={styles.iconBox}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>
          <div className={styles.text}>
            <h4>Generate Astrometric Affinity Dossier</h4>
            <p>Includes complete Chakra Matrices, letter frequencies and synastry reports.</p>
          </div>
        </div>
        
        <div className={styles.actions}>
          <button className={styles.btnOutline}>
            <Download size={16} /> EXPORT DOSSIER (SECURE PDF)
          </button>
          <button className={styles.btnPrimary}>
            <MessageSquare size={16} /> CONSULT SYNASTRY EXPERT
          </button>
        </div>
      </div>
    </div>
  );
};

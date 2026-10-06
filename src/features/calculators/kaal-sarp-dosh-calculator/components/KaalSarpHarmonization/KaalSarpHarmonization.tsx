import React from "react";
import {
  Music,
  Gem,
  Coins,
  Download,
  UserCheck,
  ShieldAlert,
} from "lucide-react";
import { HarmonizationProtocol } from "../../types/kaal-sarp.types";
import styles from "./kaal-sarp-harmonization.module.scss";

interface KaalSarpHarmonizationProps {
  protocols: HarmonizationProtocol[];
}

export const KaalSarpHarmonization: React.FC<KaalSarpHarmonizationProps> = ({
  protocols,
}) => {
  const getIcon = (id: string) => {
    switch (id) {
      case "mantra":
        return <Music size={20} className={styles.icon} />;
      case "yantra":
        return <Gem size={20} className={`${styles.icon} ${styles.cyan}`} />;
      case "puja":
        return <Coins size={20} className={styles.icon} />;
      default:
        return <ShieldAlert size={20} className={styles.icon} />;
    }
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>DOSHA SHANTI & KARMIC REMEDIATION</div>
        <h2 className={styles.title}>Consecrated Harmonization Protocols</h2>
        <div className={styles.subtitle}>
          Harmonizing the Nodal axis requires precise karmic remediation. Mantra
          chanting, Jyotirlinga Puja, and physical elements (Daana).
        </div>
      </div>

      <div className={styles.grid}>
        {protocols.map((protocol) => (
          <div key={protocol.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.type}>{protocol.type}</div>
              {getIcon(protocol.id)}
            </div>

            <h3 className={styles.cardTitle}>{protocol.title}</h3>
            <p className={styles.cardDesc}>{protocol.description}</p>

            <div className={styles.instructionBox}>
              <p className={styles.instructionText}>{protocol.instructions}</p>
            </div>

            <div className={styles.footerRow}>
              {protocol.frequency}
              <span className={styles.link}>Request Procedure Details</span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.actionFooter}>
        <div className={styles.left}>
          <div className={styles.iconBox}>
            <ShieldAlert size={24} />
          </div>
          <div>
            <h4 className={styles.mainTitle}>
              Ready to Neutralize the Nodal Tension Axis?
            </h4>
            <div className={styles.subDesc}>
              Export your personalized sub-arcsecond diagnostic dossier to share
              with a Master Astrologer.
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <button className={styles.btnSecondary}>
            <Download size={16} /> Export Dossier (PDF)
          </button>
          <button className={styles.btnPrimary}>
            <UserCheck size={16} /> Consult Master Astrologer
          </button>
        </div>
      </div>
    </div>
  );
};

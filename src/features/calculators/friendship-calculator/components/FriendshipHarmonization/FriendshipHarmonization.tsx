import React from "react";
import {
  Music,
  Gem,
  Coins,
  Download,
  UserCheck,
  CheckCircle,
} from "lucide-react";
import { FriendshipHarmonizationProtocol } from "../../types/friendship.types";
import styles from "./friendship-harmonization.module.scss";

interface FriendshipHarmonizationProps {
  protocols: FriendshipHarmonizationProtocol[];
}

export const FriendshipHarmonization: React.FC<
  FriendshipHarmonizationProps
> = ({ protocols }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case "mantra":
        return <Music size={20} className={styles.icon} />;
      case "yantra":
        return <Gem size={20} className={`${styles.icon} ${styles.cyan}`} />;
      case "puja":
        return <Coins size={20} className={styles.icon} />;
      default:
        return <CheckCircle size={20} className={styles.icon} />;
    }
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>SYNERGIC KARMIC SHIELDING</div>
        <h2 className={styles.title}>
          Consecrated Friendship Harmonization Protocols
        </h2>
        <div className={styles.subtitle}>
          Harmonizing synastry friction elements via tandem manifestation. 11th
          House remediation and joint planetary alignments to neutralize
          toxicity and boost mutual abundance.
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
              <span className={styles.link}>Request ritual protocol guide</span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.actionFooter}>
        <div className={styles.left}>
          <div className={styles.iconBox}>
            <CheckCircle size={24} />
          </div>
          <div>
            <h4 className={styles.mainTitle}>
              Complete Platonic Dossier Compiled
            </h4>
            <div className={styles.subDesc}>
              All ephemeris details generated. Export for review or consult an
              astrologer.
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <button className={styles.btnSecondary}>
            <Download size={16} /> Export Dossier (PDF)
          </button>
          <button className={styles.btnPrimary}>
            <UserCheck size={16} /> Consult Platonic Astrologer Master
          </button>
        </div>
      </div>
    </div>
  );
};

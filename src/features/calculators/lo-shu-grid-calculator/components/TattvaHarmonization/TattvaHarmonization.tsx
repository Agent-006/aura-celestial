import React from "react";
import { MissingDigitRemedy, HarmonizationProtocol } from "../../types/lo-shu.types";
import { ShieldCheck } from "lucide-react";
import styles from "./tattva-harmonization.module.scss";

interface TattvaHarmonizationProps {
  missingRemedies: MissingDigitRemedy[];
  protocols: HarmonizationProtocol[];
}

export const TattvaHarmonization: React.FC<TattvaHarmonizationProps> = ({ missingRemedies, protocols }) => {
  return (
    <div className={styles.harmonizationWrapper}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>REMEDIAL & KARMIC SHIELDING</div>
        <h2>Missing Numbers & Tattva Harmonization</h2>
        <p>Calibrated Vedic and Feng Shui remedies to synthesize missing frequencies in the natal matrix.</p>
      </div>

      <div className={styles.missingGrid}>
        {missingRemedies.map((remedy) => (
          <div key={remedy.digit} className={styles.remedyCard}>
            <div className={styles.remedyHeader}>
              <span className={styles.digitNumber}>{remedy.digit}</span>
            </div>
            <h4 className={styles.remedyTitle}>{remedy.title}</h4>
            <p className={styles.remedyDesc}>{remedy.description}</p>
          </div>
        ))}
      </div>

      <div className={styles.protocolsGrid}>
        {protocols.map((protocol) => (
          <div key={protocol.id} className={styles.protocolCard}>
            <div className={styles.protocolType}>
              <ShieldCheck size={12} className={styles.icon} />
              {protocol.type}
            </div>
            <h3 className={styles.protocolTitle}>{protocol.title}</h3>
            <p className={styles.protocolDesc}>{protocol.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

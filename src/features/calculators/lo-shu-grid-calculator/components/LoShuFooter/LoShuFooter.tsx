import React from "react";
import { Download } from "lucide-react";
import styles from "./lo-shu-footer.module.scss";

export const LoShuFooter: React.FC = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerInfo}>
        <h4>Lo Shu Telemetry Archive Ready</h4>
        <p>Calculated using strict Vedic numerology logic. Ready for download or expert review.</p>
      </div>
      <div className={styles.actions}>
        <button className={styles.exportBtn}>
          <Download size={14} /> EXPORT DOSSIER (PDF)
        </button>
        <button className={styles.consultBtn}>
          Consult Numerology Savant
        </button>
      </div>
    </div>
  );
};

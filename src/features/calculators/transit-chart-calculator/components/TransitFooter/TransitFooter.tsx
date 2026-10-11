import React from "react";
import { Download, MessageSquare } from "lucide-react";
import styles from "./transit-footer.module.scss";

export const TransitFooter: React.FC = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerInfo}>
        <div className={styles.left}>
          <span className={styles.dot}></span>
          <span>SYSTEM TELEMETRY SYNCHED / DOSSIER COMPLETED</span>
        </div>
        <div className={styles.right}>
          <span className={styles.dateText}>Archived: {new Date().toISOString().split('T')[0]} (Synced via Ephemeris DB V2.4)</span>
        </div>
      </div>
      
      <div className={styles.actions}>
        <button className={styles.exportBtn}>
          <Download size={14} /> EXPORT TRANSIT DOSSIER - PDF (V2)
        </button>
        <button className={styles.consultBtn}>
          <MessageSquare size={14} /> Consult Transit Ephemeris Astrologer
        </button>
      </div>
    </div>
  );
};

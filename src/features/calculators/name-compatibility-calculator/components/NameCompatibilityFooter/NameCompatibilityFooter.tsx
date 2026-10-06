import React from "react";
import { Download, Share2, HelpCircle } from "lucide-react";
import styles from "./name-compatibility-footer.module.scss";

export const NameCompatibilityFooter: React.FC = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.topInfo}>
        <div className={styles.left}>
          <HelpCircle size={14} className={styles.iconGold} />
          <span>
            PHONETIC ALGORITHM: CHALDEAN / HELIOCENTRIC SYNC COMPLETED
          </span>
        </div>
        <div className={styles.right}>
          <span className={styles.dateText}>
            Archived: {new Date().toISOString().split("T")[0]} (Synced via
            Vibrational Frequency Matrix)
          </span>
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.exportBtn}>
          <Download size={14} /> EXPORT COMPATIBILITY DOSSIER - PDF
        </button>
        <button className={styles.shareBtn}>
          <Share2 size={14} /> SHARE ALIGNMENT REPORT
        </button>
      </div>
    </div>
  );
};

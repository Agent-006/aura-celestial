import React from "react";
import { Database, FileText, UserPlus } from "lucide-react";
import styles from "./mobile-footer.module.scss";

export const MobileFooter: React.FC = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.exportSection}>
        <div className={styles.left}>
          <div className={styles.iconBox}>
            <Database size={16} className={styles.iconGold} />
          </div>
          <div className={styles.textWrap}>
            <span className={styles.mainText}>
              Export High Resolution Telemetry Dossier
            </span>
            <span className={styles.subText}>
              Full breakdown of 10-digit alignments, synastry mapping, and
              advanced Vastu for mobile devices.
            </span>
          </div>
        </div>

        <div className={styles.right}>
          <button className={styles.downloadBtn}>
            <FileText size={14} /> EXPORT DOSSIER (PDF)
          </button>
          <button className={styles.consultBtn}>
            <UserPlus size={14} /> CONSULT SEER
          </button>
        </div>
      </div>
    </div>
  );
};

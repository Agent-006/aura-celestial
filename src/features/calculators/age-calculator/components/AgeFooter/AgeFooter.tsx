import React from "react";
import { FileText, Users } from "lucide-react";
import styles from "./age-footer.module.scss";

export const AgeFooter: React.FC = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.content}>
        <div className={styles.left}>
          <FileText size={16} className={styles.iconGold} />
          <span>Complete Sidereal Chronometry Dossier (UTC-8.2)</span>
        </div>
        <div className={styles.right}>
          <button className={styles.downloadBtn}>
            <FileText size={14} /> DOWNLOAD CHRONOMETRY DOSSIER - PDF
          </button>
          <button className={styles.consultBtn}>
            <Users size={14} /> CONSULT CHRONOMETRY ASTROLOGER
          </button>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { Download, UserPlus } from "lucide-react";
import styles from "./destiny-footer.module.scss";

export const DestinyFooter: React.FC = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.left}>
        <div className={styles.indicator}></div>
        <span className={styles.text}>
          Dossier generated using Sub-arcsecond accuracy / EPHEMERIS SECURE
        </span>
      </div>

      <div className={styles.right}>
        <button className={styles.downloadBtn}>
          <Download size={14} /> Download Full Destiny Dossier (PDF)
        </button>
        <button className={styles.consultBtn}>
          <UserPlus size={14} /> Consult Numerology Seer
        </button>
      </div>
    </div>
  );
};

import React from "react";
import { FileText, Users, Database } from "lucide-react";
import styles from "./mulank-footer.module.scss";

export const MulankFooter: React.FC = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.iconBox}>
            <Database size={16} className={styles.iconGold} />
          </div>
          <div className={styles.textWrap}>
            <span className={styles.mainText}>
              Complete Mulank 9 Sankhya Monograph
            </span>
            <span className={styles.subText}>
              A 20-page detailed report with Yantra / Talismanic
              recommendations. [ID: 9X3-0000X42]
            </span>
          </div>
        </div>

        <div className={styles.right}>
          <button className={styles.downloadBtn}>
            <FileText size={14} /> Export Monograph (PDF)
          </button>
          <button className={styles.consultBtn}>
            <Users size={14} /> Consult Numerology Seer
          </button>
        </div>
      </div>
    </div>
  );
};

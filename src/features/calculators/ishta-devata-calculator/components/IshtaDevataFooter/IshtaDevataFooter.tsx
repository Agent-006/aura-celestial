import React from "react";
import { Download, Share2 } from "lucide-react";
import styles from "./ishta-devata-footer.module.scss";

export const IshtaDevataFooter: React.FC = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerInfo}>
        <div className={styles.left}>
          <span className={styles.dot}></span>
          <span>JAIMINI SUTRA ALGORITHMS APPLIED / DOSSIER COMPLETED</span>
        </div>
        <div className={styles.right}>
          <span className={styles.dateText}>
            Archived: {new Date().toISOString().split("T")[0]} (Synced via D9
            Precision Matrix)
          </span>
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.exportBtn}>
          <Download size={14} /> EXPORT SPIRITUAL DOSSIER - PDF
        </button>
        <button className={styles.consultBtn}>
          <Share2 size={14} /> Consult Spiritual Astrologer
        </button>
      </div>
    </div>
  );
};

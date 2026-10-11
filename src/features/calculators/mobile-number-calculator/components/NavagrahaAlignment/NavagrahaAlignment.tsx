import React from "react";
import { NavagrahaDigit } from "../../types/mobile-number-calculator.types";
import styles from "./navagraha-alignment.module.scss";

interface NavagrahaAlignmentProps {
  digits: NavagrahaDigit[];
}

export const NavagrahaAlignment: React.FC<NavagrahaAlignmentProps> = ({
  digits,
}) => {
  return (
    <div className={styles.alignmentContainer}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>CELLULAR SEQUENCE MAPPING</span>
        <h3 className={styles.title}>Sacred 10-Digit Navagraha Alignment</h3>
      </div>

      <div className={styles.digitGrid}>
        {digits.map((item, idx) => (
          <div key={idx} className={styles.digitBox}>
            <div className={styles.digit}>{item.digit}</div>
            <div className={styles.ruler}>{item.ruler}</div>
            <div className={styles.connector}></div>
          </div>
        ))}
      </div>

      <div className={styles.footerBox}>
        <div className={styles.fTitle}>ALIGNMENT SYNTHESIS:</div>
        <p className={styles.fText}>
          A highly concentrated pocket of <span>Martian</span> energy anchors
          the sequence, while a heavy dose of <span>Saturn</span> indicates slow
          initial growth followed by massive scalability. The <span>Moon</span>{" "}
          is completely isolated, suggesting a detachment from emotional chaos
          when communicating.
        </p>
      </div>
    </div>
  );
};

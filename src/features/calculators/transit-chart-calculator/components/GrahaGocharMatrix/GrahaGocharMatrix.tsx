import React from "react";
import { GrahaGocharVector } from "../../types/transit.types";
import { Table } from "lucide-react";
import styles from "./graha-gochar-matrix.module.scss";

interface GrahaGocharMatrixProps {
  vectors: GrahaGocharVector[];
}

export const GrahaGocharMatrix: React.FC<GrahaGocharMatrixProps> = ({ vectors }) => {
  return (
    <div className={styles.matrixContainer}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <Table size={16} /> The 9 Graha Gochar Vectors Matrix
        </div>
        <div className={styles.subtitle}>REAL-TIME EPHEMERIS / SIDEREAL CALCULATION SET</div>
      </div>
      
      <div className={styles.tableWrapper}>
        <table className={styles.matrixTable}>
          <thead>
            <tr>
              <th>GRAHA / PLANET</th>
              <th>NATAL SIGN</th>
              <th>TRANSIT HOUSE & RASHI</th>
              <th>CONSTELLATION (NAKSHATRA)</th>
              <th>KARMIC EFFECT SYNOPSIS</th>
              <th>BINDU</th>
              <th>RETRO / DGN</th>
              <th>TRANSIT TIME</th>
            </tr>
          </thead>
          <tbody>
            {vectors.map((vec, idx) => (
              <tr key={idx}>
                <td className={styles.highlightGraha}>
                  <span className={styles.dot}></span> {vec.graha}
                </td>
                <td>{vec.natalSign}</td>
                <td className={styles.cyanText}>{vec.transitHouseRashi}</td>
                <td>{vec.constellation}</td>
                <td className={styles.descCell}>{vec.karmicEffect}</td>
                <td className={styles.boldText}>{vec.bindu}</td>
                <td className={
                  vec.retroDgn === 'CLEAR' ? styles.cyanText : 
                  (vec.retroDgn === 'RETRO' ? styles.alertText : styles.goldText)
                }>
                  {vec.retroDgn}
                </td>
                <td className={styles.timeCell}>{vec.transitDuration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

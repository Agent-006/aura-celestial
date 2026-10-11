import React from "react";
import { CharaKarakaPlacement } from "../../types/ishta-devata.types";
import { Table } from "lucide-react";
import styles from "./chara-karaka-matrix.module.scss";

interface CharaKarakaMatrixProps {
  placements: CharaKarakaPlacement[];
}

export const CharaKarakaMatrix: React.FC<CharaKarakaMatrixProps> = ({
  placements,
}) => {
  return (
    <div className={styles.matrixContainer}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <Table size={16} /> Classical Jaimini 7 Karaka Planetary Placements
        </div>
        <div className={styles.badge}>D1 RASHI SOUL-INDICATOR DEGREES</div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.matrixTable}>
          <thead>
            <tr>
              <th>KARAKA TYPE</th>
              <th>PLANET</th>
              <th>RASHI (SIGN)</th>
              <th>NAKSHATRA</th>
              <th>DEGREE</th>
              <th>JAIMINI SUTRA SIGNIFICANCE</th>
            </tr>
          </thead>
          <tbody>
            {placements.map((plc, idx) => (
              <tr key={idx}>
                <td className={styles.karakaCell}>{plc.karakaType}</td>
                <td className={styles.highlightPlanet}>
                  <span className={styles.dot}></span> {plc.planet}
                </td>
                <td>{plc.rashi}</td>
                <td>{plc.nakshatra}</td>
                <td className={styles.cyanText}>{plc.degree}</td>
                <td className={styles.descCell}>{plc.jaiminiSignificance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

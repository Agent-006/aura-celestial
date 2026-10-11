import React from "react";
import { CircleDot } from "lucide-react";
import { NodalVectorRow } from "../../types/kaal-sarp.types";
import styles from "./nodal-vectors-matrix.module.scss";

interface NodalVectorsMatrixProps {
  vectors: NodalVectorRow[];
}

export const NodalVectorsMatrix: React.FC<NodalVectorsMatrixProps> = ({
  vectors,
}) => {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.eyebrow}>GRAHA ENCASEMENT METRICS</div>
          <h2 className={styles.title}>
            Planetary Telemetry & Relative Nodal Vectors
          </h2>
        </div>
        <div className={styles.right}>
          <div className={styles.item}>
            <span className={`${styles.dot} ${styles.red}`}></span> RED -
            ENCASED (MALIFIC)
          </div>
          <div className={styles.item}>
            <span className={`${styles.dot} ${styles.cyan}`}></span> CYAN -
            ESCAPE (BENEFIC)
          </div>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table>
          <thead>
            <tr>
              <th>Graha (Celestial Body)</th>
              <th>Sidereal Longitude</th>
              <th>House Position</th>
              <th>Nakshatra & Pada</th>
              <th>Encasement Status</th>
              <th style={{ textAlign: "right" }}>Axis Metric</th>
            </tr>
          </thead>
          <tbody>
            {vectors.map((row, index) => (
              <tr key={index}>
                <td className={styles.graha}>
                  <CircleDot size={14} className={styles.indicator} />
                  {row.graha}
                </td>
                <td>{row.siderealLongitude}</td>
                <td>{row.housePosition}</td>
                <td>{row.nakshatraPada}</td>
                <td className={styles.encasement}>{row.encasementStatus}</td>
                <td className={styles.axisMetric}>
                  <span
                    className={`${styles.badge} ${row.isEncased ? styles.encased : styles.escaped}`}
                  >
                    {row.axisMetric}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

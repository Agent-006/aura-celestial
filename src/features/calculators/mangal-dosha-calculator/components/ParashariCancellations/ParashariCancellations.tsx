import React from "react";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { MangalDoshaTelemetryData } from "../../types/mangal-dosha.types";
import styles from "./parashari-cancellations.module.scss";

interface ParashariCancellationsProps {
  data: MangalDoshaTelemetryData;
}

export const ParashariCancellations: React.FC<ParashariCancellationsProps> = ({
  data,
}) => {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>
          <AlertTriangle size={14} /> SECRET PARASHARI DOSHA CANCELLATION (NIVARANA) PROTOCOL
        </div>
        <h2 className={styles.title}>
          16 Classical Parashari Kuja Dosha Exceptions & Cancellations
        </h2>
        <p className={styles.description}>
          Classical Vedic canons outline strict ephemeris exemptions (Nivarana)
          where the destructive fire of Mars is consumed or completely transmuted
          into high-order leadership and unwavering domestic sanctity.
        </p>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID (CONDITION)</th>
              <th>YOGA / CONDITION TYPE</th>
              <th>PARASHARI EXCEPTION (NIVARANA)</th>
              <th>ACTIVE STATUS / MATCH</th>
            </tr>
          </thead>
          <tbody>
            {data.cancellations.map((item) => {
              const isPartial = item.archetypalResult.includes("PART CANCELLATION");
              const isMatch = item.isActive || isPartial;

              return (
                <tr
                  key={item.id}
                  className={item.isActive ? styles.rowActive : ""}
                >
                  <td
                    className={`${styles.idCell} ${
                      item.isActive ? styles.activeRowId : ""
                    }`}
                  >
                    {item.id}
                  </td>
                  <td className={styles.conditionType}>{item.yogaType}</td>
                  <td className={styles.exception}>{item.exception}</td>
                  <td className={styles.badgeCell}>
                    <span
                      className={`${styles.statusBadge} ${
                        item.isActive
                          ? styles.active
                          : isPartial
                          ? styles.partial
                          : styles.inactive
                      }`}
                    >
                      {isMatch && <CheckCircle2 size={12} />}
                      {item.archetypalResult}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

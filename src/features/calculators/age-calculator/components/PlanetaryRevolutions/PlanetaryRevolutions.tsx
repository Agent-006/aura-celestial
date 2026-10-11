import React from "react";
import { PlanetaryRevolution } from "../../types/age-calculator.types";
import { Circle, Moon, Sun, Star } from "lucide-react";
import styles from "./planetary-revolutions.module.scss";

interface PlanetaryRevolutionsProps {
  revolutions: PlanetaryRevolution[];
}

export const PlanetaryRevolutions: React.FC<PlanetaryRevolutionsProps> = ({
  revolutions,
}) => {
  const getIcon = (graha: string) => {
    if (graha.includes("Sun"))
      return <Sun size={14} className={styles.iconGold} />;
    if (graha.includes("Moon"))
      return <Moon size={14} className={styles.iconCyan} />;
    return <Star size={14} className={styles.iconGold} />;
  };

  return (
    <div className={styles.tableContainer}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Circle size={14} className={styles.iconCyan} />
          <h3>Navagraha Planetary Revolutions & Age Decomposition</h3>
        </div>
        <div className={styles.right}>
          <span className={styles.badge}>
            EPOCH: J2000.0 (Planetary Mean Orbit)
          </span>
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.dataTable}>
          <thead>
            <tr>
              <th>PLANETARY GRAHA</th>
              <th>ORBITAL PERIOD</th>
              <th>REVOLUTIONS COMPLETED</th>
              <th>PLANETARY AGE</th>
              <th>NEXT ORBITAL RETURN</th>
              <th>KARMIC PHASE / STATUS</th>
            </tr>
          </thead>
          <tbody>
            {revolutions.map((row, idx) => (
              <tr
                key={idx}
                className={
                  row.status.includes("IN PROGRESS") ? styles.rowHighlight : ""
                }
              >
                <td>
                  <div className={styles.grahaCell}>
                    {getIcon(row.graha)}
                    <span>{row.graha}</span>
                  </div>
                </td>
                <td className={styles.monoText}>{row.orbitalPeriod}</td>
                <td className={styles.monoText}>{row.revolutions}</td>
                <td className={styles.cyanText}>{row.planetaryAge}</td>
                <td className={styles.cyanText}>{row.nextReturn}</td>
                <td>
                  <span
                    className={styles.statusBadge}
                    data-status={
                      row.status.includes("IN PROGRESS") ? "active" : "normal"
                    }
                  >
                    {row.status}
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

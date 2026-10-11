import React from "react";
import { KarakaPlanet } from "../../types/atmakaraka.types";
import styles from "./seven-ministers-table.module.scss";

interface SevenMinistersTableProps {
  ministers: KarakaPlanet[];
}

export const SevenMinisterTable: React.FC<SevenMinistersTableProps> = ({
  ministers,
}) => {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.header}>
        <h3 className={styles.title}>
          The Seven Ministers of the Incarnate Soul
        </h3>
        <p className={styles.subtitle}>
          In Jaimini Astrology, these 7 planets take on specific roles (Karakas)
          based on their descending degrees.
        </p>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Status</th>
              <th>Ministerial Role</th>
              <th>Planet</th>
              <th>Degree</th>
              <th>Zodiac Sign</th>
              <th>Nakshatra</th>
              <th>House</th>
            </tr>
          </thead>
          <tbody>
            {ministers.map((minister, index) => {
              const isAK = minister.role === "AK";
              const isDK = minister.role === "DK";
              return (
                <tr
                  key={index}
                  className={`${isAK ? styles.rowAk : ""} ${isDK ? styles.rowDk : ""}`}
                >
                  <td className={styles.roleCol}>{minister.role}</td>
                  <td className={styles.titleCol}>{minister.title}</td>
                  <td className={styles.planetCol}>{minister.planet}</td>
                  <td className={styles.degreeCol}>
                    {minister.degree.toFixed(2)}°
                  </td>
                  <td>{minister.sign}</td>
                  <td>{minister.nakshatra}</td>
                  <td>{minister.house}th House</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

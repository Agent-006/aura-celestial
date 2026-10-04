import React from "react";
import { useEphemerisMatrix } from "../../hooks/useEphemerisMatrix";
import styles from "./ephemeris-matrix.module.scss";

export function EphemerisMatrix() {
  const { matrixData, isLoading } = useEphemerisMatrix();

  if (isLoading) {
    return <div className={styles.container}>Loading ephemeris data...</div>;
  }

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <span className={styles.eyebrow}>
            LUNAR TIMELINE & ORBITAL PHASES
          </span>
          <h2 className={styles.title}>
            The 15 Shukla (Waxing) Tithis Ephemeris Matrix
          </h2>
        </div>
        <div className={styles.controls}>
          <button className={styles.btnSolid}>Toggle Dark/Light Half</button>
          <button className={styles.btnOutline}>Export Tithi Planner</button>
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.matrixTable}>
          <thead>
            <tr>
              <th>TITHI</th>
              <th>NAME / SANSKRIT</th>
              <th>CATEGORY</th>
              <th>SIDEREAL TIME</th>
              <th>RULING DEITY</th>
              <th>OBSERVANCE / EFFECT</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {matrixData.map((row, i) => (
              <tr key={i} className={row.active ? styles.activeRow : ""}>
                <td className={styles.num}>{row.num}</td>
                <td className={styles.name}>{row.name}</td>
                <td className={styles.category}>
                  <span
                    className={`${styles.badge} ${row.category.includes("Rikta") ? styles.badgeRed : styles.badgeCyan}`}
                  >
                    {row.category}
                  </span>
                </td>
                <td className={styles.time}>{row.ext}</td>
                <td className={styles.deity}>{row.deity}</td>
                <td className={styles.effect}>{row.effect}</td>
                <td className={styles.status}>
                  <span
                    className={
                      row.status.includes("Inauspicious")
                        ? styles.textRed
                        : styles.textGold
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
    </section>
  );
}

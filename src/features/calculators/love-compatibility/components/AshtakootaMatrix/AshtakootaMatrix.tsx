"use client";

import React from "react";
import styles from "./ashtakoota-matrix.module.scss";

export function AshtakootaMatrix() {
  const kootas = [
    { name: "Varna", desc: "Work & Ego Match", max: 1, obtained: 1, status: "Auspicious" },
    { name: "Vashya", desc: "Attraction & Control", max: 2, obtained: 1, status: "Average" },
    { name: "Tara", desc: "Destiny & Health", max: 3, obtained: 3, status: "Auspicious" },
    { name: "Yoni", desc: "Intimacy & Nature", max: 4, obtained: 3, status: "Good" },
    { name: "Graha Maitri", desc: "Mental Friendship", max: 5, obtained: 5, status: "Auspicious" },
    { name: "Gana", desc: "Temperament", max: 6, obtained: 6, status: "Auspicious" },
    { name: "Bhakoot", desc: "Family & Growth", max: 7, obtained: 0, status: "Inauspicious" },
    { name: "Nadi", desc: "Health & Genes", max: 8, obtained: 8, status: "Auspicious" },
  ];

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3>Ashtakoota Analysis Matrix</h3>
        <span className={styles.badge}>8-POINT SYSTEM</span>
      </div>
      
      <div className={styles.tableContainer}>
        <table className={styles.dataTable}>
          <thead>
            <tr>
              <th>KOOTA (FACTOR)</th>
              <th>MAX</th>
              <th>OBTAINED</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {kootas.map((k, i) => (
              <tr key={i}>
                <td>
                  <span className={styles.kootaName}>{k.name}</span>
                  <span className={styles.kootaDesc}>{k.desc}</span>
                </td>
                <td className={styles.maxScore}>{k.max}</td>
                <td className={styles.obtainedScore}>{k.obtained}</td>
                <td>
                  <span className={`${styles.statusBadge} ${styles[k.status.toLowerCase()]}`}>
                    {k.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import styles from "./planetary-synastry.module.scss";

export function PlanetarySynastry() {
  const aspects = [
    { p1: "Sun", p2: "Moon", aspect: "Trine (120°)", orb: "2.4°", resonance: 92 },
    { p1: "Venus", p2: "Mars", aspect: "Conjunction (0°)", orb: "1.1°", resonance: 98 },
    { p1: "Moon", p2: "Jupiter", aspect: "Sextile (60°)", orb: "4.0°", resonance: 85 },
    { p1: "Mars", p2: "Saturn", aspect: "Square (90°)", orb: "0.8°", resonance: 45 },
    { p1: "Mercury", p2: "Venus", aspect: "Trine (120°)", orb: "3.2°", resonance: 88 },
  ];

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3>Planetary Synastry Vectors</h3>
        <span className={styles.badge}>CROSS-ASPECTS</span>
      </div>
      
      <div className={styles.tableContainer}>
        <table className={styles.dataTable}>
          <thead>
            <tr>
              <th>INTERACTION</th>
              <th>ASPECT</th>
              <th>ORB</th>
              <th>RESONANCE</th>
            </tr>
          </thead>
          <tbody>
            {aspects.map((a, i) => (
              <tr key={i}>
                <td>
                  <span className={styles.planets}>
                    <span className={styles.p1}>{a.p1}</span>
                    <span className={styles.aspectIcon}>☍</span>
                    <span className={styles.p2}>{a.p2}</span>
                  </span>
                </td>
                <td className={styles.aspect}>{a.aspect}</td>
                <td className={styles.orb}>{a.orb}</td>
                <td>
                  <div className={styles.resonanceBar}>
                    <div 
                      className={styles.resonanceFill} 
                      style={{ 
                        width: `${a.resonance}%`,
                        backgroundColor: a.resonance > 80 ? '#00e5ff' : a.resonance > 60 ? '#e6b553' : '#ff4444' 
                      }} 
                    />
                    <span className={styles.resonanceValue}>{a.resonance}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

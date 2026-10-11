"use client";

import React from "react";
import { useLunarAlmanac } from "../../hooks/useLunarAlmanac";
import styles from "./lunar-almanac.module.scss";

export function LunarAlmanac() {
  const { rows, isLoading } = useLunarAlmanac();

  if (isLoading) {
    return <div className={styles.section}>Loading Almanac...</div>;
  }

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <span className={styles.eyebrow}>✦ COSMIC REGISTRY</span>
          <h2 className={styles.title}>
            The 27 Lunar Mansions Ephemeris Almanac
          </h2>
          <span className={styles.subtitle}>
            A complete mapping of all 27 nakshatras, their ruling planets,
            deities and gunas.
          </span>
        </div>
        <div className={styles.controls}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search Nakshatras..."
          />
          <button className={styles.filterBtn}>Filter ▾</button>
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name (Sanskrit)</th>
              <th>Translation</th>
              <th>Deity</th>
              <th>Ruling Planet</th>
              <th>Gana</th>
              <th>Varna</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.number}
                className={row.active ? styles.activeRow : ""}
              >
                <td className={styles.num}>{row.number}</td>
                <td className={styles.name}>
                  {row.name}
                  {row.active && (
                    <span className={styles.activeBadge}>Active</span>
                  )}
                </td>
                <td className={styles.translation}>{row.translation}</td>
                <td className={styles.cellText}>{row.deity}</td>
                <td className={styles.cellText}>{row.rulingPlanet}</td>
                <td className={styles.cellText}>{row.gana}</td>
                <td className={styles.cellText}>{row.varna}</td>
                <td>
                  <button className={styles.actionBtn}>VIEW</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

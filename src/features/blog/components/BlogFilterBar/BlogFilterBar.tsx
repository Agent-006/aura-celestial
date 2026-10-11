import React from "react";
import styles from "./blog-filter-bar.module.scss";
import { Search } from "lucide-react";

export const BlogFilterBar = () => {
  const filters = [
    "All Responses (24)",
    "Planetary Nodes & Transits (12)",
    "Muhurta & Electional Logic (8)",
    "Nakshatra Telemetry (15)",
    "Shadbala Metrics (7)",
    "Synastry & Kuta Milan (5)",
    "Karmic Dashas & Antardashas (11)",
  ];

  return (
    <div className={styles.filterBar}>
      <div className={styles.filterTabs}>
        {filters.map((filter, index) => (
          <button
            key={filter}
            className={`${styles.tab} ${index === 0 ? styles.active : ""}`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className={styles.searchBox}>
        <Search size={14} className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search monographs, grahas, ayanamshas..."
          className={styles.searchInput}
        />
        <div className={styles.searchShortcut}>Latest Ephemeris Epoch ⬎</div>
      </div>
    </div>
  );
};

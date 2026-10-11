"use client";

import React from "react";
import { DashaTelemetryData } from "../../types/dasha.types";
import styles from "./vimshottari-ephemeris-table.module.scss";

interface VimshottariEphemerisTableProps {
  data: DashaTelemetryData;
}

export const VimshottariEphemerisTable: React.FC<
  VimshottariEphemerisTableProps
> = ({ data }) => {
  return (
    <div className={styles.tableSection}>
      <div className={styles.sectionHeader}>
        <div className={styles.titleBlock}>
          <span className={styles.sectionLabel}>
            COMPLETE MACRO-LIFESPAN SEQUENCE
          </span>
          <h3 className={styles.title}>
            The 120-Year Vimshottari Ephemeris Cycle
          </h3>
        </div>
        <div className={styles.systemTags}>
          <span>360 Day (Savana) Lunar Year</span>
          <span>Nakshatra Lord: Anuradha (Saturn)</span>
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.ephemerisTable}>
          <thead>
            <tr>
              <th>Planetary Lord</th>
              <th>Span</th>
              <th>Karmic Domain / Influence</th>
              <th>Start Epoch</th>
              <th>Completion Epoch</th>
              <th>Functional Dignity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.ephemerisCycle.map((period, index) => (
              <tr
                key={index}
                className={period.status === "ACTIVE" ? styles.rowActive : ""}
              >
                <td className={styles.lordCell}>
                  <div className={styles.dot} />
                  {period.lord}
                </td>
                <td className={styles.spanCell}>{period.spanYears} Years</td>
                <td className={styles.karmicCell}>{period.karmicInfluence}</td>
                <td>{period.startEpoch}</td>
                <td>{period.completionEpoch}</td>
                <td className={styles.dignityCell}>
                  {period.functionalDignity}
                </td>
                <td className={styles.statusCell}>
                  {period.status === "PAST" && (
                    <span className={`${styles.statusBadge} ${styles.past}`}>
                      PAST (ELAPSED)
                    </span>
                  )}
                  {period.status === "ACTIVE" && (
                    <>
                      <span
                        className={`${styles.statusBadge} ${styles.active}`}
                      >
                        ACTIVE
                      </span>
                      <span
                        className={`${styles.statusBadge} ${styles.subtext}`}
                      >
                        MAHADASHA
                      </span>
                    </>
                  )}
                  {period.status === "FUTURE" && (
                    <span className={`${styles.statusBadge} ${styles.future}`}>
                      FUTURE EPOCH
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

"use client";

import React from "react";
import { RisingSignTelemetryData } from "../../types/rising-sign.types";
import styles from "./bhavachakra-table.module.scss";

interface BhavachakraTableProps {
  data: RisingSignTelemetryData;
}

export const BhavachakraTable: React.FC<BhavachakraTableProps> = ({ data }) => {
  return (
    <div className={styles.tableSection}>
      <div className={styles.sectionHeader}>
        <div>
          <h3 className={styles.title}>
            Bhavachakra House Cusps & Graha Distribution
          </h3>
          <p className={styles.subtitle}>
            Complete 12-Bhavas geocentric ascendant chart from the exact eastern
            horizon.
          </p>
        </div>
        <div className={styles.systemLabel}>
          HOUSE SYSTEM: Sripathi Bhava (Vedic Standard)
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.bhavachakraTable}>
          <thead>
            <tr>
              <th>HOUSE</th>
              <th>BHAVA SIGNIFICATION</th>
              <th>RASHI (SIGN)</th>
              <th>LORD (GRAHA)</th>
              <th>EXACT CUSP DEGREE</th>
              <th>OCCUPANTS (GRAHAS)</th>
            </tr>
          </thead>
          <tbody>
            {data.bhavachakra.map((house, idx) => (
              <tr key={idx}>
                <td>{house.house}</td>
                <td>{house.bhavaSanskrit}</td>
                <td>{house.rashiSign}</td>
                <td>{house.lordGraha}</td>
                <td className={styles.degreeCell}>{house.exactCuspDegree}</td>
                <td className={styles.occupantsCell}>
                  {house.occupantsGrahas}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

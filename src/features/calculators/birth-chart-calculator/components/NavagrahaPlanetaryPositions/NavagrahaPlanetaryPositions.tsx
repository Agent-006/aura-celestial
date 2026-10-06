import React from "react";
import { CircleDot, Moon, Sun, Star } from "lucide-react";
import { BirthChartTelemetryData } from "../../types/birth-chart.types";
import styles from "./navagraha-planetary-positions.module.scss";

interface NavagrahaPlanetaryPositionsProps {
  data: BirthChartTelemetryData;
}

export const NavagrahaPlanetaryPositions: React.FC<
  NavagrahaPlanetaryPositionsProps
> = ({ data }) => {
  const getDignityBadgeClass = (dignity: string) => {
    const lower = dignity.toLowerCase();
    if (lower.includes("exalted")) return styles.exalted;
    if (lower.includes("debilitated")) return styles.debilitated;
    if (lower.includes("own sign") || lower.includes("moolatrikona"))
      return styles.ownSign;
    if (dignity === "-") return styles.default;
    return styles.default;
  };

  const getPlanetIcon = (planet: string) => {
    if (planet.includes("Sun")) return <Sun size={14} className={styles.icon} />;
    if (planet.includes("Moon")) return <Moon size={14} className={styles.icon} />;
    return <Star size={14} className={styles.icon} />;
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>
          <CircleDot size={14} /> EXACT ASTROMETRIC POSITIONS (EPHEMERIS DE441)
        </div>
        <h2 className={styles.title}>Navagraha Planetary Positions & Dignities</h2>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>GRAHA (PLANET)</th>
              <th>SIGN (RASHI)</th>
              <th>DEGREE / NAKSHATRA</th>
              <th>HOUSE</th>
              <th>PADA</th>
              <th>DIGNITY STATUS</th>
              <th>RETROGRADE</th>
              <th>AVASTHA</th>
            </tr>
          </thead>
          <tbody>
            {data.planetaryPositions.map((pos) => (
              <tr key={pos.id}>
                <td className={styles.planetCell}>
                  {getPlanetIcon(pos.planet)}
                  {pos.planet}
                </td>
                <td className={styles.signCell}>{pos.sign}</td>
                <td className={styles.degreeCell}>{pos.degree}</td>
                <td className={styles.houseCell}>{pos.house}</td>
                <td className={styles.houseCell}>{pos.pada}</td>
                <td>
                  <span
                    className={`${styles.badge} ${getDignityBadgeClass(
                      pos.dignity
                    )}`}
                  >
                    {pos.dignity}
                  </span>
                </td>
                <td className={styles.retrogradeCell}>
                  {pos.retrograde ? "(R) Retrograde" : ""}
                </td>
                <td className={styles.avasthaCell}>{pos.avastha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

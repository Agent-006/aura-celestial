import React from "react";
import { GocharBarometer } from "../../types/transit.types";
import { Compass, Settings2 } from "lucide-react";
import styles from "./dual-transit-overlay.module.scss";

interface DualTransitOverlayProps {
  barometers: GocharBarometer[];
}

export const DualTransitOverlay: React.FC<DualTransitOverlayProps> = ({
  barometers,
}) => {
  return (
    <div className={styles.overlayContainer}>
      {/* Chart Section */}
      <div className={styles.chartSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.titleWithIcon}>
            <Compass size={16} /> Dual Transit Kundli Overlay (Radix vs Gochar)
          </div>
          <div className={styles.legend}>
            <span className={styles.natalDot}></span> NATAL (RADIX)
            <span className={styles.transitDot}></span> TRANSIT (GOCHAR)
          </div>
        </div>

        <div className={styles.chartWrapper}>
          {/* A generic North Indian Diamond Chart CSS drawing */}
          <div className={styles.diamondChart}>
            <svg viewBox="0 0 400 400" className={styles.svgChart}>
              {/* Outer Square */}
              <rect
                x="10"
                y="10"
                width="380"
                height="380"
                fill="none"
                stroke="rgba(72, 229, 194, 0.2)"
                strokeWidth="1"
              />
              {/* Diagonals */}
              <line
                x1="10"
                y1="10"
                x2="390"
                y2="390"
                stroke="rgba(72, 229, 194, 0.2)"
                strokeWidth="1"
              />
              <line
                x1="390"
                y1="10"
                x2="10"
                y2="390"
                stroke="rgba(72, 229, 194, 0.2)"
                strokeWidth="1"
              />
              {/* Inner Diamond */}
              <polygon
                points="200,10 390,200 200,390 10,200"
                fill="none"
                stroke="rgba(72, 229, 194, 0.2)"
                strokeWidth="1"
              />

              {/* Sample Placements - Natal (Blue/Cyan) & Transit (Green) */}

              {/* Ascendant / House 1 */}
              <text
                x="200"
                y="80"
                textAnchor="middle"
                className={styles.natalText}
              >
                Chandra (Moon)
              </text>
              <text
                x="200"
                y="95"
                textAnchor="middle"
                className={styles.transitText}
              >
                {"[ Jupiter 18°30' ]"}
              </text>

              {/* House 4 */}
              <text
                x="80"
                y="200"
                textAnchor="middle"
                className={styles.natalText}
              >
                Rahu
              </text>
              <text
                x="80"
                y="215"
                textAnchor="middle"
                className={styles.transitText}
              >
                {"[ Saturn 05°12' ]"}
              </text>

              {/* House 7 */}
              <text
                x="200"
                y="300"
                textAnchor="middle"
                className={styles.natalText}
              >
                Ketu
              </text>
              <text
                x="200"
                y="315"
                textAnchor="middle"
                className={styles.transitText}
              >
                {"[ Mars 22°45' ]"}
              </text>

              {/* House 10 */}
              <text
                x="320"
                y="200"
                textAnchor="middle"
                className={styles.natalText}
              >
                Surya (Sun)
              </text>
              <text
                x="320"
                y="215"
                textAnchor="middle"
                className={styles.transitText}
              >
                {"[ Venus 11°02' ]"}
              </text>
            </svg>
          </div>
        </div>

        <div className={styles.chartFooter}>
          <span>D1 Ephemeris Map rendered.</span>
          <span>ORBITAL AXIS: TRUE LUNAR NODE</span>
          <span className={styles.cyanText}>ACTIVE EPOCH: MATCHED</span>
        </div>
      </div>

      {/* Barometers Section */}
      <div className={styles.barometersSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.titleWithIcon}>
            Gochar Resonance Barometers
          </div>
          <span className={styles.cyanText} style={{ fontSize: "9px" }}>
            LIVE MATRIX
          </span>
        </div>

        <div className={styles.barsList}>
          {barometers.map((bar, idx) => (
            <div key={idx} className={styles.barCard}>
              <div className={styles.barHeader}>
                <div className={styles.grahaInfo}>
                  <span className={styles.grahaName}>{bar.graha}</span>
                  <span className={styles.transitHouse}>
                    {bar.transitHouse}
                  </span>
                </div>
                <span
                  className={styles.resonanceLabel}
                  style={{
                    color:
                      bar.resonancePercentage > 80
                        ? "#48e5c2"
                        : bar.resonancePercentage > 40
                          ? "#FFD700"
                          : "#ff4d4f",
                  }}
                >
                  {bar.resonanceLabel}
                </span>
              </div>

              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{
                    width: `${bar.resonancePercentage}%`,
                    background:
                      bar.resonancePercentage > 80
                        ? "#48e5c2"
                        : bar.resonancePercentage > 40
                          ? "#FFD700"
                          : "#ff4d4f",
                  }}
                ></div>
              </div>

              <p className={styles.description}>{bar.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.gocharInfoBox}>
          <Settings2 size={16} className={styles.iconCyan} />
          <div className={styles.infoContent}>
            <h5>Gochar Kakshya Sync</h5>
            <p>
              Saturn transit in 3rd House creates independent action vectors.
            </p>
          </div>
          <span className={styles.optimalTag}>OPTIMAL</span>
        </div>
      </div>
    </div>
  );
};

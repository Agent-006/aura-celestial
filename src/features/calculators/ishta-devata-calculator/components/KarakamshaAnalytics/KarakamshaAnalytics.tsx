import React from "react";
import { DeityResonance } from "../../types/ishta-devata.types";
import { Compass, Sparkles } from "lucide-react";
import styles from "./karakamsha-analytics.module.scss";

interface KarakamshaAnalyticsProps {
  resonanceScores: DeityResonance[];
  totalQuotient: string;
}

export const KarakamshaAnalytics: React.FC<KarakamshaAnalyticsProps> = ({
  resonanceScores,
  totalQuotient,
}) => {
  return (
    <div className={styles.analyticsContainer}>
      <div className={styles.chartSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.titleWithIcon}>
            <Compass size={16} /> Karakamsha Navamsha (D9) Chart Geometry
          </div>
          <span className={styles.badge}>DATA LOCKED</span>
        </div>

        <div className={styles.chartWrapper}>
          <div className={styles.diamondChart}>
            <svg viewBox="0 0 400 400" className={styles.svgChart}>
              <rect
                x="10"
                y="10"
                width="380"
                height="380"
                fill="none"
                stroke="rgba(255, 215, 0, 0.2)"
                strokeWidth="1"
              />
              <line
                x1="10"
                y1="10"
                x2="390"
                y2="390"
                stroke="rgba(255, 215, 0, 0.2)"
                strokeWidth="1"
              />
              <line
                x1="390"
                y1="10"
                x2="10"
                y2="390"
                stroke="rgba(255, 215, 0, 0.2)"
                strokeWidth="1"
              />
              <polygon
                points="200,10 390,200 200,390 10,200"
                fill="none"
                stroke="rgba(255, 215, 0, 0.2)"
                strokeWidth="1"
              />

              {/* Center / Ascendant */}
              <text
                x="200"
                y="100"
                textAnchor="middle"
                className={styles.mainPlanet}
              >
                Budha
              </text>
              <text
                x="200"
                y="115"
                textAnchor="middle"
                className={styles.houseLabel}
              >
                12th (Karakamsha)
              </text>

              {/* 1st House */}
              <text
                x="200"
                y="280"
                textAnchor="middle"
                className={styles.subPlanet}
              >
                Surya (AK)
              </text>
              <text
                x="200"
                y="295"
                textAnchor="middle"
                className={styles.houseLabel}
              >
                Lagna
              </text>

              {/* Highlight gradient */}
              <polygon
                points="200,10 300,100 200,200 100,100"
                fill="rgba(72, 229, 194, 0.05)"
              />
            </svg>
          </div>
        </div>

        <div className={styles.chartFooter}>
          <span>ORBITAL AXIS: D9</span>
          <span className={styles.goldText}>TRUE LUNAR NODE</span>
        </div>
      </div>

      <div className={styles.barsSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.titleWithIcon}>
            <Sparkles size={16} /> Deity Resonance Analytics
          </div>
          <span className={styles.subtitle}>
            COMPUTED FROM 12TH LORD IN NAVAMSHA (D9)
          </span>
        </div>

        <div className={styles.barsList}>
          {resonanceScores.map((score, idx) => (
            <div key={idx} className={styles.barCard}>
              <div className={styles.barHeader}>
                <span className={styles.deityName}>{score.deity}</span>
                <span
                  className={styles.percentage}
                  style={{
                    color:
                      score.percentage > 80
                        ? "#FFD700"
                        : score.percentage > 40
                          ? "#48e5c2"
                          : "#8c8c8c",
                  }}
                >
                  {score.percentage}% Resonance
                </span>
              </div>

              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{
                    width: `${score.percentage}%`,
                    background:
                      score.percentage > 80
                        ? "#FFD700"
                        : score.percentage > 40
                          ? "#48e5c2"
                          : "#8c8c8c",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.totalBox}>
          <div className={styles.totalLabel}>
            <span>ISHTA DEVATA SELECTION</span>
            <span>SPIRITUAL RESONANCE QUOTIENT</span>
          </div>
          <div className={styles.totalValue}>
            {totalQuotient} <span className={styles.unit}>/ 10</span>
          </div>
        </div>
      </div>
    </div>
  );
};

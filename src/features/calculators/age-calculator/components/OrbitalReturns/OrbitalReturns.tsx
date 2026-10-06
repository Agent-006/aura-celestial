import React from "react";
import {
  OrbitalMetrics,
  PlanetaryCycles,
} from "../../types/age-calculator.types";
import styles from "./orbital-returns.module.scss";

interface OrbitalReturnsProps {
  orbital: {
    metrics: OrbitalMetrics;
    cycles: PlanetaryCycles;
    arcPercentage: number;
  };
}

export const OrbitalReturns: React.FC<OrbitalReturnsProps> = ({ orbital }) => {
  return (
    <div className={styles.orbitalContainer}>
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <h3 className={styles.cyanText}>
            120-Year Vimshottari Arc & Planetary Orbital Returns
          </h3>
        </div>
        <div className={styles.badges}>
          <span className={styles.badge}>Earth (Terra)</span>
          <span className={styles.badge}>Chandra (Luna)</span>
          <span className={styles.badge}>Surya (Sol)</span>
          <span className={styles.badgeCyan}>
            Vimshottari Dasha (120 Years)
          </span>
          <span className={styles.badge}>Navagraha (9 Bodies)</span>
          <span className={styles.badge}>Nodes (Rahu/Ketu)</span>
        </div>
      </div>

      <div className={styles.contentGrid}>
        <div className={styles.chartArea}>
          <div className={styles.arcChart}>
            <svg viewBox="0 0 200 200" className={styles.svgCircle}>
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="4"
              />
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="#48e5c2"
                strokeWidth="4"
                strokeDasharray={`${(orbital.arcPercentage / 100) * 565.48} 565.48`}
                strokeLinecap="round"
                transform="rotate(-90 100 100)"
              />
              <circle
                cx="100"
                cy="100"
                r="75"
                fill="none"
                stroke="rgba(255, 215, 0, 0.2)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <text
                x="100"
                y="95"
                textAnchor="middle"
                className={styles.arcText}
              >
                Vimshottari
              </text>
              <text
                x="100"
                y="115"
                textAnchor="middle"
                className={styles.arcValue}
              >
                {orbital.arcPercentage}%
              </text>
            </svg>
            <div className={styles.arcLabels}>
              <span>
                <span className={styles.dotGold}></span> Vimshottari Arc (120
                Yrs)
              </span>
              <span>
                <span className={styles.dotCyan}></span> Biological Arc
                (Current)
              </span>
            </div>
          </div>
        </div>

        <div className={styles.statsArea}>
          <div className={styles.statsBlock}>
            <div className={styles.blockTitle}>
              Quantum Chronometry & Biological Distance Traversed
            </div>
            <div className={styles.blockGrid}>
              <div className={styles.dataPoint}>
                <span className={styles.label}>Estimated Heartbeats</span>
                <span className={styles.valueGold}>
                  {orbital.metrics.heartbeats}
                </span>
                <span className={styles.subtext}>@ 72 bpm avg. lifespan</span>
              </div>
              <div className={styles.dataPoint}>
                <span className={styles.label}>Breaths Taken (Pranas)</span>
                <span className={styles.valueGold}>
                  {orbital.metrics.breaths}
                </span>
                <span className={styles.subtext}>
                  @ 15 breaths / minute avg.
                </span>
              </div>
              <div className={styles.dataPoint}>
                <span className={styles.label}>
                  Total Distance Traversed On Earth Line
                </span>
                <span className={styles.valueCyan}>
                  {orbital.metrics.earthDistance}
                </span>
                <span className={styles.subtext}>
                  Earth&apos;s rotation + Solar revolution
                </span>
              </div>
            </div>
            <div className={styles.highlightDataPoint}>
              <div className={styles.top}>
                <span className={styles.labelCyan}>
                  CELESTIAL TRAVEL / MACROCOSMIC TRANSLATION
                </span>
                <span className={styles.labelRight}>
                  Solar System Velocity: 828,000 km/h
                </span>
              </div>
              <div className={styles.bottom}>
                <div className={styles.leftBox}>
                  <span className={styles.valLabel}>
                    Distance Travelled with Solar System
                  </span>
                  <span className={styles.valHugeGold}>
                    {orbital.metrics.solarSystemDistance}
                  </span>
                  <span className={styles.valSub}>
                    Orbiting the Galactic Center (Milky Way)
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.cyclesBlock}>
            <div className={styles.blockTitleLine}>
              <span>Planetary Orbital Cycles on Other Planets</span>
              <span className={styles.rightLabel}>
                Revolution / Sidereal Translation
              </span>
            </div>
            <div className={styles.cyclesGrid}>
              <div className={styles.cycleCard}>
                <span className={styles.cLabel}>Kuja (Mars) Years</span>
                <span className={styles.cValue}>{orbital.cycles.mars}</span>
                <span className={styles.cSub}>687 Earth Days</span>
              </div>
              <div className={styles.cycleCard}>
                <span className={styles.cLabel}>Guru (Jupiter) Yrs</span>
                <span className={styles.cValue}>{orbital.cycles.jupiter}</span>
                <span className={styles.cSub}>11.86 Earth Yrs</span>
              </div>
              <div className={styles.cycleCard}>
                <span className={styles.cLabel}>Shani (Saturn)</span>
                <span className={styles.cValue}>{orbital.cycles.saturn}</span>
                <span className={styles.cSub}>29.45 Earth Yrs</span>
              </div>
              <div className={styles.cycleCard}>
                <span className={styles.cLabel}>Uranus (Indra)</span>
                <span className={styles.cValue}>{orbital.cycles.uranus}</span>
                <span className={styles.cSub}>84 Earth Yrs</span>
              </div>
              <div className={styles.cycleCard}>
                <span className={styles.cLabel}>Neptune (Varuna)</span>
                <span className={styles.cValue}>{orbital.cycles.neptune}</span>
                <span className={styles.cSub}>165 Earth Yrs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

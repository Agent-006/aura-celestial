import React from "react";
import { NumerologyTelemetry } from "../../types/numerology.types";
import styles from "./archetype-cards.module.scss";

interface ArchetypeCardsProps {
  telemetry: NumerologyTelemetry;
}

export const ArchetypeCards: React.FC<ArchetypeCardsProps> = ({
  telemetry,
}) => {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        Foundational Vibrational Archetypes
      </h3>

      <div className={styles.cardsGrid}>
        {/* Mulank (Psychic Number) */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.label}>PSYCHIC NUMBER</span>
            <span className={styles.badge}>BIRTH DATE</span>
          </div>
          <div className={styles.numberRow}>
            <span className={styles.bigNumber}>{telemetry.mulank.value}</span>
            <span className={styles.sanskritName}>Mulank</span>
          </div>
          <div className={styles.archetypeLabel}>
            <span className={styles.dot}></span> {telemetry.mulank.label}
          </div>
          <p className={styles.description}>{telemetry.mulank.description}</p>
          <div className={styles.cardFooter}>
            <div className={styles.footerItem}>
              <span>COMPATIBILITY</span>
              <span className={styles.highlight}>EXCELLENT</span>
            </div>
            <div className={styles.footerItem}>
              <span>RULING PLANET</span>
              <span className={styles.highlight}>MERCURY</span>
            </div>
          </div>
        </div>
        {/* Bhagyank (Destiny Number) */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.label}>DESTINY NUMBER</span>
            <span className={styles.badge}>FULL DOB</span>
          </div>
          <div className={styles.numberRow}>
            <span className={styles.bigNumber}>{telemetry.bhagyank.value}</span>
            <span className={styles.sanskritName}>Bhagyank</span>
          </div>
          <div className={styles.archetypeLabel}>
            <span className={styles.dot}></span> {telemetry.bhagyank.label}
          </div>
          <p className={styles.description}>{telemetry.bhagyank.description}</p>
          <div className={styles.cardFooter}>
            <div className={styles.footerItem}>
              <span>COMPATIBILITY</span>
              <span className={styles.highlight}>HIGH</span>
            </div>
            <div className={styles.footerItem}>
              <span>RULING PLANET</span>
              <span className={styles.highlight}>SUN</span>
            </div>
          </div>
        </div>
        {/* Namank (Name Number) */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.label}>NAME NUMBER</span>
            <span className={styles.badge}>FULL NAME</span>
          </div>
          <div className={styles.numberRow}>
            <span className={styles.bigNumber}>{telemetry.namank.value}</span>
            <span className={styles.subNumber}>
              /{" "}
              {String(telemetry.namank.value)
                .split("")
                .reduce((a, b) => a + Number(b), 0)}
            </span>
            <span className={styles.sanskritName}>Namank</span>
          </div>
          <div className={styles.archetypeLabel}>
            <span className={styles.dot}></span> {telemetry.namank.label}
          </div>
          <p className={styles.description}>{telemetry.namank.description}</p>
          <div className={styles.cardFooter}>
            <div className={styles.footerItem}>
              <span>COMPOUND</span>
              <span className={styles.highlight}>FORTUNATE</span>
            </div>
            <div className={styles.footerItem}>
              <span>RULING PLANET</span>
              <span className={styles.highlight}>MOON</span>
            </div>
          </div>
        </div>
        {/* Karmic Resonance Gauge */}
        <div className={`${styles.card} ${styles.gaugeCard}`}>
          <div className={styles.cardHeader}>
            <span className={styles.label}>KARMIC RESONANCE</span>
            <span className={styles.badge}>MATRIX MATCH</span>
          </div>
          <div className={styles.gaugeWrapper}>
            <svg viewBox="0 0 100 100" className={styles.gauge}>
              <circle cx="50" cy="50" r="40" className={styles.bgCircle} />
              <circle
                cx="50"
                cy="50"
                r="40"
                className={styles.progressCircle}
                strokeDasharray={`${telemetry.KarmicResonance * 2.51} 251`}
              />
            </svg>
            <div className={styles.gaugeValue}>
              <span className={styles.percent}>
                {telemetry.KarmicResonance}%
              </span>
            </div>
          </div>
          <div className={styles.cardFooter}>
            <div className={styles.footerItem}>
              <span>ALIGNMENT</span>
              <span className={styles.highlight}>HARMONIOUS</span>
            </div>
            <div className={styles.footerItem}>
              <span>FRICTION</span>
              <span className={styles.highlight}>MINIMAL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

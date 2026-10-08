import styles from "./ephemeris-profile.module.scss";

export function EphemerisProfile() {
  return (
    <div className={styles.container}>
      {/* --- Top Header --- */}
      <div className={styles.header}>
        <div className={styles.titleInfo}>
          <span className={styles.eyebrow}>CALCULATED EPHEMERIS PROFILE</span>
          <h3 className={styles.title}>Vrischika Lagna (Scorpio Ascendant)</h3>
        </div>
        <div className={styles.badges}>
          <span className={styles.badge}>Nakshatra: Anuradha (Pada 3)</span>
          <span className={styles.badge}>Moon: Scorpio</span>
        </div>
      </div>
      {/* --- The SVG Chart Container --- */}
      <div className={styles.chartWrapper}>
        <svg viewBox="0 0 400 400" className={styles.svgChart}>
          {/* Main outer border */}
          <rect
            x="10"
            y="10"
            width="380"
            height="380"
            fill="none"
            stroke="var(--color-gold-primary)"
            strokeOpacity="0.4"
            strokeWidth="2"
          />

          {/* Diagonals to create the 12 houses */}
          <line
            x1="10"
            y1="10"
            x2="390"
            y2="390"
            stroke="var(--color-gold-primary)"
            strokeOpacity="0.4"
            strokeWidth="1"
          />
          <line
            x1="390"
            y1="10"
            x2="10"
            y2="390"
            stroke="var(--color-gold-primary)"
            strokeOpacity="0.4"
            strokeWidth="1"
          />

          {/* Inner Diamond */}
          <polygon
            points="200,10 390,200 200,390 10,200"
            fill="none"
            stroke="var(--color-gold-primary)"
            strokeOpacity="0.4"
            strokeWidth="1"
          />
          {/* Hardcoded data for the mockup UI */}
          {/* Ascendant / First House */}
          <text
            x="200"
            y="180"
            textAnchor="middle"
            fill="var(--color-gold-primary)"
            fontSize="16"
            fontWeight="bold"
          >
            8 (Asc)
          </text>
          <text
            x="200"
            y="200"
            textAnchor="middle"
            fill="var(--color-text-primary)"
            fontSize="12"
            letterSpacing="1"
          >
            Sun • Mer
          </text>

          {/* 4th House */}
          <text x="105" y="265" textAnchor="middle" fill="var(--color-text-secondary)" fontSize="12">
            Jup 11
          </text>

          {/* 10th House */}
          <text x="295" y="265" textAnchor="middle" fill="var(--color-text-secondary)" fontSize="12">
            5 Moon
          </text>

          {/* 7th House */}
          <text x="200" y="340" textAnchor="middle" fill="var(--color-text-secondary)" fontSize="12">
            Mar
          </text>
          <text x="200" y="360" textAnchor="middle" fill="var(--color-text-secondary)" fontSize="12">
            2
          </text>
        </svg>
      </div>
    </div>
  );
}

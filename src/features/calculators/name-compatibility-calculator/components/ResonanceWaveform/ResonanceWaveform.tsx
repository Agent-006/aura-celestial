import React from "react";
import { NameCompatibilityStats } from "../../types/name-compatibility.types";
import { Activity } from "lucide-react";
import styles from "./resonance-waveform.module.scss";

interface ResonanceWaveformProps {
  stats: NameCompatibilityStats;
}

export const ResonanceWaveform: React.FC<ResonanceWaveformProps> = ({
  stats,
}) => {
  return (
    <div className={styles.waveformContainer}>
      <div className={styles.header}>
        <div className={styles.titleWithIcon}>
          <Activity size={16} /> Interference Pattern Oscillogram & Matrix Sync
        </div>
        <div className={styles.badge}>DATA LOCKED / LIVE SYNC</div>
      </div>

      <div className={styles.visualsGrid}>
        <div className={styles.chartSection}>
          <div className={styles.svgWrapper}>
            <svg
              viewBox="0 0 800 150"
              className={styles.svgChart}
              preserveAspectRatio="none"
            >
              {/* Grid lines */}
              <line
                x1="0"
                y1="75"
                x2="800"
                y2="75"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
              />
              <line
                x1="0"
                y1="25"
                x2="800"
                y2="25"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <line
                x1="0"
                y1="125"
                x2="800"
                y2="125"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />

              {/* Wave A */}
              <path
                d="M 0 75 Q 100 25, 200 75 T 400 75 T 600 75 T 800 75"
                fill="none"
                stroke="#FFD700"
                strokeWidth="2"
                className={styles.waveA}
              />

              {/* Wave B */}
              <path
                d="M 0 75 Q 100 125, 200 75 T 400 75 T 600 75 T 800 75"
                fill="none"
                stroke="#48e5c2"
                strokeWidth="2"
                className={styles.waveB}
              />

              {/* Resonance nodes */}
              <circle cx="200" cy="75" r="4" fill="#FFD700" />
              <circle cx="400" cy="75" r="4" fill="#48e5c2" />
              <circle cx="600" cy="75" r="4" fill="#FFD700" />
            </svg>
          </div>

          <div className={styles.chartLegend}>
            <span>PERSON A WAVELENGTH</span>
            <span>INTERFERENCE NODES</span>
            <span>PERSON B WAVELENGTH</span>
          </div>

          <div className={styles.metricsRow}>
            <div className={styles.metric}>
              <span className={styles.label}>Vowel Frequency Synergy</span>
              <div className={styles.barWrap}>
                <div
                  className={styles.barGold}
                  style={{ width: stats.vowelFrequency }}
                ></div>
              </div>
              <span className={styles.valGold}>{stats.vowelFrequency}</span>
            </div>

            <div className={styles.metric}>
              <span className={styles.label}>Consonant Dissonance Vectors</span>
              <div className={styles.barWrap}>
                <div
                  className={styles.barRed}
                  style={{ width: stats.consonantDissonance }}
                ></div>
              </div>
              <span className={styles.valRed}>{stats.consonantDissonance}</span>
            </div>

            <div className={styles.metric}>
              <span className={styles.label}>Syllable Metric Overlay</span>
              <div className={styles.barWrap}>
                <div
                  className={styles.barCyan}
                  style={{ width: stats.syllableMetric }}
                ></div>
              </div>
              <span className={styles.valCyan}>{stats.syllableMetric}</span>
            </div>
          </div>
        </div>

        <div className={styles.totalSection}>
          <div className={styles.totalTitle}>
            Total Syllabic & Phonetic Resonance Matrix
          </div>
          <p className={styles.totalDesc}>
            Combining both heliocentric character derivations and D9 Navamsha
            node alignments to calculate final interpersonal compatibility.
          </p>

          <div className={styles.giantBarWrap}>
            <div
              className={styles.giantBarFill}
              style={{ width: `${stats.totalResonance}%` }}
            ></div>
            <div className={styles.barMarkers}>
              <span>0</span>
              <span>25</span>
              <span>50</span>
              <span>75</span>
              <span>100</span>
            </div>
          </div>

          <div className={styles.totalBox}>
            <div className={styles.left}>
              <span>OVERALL CONCORDANCE</span>
              <span>ONBMASTIC SYNERGY QUOTIENT (OSQ)</span>
            </div>
            <div className={styles.right}>
              {stats.totalResonance} <span className={styles.unit}>%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { NameCompatibilityStats as StatsType } from "../../types/name-compatibility.types";
import { Activity, Heart, User, Radio } from "lucide-react";
import styles from "./name-compatibility-stats.module.scss";

interface NameCompatibilityStatsProps {
  stats: StatsType;
}

export const NameCompatibilityStats: React.FC<NameCompatibilityStatsProps> = ({
  stats,
}) => {
  return (
    <div className={styles.statsContainer}>
      <div className={styles.header}>
        <h3>Interpersonal Sonic Telemetry & Resonance Waveform</h3>
      </div>

      <div className={styles.cardsGrid}>
        <div className={styles.statCard}>
          <div className={styles.cardHeader}>
            <span className={styles.value}>{stats.destinySync}</span>
            <Activity size={16} className={styles.iconGold} />
          </div>
          <div className={styles.label}>Destiny Number Sync</div>
          <div className={styles.subtext}>
            Synergy between life paths and universal purpose vectors.
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.cardHeader}>
            <span className={styles.value}>{stats.soulUrgeResonance}</span>
            <Heart size={16} className={styles.iconCyan} />
          </div>
          <div className={styles.label}>Soul Urge / Vowel Resonance</div>
          <div className={styles.subtext}>
            Core emotional alignment and internal desire sync.
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.cardHeader}>
            <span className={styles.value}>{stats.personalityAlignment}</span>
            <User size={16} className={styles.iconGold} />
          </div>
          <div className={styles.label}>Personality / Consonant Alignment</div>
          <div className={styles.subtext}>
            Outer persona and first impression compatibility.
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.cardHeader}>
            <span className={styles.valueCyan}>{stats.overallPhonetic}</span>
            <Radio size={16} className={styles.iconCyan} />
          </div>
          <div className={styles.label}>Overall Phonetic Concordance</div>
          <div className={styles.subtext}>
            Final vibratory alignment score across all metrics.
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { Activity, Brain, Heart, Users } from "lucide-react";
import { FriendshipTelemetryData, FriendshipFormValues } from "../../types/friendship.types";
import styles from "./harmonic-telemetry.module.scss";

interface HarmonicTelemetryProps {
  data: FriendshipTelemetryData;
  formValues: FriendshipFormValues;
}

export const HarmonicTelemetry: React.FC<HarmonicTelemetryProps> = ({ data, formValues }) => {
  const { stats } = data;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          HARMONIC TELEMETRY & PLATONIC WAVEFORM
        </div>
        <div className={styles.badges}>
          <div className={`${styles.badge} ${styles.active}`}>11TH HOUSE : LABHA / MITRA BHAVA</div>
          <div className={styles.badge}>MERCURY / BUDHA AFFINITY</div>
        </div>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <span className={styles.label}>Psychological Resonance</span>
            <Activity size={14} className={styles.icon} style={{color: '#48e5c2'}} />
          </div>
          <div className={styles.statValue} style={{ color: '#48e5c2' }}>{stats.psychologicalResonance}</div>
          <div className={`${styles.progressBar} ${styles.cyan}`}>
            <div className={styles.progressFill} style={{ width: '98.2%' }}></div>
          </div>
          <div className={styles.statDesc}>Core emotional & psychological synergy</div>
        </div>
        
        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <span className={styles.label}>Intellectual Synergy</span>
            <Brain size={14} className={styles.icon} />
          </div>
          <div className={styles.statValue}>{stats.intellectualSynergy}</div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: '94.6%' }}></div>
          </div>
          <div className={styles.statDesc}>Mercury (Budha) Wavelength Resonance</div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <span className={styles.label}>Emotional Support Matrix</span>
            <Heart size={14} className={styles.icon} style={{color: '#48e5c2'}} />
          </div>
          <div className={styles.statValue} style={{ color: '#48e5c2' }}>{stats.emotionalSupportMatrix}</div>
          <div className={`${styles.progressBar} ${styles.cyan}`}>
            <div className={styles.progressFill} style={{ width: '92.0%' }}></div>
          </div>
          <div className={styles.statDesc}>Chandra (Moon) Nurturing / Care patterns</div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <span className={styles.label}>11th House Labha Syndicate</span>
            <Users size={14} className={styles.icon} />
          </div>
          <div className={styles.statValue}>{stats.eleventhHouseSyndicate}</div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: '96.8%' }}></div>
          </div>
          <div className={styles.statDesc}>Mutual Gain, Ambitions, & Group Harmony</div>
        </div>
      </div>

      <div className={styles.graphContainer}>
        <div className={styles.graphHeader}>
          <div className={styles.graphTitle}>Dual-Phase Resonance Sample: {formValues.alphaName} ↔ {formValues.betaName}</div>
          <div className={styles.legend}>
            <div className={styles.legendItem}><span className={`${styles.dot} ${styles.cyan}`}></span> NATIVE 001</div>
            <div className={styles.legendItem}><span className={`${styles.dot} ${styles.gold}`}></span> NATIVE 002</div>
            <div className={styles.legendItem}>CONCORDANCE / 96.8c</div>
          </div>
        </div>
        
        <div className={styles.graphVisual}>
          <div className={`${styles.wave} ${styles.cyanWave}`}></div>
          <div className={`${styles.wave} ${styles.goldWave}`}></div>
        </div>
        
        <div className={styles.graphFooter}>
          <span>INTERSECTION PHASE: HIGH SYNERGY / MUTUAL TRUST</span>
          <span className={styles.syncPoint}>ORBITAL PEAK: YEAR {Math.min(parseInt(formValues.duration) || 5, 5)}</span>
        </div>
      </div>
    </div>
  );
};

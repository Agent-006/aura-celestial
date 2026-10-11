import React from "react";
import { Music, Hash, Radio, Activity } from "lucide-react";
import { LuckyNameTelemetryData } from "../../types/lucky-name-calculator.types";
import styles from "./lucky-name-pillars.module.scss";

interface LuckyNamePillarsProps {
  pillars: LuckyNameTelemetryData["pillars"];
}

export const LuckyNamePillars: React.FC<LuckyNamePillarsProps> = ({
  pillars,
}) => {
  return (
    <div className={styles.pillarsContainer}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>CONCORDANCE & ARCHITECTURAL READOUT</span>
        <h3 className={styles.title}>The 4 Sacred Pillars of Name Numerology Architecture</h3>
        <p className={styles.subtitle}>
          Soul Urge (Vowels), Outer Persona (Consonants), Inter-Number Concordance, and Power Visibility Score.
        </p>
      </div>

      <div className={styles.pillarsGrid}>
        <div className={styles.pillarCard}>
          <div className={styles.cardHeader}>
            <span className={styles.eyebrowText}>PILLAR I: INTERNAL DRIVES</span>
            <Music size={14} className={styles.iconGold} />
          </div>
          <h4 className={styles.cardTitle}>Soul Urge (Vowels)</h4>
          <div className={styles.valueRow}>
            <span className={styles.primaryValue}>{pillars.soulUrge.calculation.split("➔")[0].trim()}</span>
            <span className={styles.arrow}>➔</span>
            <div className={styles.rootGroup}>
              <span className={styles.rootValue}>{pillars.soulUrge.calculation.split("➔")[1].trim()}</span>
              <span className={styles.rootLabel}>(Root)</span>
            </div>
          </div>
          <div className={styles.content}>
            <p>{pillars.soulUrge.description}</p>
          </div>
          <div className={styles.footer}>
            <span>VOWEL SYNTHESIS</span>
            <span className={styles.statusCyan}>ACTIVE</span>
          </div>
        </div>

        <div className={styles.pillarCard}>
          <div className={styles.cardHeader}>
            <span className={styles.eyebrowText}>PILLAR II: EXTERNAL PROJECTION</span>
            <Hash size={14} className={styles.iconGold} />
          </div>
          <h4 className={styles.cardTitle}>Outer Persona (Consonants)</h4>
          <div className={styles.valueRow}>
            <span className={styles.primaryValue}>{pillars.outerPersona.calculation.split("➔")[0].trim()}</span>
            <span className={styles.arrow}>➔</span>
            <div className={styles.rootGroup}>
              <span className={styles.rootValue}>{pillars.outerPersona.calculation.split("➔")[1].trim()}</span>
              <span className={styles.rootLabel}>(Root)</span>
            </div>
          </div>
          <div className={styles.content}>
            <p>{pillars.outerPersona.description}</p>
          </div>
          <div className={styles.footer}>
            <span>CONSONANT FIELD</span>
            <span className={styles.statusCyan}>ACTIVE</span>
          </div>
        </div>

        <div className={styles.pillarCard}>
          <div className={styles.cardHeader}>
            <span className={styles.eyebrowText}>PILLAR III: HARMONIC RESONANCE</span>
            <Radio size={14} className={styles.iconGold} />
          </div>
          <h4 className={styles.cardTitle}>Inter-Number Concordance</h4>
          <div className={styles.content}>
            <div className={styles.statRow}>
              <span className={styles.label}>NATURAL AFFINITIES</span>
              <span className={styles.valueCyan}>{pillars.concordance.naturalAffinities}</span>
            </div>
            <div className={styles.statRow}>
              <span className={styles.label}>NEUTRAL / TOLERANT</span>
              <span className={styles.value}>{pillars.concordance.neutralTolerant}</span>
            </div>
            <div className={styles.statRow}>
              <span className={styles.label}>INCOMPATIBLE / TENSION</span>
              <span className={styles.valueRed}>{pillars.concordance.incompatibleTension}</span>
            </div>
          </div>
          <div className={styles.footer}>
            <span>SYNASTRY DIRECTORY</span>
            <span className={styles.statusCyan}>PARSED</span>
          </div>
        </div>

        <div className={styles.pillarCard}>
          <div className={styles.cardHeader}>
            <span className={styles.eyebrowText}>PILLAR IV: VIBRATIONAL POTENCY</span>
            <Activity size={14} className={styles.iconGold} />
          </div>
          <h4 className={styles.cardTitle}>Power Visibility Score</h4>
          <div className={styles.valueRow}>
            <span className={styles.primaryValue}>{pillars.powerScore.score.split("/")[0]}</span>
            <span className={styles.arrow}>/</span>
            <span className={styles.rootValue}>{pillars.powerScore.score.split("/")[1]}</span>
          </div>
          <div className={styles.content}>
            <p>{pillars.powerScore.description}</p>
          </div>
          <div className={styles.footer}>
            <span>POTENCY METRIC</span>
            <span className={styles.statusCyan}>VERIFIED</span>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { Layers, Link, ShieldCheck, Activity } from "lucide-react";
import { DestinyPillars as DestinyPillarsType } from "../../types/destiny-number-calculator.types";
import styles from "./destiny-pillars.module.scss";

interface DestinyPillarsProps {
  pillars: DestinyPillarsType;
}

export const DestinyPillars: React.FC<DestinyPillarsProps> = ({ pillars }) => {
  return (
    <div className={styles.pillarsContainer}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>
          AURA OBSERVATORY ALGORITHM [V 1.0]
        </span>
        <h3 className={styles.title}>The 4 Sacred Pillars of Destiny Architecture</h3>
      </div>

      <div className={styles.pillarsGrid}>
        {/* Pillar 1 */}
        <div className={styles.pillarCardFull}>
          <div className={styles.cardHeader}>
            <span className={styles.pLabel}>PILLAR 1 / PRIMARY THEME</span>
            <h4 className={styles.pTitle}>{pillars.mission.title}</h4>
          </div>
          <p className={styles.pContent}>{pillars.mission.content}</p>
          <div className={styles.coreLesson}>
            <span className={styles.clLabel}>CORE LESSON:</span>
            <span className={styles.clText}>{pillars.mission.coreLesson}</span>
          </div>
        </div>

        {/* Pillar 2 */}
        <div className={styles.pillarCard}>
          <div className={styles.cardHeader}>
            <span className={styles.pLabel}>PILLAR 2 / SYNASTRY GRID</span>
            <h4 className={styles.pTitle}>{pillars.concordance.title}</h4>
          </div>
          <div className={styles.listRows}>
            <div className={styles.row}>
              <span className={styles.rLabel}>Natural Affinities (Allies):</span>
              <span className={styles.rValueGold}>{pillars.concordance.naturalAffinities}</span>
            </div>
            <div className={styles.row}>
              <span className={styles.rLabel}>Neutral / Tolerant (Peers):</span>
              <span className={styles.rValueCyan}>{pillars.concordance.neutralTolerant}</span>
            </div>
            <div className={styles.row}>
              <span className={styles.rLabel}>Incompatible & Karmic Tension:</span>
              <span className={styles.rValueRed}>{pillars.concordance.incompatibleTension}</span>
            </div>
          </div>
        </div>

        {/* Pillar 3 */}
        <div className={styles.pillarCard}>
          <div className={styles.cardHeader}>
            <span className={styles.pLabel}>PILLAR 3 / SPATIAL CATALYSTS</span>
            <h4 className={styles.pTitle}>{pillars.coordinates.title}</h4>
          </div>
          <div className={styles.grid2x2}>
            <div className={styles.cell}>
              <span className={styles.cLabel}>FAVORABLE YEARS</span>
              <span className={styles.cValueCyan}>{pillars.coordinates.favorableYears}</span>
            </div>
            <div className={styles.cell}>
              <span className={styles.cLabel}>FAVORABLE COLORS</span>
              <span className={styles.cValue}>{pillars.coordinates.favorableColors}</span>
            </div>
            <div className={styles.cell}>
              <span className={styles.cLabel}>FAVORABLE DAYS</span>
              <span className={styles.cValue}>{pillars.coordinates.favorableDays}</span>
            </div>
            <div className={styles.cell}>
              <span className={styles.cLabel}>OPTIMAL GEMSTONE</span>
              <span className={styles.cValueGold}>{pillars.coordinates.optimalGemstone}</span>
            </div>
          </div>
        </div>

        {/* Pillar 4 */}
        <div className={styles.pillarCardFull}>
          <div className={styles.cardHeader}>
            <span className={styles.pLabel}>PILLAR 4 / CHRONOLOGY DECODE</span>
            <h4 className={styles.pTitle}>{pillars.evolution.title}</h4>
          </div>
          <div className={styles.timelineRows}>
            <div className={styles.tRow}>
              <span className={styles.tLabel}>FOUNDATION PHASE (AGES 0-27)</span>
              <span className={styles.tContent}>{pillars.evolution.foundationPhase}</span>
            </div>
            <div className={styles.tRowActive}>
              <span className={styles.tLabel}>ZENITH PHASE (AGES 28 - 54) [ACTIVE]</span>
              <span className={styles.tContent}>{pillars.evolution.zenithPhase}</span>
            </div>
            <div className={styles.tRow}>
              <span className={styles.tLabel}>MATURATION PHASE (AGES 55+)</span>
              <span className={styles.tContent}>{pillars.evolution.maturationPhase}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

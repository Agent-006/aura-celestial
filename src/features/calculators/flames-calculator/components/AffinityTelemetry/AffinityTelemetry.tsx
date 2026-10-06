import React from "react";
import { FlamesTelemetryData } from "../../types/flames.types";
import styles from "./affinity-telemetry.module.scss";

interface AffinityTelemetryProps {
  data: FlamesTelemetryData;
}

const FLAMES_WORD = [
  { letter: "F", word: "Friendship", activeWord: "Friendship" },
  { letter: "L", word: "Love", activeWord: "Love Affinity" },
  { letter: "A", word: "Affection", activeWord: "Affection" },
  { letter: "M", word: "Marriage", activeWord: "Marriage" },
  { letter: "E", word: "Enmity", activeWord: "Enmity" },
  { letter: "S", word: "Sibling", activeWord: "Sibling" },
];

export const AffinityTelemetry: React.FC<AffinityTelemetryProps> = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <span className={styles.indicatorCyan}></span>
          PHASE 02: AFFINITY TELEMETRY & LETTER CANCELLATION
        </div>
        <div className={styles.step}>STATUS: RESONANT</div>
      </div>

      <div className={styles.cancellationArea}>
        <div className={styles.cancellationLabel}>
          <span>ALPHABETIC INTERSECTION (COMMON PHONETICS STRUCK)</span>
          <span className={styles.stats}>{data.totalAksharas} Cancelled / {data.remainingNodes} Remains</span>
        </div>
        
        <div className={styles.entityRow}>
          <span className={styles.entityName}>SUBJECT 01 (AARAV V SINGHANIA)</span>
          <div className={styles.letterBoxes}>
            {data.entityA.letters.map((node, i) => (
              <div key={i} className={`${styles.letterBox} ${node.cancelled ? styles.cancelled : ''}`}>
                {node.letter}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.entityRow}>
          <span className={styles.entityName}>SUBJECT 02 (AANYA S ROY)</span>
          <div className={styles.letterBoxes}>
            {data.entityB.letters.map((node, i) => (
              <div key={i} className={`${styles.letterBox} ${node.cancelled ? styles.cancelled : ''}`}>
                {node.letter}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.flamesOperation}>
        <div className={styles.opLabel}>FLAMES & TRANSIT OPERATION</div>
        <div className={styles.flamesRow}>
          {FLAMES_WORD.map((item) => {
            const isActive = item.letter === data.result;
            return (
              <div key={item.letter} className={`${styles.flameItem} ${isActive ? styles.active : ''}`}>
                <span className={styles.letter}>{item.letter}</span>
                <span className={styles.word}>{isActive ? item.activeWord : item.word}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.finalVerdict}>
        <div className={styles.verdictHeader}>
          <span className={styles.label}>FINAL HARMONIZATION VERDICT</span>
          <span className={styles.affinity}>Res. {data.affinityPercentage}</span>
        </div>
        <h3 className={styles.title}>{data.verdictTitle}</h3>
        <p className={styles.description}>{data.verdictDescription}</p>
      </div>

      <div className={styles.bottomStats}>
        <div className={styles.statCol}>
          <span className={styles.label}>EMOTIONAL INDEX</span>
          <span className={styles.value}>{data.emotionalIndex}</span>
        </div>
        <div className={styles.statCol}>
          <span className={styles.label}>STABILITY COEFFICIENT</span>
          <span className={`${styles.value} ${styles.cyanText}`}>{data.stabilityCoefficient}</span>
        </div>
        <div className={styles.statCol}>
          <span className={styles.label}>KARMIC TIE</span>
          <span className={styles.value}>{data.karmicTie}</span>
        </div>
      </div>
    </div>
  );
};

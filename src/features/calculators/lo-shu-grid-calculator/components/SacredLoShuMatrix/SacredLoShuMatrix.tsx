import React from "react";
import { GridCell, DigitResonance } from "../../types/lo-shu.types";
import { Maximize2, AlertTriangle } from "lucide-react";
import styles from "./sacred-lo-shu-matrix.module.scss";

interface SacredLoShuMatrixProps {
  grid: GridCell[];
  resonances: DigitResonance[];
}

export const SacredLoShuMatrix: React.FC<SacredLoShuMatrixProps> = ({ grid, resonances }) => {
  return (
    <div className={styles.matrixContainer}>
      <div className={styles.gridSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.titleBox}>
            <h3>Sacred 3×3 Lo Shu Matrix</h3>
            <span className={styles.subtitle}>NATIVE NUMERICAL MANIFESTATION MAP (BASE 9)</span>
          </div>
          <button className={styles.expandBtn}>
            <Maximize2 size={14} /> MAGNIFY COORDINATES
          </button>
        </div>

        <div className={styles.loShuGrid}>
          {grid.map((cell, index) => (
            <div 
              key={index} 
              className={`${styles.cell} ${cell.isMissing ? styles.missing : styles.present}`}
            >
              <div className={styles.cellHeader}>
                <span className={styles.cellNumber}>DIGIT {cell.number}</span>
                {cell.isMissing && (
                  <span className={styles.voidTag}>VOID</span>
                )}
                {!cell.isMissing && (
                  <span className={styles.activeTag}>ACTIVE</span>
                )}
              </div>
              <div className={styles.cellBody}>
                {cell.isMissing ? (
                  <span className={styles.emptyLines}>---</span>
                ) : (
                  <span className={styles.cellValues}>{cell.values}</span>
                )}
              </div>
              <div className={styles.cellFooter}>
                <span className={styles.element}>{cell.element}</span>
                <span className={styles.description}>{cell.description}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.gridFooter}>
          <div className={styles.legend}>
            <span className={styles.activeDot}></span> Active Matrix Resonance
            <span className={styles.voidDot}></span> Missing / Void Element
          </div>
          <div className={styles.footerNote}>LO SHU STANDARD: 4-9-2 / 3-5-7 / 8-1-6</div>
        </div>
      </div>

      <div className={styles.resonanceSection}>
        <div className={styles.sectionHeader}>
          <h3>Digit Resonance Breakdown</h3>
          <span className={styles.subtitle}>Occurrence weight and elemental overloads in the matrix</span>
        </div>

        <div className={styles.resonancesList}>
          {resonances.map((res, idx) => (
            <div key={idx} className={styles.resonanceCard}>
              <div className={styles.iconBox}>
                <span>{res.digit}</span>
              </div>
              <div className={styles.resContent}>
                <div className={styles.resHeader}>
                  <h4>{res.label}</h4>
                  <span className={styles.occurrences}>{res.occurrences}</span>
                </div>
                <p>{res.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.summaryStats}>
          <div className={styles.summaryRow}>
            <span>Water / Earth (1, 2, 5, 8)</span>
            <span className={styles.valNeutral}>5 Occurrences (Balanced)</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Fire / Metal (9, 6, 7)</span>
            <span className={styles.valWarning}>2 Occurrences (Deficient)</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Wood / Growth (3, 4)</span>
            <span className={styles.valCritical}>0 Occurrences (Void)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

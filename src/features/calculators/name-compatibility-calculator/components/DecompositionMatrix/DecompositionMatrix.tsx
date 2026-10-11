import React from "react";
import { GlyphRow } from "../../types/name-compatibility.types";
import { Hash } from "lucide-react";
import styles from "./decomposition-matrix.module.scss";

interface DecompositionMatrixProps {
  matrixA: GlyphRow[];
  matrixB: GlyphRow[];
}

export const DecompositionMatrix: React.FC<DecompositionMatrixProps> = ({
  matrixA,
  matrixB,
}) => {
  const renderTable = (rows: GlyphRow[], title: string, isGold: boolean) => (
    <div className={styles.tableWrapper}>
      <div className={styles.tableHeader}>
        <div
          className={styles.titleBadge}
          data-color={isGold ? "gold" : "cyan"}
        >
          {isGold ? "PERSON A" : "PERSON B"}
        </div>
        <h4>{title}</h4>
      </div>

      <table className={styles.glyphTable}>
        <thead>
          <tr>
            <th>#</th>
            <th>PHONEME / LETTER</th>
            <th>VIBRATIONAL GLYPH</th>
            <th>CHALDEAN VALUE</th>
            <th>PLANETARY RESONANCE</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td className={styles.phoneme}>{row.phoneme}</td>
              <td className={styles.glyph}>{row.glyph}</td>
              <td className={isGold ? styles.valueGold : styles.valueCyan}>
                {row.chaldeanValue}
              </td>
              <td className={styles.planet}>{row.planetaryResonance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className={styles.matrixContainer}>
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <Hash size={16} />
          <h3>Chaldean Phoneme-to-Glyph Decomposition Matrix</h3>
        </div>
        <p className={styles.subtitle}>
          Visualizing the exact numerical conversion and planetary resonance for
          every individual character/phoneme in the provided names.
        </p>
      </div>

      <div className={styles.tablesContainer}>
        {renderTable(matrixA, "First Subject: Onomastic Breakdown", true)}
        {renderTable(matrixB, "Second Subject: Onomastic Breakdown", false)}
      </div>

      <div className={styles.infoBox}>
        <div className={styles.iconWrap}>
          <Hash size={14} />
        </div>
        <div className={styles.infoContent}>
          <h5>Herbal Resonance Index & Node Values (1-9 = SUN - MARS)</h5>
          <p>
            The numbers derived correspond directly to Vedic planetary
            vibrations, mapping sound frequency to cosmic bodies.
          </p>
        </div>
      </div>
    </div>
  );
};

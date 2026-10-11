import React from "react";
import { ResonanceTriadItem } from "../../types/mulank-calculator.types";
import { AlertCircle } from "lucide-react";
import styles from "./core-resonance-triad.module.scss";

interface CoreResonanceTriadProps {
  triad: {
    items: ResonanceTriadItem[];
    synthesis: string;
  };
}

export const CoreResonanceTriad: React.FC<CoreResonanceTriadProps> = ({
  triad,
}) => {
  return (
    <div className={styles.triadContainer}>
      <div className={styles.visualColumn}>
        <div className={styles.svgWrapper}>
          <svg viewBox="0 0 300 300" className={styles.triadSvg}>
            {/* Outer Decagon/Rings */}
            <circle
              cx="150"
              cy="150"
              r="140"
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
            />
            <circle
              cx="150"
              cy="150"
              r="120"
              fill="none"
              stroke="rgba(72, 229, 194, 0.2)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <circle
              cx="150"
              cy="150"
              r="80"
              fill="none"
              stroke="rgba(255, 215, 0, 0.3)"
              strokeWidth="1"
            />

            {/* Center Core */}
            <circle
              cx="150"
              cy="150"
              r="60"
              fill="rgba(0,0,0,0.6)"
              stroke="#FFD700"
              strokeWidth="2"
            />

            <text
              x="150"
              y="145"
              textAnchor="middle"
              className={styles.centerLabel}
            >
              MULANK
            </text>
            <text
              x="150"
              y="170"
              textAnchor="middle"
              className={styles.centerNumber}
            >
              9
            </text>

            {/* Orbiting Nodes */}
            <circle cx="150" cy="30" r="4" fill="#48e5c2" />
            <circle cx="254" cy="210" r="4" fill="#48e5c2" />
            <circle cx="46" cy="210" r="4" fill="#48e5c2" />

            {/* Triad Lines */}
            <line
              x1="150"
              y1="30"
              x2="254"
              y2="210"
              stroke="rgba(72, 229, 194, 0.3)"
              strokeWidth="1"
            />
            <line
              x1="254"
              y1="210"
              x2="46"
              y2="210"
              stroke="rgba(72, 229, 194, 0.3)"
              strokeWidth="1"
            />
            <line
              x1="46"
              y1="210"
              x2="150"
              y2="30"
              stroke="rgba(72, 229, 194, 0.3)"
              strokeWidth="1"
            />
          </svg>

          <div className={styles.labelsOverlay}>
            <div className={styles.tLabel}>
              <span>ELEMENT TATTVA</span>
              <br />
              <span className={styles.val}>Agni (Fire)</span>
            </div>
            <div className={styles.bLeftLabel}>
              <span>RULING PLANET</span>
              <br />
              <span className={styles.valCyan}>Mangala</span>
            </div>
            <div className={styles.bRightLabel}>
              <span>CHAKRA CORRELATION</span>
              <br />
              <span className={styles.valGold}>Swadhisthana</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.contentColumn}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>NUMEROLOGICAL SYNASTRY</span>
          <div className={styles.titleRow}>
            <h3>Core Resonance Triad</h3>
            <span className={styles.badgeCyan}>D3 Navamsha Intersection</span>
          </div>
        </div>

        <div className={styles.cardsRow}>
          {triad.items.map((item, idx) => (
            <div key={idx} className={styles.triadCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cTitle}>{item.title}</span>
                <span className={styles.cBadge}>T{idx + 1} / A</span>
              </div>
              <div className={styles.cValue}>{item.value}</div>
              <p className={styles.cDesc}>{item.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.synthesisBox}>
          <div className={styles.sHeader}>
            <AlertCircle size={14} className={styles.iconGold} />
            <span>BASE-TRIAD KARMIC SYNTHESIS (1-9 SCALE DECODING)</span>
          </div>
          <p className={styles.sText}>{triad.synthesis}</p>
          <div className={styles.sFooter}>
            <span>
              KARMIC SIGNATURE:{" "}
              <span className={styles.cyanText}>Pure Kuja</span>
            </span>
            <span>
              INTENSITY RATING:{" "}
              <span className={styles.redText}>High (9/9)</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

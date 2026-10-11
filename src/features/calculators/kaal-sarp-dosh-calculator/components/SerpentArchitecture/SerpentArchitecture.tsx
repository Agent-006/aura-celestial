import React from "react";
import { CircleDot, Disc, Activity } from "lucide-react";
import { SerpentArchitectureStats } from "../../types/kaal-sarp.types";
import styles from "./serpent-architecture.module.scss";

interface SerpentArchitectureProps {
  stats: SerpentArchitectureStats;
}

export const SerpentArchitecture: React.FC<SerpentArchitectureProps> = ({
  stats,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.label}>
            ENCASEMENT PERCENTAGE{" "}
            <CircleDot size={14} className={styles.icon} />
          </div>
          <div className={styles.statValue}>{stats.encasementPercentage}</div>
          <div className={styles.statDesc} style={{ color: "#FF0000" }}>
            {stats.encasementLabel}
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.label}>
            ORBITAL DIRECTIONALITY{" "}
            <Disc
              size={14}
              className={styles.icon}
              style={{ color: "#FFD700" }}
            />
          </div>
          <div className={`${styles.statValue} ${styles.cyan}`}>
            {stats.orbitalDirectionality}
          </div>
          <div className={styles.statDesc}>{stats.orbitalLabel}</div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.label}>
            NODAL AXIS DISTANCE <Activity size={14} className={styles.icon} />
          </div>
          <div className={styles.statValue}>{stats.nodalAxisDistance}</div>
          <div className={styles.statDesc}>{stats.nodalLabel}</div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.label}>
            DOSHA SEVERITY METRIC{" "}
            <CircleDot
              size={14}
              className={styles.icon}
              style={{ color: "#FFD700" }}
            />
          </div>
          <div className={`${styles.statValue} ${styles.cyan}`}>
            {stats.doshaSeverityMetric}
          </div>
          <div className={styles.statDesc}>{stats.doshaLabel}</div>
        </div>
      </div>

      <div className={styles.graphSection}>
        <div className={styles.header}>
          <div>
            <div className={styles.eyebrow}>ORBITAL TRAP & NATIVE MAPPING</div>
            <h2 className={styles.title}>
              The Serpent&apos;s Coil: Hemispheric Trap Architecture
            </h2>
          </div>
          <div className={styles.legend}>
            <div className={styles.item}>
              <span className={`${styles.dot} ${styles.gold}`}></span> Lunar
              Ascending (Rahu) Axis
            </div>
            <div className={styles.item}>
              <span className={`${styles.dot} ${styles.cyan}`}></span>{" "}
              Descending (Ketu) Axis
            </div>
          </div>
        </div>

        <div className={styles.graphVisual}>
          <div className={styles.curve}></div>
          <div className={styles.placeholderText}>
            [Interactive SVG Orbital Graph Rendered Here]
          </div>
        </div>

        <div className={styles.graphFooter}>
          <span className={styles.highlight}>
            ◓ Topographic Alignment - Hemispheric
          </span>
          <span>◒ Ascendant Axis Sync - Internal Matrix</span>
          <span className={styles.highlight}>
            ◐ Absolute Encasement: 1st House - 7th House
          </span>
        </div>
      </div>
    </div>
  );
};

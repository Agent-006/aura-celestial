import React from "react";
import { IshtaDevataStats as StatsType } from "../../types/ishta-devata.types";
import { Disc, Zap, Target, BookOpen } from "lucide-react";
import styles from "./ishta-devata-stats.module.scss";

interface IshtaDevataStatsProps {
  stats: StatsType;
}

export const IshtaDevataStats: React.FC<IshtaDevataStatsProps> = ({
  stats,
}) => {
  return (
    <div className={styles.statsContainer}>
      <div className={styles.statCard}>
        <div className={styles.cardHeader}>
          <span>ATMAKARAKA (SOUL PLANET)</span>
          <Disc size={14} className={styles.iconCyan} />
        </div>
        <div className={styles.mainValue}>{stats.atmakaraka}</div>
        <div className={styles.subValue}>
          <span className={styles.label}>SIGN</span> {stats.akSign}
        </div>
      </div>

      <div className={styles.statCard}>
        <div className={styles.cardHeader}>
          <span>KARAKAMSHA LAGNA</span>
          <Target size={14} className={styles.iconGold} />
        </div>
        <div className={styles.mainValue}>{stats.karakamshaLagna}</div>
        <div className={styles.subValue}>
          <span className={styles.label}>PLACEMENT</span> {stats.klHouse}
        </div>
      </div>

      <div className={styles.statCard}>
        <div className={styles.cardHeader}>
          <span>12TH HOUSE FROM AK</span>
          <Zap size={14} className={styles.iconCyan} />
        </div>
        <div className={styles.mainValue}>{stats.twelfthFromAk}</div>
        <div className={styles.subValue}>
          <span className={styles.label}>NATURE</span> {stats.twelfthSign}
        </div>
      </div>

      <div className={styles.statCard}>
        <div className={styles.cardHeader}>
          <span>12TH LORD / PLANET</span>
          <BookOpen size={14} className={styles.iconGold} />
        </div>
        <div className={styles.mainValue}>{stats.twelfthLord}</div>
        <div className={styles.subValue}>
          <span className={styles.label}>ROLE</span> {stats.lordRole}
        </div>
      </div>
    </div>
  );
};

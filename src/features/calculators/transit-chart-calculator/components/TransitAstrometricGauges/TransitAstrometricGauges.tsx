import React from "react";
import { AstrometricGauges } from "../../types/transit.types";
import { Activity, Layers, Disc, Focus } from "lucide-react";
import styles from "./transit-astrometric-gauges.module.scss";

interface TransitAstrometricGaugesProps {
  gauges: AstrometricGauges;
}

export const TransitAstrometricGauges: React.FC<TransitAstrometricGaugesProps> = ({ gauges }) => {
  return (
    <div className={styles.gaugesContainer}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <Activity size={16} /> Transit Resonance & Astrometric Gauges
        </div>
        <div className={styles.subtitle}>REAL-TIME EPHEMERIS SYNC</div>
      </div>
      
      <div className={styles.gaugesGrid}>
        <div className={styles.gaugeCard}>
          <div className={styles.cardHeader}>
            <span>OVERALL TRANSIT HARMONICS</span>
            <Activity size={14} className={styles.iconCyan} />
          </div>
          <div className={styles.valueGroup}>
            <span className={styles.valCyan}>{gauges.overallHarmonics.split('%')[0]}</span>
            <span className={styles.unit}>% / 100</span>
          </div>
          <div className={styles.barWrap}><div className={styles.barCyan} style={{width: gauges.overallHarmonics}}></div></div>
          <p className={styles.subtext}>{gauges.overallSubtext}</p>
        </div>

        <div className={styles.gaugeCard}>
          <div className={styles.cardHeader}>
            <span>ASHTAKAVARGA TRANSIT BINDU</span>
            <Layers size={14} className={styles.iconGold} />
          </div>
          <div className={styles.valueGroup}>
            <span className={styles.valGold}>{gauges.ashtakavargaBindu}</span>
            <span className={styles.unit}>/ 56 BINDU (MAX)</span>
          </div>
          <div className={styles.barWrap}><div className={styles.barGold} style={{width: `${(parseInt(gauges.ashtakavargaBindu)/56)*100}%`}}></div></div>
          <p className={styles.subtext}>{gauges.ashtakavargaSubtext}</p>
        </div>

        <div className={styles.gaugeCard}>
          <div className={styles.cardHeader}>
            <span>TARA BALA (STAR STRENGTH)</span>
            <Disc size={14} className={styles.iconCyan} />
          </div>
          <div className={styles.valueGroup}>
            <span className={styles.valWhite}>{gauges.taraBala.split(' ')[0]}</span>
            <span className={styles.unitCyan}>/ 27 NAKSHATRA</span>
          </div>
          <div className={styles.barWrap}><div className={styles.barCyan} style={{width: `${(parseInt(gauges.taraBala.split(' ')[0])/27)*100}%`}}></div></div>
          <p className={styles.subtext}>{gauges.taraBalaSubtext}</p>
        </div>

        <div className={styles.gaugeCard}>
          <div className={styles.cardHeader}>
            <span>CRITICAL TRANSIT NODE</span>
            <Focus size={14} className={styles.iconGold} />
          </div>
          <div className={styles.valueGroup}>
            <span className={styles.valText}>{gauges.criticalNode}</span>
          </div>
          <div className={styles.barWrap}><div className={styles.barGold} style={{width: '100%'}}></div></div>
          <p className={styles.subtext}>{gauges.criticalNodeSubtext}</p>
        </div>
      </div>
    </div>
  );
};

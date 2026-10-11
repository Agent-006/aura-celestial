import React from "react";
import { CircleDot, Activity, Shield, Navigation } from "lucide-react";
import { LuckyVehicleTelemetryData } from "../../types/lucky-vehicle.types";
import styles from "./vehicle-astrometric-resonance.module.scss";

interface VehicleAstrometricResonanceProps {
  data: LuckyVehicleTelemetryData;
}

export const VehicleAstrometricResonance: React.FC<VehicleAstrometricResonanceProps> = ({ data }) => {
  const { breakdown, stats } = data;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <span className={styles.indicatorCyan}></span>
          PHASE 02: ASTROMETRIC VEHICLE NUMBER RESONANCE
        </div>
        <div className={styles.step}>VEHICLE RESONANCE EXTRACTED</div>
      </div>

      <div className={styles.plateDisplay}>
        <div className={styles.plateBox}>
          <div className={styles.indBox}>
            <div className={styles.chakra}><CircleDot size={20} /></div>
            <span>IND</span>
          </div>
          
          <div className={styles.plateSection}>
            <span className={styles.value}>{breakdown.state}</span>
            <span className={styles.label}>State Code</span>
          </div>
          
          <div className={styles.plateSection}>
            <span className={styles.value}>{breakdown.rto}</span>
            <span className={styles.label}>RTO Series</span>
          </div>
          
          <div className={styles.dot}>.</div>
          
          <div className={styles.plateSection}>
            <span className={styles.value}>{breakdown.series}</span>
            <span className={styles.label}>Series</span>
          </div>
          
          <div className={styles.dot}>.</div>
          
          <div className={styles.plateSection}>
            <span className={`${styles.value} ${styles.highlight}`}>{breakdown.coreNumber}</span>
            <span className={styles.label}>Core Number String</span>
          </div>
        </div>
      </div>

      <div className={styles.summaryRow}>
        <div className={styles.summaryCol}>
          <div className={styles.label}>Compound Registration Breakdown</div>
          <div className={styles.value}>
            {breakdown.coreNumber.split('').join(' + ')} = {breakdown.totalSum} = {breakdown.reducedSum}
          </div>
        </div>
        <div className={styles.summaryCol}>
          <div className={styles.label}>Active Vibrational Identity</div>
          <div className={styles.value}>
            Vehicle Vector = Number {breakdown.reducedSum}
          </div>
        </div>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <span className={styles.label}>VEHICLE VIBRATION</span>
            <Activity size={14} className={styles.icon} />
          </div>
          <div className={styles.statValue}>{stats.vehicleVibration}</div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${stats.vehicleVibration}%` }}></div>
          </div>
          <div className={styles.statDesc}>Dominant resonance structure</div>
        </div>
        
        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <span className={styles.label}>CONCORDANCE RATE</span>
            <Activity size={14} className={styles.icon} />
          </div>
          <div className={styles.statValue} style={{ color: '#48e5c2' }}>{stats.concordanceRate}</div>
          <div className={`${styles.progressBar} ${styles.cyan}`}>
            <div className={styles.progressFill} style={{ width: stats.concordanceRate }}></div>
          </div>
          <div className={styles.statDesc}>Core Numerology frequency</div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <span className={styles.label}>KARMIC SHIELD</span>
            <Shield size={14} className={styles.icon} />
          </div>
          <div className={styles.statValue}>{stats.karmicShield}</div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: stats.karmicShield }}></div>
          </div>
          <div className={styles.statDesc}>Accident karmic Repel</div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <span className={styles.label}>SPATIAL VELOCITY</span>
            <Navigation size={14} className={styles.icon} />
          </div>
          <div className={styles.statValue}>{stats.spatialVelocity}</div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: '100%' }}></div>
          </div>
          <div className={styles.statDesc}>Aerodynamic/structural orientation</div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { EnergyPlane } from "../../types/lo-shu.types";
import styles from "./energy-planes.module.scss";

interface EnergyPlanesProps {
  planes: EnergyPlane[];
}

export const EnergyPlanes: React.FC<EnergyPlanesProps> = ({ planes }) => {
  return (
    <div className={styles.planesWrapper}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>LO SHU CONFIGURATION</div>
        <h2>The 8 Sacred Energy Planes of Lo Shu</h2>
        <p>Horizontal, Vertical, and Diagonal combinations of numbers cause specific sub-arcsecond traits.</p>
      </div>

      <div className={styles.planesGrid}>
        {planes.map((plane) => (
          <div 
            key={plane.id} 
            className={`${styles.planeCard} ${plane.isActive ? styles.active : ''} ${plane.isWarning ? styles.warning : ''}`}
          >
            <div className={styles.cardHeader}>
              <span className={styles.type}>{plane.type}</span>
              <span className={styles.statusLabel}>{plane.statusLabel}</span>
            </div>
            
            <h3 className={styles.title}>{plane.title}</h3>
            <div className={styles.digits}>{plane.digits}</div>
            
            <p className={styles.description}>{plane.description}</p>
            
            <div className={styles.cardFooter}>
              <span>{plane.isActive ? 'ACTIVE LINK' : 'DORMANT LINK'}</span>
              <button className={styles.detailsBtn}>View Blueprint</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

import React from 'react';
import { Download, Phone, Sparkles, Gem } from 'lucide-react';
import { VedicSolarRemedies } from '../../types/sun-sign.types';
import styles from './solar-remedies.module.scss';

interface SolarRemediesProps {
  remedies: VedicSolarRemedies;
}

export const SolarRemedies: React.FC<SolarRemediesProps> = ({ remedies }) => {
  return (
    <div className={styles.remediesContainer}>
      <div className={styles.remediesCard}>
        <div className={styles.cardHeader}>
          <span className={styles.sectionLabel}>SURYA DHARMA // UPAYA PROTOCOLS</span>
          <span className={styles.accent}>VEDIC SOLAR REMEDIES & VITALITY MATRIX</span>
        </div>
        
        <h3 className={styles.title}>Vedic Solar Remedies & Vitality Matrix</h3>

        <div className={styles.remediesGrid}>
          <div className={styles.remedyItem}>
            <span className={styles.itemLabel}><Sparkles size={14} /> SURYA MANTRA</span>
            <span className={styles.itemValue}>{remedies.suryaMantra.mantra}</span>
            <p className={styles.itemDesc}>{remedies.suryaMantra.description}</p>
          </div>

          <div className={styles.remedyItem}>
            <span className={styles.itemLabel}><Gem size={14} /> PRIMARY GEMSTONE</span>
            <span className={styles.itemValue}>{remedies.gemstone.name}</span>
            <p className={styles.itemDesc}>{remedies.gemstone.description}</p>
          </div>
        </div>

        <div className={styles.elementsList}>
          <div className={styles.elementRow}>
            <span className={styles.elementLabel}>Color:</span>
            <span className={styles.elementValue}>{remedies.astrologicalElements.color}</span>
          </div>
          <div className={styles.elementRow}>
            <span className={styles.elementLabel}>Metal:</span>
            <span className={styles.elementValue}>{remedies.astrologicalElements.metal}</span>
          </div>
          <div className={styles.elementRow}>
            <span className={styles.elementLabel}>Deity:</span>
            <span className={styles.elementValue}>{remedies.astrologicalElements.deity}</span>
          </div>
        </div>

        <p className={styles.footerNote}>
          The celestial Sun dictates the highest degree of soul destiny (Atma Karaka), vitality, and Pranic momentum. Incorporating the Vedic Solar Upayas unlocks profound health and absolute career authority.
        </p>
      </div>

      <div className={styles.actionsCard}>
        <div className={styles.cardHeader}>
          <span className={styles.sectionLabel}>ARCHIVE / ACTION</span>
        </div>
        
        <h3 className={styles.title}>Consult & Export</h3>
        
        <p className={styles.actionDesc}>
          Save down your psychological / dharmic Sun chart, or seek higher karmic guidance from a verified master in Vedic Astrologer.
        </p>

        <div className={styles.actionPoints}>
          <div className={styles.point}>
            <Sparkles className={styles.pointIcon} size={16} />
            <div className={styles.pointText}>
              <strong>100% Guaranteed Chart</strong>
              Accuracy and calculations.
            </div>
          </div>
          <div className={styles.point}>
            <Phone className={styles.pointIcon} size={16} />
            <div className={styles.pointText}>
              <strong>720+ Years Verified Lineage</strong>
              Karmic readings from the source.
            </div>
          </div>
        </div>

        <button className={styles.btnSecondary}>
          <Download size={16} /> Export Solar Dossier (PDF)
        </button>
        
        <button className={styles.btnPrimary}>
          <Phone size={16} /> Consult Vedic Astrologer
        </button>
      </div>
    </div>
  );
};

import React from 'react';
import { Sun, Compass } from 'lucide-react';
import { TropicalSunSign, SiderealSuryaRashi } from '../../types/sun-sign.types';
import styles from './dual-sign-results.module.scss';

interface DualSignResultsProps {
  tropical: TropicalSunSign;
  sidereal: SiderealSuryaRashi;
}

export const DualSignResults: React.FC<DualSignResultsProps> = ({ tropical, sidereal }) => {
  return (
    <div className={styles.resultsGrid}>
      {/* TROPICAL SUN SIGN CARD */}
      <div className={`${styles.resultCard} ${styles.tropical}`}>
        <div className={styles.cardHeader}>
          <span className={styles.cardType}>WESTERN SELECTION // TROPICAL</span>
          <div className={`${styles.iconWrapper} ${styles.tropicalIcon}`}>
            <Compass size={20} />
          </div>
        </div>

        <div className={styles.signDisplay}>
          <div className={styles.cardType}>COMPUTED SOLAR APEX</div>
          <h3 className={`${styles.signTitle} ${styles.tropicalTitle}`}>{tropical.signName}</h3>
          <div className={styles.signDegrees}>
            <span>{tropical.degrees}</span>
            <span className={`${styles.elementBadge} ${styles.tropicalBadge}`}>{tropical.element}</span>
          </div>
        </div>

        <div className={styles.attributesGrid}>
          <div className={styles.attribute}>
            <span className={styles.attrLabel}>PLANETARY RULER</span>
            <span className={styles.attrValue}>{tropical.planetaryRuler.name} ({tropical.planetaryRuler.sanskritName})</span>
            <span className={styles.attrSub}>Sun Dispositor</span>
          </div>
          <div className={styles.attribute}>
            <span className={styles.attrLabel}>SOLAR HOUSE</span>
            <span className={styles.attrValue}>{tropical.houseArchetype}</span>
            <span className={styles.attrSub}>Angular / Active</span>
          </div>
          <div className={styles.attribute}>
            <span className={styles.attrLabel}>SEASONAL PHASE</span>
            <span className={styles.attrValue}>{tropical.seasonalPhase}</span>
            <span className={styles.attrSub}>Sunlight Ascendant</span>
          </div>
          <div className={styles.attribute}>
            <span className={styles.attrLabel}>PSYCHOLOGICAL ARCHETYPE</span>
            <span className={styles.attrValue}>{tropical.psychologicalArchetype}</span>
            <span className={styles.attrSub}>Behavioral Vector</span>
          </div>
        </div>

        <div className={styles.profileSection}>
          <span className={styles.profileLabel}>PSYCHOLOGICAL CONSTELLATION PROFILE</span>
          <p className={styles.profileText}>{tropical.profileText}</p>
        </div>
      </div>

      {/* SIDEREAL SURYA RASHI CARD */}
      <div className={`${styles.resultCard} ${styles.sidereal}`}>
        <div className={styles.cardHeader}>
          <span className={styles.cardType}>VEDIC EASTERN SELECTION // SIDEREAL</span>
          <div className={`${styles.iconWrapper} ${styles.siderealIcon}`}>
            <Sun size={20} />
          </div>
        </div>

        <div className={styles.signDisplay}>
          <div className={styles.cardType}>FIXED STELLAR CONSTELLATION</div>
          <h3 className={`${styles.signTitle} ${styles.siderealTitle}`}>{sidereal.signName}</h3>
          <div className={styles.signDegrees}>
            <span>{sidereal.degrees}</span>
            <span className={`${styles.elementBadge} ${styles.siderealBadge}`}>{sidereal.element}</span>
          </div>
        </div>

        <div className={styles.attributesGrid}>
          <div className={styles.attribute}>
            <span className={styles.attrLabel}>NAKSHATRA & PADA</span>
            <span className={styles.attrValue}>{sidereal.nakshatra.name} (Pada {sidereal.nakshatra.pada})</span>
            <span className={styles.attrSub}>Ketu Governed / Dharma</span>
          </div>
          <div className={styles.attribute}>
            <span className={styles.attrLabel}>RASHI LORD (MASTER)</span>
            <span className={styles.attrValue}>{sidereal.planetaryLord.sanskritName} ({sidereal.planetaryLord.name})</span>
            <span className={styles.attrSub}>Agni / Tattva Action</span>
          </div>
          <div className={styles.attribute}>
            <span className={styles.attrLabel}>SOLAR SHODASH VARGA</span>
            <span className={styles.attrValue}>{sidereal.solarShodashVarga}</span>
            <span className={styles.attrSub}>Bala Avastha / Child State</span>
          </div>
          <div className={styles.attribute}>
            <span className={styles.attrLabel}>ATMAKARAKA DEGREE</span>
            <span className={styles.attrValue}>{sidereal.atmakarakaDegree}</span>
            <span className={styles.attrSub}>Soul Dharma</span>
          </div>
        </div>

        <div className={styles.profileSection}>
          <span className={styles.profileLabel}>SOUL LEVEL KARMIC ATTRIBUTES</span>
          <p className={styles.profileText}>{sidereal.profileText}</p>
        </div>
      </div>
    </div>
  );
};

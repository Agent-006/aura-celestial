import Link from "next/link";
import { Atom } from "lucide-react";
import styles from "./FooterBrand.module.scss";

export const FooterBrand = () => {
  return (
    <div className={styles.brandSide}>
      <div className={styles.logoHeader}>
        <div className={styles.logoBox}>
          <Atom size={24} className={styles.logoIcon} />
        </div>
        <div>
          <div className={styles.brandTitle}>
            JYOTISHAASTRO <span className={styles.badgeSidereal}>SIDEREAL</span>
          </div>
          <div className={styles.brandSub}>
            <Link href="https://jyotishaastro.com">jyotishaastro.com</Link> •
            Astronomical Horology Core
          </div>
        </div>
      </div>
      <p className={styles.brandDesc}>
        Bridging 5,000 years of classical Vedic Parashari & Jaimini principles
        with modern <span className={styles.highlight}>NASA JPL DE441</span>{" "}
        sub-arcsecond planetary kinematics and IAU SOFA algorithms.
      </p>
      <div className={styles.statusBadges}>
        <div className={styles.statusTag}>
          <span className={styles.dot}></span> AYANAMSHA:{" "}
          <span className={styles.tagValue}>
            Lahiri 24&deg; 12&lsquo; 40&quot;
          </span>
        </div>
        <div className={styles.statusTag}>
          PRECISION: <span className={styles.tagValueGreen}>Sub-Arcsecond</span>
        </div>
      </div>
    </div>
  );
};

import { Atom } from "lucide-react";
import styles from "./copyright-section.module.scss";

export function CopyrightSection() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.copyrightBar}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Atom className={styles.icon} size={20} strokeWidth={1.5} />
          <span className={styles.brandName}>Aura Celestial</span>
        </div>
        <div className={styles.text}>
          © {currentYear} Aura Celestial Instruments Inc. All rights reserved.
          3D Ephemeris Trajectory Edition.
        </div>
      </div>
    </div>
  );
}

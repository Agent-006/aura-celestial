import { Lock } from "lucide-react";
import styles from "./FooterTelemetry.module.scss";

export const FooterTelemetry = () => {
  return (
    <div className={styles.telemetryBar}>
      <div className={styles.telemetryData}>
        <span className={styles.dotGreen}></span> OBSERVATORY{" "}
        <span className={styles.textGreen}>ONLINE</span>
        <span className={styles.divider}>|</span> NODE: DEL-77E
        <span className={styles.divider}>|</span> GEODETIC: 28° 36&apos; N, 77°
        13&apos; E<span className={styles.divider}>|</span> EPOCH: J2000.0
        Sidereal
      </div>
      <div className={styles.sslBadge}>
        jyotishaastro.com <Lock size={14} className={styles.lockIcon} />
      </div>
    </div>
  );
};

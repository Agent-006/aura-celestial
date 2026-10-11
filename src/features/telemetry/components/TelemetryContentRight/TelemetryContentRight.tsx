import { EphemerisProfile } from "../EphemerisProfile/EphemerisProfile";
import { Button } from "@/components/ui/Button/Button";
import styles from "../TelemetrySection/telemetry-section.module.scss";
import localStyles from "./telemetry-content-right.module.scss";

export function TelemetryContentRight() {
  return (
    <div className={styles.rightColumn}>
      <div className={localStyles.container}>
        <EphemerisProfile />
        <Button variant="outline" fullWidth className={localStyles.actionButton}>
          UNLOCK FULL ASTROLOGICAL REPORT
        </Button>
      </div>
    </div>
  );
}

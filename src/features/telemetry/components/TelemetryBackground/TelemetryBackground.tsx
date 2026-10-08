import { SectionSeparator } from "@/components/ui/SectionSeparator/SectionSeparator";
import { StarfieldCanvas } from "@/components/ui/StarfieldCanvas/StarfieldCanvas";
import styles from "./telemetry-background.module.scss";

export function TelemetryBackground() {
  return (
    <div className={styles.background}>
      <SectionSeparator position="top" />

      {/* Subtle ambient glows for the telemetry section */}
      <div className={styles.glowTopLeft} />
      <div className={styles.glowBottomRight} />

      <StarfieldCanvas count={150} />

      <SectionSeparator position="bottom" />
    </div>
  );
}

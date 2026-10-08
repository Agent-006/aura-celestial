import styles from "./trust-background.module.scss";
import { StarfieldCanvas } from "@/components/ui/StarfieldCanvas/StarfieldCanvas";
import { SectionSeparator } from "@/components/ui/SectionSeparator/SectionSeparator";

export function TrustBackground() {
  return (
    <div className={styles.background}>
      <SectionSeparator position="top" />

      <div className={styles.nebulaLeft} />
      <div className={styles.nebulaRight} />
      <div className={styles.glowCenter} />
      <StarfieldCanvas count={150} />

      <SectionSeparator position="bottom" />
    </div>
  );
}

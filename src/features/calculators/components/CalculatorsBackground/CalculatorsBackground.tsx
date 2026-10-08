import { SectionSeparator } from "@/components/ui/SectionSeparator/SectionSeparator";
import { StarfieldCanvas } from "@/components/ui/StarfieldCanvas/StarfieldCanvas";
import styles from "./calculators-background.module.scss";

export function CalculatorsBackground() {
  return (
    <div className={styles.background}>
      <SectionSeparator position="top" />

      {/* Subtle ambient glows for the calculators section */}
      <div className={styles.glowTopRight} />
      <div className={styles.glowBottomLeft} />

      <StarfieldCanvas count={100} />

      <SectionSeparator position="bottom" />
    </div>
  );
}

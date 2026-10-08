import { StarfieldCanvas } from "@/components/ui/StarfieldCanvas/StarfieldCanvas";
import { SectionSeparator } from "@/components/ui/SectionSeparator/SectionSeparator";
import styles from "./horoscopes-background.module.scss";

export function HoroscopesBackground() {
  return (
    <div className={styles.background}>
      <SectionSeparator position="top" />

      {/* Subtle ambient glows for the horoscope section */}
      <div className={styles.glowTopRight} />
      <div className={styles.glowBottomLeft} />

      <StarfieldCanvas count={120} />

      <SectionSeparator position="bottom" />
    </div>
  );
}

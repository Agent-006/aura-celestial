import { StarfieldCanvas } from "@/components/ui/StarfieldCanvas/StarfieldCanvas";
import { SectionSeparator } from "@/components/ui/SectionSeparator/SectionSeparator";
import styles from "./astrologers-background.module.scss";

export function AstrologersBackground() {
  return (
    <div className={styles.backgroundWrapper}>
      <div className={styles.topSeparator}>
        <SectionSeparator />
      </div>

      <StarfieldCanvas />

      {/* Very faint, large, elegant radial glow behind the astrologers */}
      <div className={styles.glowOverlay} />

      <div className={styles.bottomSeparator}>
        <SectionSeparator />
      </div>
    </div>
  );
}

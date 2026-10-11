import styles from "./cta-section.module.scss";
import { CTAContent } from "../CTAContent/CTAContent";
import { CTAButtonGroup } from "../CTAButtonGroup/CTAButtonGroup";
import { AstrologyFrame } from "@/components/ui/AstrologyFrame/AstrologyFrame";
import { ChakraCanvas } from "../ChakraCanvas/ChakraCanvas";
import { StarfieldCanvas } from "@/components/ui/StarfieldCanvas/StarfieldCanvas";

export function CTASection() {
  return (
    <section className={styles.section}>
      {/* Dynamic Cosmic Chakra Background */}
      <StarfieldCanvas cluster="bottom-left" count={80} />
      <ChakraCanvas />

      <div className={styles.container}>
        <div className={styles.ctaBox}>
          <AstrologyFrame variant="1">
            <div className={styles.innerContent}>
              <CTAContent />
              <CTAButtonGroup />
            </div>
          </AstrologyFrame>
        </div>
      </div>
      
      {/* Blend seamlessly into the footer below */}
      <div className={styles.bottomFade} />
    </section>
  );
}

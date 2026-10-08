import styles from "./cta-section.module.scss";
import { CTAContent } from "../CTAContent/CTAContent";
import { CTAButtonGroup } from "../CTAButtonGroup/CTAButtonGroup";
import { AstrologyFrame } from "@/components/ui/AstrologyFrame/AstrologyFrame";
import { ChakraCanvas } from "../ChakraCanvas/ChakraCanvas";

export function CTASection() {
  return (
    <section className={styles.section}>
      {/* Dynamic Cosmic Chakra Background */}
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
    </section>
  );
}

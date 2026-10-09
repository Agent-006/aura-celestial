import { FAQ_DATA } from "../../data/faqData";
import { FaqAccordion } from "../FaqAccordion/FaqAccordion";
import { SectionSeparator } from "@/components/ui/SectionSeparator/SectionSeparator";
import { StarfieldCanvas } from "@/components/ui/StarfieldCanvas/StarfieldCanvas";
import styles from "./faq-section.module.scss";

export function FaqSection() {
  return (
    <section className={styles.section}>
      <div className={styles.topSeparator}>
        <SectionSeparator position="top" />
      </div>
      <StarfieldCanvas className={styles.starfield} />
      <div className={styles.glowOverlay} />

      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <span className={styles.eyebrow}>QUESTIONS, ANSWERED</span>
          <h2 className={styles.title}>
            First time?
            <br />
            <span className={styles.highlight}>Read</span> these
            <br />
            first.
          </h2>
        </div>

        <div className={styles.rightColumn}>
          <FaqAccordion items={FAQ_DATA} />
        </div>
      </div>

      <div className={styles.bottomSeparator}>
        <SectionSeparator position="bottom" />
      </div>
    </section>
  );
}

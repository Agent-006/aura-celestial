import styles from "./cta-section.module.scss";

export function CTASection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.ctaBox}>
          <div className={styles.content}>
            <span className={styles.eyebrow}>— INITIATE YOUR ALIGNMENT —</span>
            <h2 className={styles.title}>Align Your Path With the Universe</h2>
            <p className={styles.description}>
              Your first 5 minutes with any verified Acharya are completely
              complimentary.
            </p>
          </div>
          <div className={styles.buttonGroup}>
            <button className={styles.primaryBtn}>
              CLAIM 5 FREE MINUTES NOW
            </button>
            <button className={styles.secondaryBtn}>
              GENERATE FREE JANAM KUNDLI
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import styles from "./newsletter-cta.module.scss";

export const NewsletterCTA = () => {
  return (
    <div className={styles.newsletterCard}>
      <div className={styles.content}>
        <div className={styles.preTitle}>THE BI-WEEKLY</div>
        <h2 className={styles.title}>Sidereal Ephemeris Dispatch</h2>
        <p className={styles.description}>
          Receive our curated mathematical analyses of upcoming transits,
          eclipses, and macroscopic nodal shifts before they materialize in the
          news cycle.
        </p>
      </div>

      <div className={styles.formContainer}>
        <div className={styles.preferenceGroup}>
          <span className={styles.label}>DISPATCH PREFERENCE:</span>
          <label className={styles.radioLabel}>
            <input type="radio" name="preference" defaultChecked />
            <span className={styles.radioCustom}></span>
            Macro (Mundane/Global)
          </label>
          <label className={styles.radioLabel}>
            <input type="radio" name="preference" />
            <span className={styles.radioCustom}></span>
            Micro (Individual Charts)
          </label>
        </div>

        <form className={styles.form}>
          <input
            type="email"
            placeholder="Enter institutional or personal email..."
            className={styles.emailInput}
          />
          <button type="button" className={styles.submitBtn}>
            INITIATE RECEIPT ➔
          </button>
        </form>

        <div className={styles.privacy}>
          Encrypted Data Protocol • Opt-out anytime. We do not distribute your
          coordinates.
        </div>
      </div>
    </div>
  );
};

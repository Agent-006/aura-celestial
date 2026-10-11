import React from "react";
import styles from "./astrologer-summary-card.module.scss";

export function AstrologersSummaryCard() {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3>Canonical Astrologer Paragraph</h3>
      </div>
      <p className={styles.paragraph}>
        The synastry vectors between Scorpio and Capricorn reveal a highly
        complementary elemental matrix (Water & Earth). Venus in Libra aspects
        Mars directly, triggering immediate magnetic attraction, while the
        Dashakoota analysis confirms deep karmic resonance. Both entities are
        calibrated for a highly stable and emotionally profound union.
      </p>
    </div>
  );
}

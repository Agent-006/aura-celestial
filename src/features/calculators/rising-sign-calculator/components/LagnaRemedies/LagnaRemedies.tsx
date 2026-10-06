"use client";

import React from "react";
import { Download, ChevronRight, Gem, Palette, BookOpen } from "lucide-react";
import { RisingSignTelemetryData } from "../../types/rising-sign.types";
import styles from "./lagna-remedies.module.scss";

interface LagnaRemediesProps {
  data: RisingSignTelemetryData;
}

export const LagnaRemedies: React.FC<LagnaRemediesProps> = ({ data }) => {
  return (
    <div className={styles.remediesSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>
          EVOLUTIONARY DHARMA & KARMIC SHIELDING
        </span>
        <h3 className={styles.title}>
          Remedial Protocols for {data.sidereal.sanskritName} Ascendant
        </h3>
        <p className={styles.subtitle}>
          Harmonizing the Lagna Lord (Mangala/Mars) to balance deep-seated
          intuition and align with the higher dharmic path of the 9th House.
        </p>
      </div>

      <div className={styles.remediesGrid}>
        {/* Mantra Card */}
        <div className={styles.remedyCard}>
          <div className={styles.cardHeader}>
            <BookOpen size={16} />
            <span>PRIMARY LAGNA MANTRA</span>
          </div>
          <div className={styles.primaryText}>{data.remedies.mantra.text}</div>
          <div className={styles.descriptionText}>
            {data.remedies.mantra.description}
          </div>
          <div className={styles.footerText}>
            Time/Day: {data.remedies.mantra.time}
          </div>
        </div>

        {/* Gemstone Card */}
        <div className={styles.remedyCard}>
          <div className={styles.cardHeader}>
            <Gem size={16} />
            <span>PRIMARY LAGNA RATNA (GEM)</span>
          </div>
          <div className={styles.primaryText}>
            {data.remedies.gemstone.name}
          </div>
          <div className={styles.descriptionText}>
            {data.remedies.gemstone.description}
          </div>
          <div className={styles.footerText}>Format: Unheated / UnTreated</div>
        </div>

        {/* Colors Card */}
        <div className={styles.remedyCard}>
          <div className={styles.cardHeader}>
            <Palette size={16} />
            <span>AUSPICIOUS FREQUENCIES (COLORS)</span>
          </div>
          <div className={styles.primaryText}>{data.remedies.colors.name}</div>
          <div className={styles.descriptionText}>
            {data.remedies.colors.description}
          </div>
          <div className={styles.footerText}>
            Deity: Skanda / Kartikeya (Commander)
          </div>
        </div>
      </div>

      <div className={styles.actionFooter}>
        <button className={styles.btnSecondary}>
          <Download size={16} />
          Export Complete Ascendant Dossier (PDF)
        </button>
        <button className={styles.btnPrimary}>
          <ChevronRight size={16} />
          Consult Jyotish Master
        </button>
      </div>
    </div>
  );
};

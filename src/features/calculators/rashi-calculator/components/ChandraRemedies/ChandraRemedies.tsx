"use client";

import React from "react";
import { Music, Gem, Droplet, User, Download, Calendar } from "lucide-react";
import { RashiTelemetryData } from "../../types/rashi.types";
import styles from "./chandra-remedies.module.scss";

interface ChandraRemediesProps {
  data: RashiTelemetryData;
}

export const ChandraRemedies: React.FC<ChandraRemediesProps> = ({ data }) => {
  return (
    <div className={styles.remediesSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>LUNAR RESONANCE & HEALING</span>
        <h3 className={styles.title}>
          Chandra Harmonization Protocol & Remedies
        </h3>
        <p className={styles.subtitle}>
          Specific corrective frequencies and lifestyle adjustments to mitigate
          negative lunar transits (like Sade Sati) and amplify the innate
          strengths of your {data.sidereal.sanskritName} Moon.
        </p>
      </div>

      <div className={styles.layoutGrid}>
        <div className={styles.cardsGrid}>
          {/* Mantra Card */}
          <div className={styles.remedyCard}>
            <div className={styles.cardHeader}>
              <Music size={16} />
              {data.remedies.mantra.title}
            </div>
            <div className={styles.primaryText}>
              {data.remedies.mantra.primary}
            </div>
            <div className={styles.descriptionText}>
              {data.remedies.mantra.description}
            </div>
            <div className={styles.footerText}>
              {data.remedies.mantra.footer}
            </div>
          </div>

          {/* Gemstone Card */}
          <div className={styles.remedyCard}>
            <div className={styles.cardHeader}>
              <Gem size={16} />
              {data.remedies.gemstone.title}
            </div>
            <div className={styles.primaryText}>
              {data.remedies.gemstone.primary}
            </div>
            <div className={styles.descriptionText}>
              {data.remedies.gemstone.description}
            </div>
            <div className={styles.footerText}>
              {data.remedies.gemstone.footer}
            </div>
          </div>

          {/* Colors Card */}
          <div className={styles.remedyCard}>
            <div className={styles.cardHeader}>
              <Droplet size={16} />
              {data.remedies.colors.title}
            </div>
            <div className={styles.primaryText}>
              {data.remedies.colors.primary}
            </div>
            <div className={styles.descriptionText}>
              {data.remedies.colors.description}
            </div>
            <div className={styles.footerText}>
              {data.remedies.colors.footer}
            </div>
          </div>

          {/* Lifestyle Card */}
          <div className={styles.remedyCard}>
            <div className={styles.cardHeader}>
              <User size={16} />
              {data.remedies.lifestyle.title}
            </div>
            <div className={styles.primaryText}>
              {data.remedies.lifestyle.primary}
            </div>
            <div className={styles.descriptionText}>
              {data.remedies.lifestyle.description}
            </div>
            <div className={styles.footerText}>
              {data.remedies.lifestyle.footer}
            </div>
          </div>
        </div>

        {/* Action Panel */}
        <div className={styles.actionCard}>
          <div className={styles.cardHeader}>
            <Download size={16} />
            COMPREHENSIVE ANALYSIS
          </div>
          <div className={styles.primaryText}>Generate Astrometric Report</div>
          <div className={styles.descriptionText}>
            Download a 25-page customized report covering your complete lunar
            emotional blueprint, Nakshatra dynamics, and detailed phase timeline
            for the next 10 years.
          </div>
          <button className={styles.btnSecondary}>
            <Download size={16} />
            Export Chandra Report (PDF)
          </button>
          <button className={styles.btnPrimary}>
            <Calendar size={16} />
            Consult Astrologer (Live)
          </button>
        </div>
      </div>
    </div>
  );
};

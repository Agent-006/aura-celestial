"use client";

import React from "react";
import { Download, Sparkles, BookOpen, Anchor, Zap } from "lucide-react";
import { DashaTelemetryData } from "../../types/dasha.types";
import styles from "./dasha-harmonization-protocol.module.scss";

interface DashaHarmonizationProtocolProps {
  data: DashaTelemetryData;
}

export const DashaHarmonizationProtocol: React.FC<
  DashaHarmonizationProtocolProps
> = ({ data }) => {
  return (
    <div className={styles.protocolSection}>
      <div className={styles.headerRow}>
        <div className={styles.titleBlock}>
          <span className={styles.sectionLabel}>
            <Sparkles size={16} /> VEDIC REMEDIAL PROTOCOL
          </span>
          <h3 className={styles.title}>
            Harmonization Protocol for Active Cycle (
            {data.harmonization.cycleName})
          </h3>
          <p className={styles.subtitle}>
            Targeted mantras, charities, and behavioral alignments designed to
            mitigate negative friction and maximize the boons of{" "}
            {data.harmonization.cycleName}.
          </p>
        </div>
        <div className={styles.actions}>
          <button className={styles.btnPrimary}>
            <Download size={16} /> Export Full Dasha Vector PDF
          </button>
          <button className={styles.btnGold}>
            <Sparkles size={16} /> Consult Vimshottari Master
          </button>
        </div>
      </div>

      <div className={styles.contentGrid}>
        <div className={styles.mantraPanel}>
          <div className={styles.panelTitle}>
            <BookOpen size={16} /> MANTRA & SPIRITUAL PROTOCOL
          </div>
          <div className={styles.mantraBox}>
            <div className={styles.mantraHeading}>
              {data.harmonization.mantra.title}
            </div>
            <div className={styles.mantraText}>
              {data.harmonization.mantra.text}
            </div>
          </div>
          <p className={styles.mantraDesc}>
            {data.harmonization.mantra.description}
          </p>
        </div>

        <div className={styles.detailsPanel}>
          <div className={styles.focusCard}>
            <div className={styles.cardTitle}>
              <Anchor size={16} /> MATERIAL & KARMIC FOCUS
            </div>
            <div className={styles.tagsList}>
              {data.harmonization.materialFocus.tags.map((tag, idx) => (
                <span key={idx}>{tag}</span>
              ))}
            </div>
            <p className={styles.desc}>
              {data.harmonization.materialFocus.description}
            </p>
          </div>

          <div className={styles.actionsCard}>
            <div className={styles.cardTitle}>
              <Zap size={16} /> RECOMMENDED ACTIONS
            </div>
            <ul className={styles.actionsList}>
              {data.harmonization.actions.map((action, idx) => (
                <li key={idx}>{action}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

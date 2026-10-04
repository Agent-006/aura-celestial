"use client";

import React from "react";
import { useAstrologicalAnatomy } from "../../hooks/useAstrologicalAnatomy";
import {
  Droplets,
  Flame,
  Anchor,
  PawPrint,
  Activity,
  Hammer,
  Sparkles,
  Eye,
  Compass,
  Heart,
  LucideIcon,
} from "lucide-react";
import styles from "./astrological-anatomy.module.scss";

// Map string icon names to Lucide components
const IconMap: Record<string, LucideIcon> = {
  droplets: Droplets,
  flame: Flame,
  anchor: Anchor,
  "paw-print": PawPrint,
  activity: Activity,
  hammer: Hammer,
  sparkles: Sparkles,
  eye: Eye,
  compass: Compass,
  heart: Heart,
};

export function AstrologicalAnatomy() {
  const { metrics, isLoading } = useAstrologicalAnatomy();

  if (isLoading) {
    return <div className={styles.section}>Loading Anatomy Data...</div>;
  }

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>✦ MICRO-COSMIC METRICS</span>
        <h2 className={styles.title}>
          Pancha-Mahabhuta & Astrological Anatomy
        </h2>
      </div>

      <div className={styles.grid}>
        {metrics.map((item) => {
          const IconComponent = IconMap[item.iconName] || Sparkles;

          return (
            <div key={item.id} className={styles.card}>
              <div className={styles.iconWrapper}>
                <IconComponent className={styles.icon} />
                <span className={styles.label}>{item.label}</span>
              </div>
              <div className={styles.value}>{item.value}</div>
              <p className={styles.desc}>{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

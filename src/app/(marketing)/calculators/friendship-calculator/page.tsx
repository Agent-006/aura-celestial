import React from "react";
import { Metadata } from "next";
import { CalculatorHeader } from "@/features/calculators/components/shared";
import { FriendshipCalculator } from "@/features/calculators/friendship-calculator/components/FriendshipCalculator/FriendshipCalculator";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Friendship Calculator | Aura Celestial",
  description: "Astrological Friendship Calculator & Platonic Concordance Cockpit. Dual-chart second-world synastry analyzing the 11th House.",
};

export default function FriendshipCalculatorPage() {
  return (
    <main className={styles.pageContainer}>
      <CalculatorHeader
        eyebrow="ASTRO-SYNASTRY // PLATONIC RESONANCE COCKPIT | 11TH HOUSE : LABHA / MITRA BHAVA"
        title="Astrological Friendship Calculator & Platonic Concordance Cockpit"
        description="Dual-chart second-world synastry analyzing the 11th House (Labha & Mitra Bhava), Mercury (Budha) intellectual parity, Moon (Chandra) emotional safety, and Jupiterian mutual dharmic growth."
      />
      <FriendshipCalculator />
    </main>
  );
}

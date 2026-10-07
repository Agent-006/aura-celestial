import React from "react";

export interface MobileStats {
  compoundTotal: { value: string; desc: string };
  rootReduction: { value: string; desc: string };
  synastryMatch: { value: string; desc: string };
  cellularResonance: { value: string; desc: string };
}

export interface NavagrahaDigit {
  digit: number;
  ruler: string;
}

export interface MobilePhaseDistribution {
  primary: { value: string; percentage: number };
  secondary: { value: string; percentage: number };
  terminal: { value: string; percentage: number };
  synthesis: string;
}

export interface MobilePillar {
  title: string;
  subtitle: string;
  content: React.ReactNode;
  icon: "total" | "highest" | "pairs" | "suitability";
}

export interface MobileMatrixRow {
  number: number;
  planetaryRuler: string;
  wealthBusiness: string;
  relationshipsHealth: string;
  suitabilityStatus: string;
  statusType: "success" | "warning" | "neutral" | "danger" | "info";
}

export interface MobileRemedial {
  title: string;
  description: React.ReactNode;
  actionTitle: string;
  actionText: string;
  type: "success" | "warning" | "info";
}

export interface MobileTelemetryData {
  stats: MobileStats;
  navagrahaAlignment: NavagrahaDigit[];
  phaseDistribution: MobilePhaseDistribution;
  pillars: MobilePillar[];
  matrix: MobileMatrixRow[];
}

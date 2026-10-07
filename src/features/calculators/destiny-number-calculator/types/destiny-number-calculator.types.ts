import React from "react";

export interface DestinyTelemetryCard {
  value: string;
  desc: string;
}

export interface PinnacleCycle {
  title: string;
  calculation: string;
  description: string;
  keywords: string[];
}

export interface DestinyPillars {
  mission: {
    title: string;
    content: React.ReactNode;
    coreLesson: string;
  };
  concordance: {
    title: string;
    naturalAffinities: string;
    neutralTolerant: string;
    incompatibleTension: string;
  };
  coordinates: {
    title: string;
    favorableYears: string;
    favorableColors: string;
    favorableDays: string;
    optimalGemstone: string;
  };
  evolution: {
    title: string;
    foundationPhase: string;
    zenithPhase: string;
    maturationPhase: string;
  };
}

export interface DestinyMatrixRow {
  number: number;
  ruler: string;
  element: string;
  archetype: string;
  allies: string;
  opponents: string;
  statusType: "success" | "warning" | "info" | "danger" | "neutral";
}

export interface DestinyRemedial {
  title: string;
  subtitle: string;
  content: React.ReactNode;
  icon: "mantra" | "gem" | "yoga";
}

export interface DestinyTelemetryData {
  telemetry: {
    destinyRoot: DestinyTelemetryCard;
    governingPlanet: DestinyTelemetryCard;
    compoundResonance: DestinyTelemetryCard;
    cellularFrequency: DestinyTelemetryCard;
  };
  pinnacleCycles: PinnacleCycle[];
  pillars: DestinyPillars;
  matrix: DestinyMatrixRow[];
  remedials: DestinyRemedial[];
}

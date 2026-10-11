export interface MulankStats {
  rootNumber: { value: string; desc: string };
  rulingGraha: { value: string; desc: string };
  elementalAffinity: { value: string; desc: string };
  cosmicFrequency: { value: string; desc: string };
}

export interface ResonanceTriadItem {
  title: string;
  value: string;
  description: string;
}

export interface MulankPillar {
  title: string;
  subtitle: string;
  content: React.ReactNode;
  icon: "planet" | "matrix" | "coordinates" | "milestone";
}

export interface MulankMatrixRow {
  number: number;
  planetaryRuler: string;
  tattva: string;
  primaryTrait: string;
  allies: string;
  enemies: string;
  status: string;
}

export interface MulankRemedial {
  title: string;
  description: React.ReactNode;
  actionTitle: string;
  actionText: string;
  type: "success" | "warning" | "info";
}

export interface MulankTelemetryData {
  stats: MulankStats;
  triad: {
    items: ResonanceTriadItem[];
    synthesis: string;
  };
  matrix: MulankMatrixRow[];
  pillars: MulankPillar[];
}

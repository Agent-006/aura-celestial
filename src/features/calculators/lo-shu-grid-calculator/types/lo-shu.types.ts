export interface SacredTelemetryStats {
  mulank: string;
  mulankLabel: string;
  bhagyank: string;
  bhagyankLabel: string;
  missingDigits: string;
  missingDigitsLabel: string;
  yinYangBalance: string;
  yinYangLabel: string;
}

export interface GridCell {
  number: number;
  values: string; // The repeated digits, e.g., "9 9", "1 1 1 1"
  element: string; // e.g., "Fire / South"
  description: string; // e.g., "Intense / Action"
  isMissing: boolean;
}

export interface DigitResonance {
  digit: number;
  label: string; // e.g., "Digit 9 (Fire / South)"
  occurrences: string;
  description: string; // e.g., "Intense energy, fame, social..."
}

export interface EnergyPlane {
  id: string;
  type: string; // "HORIZONTAL", "VERTICAL", "DIAGONAL"
  title: string; // e.g., "Mental / Thought Plane"
  digits: string; // e.g., "4-9-2"
  description: string;
  statusLabel: string; // e.g., "80% Resonance", "ACTIVE MUTATION"
  isActive: boolean;
  isWarning: boolean;
}

export interface MissingDigitRemedy {
  digit: number;
  title: string;
  description: string;
}

export interface HarmonizationProtocol {
  id: string;
  type: string;
  title: string;
  description: string;
}

export interface LoShuTelemetryData {
  stats: SacredTelemetryStats;
  grid: GridCell[]; // Array of 9 cells
  resonances: DigitResonance[];
  planes: EnergyPlane[];
  missingRemedies: MissingDigitRemedy[];
  protocols: HarmonizationProtocol[];
}

export type NumerologySystem =
  | "Chaldean"
  | "Pythagorean"
  | "Sepharial"
  | "Modern";

export interface NumerologyFormValues {
  fullName: string;
  dateOfBirth: Date | null;
  system: NumerologySystem;
}

export interface ArchetypeData {
  value: number;
  label: string;
  description: string;
}

export interface PhoneticMatrixEntry {
  LetterText: string;
  value: number;
}

export interface KarmicDebt {
  number: 13 | 14 | 16 | 19;
  isActive: boolean;
}

export interface MasterNumber {
  number: 11 | 22 | 33;
  isActive: boolean;
  source: string;
}

export interface PersonalYear {
  year: number;
  personalYearNumber: number;
  label: string;
  isActive: boolean;
}

export interface RemedialUpaya {
  luckyColors: string[];
  luckyDays: string[];
  luckyGems: string[];
  nameSuggestion?: {
    original: string;
    originalValue: number;
    suggested: string;
    suggestedValue: number;
    reason: string;
  };
}

export interface NumerologyTelemetry {
  mulank: ArchetypeData; // Psychic Number
  bhagyank: ArchetypeData; // Destiny Number
  namank: ArchetypeData; // Name Number
  KarmicResonance: number; // 0-100%
  phoneticMatrix: PhoneticMatrixEntry[];
  masterNumbers: MasterNumber[];
  karmicDebts: KarmicDebt[];
  epicyclicMatrix: PersonalYear[];
  remedies: RemedialUpaya;
}

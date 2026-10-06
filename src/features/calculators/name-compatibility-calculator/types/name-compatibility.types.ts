export interface NameCompatibilityStats {
  destinySync: string;
  soulUrgeResonance: string;
  personalityAlignment: string;
  overallPhonetic: string;
  vowelFrequency: string;
  consonantDissonance: string;
  syllableMetric: string;
  totalResonance: string;
}

export interface PillarAnalysis {
  title: string;
  valA: number;
  valB: number;
  description: string;
  status:
    | "OPTIMAL SYNERGY"
    | "KARMIC TENSION"
    | "NEUTRAL GROUND"
    | "DYNAMIC GROWTH";
}

export interface GlyphRow {
  phoneme: string;
  glyph: string;
  chaldeanValue: number;
  planetaryResonance: string;
}

export interface RemedialProtocol {
  title: string;
  description: string;
  action: string;
  type: "warning" | "success" | "info";
}

export interface NameCompatibilityTelemetryData {
  stats: NameCompatibilityStats;
  pillars: PillarAnalysis[];
  matrixA: GlyphRow[];
  matrixB: GlyphRow[];
  remedials: RemedialProtocol[];
}

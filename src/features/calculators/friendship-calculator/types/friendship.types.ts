export interface HarmonicTelemetryStats {
  psychologicalResonance: string;
  intellectualSynergy: string;
  emotionalSupportMatrix: string;
  eleventhHouseSyndicate: string;
}

export interface PlatonicDimension {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  status: string;
  percentage: string;
}

export interface ComraderyConcordanceRow {
  vector: string;
  alphaPlacement: string;
  betaPlacement: string;
  consequence: string;
  status: string;
}

export interface FriendshipHarmonizationProtocol {
  id: string;
  type: string;
  title: string;
  description: string;
  instructions: string;
  frequency: string;
}

export interface FriendshipTelemetryData {
  stats: HarmonicTelemetryStats;
  dimensions: PlatonicDimension[];
  concordances: ComraderyConcordanceRow[];
  protocols: FriendshipHarmonizationProtocol[];
}

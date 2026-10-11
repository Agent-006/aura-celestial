export type FlamesResult = "F" | "L" | "A" | "M" | "E" | "S";

export interface FlamesLetterNode {
  letter: string;
  cancelled: boolean;
}

export interface FlamesDimension {
  id: FlamesResult;
  title: string;
  description: string;
  rulingPlanet: string;
  elementalForce: string;
  karmicOutcome: string;
  isResult?: boolean;
}

export interface DualEphemerisRow {
  metric: string;
  subjectA: string;
  subjectB: string;
  concordance: string;
  astralVector: string;
}

export interface HarmonizationProtocol {
  id: string;
  type: string;
  title: string;
  description: string;
  instructions: string;
  frequency: string;
}

export interface FlamesTelemetryData {
  entityA: {
    name: string;
    letters: FlamesLetterNode[];
  };
  entityB: {
    name: string;
    letters: FlamesLetterNode[];
  };
  totalAksharas: number;
  remainingNodes: number;
  filterRate: string;
  result: FlamesResult;
  affinityPercentage: string;
  verdictTitle: string;
  verdictDescription: string;
  emotionalIndex: string;
  stabilityCoefficient: string;
  karmicTie: string;
  dimensions: FlamesDimension[];
  ephemeris: DualEphemerisRow[];
  protocols: HarmonizationProtocol[];
}

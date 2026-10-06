export interface SerpentArchitectureStats {
  encasementPercentage: string;
  encasementLabel: string;
  orbitalDirectionality: string;
  orbitalLabel: string;
  nodalAxisDistance: string;
  nodalLabel: string;
  doshaSeverityMetric: string;
  doshaLabel: string;
}

export interface ClassicalFormation {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  statusLabel: string;
  isActive: boolean;
}

export interface NodalVectorRow {
  graha: string;
  siderealLongitude: string;
  housePosition: string;
  nakshatraPada: string;
  encasementStatus: string;
  axisMetric: string;
  isEncased: boolean;
}

export interface HarmonizationProtocol {
  id: string;
  type: string;
  title: string;
  description: string;
  instructions: string;
  frequency: string;
}

export interface KaalSarpTelemetryData {
  stats: SerpentArchitectureStats;
  formations: ClassicalFormation[];
  vectors: NodalVectorRow[];
  protocols: HarmonizationProtocol[];
}

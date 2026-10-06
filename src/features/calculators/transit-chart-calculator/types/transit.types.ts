export interface AstrometricGauges {
  overallHarmonics: string;
  overallSubtext: string;
  ashtakavargaBindu: string;
  ashtakavargaSubtext: string;
  taraBala: string;
  taraBalaSubtext: string;
  criticalNode: string;
  criticalNodeSubtext: string;
}

export interface GocharBarometer {
  graha: string;
  transitHouse: string;
  resonancePercentage: number;
  resonanceLabel: string; // e.g. "98% Auspicious"
  description: string;
}

export interface GrahaGocharVector {
  graha: string;
  natalSign: string;
  transitHouseRashi: string;
  constellation: string;
  karmicEffect: string;
  bindu: string;
  retroDgn: string;
  transitDuration: string;
}

export interface KakshyaPartition {
  house: number;
  bindu: number;
  status: "low" | "neutral" | "high" | "peak";
}

export interface TransitRemedialProtocol {
  id: string;
  type: string;
  title: string;
  description: string;
}

export interface TransitTelemetryData {
  gauges: AstrometricGauges;
  barometers: GocharBarometer[];
  vectors: GrahaGocharVector[];
  heatmap: KakshyaPartition[];
  protocols: TransitRemedialProtocol[];
}

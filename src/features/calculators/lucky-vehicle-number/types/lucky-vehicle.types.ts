export interface VehicleRegistrationBreakdown {
  state: string; // e.g. "MH"
  rto: string; // e.g. "02"
  series: string; // e.g. "EK"
  coreNumber: string; // e.g. "9999"
  totalSum: number; // e.g. 36
  reducedSum: number; // e.g. 9
}

export interface AstrometricResonanceStats {
  vehicleVibration: number; // e.g. 94
  concordanceRate: string; // e.g. "98.2%"
  karmicShield: string; // e.g. "91.5%"
  spatialVelocity: string; // e.g. "STABLE"
}

export interface VibrationMatrixNode {
  number: number;
  planet: string;
  description: string;
  colors: string;
  isActive: boolean;
}

export interface ConcordanceRow {
  vector: string;
  yantra: string;
  consequence: string;
  status: string;
  percentage: string;
}

export interface VehicleHarmonizationProtocol {
  id: string;
  type: string;
  title: string;
  description: string;
  instructions: string;
  frequency: string;
}

export interface LuckyVehicleTelemetryData {
  breakdown: VehicleRegistrationBreakdown;
  stats: AstrometricResonanceStats;
  vibrations: VibrationMatrixNode[];
  concordances: ConcordanceRow[];
  protocols: VehicleHarmonizationProtocol[];
}

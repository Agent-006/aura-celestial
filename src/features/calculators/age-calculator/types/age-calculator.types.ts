export interface AgeStats {
  biologicalAge: { value: string; desc: string };
  vedicTemporal: { value: string; desc: string };
  solarReturns: { value: string; desc: string };
  lunarAge: { value: string; desc: string };
}

export interface OrbitalMetrics {
  heartbeats: string;
  breaths: string;
  earthDistance: string;
  solarSystemDistance: string;
}

export interface PlanetaryCycles {
  mars: string;
  jupiter: string;
  saturn: string;
  uranus: string;
  neptune: string;
}

export interface ChronometryPillar {
  title: string;
  value: string;
  description: string;
  icon: "pulse" | "sun" | "clock" | "moon";
}

export interface PlanetaryRevolution {
  graha: string;
  orbitalPeriod: string;
  revolutions: string;
  planetaryAge: string;
  nextReturn: string;
  status: string;
}

export interface LongevitySadhanaProtocol {
  title: string;
  date: string;
  description: string;
  type: "warning" | "success" | "info";
}

export interface AgeTelemetryData {
  stats: AgeStats;
  orbital: {
    metrics: OrbitalMetrics;
    cycles: PlanetaryCycles;
    arcPercentage: number;
  };
  pillars: ChronometryPillar[];
  revolutions: PlanetaryRevolution[];
  sadhana: LongevitySadhanaProtocol[];
}

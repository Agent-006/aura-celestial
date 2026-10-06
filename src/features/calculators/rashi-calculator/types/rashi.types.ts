export interface TropicalMoon {
  signName: string;
  degrees: string;
  element: string;
  modality: string;
  archetype: string;
  polarity: string;
  description: string;
}

export interface SiderealRashi {
  signName: string;
  sanskritName: string;
  degrees: string;
  lordGraha: string;
  tattva: string;
  nakshatra: string;
  pada: number;
  description: string;
}

export interface RashiDestinyPoint {
  id: string;
  title: string;
  description: string;
  iconType: "core" | "vimshottari" | "gochar";
}

export interface RashiRemedy {
  title: string;
  primary: string;
  description: string;
  footer: string;
}

export interface RashiTelemetryData {
  tropical: TropicalMoon;
  sidereal: SiderealRashi;
  phaseDuration: {
    tropicalProgress: number;
    siderealProgress: number;
    tropicalTimeRemaining: string;
    siderealTimeRemaining: string;
  };
  destinyPoints: RashiDestinyPoint[];
  remedies: {
    mantra: RashiRemedy;
    gemstone: RashiRemedy;
    colors: RashiRemedy;
    lifestyle: RashiRemedy;
  };
}

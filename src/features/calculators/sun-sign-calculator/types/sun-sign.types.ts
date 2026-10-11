export interface TropicalSunSign {
  signName: string;
  degrees: string;
  planetaryRuler: {
    name: string;
    sanskritName: string;
  };
  element: string;
  houseArchetype: string;
  seasonalPhase: string;
  psychologicalArchetype: string;
  profileText: string;
}

export interface SiderealSuryaRashi {
  signName: string;
  degrees: string;
  element: string;
  nakshatra: {
    name: string;
    pada: number;
  };
  planetaryLord: {
    name: string;
    sanskritName: string;
  };
  solarShodashVarga: string;
  atmakarakaDegree: string;
  profileText: string;
}

export interface DifferentialPrecession {
  title: string;
  solarEarthSeasons: string;
  cycle25k: string;
  fixedStarConstellations: string;
  offsetDegrees: string;
}

export interface VedicSolarRemedies {
  suryaMantra: {
    title: string;
    mantra: string;
    description: string;
  };
  gemstone: {
    title: string;
    name: string;
    description: string;
  };
  astrologicalElements: {
    color: string;
    metal: string;
    deity: string;
  };
}

export interface SunSignTelemetryData {
  solarSpeed: string;
  declination: string;
  rightAscension: string;
  tropical: TropicalSunSign;
  sidereal: SiderealSuryaRashi;
  precession: DifferentialPrecession;
  remedies: VedicSolarRemedies;
}

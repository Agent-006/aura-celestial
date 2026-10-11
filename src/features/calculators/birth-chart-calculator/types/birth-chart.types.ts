export interface PlanetaryPosition {
  id: string;
  planet: string;
  sign: string;
  degree: string;
  house: string;
  pada: string;
  dignity: string;
  retrograde: boolean;
  avastha: string;
  isLagna?: boolean;
}

export interface DivisionalHarmonic {
  id: string;
  code: string;
  title: string;
  description: string;
  iconType: string;
}

export interface BhavaSignificator {
  id: string;
  houseTitle: string;
  subtitle: string;
  rashi: string;
  lord: string;
  occupants: string;
  description: string;
}

export interface RemedySection {
  title: string;
  eyebrow: string;
  primary: string;
  description: string;
  footer: string;
}

export interface BirthChartTelemetryData {
  rashiChakra: {
    ascendant: string;
    moonSign: string;
    sunSign: string;
    nakshatra: string;
    chartBalance: string;
  };
  
  planetaryPositions: PlanetaryPosition[];
  divisionalHarmonics: DivisionalHarmonic[];
  bhavaSignificators: BhavaSignificator[];
  
  remedies: {
    gemstone: RemedySection;
    charity: RemedySection;
    mantra: RemedySection;
  };
}

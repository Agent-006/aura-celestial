export interface TropicalAscendant {
  signName: string;
  degrees: string;
  descendant: string;
  firstImpressionStyle: string;
  defensiveResponse: string;
}

export interface SiderealLagna {
  signName: string;
  sanskritName: string;
  degrees: string;
  lagnesha: string;
  tattva: string;
  navamshaLagna: string;
}

export interface HouseCusp {
  house: string;
  bhavaSanskrit: string;
  rashiSign: string;
  lordGraha: string;
  exactCuspDegree: string;
  occupantsGrahas: string;
}

export interface LagnaRemedies {
  mantra: {
    text: string;
    description: string;
    time: string;
  };
  gemstone: {
    name: string;
    description: string;
  };
  colors: {
    name: string;
    description: string;
  };
}

export interface RisingSignTelemetryData {
  exactDegree: string;
  zodiacSign: string;
  tattva: string;
  polarity: string;
  nakshatra: string;
  pada: number;
  navamsha: string;
  ascendantDuration: {
    progress: number;
    start: string;
    end: string;
    duration: string;
    timeUntilNext: string;
  };
  tropical: TropicalAscendant;
  sidereal: SiderealLagna;
  bhavachakra: HouseCusp[];
  remedies: LagnaRemedies;
}

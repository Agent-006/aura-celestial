export interface DashaPeriod {
  lord: string;
  spanYears: number;
  karmicInfluence: string;
  startEpoch: string;
  completionEpoch: string;
  functionalDignity: string;
  status: "PAST" | "ACTIVE" | "FUTURE";
}

export interface UnfoldmentLevel {
  id: string;
  title: string;
  description: string;
  iconType: "mahadasa" | "antardasha" | "pratyantardasha";
  tagText: string;
}

export interface ActiveCycleInfo {
  mahadashaLord: string;
  antardashaLord: string;
  pratyantardashaLord: string;
  activeUntil: string;
  elapsedPercentage: number;
}

export interface HarmonizationProtocol {
  cycleName: string;
  mantra: {
    title: string;
    text: string;
    description: string;
  };
  materialFocus: {
    tags: string[];
    description: string;
  };
  actions: string[];
}

export interface DashaTelemetryData {
  natalMoonLongitude: string;
  nakshatra: string;
  pada: number;
  activeCycle: ActiveCycleInfo;
  ephemerisCycle: DashaPeriod[];
  unfoldmentLevels: UnfoldmentLevel[];
  harmonization: HarmonizationProtocol;
}

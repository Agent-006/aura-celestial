export interface NakshatraFormValues {
  name: string;
  gender: "Male" | "Female" | "Other";
  dobDay: string;
  dobMonth: string;
  dobYear: string;
  isTimeUnknown: boolean;
  tobHour?: string;
  tobMinute?: string;
  tobSecond?: string;
  birthPlace: string;
}

export interface NakshatraDetails {
  name: string;
  translation: string;
  description: string;
  score: number;
  rulingPlanet: string;
  rulingPlanetDesc: string;
  deity: string;
  deityDesc: string;
}

export interface PadaDetails {
  padaNumber: number;
  name: string;
  description: string;
  pushkaraStatus: string;
  pushkaraDesc: string;
  vargottamaStatus: string;
  vargottamaDesc: string;
  moonSign: string;
  degree: string;
}

export interface AnatomyMetric {
  id: string;
  iconName: string;
  label: string;
  value: string;
  description: string;
}

export interface AlmanacRow {
  number: string;
  name: string;
  translation: string;
  deity: string;
  rulingPlanet: string;
  gana: string;
  varna: string;
  active?: boolean;
}

export interface DoshaAnalysis {
  status: string;
  isClear: boolean;
  points: string[];
  warningMessage?: string;
}
export interface DharmaProtocol {
  gemstone: string;
  gemDesc: string;
  mantra: string;
  mantraDesc: string;
  deity: string;
  deityDesc: string;
  actionTitle: string;
}

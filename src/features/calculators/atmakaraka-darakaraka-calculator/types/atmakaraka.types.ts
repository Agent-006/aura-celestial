export type Gender = "Male" | "Female" | "Other";

export interface AtmakarakaFormValues {
  name: string;
  gender: Gender;
  dateOfBirth: string; // YYYY-MM-DD
  timeOfBirth?: string; // HH:MM
  isTimeUnknown: boolean;
  placeOfBirth: string;
}

export type KarakaRole = "AK" | "AmK" | "BK" | "MK" | "PK" | "GK" | "DK";

export interface KarakaPlanet {
  role: KarakaRole;
  title: string;
  planet: string;
  degree: number; // 0 to 30
  sign: string;
  nakshatra: string;
  house: number;
  description?: string;
  karmicLesson?: string;
}

export interface SynergyMetric {
  title: string;
  score: number; // out of 100
  description: string;
}

export interface UpayaProtocol {
  coreUpaya: string;
  gemstone: string;
  austerities: string[];
}

export interface AtmakarakaTelemetry {
  atmakaraka: KarakaPlanet;
  darakaraka: KarakaPlanet;
  sevenMinisters: KarakaPlanet[];
  navamsaPlacement: {
    sign: string;
    house: number;
    dignity:
      | "Exalted"
      | "Moolatrikona"
      | "Own House"
      | "Friendly"
      | "Neutral"
      | "Enemy"
      | "Debilitated";
  };
  synergyCalculus: SynergyMetric[];
  protocols: UpayaProtocol;
}

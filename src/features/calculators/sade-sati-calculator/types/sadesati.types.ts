export interface SadeSatiFormValues {
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

export interface EphemerisParameters {
  moonSign: string;
  moonDegree: string;
  natalSaturnSign: string;
  natalSaturnDegree: string;
  currentPhase: string;
  currentStatus: string;
  activeTags: string[];
}

export interface PhaseProgress {
  overallPercentage: number;
  currentPhasePercentage: number;
  dhaiyaPercentage: number;
}

export interface PhaseDetails {
  id: string;
  title: string;
  house: string;
  duration: string;
  isActive: boolean;
  description: string;
  effects: string;
}

export interface DrishtiRay {
  ray: string;
  house: string;
  effect: string;
}

export interface ShantiProtocol {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface SadeSatiTelemetry {
  ephemeris: EphemerisParameters;
  progress: PhaseProgress;
  trajectory: PhaseDetails[];
  drishti: DrishtiRay[];
  protocols: ShantiProtocol[];
}

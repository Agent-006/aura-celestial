export interface DiagnosticMatrixCard {
  id: string;
  title: string;
  vantagePoint: string;
  badgeStatus: string;
  description: string;
  bottomLabel: string;
  bottomValue: string;
}

export interface CancellationCondition {
  id: string;
  yogaType: string;
  exception: string;
  archetypalResult: string;
  isActive: boolean;
  matchScore?: string;
}

export interface RemedySection {
  title: string;
  eyebrow: string;
  primary: string;
  description: string;
  footer: string;
}

export interface MangalDoshaTelemetryData {
  longitude: string;
  nakshatra: string;
  overallDoshaStatus: string;
  doshaPercentage: number;
  
  radar: {
    housePlacement: string;
    strength: string;
    intensityVector: string;
    intensityLabel: string;
    mangalDegree: string;
    doshaStatusLabel: string;
    dignity: string;
  };
  
  diagnosticMatrix: DiagnosticMatrixCard[];
  cancellations: CancellationCondition[];
  
  remedies: {
    mantra: RemedySection;
    gemstone: RemedySection;
    charity: RemedySection;
  };
}

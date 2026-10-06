export interface IshtaDevataStats {
  atmakaraka: string;
  akSign: string;
  akDegree: string;
  karakamshaLagna: string;
  klHouse: string;
  twelfthFromAk: string;
  twelfthSign: string;
  twelfthLord: string;
  lordRole: string;
}

export interface DeityResonance {
  deity: string;
  planet: string;
  percentage: number;
}

export interface TutelaryDeity {
  type: string;
  title: string;
  planet: string;
  description: string;
  mantra: string;
  mantraDescription: string;
  offering: string;
  offeringDescription: string;
}

export interface CharaKarakaPlacement {
  karakaType: string;
  planet: string;
  rashi: string;
  nakshatra: string;
  degree: string;
  jaiminiSignificance: string;
}

export interface SpiritualSadhanaProtocol {
  id: string;
  type: string;
  title: string;
  mantraOrAction: string;
  description: string;
}

export interface IshtaDevataTelemetryData {
  stats: IshtaDevataStats;
  resonanceScores: DeityResonance[];
  totalResonanceQuotient: string;
  tutelaryDeities: TutelaryDeity[];
  charaKarakas: CharaKarakaPlacement[];
  sadhanaProtocols: SpiritualSadhanaProtocol[];
}

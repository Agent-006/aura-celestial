export interface LuckyNameTelemetryData {
  telemetry: {
    namankRoot: {
      value: string;
      desc: string;
    };
    governingPlanet: {
      value: string;
      desc: string;
    };
    compoundResonance: {
      value: string;
      desc: string;
    };
    cellularFrequency: {
      value: string;
      desc: string;
    };
  };
  decomposition: {
    name: string;
    letters: { char: string; val: number }[];
    total: number;
    root: number;
  };
  triad: {
    mulank: number | null;
    bhagyank: number | null;
    namank: number;
    description: string;
  };
  pillars: {
    soulUrge: {
      calculation: string;
      description: string;
    };
    outerPersona: {
      calculation: string;
      description: string;
    };
    concordance: {
      naturalAffinities: string;
      neutralTolerant: string;
      incompatibleTension: string;
    };
    powerScore: {
      score: string;
      description: string;
    };
  };
  matrix: {
    number: number;
    ruler: string;
    element: string;
    archetype: string;
    allies: string;
    opponents: string;
    statusType: "success" | "info" | "warning" | "danger" | "neutral";
  }[];
  remedials: {
    title: string;
    subtitle: string;
    icon: string;
    content: string;
  }[];
}

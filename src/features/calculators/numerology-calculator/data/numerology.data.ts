import { NumerologyTelemetry } from "../types/numerology.types";

export const MOCK_NUMEROLOGY_TELEMETRY: NumerologyTelemetry = {
  mulank: {
    value: 5,
    label: "The Communicator",
    description:
      "Ruled by Mercury. Quick-witted, adaptable, communicative, loves freedom, and highly analytical.",
  },
  bhagyank: {
    value: 1,
    label: "The Primal Force",
    description:
      "Ruled by Sun. Independent, born leader, highly driven, innovative, and demands respect.",
  },
  namank: {
    value: 37,
    label: "The Harmonizer",
    description:
      "Compound 37 is excellent for mass influence, marketing, and media. Highly ambitious but requires focus.",
  },
  KarmicResonance: 88.4,
  phoneticMatrix: [
    { LetterText: "A", value: 1 },
    { LetterText: "R", value: 2 },
    { LetterText: "V", value: 6 },
    { LetterText: "I", value: 1 },
    { LetterText: "N", value: 5 },
    { LetterText: "D", value: 4 },
  ],
  masterNumbers: [
    { number: 11, isActive: true, source: "Soul Urge (Hidden Motivation)" },
    { number: 22, isActive: false, source: "" },
    { number: 33, isActive: false, source: "" },
  ],
  karmicDebts: [
    { number: 13, isActive: false },
    { number: 14, isActive: true },
    { number: 16, isActive: false },
    { number: 19, isActive: false },
  ],
  epicyclicMatrix: [
    { year: 2021, personalYearNumber: 5, label: "Change", isActive: false },
    { year: 2022, personalYearNumber: 6, label: "Responsibility", isActive: false },
    { year: 2023, personalYearNumber: 7, label: "Spirituality", isActive: false },
    { year: 2024, personalYearNumber: 8, label: "Power & Wealth", isActive: true },
    { year: 2025, personalYearNumber: 9, label: "Completion", isActive: false },
    { year: 2026, personalYearNumber: 1, label: "New Beginnings", isActive: false },
    { year: 2027, personalYearNumber: 2, label: "Partnership", isActive: false },
    { year: 2028, personalYearNumber: 3, label: "Expression", isActive: false },
  ],
  remedies: {
    luckyColors: ["Emerald Green", "Royal Blue", "White"],
    luckyDays: ["Wednesday", "Sunday", "Friday"],
    luckyGems: ["Emerald (Panna)", "Ruby (Manik)"],
    nameSuggestion: {
      original: "Arvin Chatterjee",
      originalValue: 37,
      suggested: "Aarvin Chatterjee",
      suggestedValue: 38,
      reason: "Adding an 'A' boosts the Sun's influence, aligning perfectly with your Bhagyank 1.",
    },
  },
};

import { NameCompatibilityTelemetryData } from "../types/name-compatibility.types";

export const MOCK_NAME_COMPATIBILITY_DATA: NameCompatibilityTelemetryData = {
  stats: {
    destinySync: "94.2%",
    soulUrgeResonance: "96.8%",
    personalityAlignment: "92.5%",
    overallPhonetic: "88.0%",
    vowelFrequency: "85.4%",
    consonantDissonance: "12.3%",
    syllableMetric: "91.2%",
    totalResonance: "88.0",
  },
  pillars: [
    {
      title: "Destiny Synastry: Life Path Vectors",
      valA: 9,
      valB: 7,
      description:
        "A profound spiritual and intellectual connection. The 9's humanitarian breadth aligns well with the 7's analytical depth, creating a dynamic of mutual learning and spiritual growth.",
      status: "OPTIMAL SYNERGY",
    },
    {
      title: "Soul Urge Concordance: Inner Desires",
      valA: 3,
      valB: 3,
      description:
        "Perfect inner alignment. Both individuals share a core desire for creative expression, joy, and social connection. Emotional needs are mutually understood and easily met.",
      status: "OPTIMAL SYNERGY",
    },
    {
      title: "Personality Alignment: Outer Persona",
      valA: 6,
      valB: 4,
      description:
        "The 6 (Venus) seeks harmony and nurturing, while the 4 (Rahu) seeks structure and foundation. They complement each other well in building a stable and beautiful life together.",
      status: "DYNAMIC GROWTH",
    },
    {
      title: "The Name / Expression Number Sync",
      valA: 5,
      valB: 5,
      description:
        "Both express themselves through adaptability, freedom, and communication. A highly energetic and versatile pairing, though they must ensure they don't scatter their energies.",
      status: "OPTIMAL SYNERGY",
    },
  ],
  matrixA: [
    {
      phoneme: "A",
      glyph: "Aleph",
      chaldeanValue: 1,
      planetaryResonance: "Sun (Surya)",
    },
    {
      phoneme: "R",
      glyph: "Resh",
      chaldeanValue: 2,
      planetaryResonance: "Moon (Chandra)",
    },
    {
      phoneme: "I",
      glyph: "Yod",
      chaldeanValue: 1,
      planetaryResonance: "Sun (Surya)",
    },
    {
      phoneme: "A",
      glyph: "Aleph",
      chaldeanValue: 1,
      planetaryResonance: "Sun (Surya)",
    },
    {
      phoneme: "N",
      glyph: "Nun",
      chaldeanValue: 5,
      planetaryResonance: "Mercury (Budha)",
    },
  ],
  matrixB: [
    {
      phoneme: "M",
      glyph: "Mem",
      chaldeanValue: 4,
      planetaryResonance: "Rahu",
    },
    {
      phoneme: "I",
      glyph: "Yod",
      chaldeanValue: 1,
      planetaryResonance: "Sun (Surya)",
    },
    {
      phoneme: "R",
      glyph: "Resh",
      chaldeanValue: 2,
      planetaryResonance: "Moon (Chandra)",
    },
    {
      phoneme: "A",
      glyph: "Aleph",
      chaldeanValue: 1,
      planetaryResonance: "Sun (Surya)",
    },
  ],
  remedials: [
    {
      title: "Syllabic Vowel Amplification Tuning",
      description:
        "The name 'Arian' resonates heavily with Solar (Sun) energy, while 'Mira' carries Lunar and Rahu undertones. Amplifying 'E' or 'O' sounds in nicknames can balance the intense solar-rahu axis.",
      action: "Use alias ending in 'O' or 'E'",
      type: "info",
    },
    {
      title: "Initial Phoneme Synchronization",
      description:
        "A (1) and M (4) create a 1-4 dynamic. Sun and Rahu. This can lead to sudden eclipsing of egos. Intentional communication is required.",
      action: "Maintain transparent dialogue",
      type: "warning",
    },
    {
      title: "Signature / Moniker Value Shifting",
      description:
        "If signing official documents together, combining signatures to equal a 6 (Venus) or 5 (Mercury) vibration will drastically improve material and communication harmony.",
      action: "Adjust joint signature to total 5 or 6",
      type: "success",
    },
  ],
};

import { FlamesTelemetryData } from "../types/flames.types";

export const MOCK_FLAMES_DATA: FlamesTelemetryData = {
  entityA: {
    name: "Aarav V. Singhania",
    letters: [
      { letter: "A", cancelled: true },
      { letter: "A", cancelled: true },
      { letter: "R", cancelled: false },
      { letter: "A", cancelled: true },
      { letter: "V", cancelled: false },
      { letter: "S", cancelled: true },
      { letter: "I", cancelled: false },
      { letter: "N", cancelled: true },
      { letter: "G", cancelled: false },
      { letter: "H", cancelled: false },
      { letter: "A", cancelled: true },
      { letter: "N", cancelled: true },
      { letter: "I", cancelled: false },
      { letter: "A", cancelled: true },
    ],
  },
  entityB: {
    name: "Aanya S. Roy",
    letters: [
      { letter: "A", cancelled: true },
      { letter: "A", cancelled: true },
      { letter: "N", cancelled: true },
      { letter: "Y", cancelled: false },
      { letter: "A", cancelled: true },
      { letter: "S", cancelled: true },
      { letter: "R", cancelled: false },
      { letter: "O", cancelled: false },
      { letter: "Y", cancelled: false },
    ],
  },
  totalAksharas: 23,
  remainingNodes: 7,
  filterRate: "69.5%",
  result: "L",
  affinityPercentage: "94.2%",
  verdictTitle: "PREMA // LOVE",
  verdictDescription:
    "Planetary synthesis indicates intense Venusian harmony. High magnetic extension, unconditional emotional intimacy, and strong psychic attraction.",
  emotionalIndex: "9.4 / 10",
  stabilityCoefficient: "8.9 / 10",
  karmicTie: "Rinanubandhana",
  dimensions: [
    {
      id: "F",
      title: "Friendship (Mitra)",
      description:
        "Mercury and Sun vector sync. Indicates strong intellectual and telepathic mutual harmony, and objective basis alignment without romantic attachment. High longevity in verbal communication.",
      rulingPlanet: "Mercury / Budh",
      elementalForce: "Air (Vayu)",
      karmicOutcome: "Intellectual / Karmic Ties",
    },
    {
      id: "L",
      title: "Love (Prema & Kama)",
      description:
        "Venus and Moon emotional vortex. Signifies deep devotion, uncalculated attraction, philia affinity, and opened soul-union. High gravitational pull across spatial distance.",
      rulingPlanet: "Venus / Shukra",
      elementalForce: "Water (Jala)",
      karmicOutcome: "Soulmate / Psycho-Magnetic",
      isResult: true,
    },
    {
      id: "A",
      title: "Affection (Sneha)",
      description:
        "Jupiter's protective benevolence. Characterized by unconditional warmth, gentle respect, and unpossessive non-violence. Ideal for long-term emotional coaching and familial support.",
      rulingPlanet: "Jupiter / Guru",
      elementalForce: "Ether (Akasha)",
      karmicOutcome: "Guardian / Lunar Ties",
    },
    {
      id: "M",
      title: "Marriage (Vivaha)",
      description:
        "7th House (Kalatra Bhava) axis. Pragmatic partnership, legal and societal sanctity. Unrestrained with procreation, and institutional endurance through cyclic domestic karma.",
      rulingPlanet: "Venus / Sun / Mars",
      elementalForce: "Earth (Prithvi)",
      karmicOutcome: "Dharmic Structural Ties",
    },
    {
      id: "E",
      title: "Enmity (Shatru & Vivada)",
      description:
        "Combust Mars and nodal collision. Creates constant friction, cyclic discord, emotional arena battles and media gridlock or zero-gravity. Requires conscious ego de-escalation.",
      rulingPlanet: "Mars / Rahu / Ketu",
      elementalForce: "Fire (Agni)",
      karmicOutcome: "Frictional / Karmic Debt",
    },
    {
      id: "S",
      title: "Sibling (Sahodara)",
      description:
        "3rd House maternal bond. Comforting, non-sexual protective matrix. High psychological familiarity where secrets are safe, yet lacking the romantic polarities of physical attraction.",
      rulingPlanet: "Mars / Moon",
      elementalForce: "Earth / Water",
      karmicOutcome: "Supportive / Blood Ties",
    },
  ],
  ephemeris: [
    {
      metric: "Vowel-to-Consonant Ratio",
      subjectA: "7 Vowels / 7 Consonants (1.00)",
      subjectB: "4 Vowels / 5 Consonants (0.80)",
      concordance: "Optima (Balance / Open Vessel Resonant)",
      astralVector: "72.4% Harmony",
    },
    {
      metric: "Pythagorean / Chaldean Name Root",
      subjectA: "Number 4 (Rahu / Uranus)",
      subjectB: "Number 6 (Venus / Shukra)",
      concordance: "Trine (5/9) Sovereign Polarity (Yin-Yang Polarity)",
      astralVector: "Resonant / Active - Passive",
    },
    {
      metric: "Ruling Swara Syllable (Vedic Sound)",
      subjectA: "1st Akshara 'Aa' (Sun / Agni)",
      subjectB: "1st Akshara 'Aa' (Sun / Agni)",
      concordance: "Deva Gana - Matsurya Constituent Union",
      astralVector: "Dharmic / Lunar Axis",
    },
    {
      metric: "Tattva / Elemental Harmony",
      subjectA: "Agni / Fire (Luminous Expansion)",
      subjectB: "Jala / Water (Emotive Sensitivity)",
      concordance: "Fertile Soil Conduit (Nurturing & Sustaining)",
      astralVector: "Complementary",
    },
    {
      metric: "Syllable Energy Engram (Guna Markers)",
      subjectA: "Rajas (Active / Restless)",
      subjectB: "Sattva (Static / Passive)",
      concordance: "Psycho-Motoric Homeostasis Complementary",
      astralVector: "91.8% Balance",
    },
  ],
  protocols: [
    {
      id: "mantra",
      type: "CODE: MANTRA_304",
      title: "Shukra-Lakshmi Beeja Mantra",
      description:
        "Chant 'Om Dram Drim Draum Sah Shukraya Namah' 108 times at sunrise on Friday morning to enhance relational sweetness and empathy.",
      instructions: "Frequency: 108 Japas (Venus Protocol)",
      frequency: "108 Japas (Venus Protocol)",
    },
    {
      id: "gem",
      type: "MINERAL // AURA SHIELD",
      title: "Ceylon White Zircon & Emerald",
      description:
        "Wear an untreated White Zircon paired with a Zambian Emerald in a silver alloy on the right ring and little fingers to neutralize sudden conversational misunderstandings.",
      instructions: "Calibration: 5kt / 4kt Pushkaram // Mercury Matrix",
      frequency: "Calibration: 5kt / 4kt Pushkaram // Mercury Matrix",
    },
    {
      id: "seva",
      type: "KARMIC CHARITY INDEX",
      title: "Shukla Panchami Seva",
      description:
        "Perform joint food offerings to white animals (cows/doves) during waxing moon (Shukla Paksha) Panchami. It accelerates white aura expansion in point-type reticule.",
      instructions: "Conductor: Lunar - Venus Post Wane Node",
      frequency: "Conductor: Lunar - Venus Post Wane Node",
    },
  ],
};

import { MobileTelemetryData } from "../types/mobile-number-calculator.types";

export const MOCK_MOBILE_DATA: MobileTelemetryData = {
  stats: {
    compoundTotal: {
      value: "53 ➔ 8",
      desc: "Gross total of all digits reduced to a single root number. Saturn dictates this cellular channel's destiny.",
    },
    rootReduction: {
      value: "29 ➔ 11 / 2",
      desc: "Master Number 11 active. Your birth destiny interacts with your mobile root to create an intuitive sub-frequency.",
    },
    synastryMatch: {
      value: "94.6%",
      desc: "The numerological compatibility between your personal birth numbers and the cellular vector path.",
    },
    cellularResonance: {
      value: "639 Hz",
      desc: "Root frequency equivalent of the mobile transmission wave. Resonates with Heart Chakra & Relational Unity.",
    },
  },
  navagrahaAlignment: [
    { digit: 9, ruler: "Mars" },
    { digit: 8, ruler: "Saturn" },
    { digit: 2, ruler: "Moon" },
    { digit: 0, ruler: "Void" },
    { digit: 1, ruler: "Sun" },
    { digit: 5, ruler: "Mercury" },
    { digit: 7, ruler: "Ketu" },
    { digit: 8, ruler: "Saturn" },
    { digit: 9, ruler: "Mars" },
  ],
  phaseDistribution: {
    primary: { value: "9-8-2-0", percentage: 40 },
    secondary: { value: "1-5-7", percentage: 30 },
    terminal: { value: "8-9", percentage: 30 },
    synthesis:
      "Dominant Martian-Saturnian sequence. Creates immense discipline but requires extreme patience for business ventures. The 8-9 terminal pair accelerates karmic resolution.",
  },
  pillars: [
    {
      title: "Total Compound Root (53 ➔ 8)",
      subtitle: "PILLAR 1 / OVERARCHING FREQUENCY",
      content:
        "Saturn rules this cellular channel. Attracts hard work, delayed but massive success, and structural expansion. Not ideal for quick sales, but excellent for heavy industry, real estate, and long-term legacy ventures.",
      icon: "total",
    },
    {
      title: "Highest Frequency (8 x 3)",
      subtitle: "PILLAR 2 / VIBRATIONAL DOMINANCE",
      content:
        "The number 8 appears 3 times, amplifying Saturnian energy. Prepare for immense responsibility. Legal matters or authority figures may frequently contact this number.",
      icon: "highest",
    },
    {
      title: "Consecutive Pairs / 0-Presence",
      subtitle: "PILLAR 3 / KINETIC PAIRS",
      content:
        "Presence of 0 acts as a karmic amplifier for adjacent 2 (Moon). 8-9 pairing at the end ensures that every connection resolves quickly, for better or worse.",
      icon: "pairs",
    },
    {
      title: "Karmic DOS Suitability",
      subtitle: "PILLAR 4 / FINAL ALIGNMENT",
      content:
        "92 / 100 (Excellent) - Mismatched for fast-retail. Perfect for large-scale enterprise, legal counsel, or heavy infrastructure domains.",
      icon: "suitability",
    },
  ],
  matrix: [
    {
      number: 1,
      planetaryRuler: "Surya (Sun)",
      wealthBusiness: "High - Leadership, Authority",
      relationshipsHealth: "Average - Dominance can cause friction",
      suitabilityStatus: "CEO, Govt, Managers",
      statusType: "success",
    },
    {
      number: 2,
      planetaryRuler: "Chandra (Moon)",
      wealthBusiness: "Average - Fluctuating Income",
      relationshipsHealth: "High - Empathy, Support, Care",
      suitabilityStatus: "Therapy, Arts, PR",
      statusType: "info",
    },
    {
      number: 3,
      planetaryRuler: "Brihaspati (Jupiter)",
      wealthBusiness: "High - Wealth, Expansion",
      relationshipsHealth: "High - Wisdom, Harmony",
      suitabilityStatus: "Education, Finance, Consulting",
      statusType: "success",
    },
    {
      number: 4,
      planetaryRuler: "Rahu (North Node)",
      wealthBusiness: "Unpredictable - Sudden Gains/Losses",
      relationshipsHealth: "Low - Misunderstandings",
      suitabilityStatus: "Tech, Crypto, Unorthodox",
      statusType: "warning",
    },
    {
      number: 5,
      planetaryRuler: "Budha (Mercury)",
      wealthBusiness: "Excellent - Trade, Commerce",
      relationshipsHealth: "High - Communication, Networking",
      suitabilityStatus: "Sales, Media, Trading",
      statusType: "success",
    },
    {
      number: 6,
      planetaryRuler: "Shukra (Venus)",
      wealthBusiness: "High - Luxury, Entertainment",
      relationshipsHealth: "Excellent - Love, Magnetism",
      suitabilityStatus: "Fashion, Arts, Hospitality",
      statusType: "success",
    },
    {
      number: 7,
      planetaryRuler: "Ketu (South Node)",
      wealthBusiness: "Low - Material Detachment",
      relationshipsHealth: "Average - Spiritual, Distant",
      suitabilityStatus: "Research, Occult, Analysis",
      statusType: "warning",
    },
    {
      number: 8,
      planetaryRuler: "Shani (Saturn)",
      wealthBusiness: "Slow/Massive - Hard Work, Legacy",
      relationshipsHealth: "Low - Delays, Isolation",
      suitabilityStatus: "Real Estate, Industry",
      statusType: "info",
    },
    {
      number: 9,
      planetaryRuler: "Mangala (Mars)",
      wealthBusiness: "High - Action, Real Estate",
      relationshipsHealth: "Average - Aggression, Heat",
      suitabilityStatus: "Defense, Surgery, Sports",
      statusType: "success",
    },
  ],
};

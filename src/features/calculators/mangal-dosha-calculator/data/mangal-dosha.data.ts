import { MangalDoshaTelemetryData } from "../types/mangal-dosha.types";

export const mockMangalDoshaData: MangalDoshaTelemetryData = {
  longitude: "145° 28' Leo (Simha)",
  nakshatra: "Purva Phalguni (2)",
  overallDoshaStatus: "33% (Low Dosha)",
  doshaPercentage: 33,

  radar: {
    housePlacement: "4th House from Ascendant (Sukha Bhava)",
    strength: "Strong Digbala",
    intensityVector: "33% Affliction",
    intensityLabel: "Average/Mild Intensity",
    mangalDegree: "25° 4' Leo",
    doshaStatusLabel: "Anshik (Mild/Partial)",
    dignity: "Mitra (Friend)",
  },

  diagnosticMatrix: [
    {
      id: "1",
      title: "1. Lagna Manglik",
      vantagePoint: "MARTIAN PLACEMENT FROM ASCENDANT (LAGNA)",
      badgeStatus: "Mild Affliction",
      description: "Assesses Mars from the Ascendant (Vapuh). Affliction occurs in Houses 1, 2, 4, 7, 8, or 12. Mars resides in the 4th House (Sukha), generating commanding friction towards domestic tranquility and baseline physical friction.",
      bottomLabel: "Bhava Status:",
      bottomValue: "4th House (Sukha Bhava)",
    },
    {
      id: "2",
      title: "2. Chandra Manglik",
      vantagePoint: "MARTIAN PLACEMENT FROM NATAL MOON (CHANDRA)",
      badgeStatus: "No Affliction",
      description: "Assesses Mars relative to the natal Moon positioned in Scorpio (Vrischika). Mars falls into the 10th House relative to Moon, forming an auspicious Chandra-Mangal Yoga dynamic that stimulates commercial execution and psychic resilience.",
      bottomLabel: "Moon Aspect:",
      bottomValue: "Chandra-Mangal Yoga Active",
    },
    {
      id: "3",
      title: "3. Sukra Manglik",
      vantagePoint: "MARTIAN PLACEMENT FROM VENUS (SUKRA)",
      badgeStatus: "Moderate Affliction",
      description: "Evaluates Mars relative to love/sex and Venus (Sukra). Mars is in the 12th House from Venus (Labha Bhava of cumulative gains), entirely bypassing marital discord and channeling passions into joint financial and survival prosperity.",
      bottomLabel: "Venus placement:",
      bottomValue: "12th House (Secret Board)",
    },
  ],

  cancellations: [
    {
      id: "YOGA #1",
      yogaType: "Mars in Aries (Mesha) or Scorpio (Vrischika) (Own Sign)",
      exception: "Complete Cancellation (Ruchaka Yoga formation)",
      archetypalResult: "Head/Soul Courage",
      isActive: false,
    },
    {
      id: "YOGA #2",
      yogaType: "Mars in Capricorn (Makara) (Exalted Position)",
      exception: "Complete Cancellation via Martial strength",
      archetypalResult: "Sovereign Catalyst",
      isActive: false,
    },
    {
      id: "YOGA #3",
      yogaType: "Jupiter in Kendra with Mars or Aspecting Mars (Guru-Mangala Synthesis)",
      exception: "Full Neutralization of Martian Spite into Sovereign Wisdom",
      archetypalResult: "ACTIVE CANCELLATION (100% Match)",
      isActive: true,
      matchScore: "100%",
    },
    {
      id: "YOGA #4",
      yogaType: "Mars in 2nd House in Gemini (Mithuna) or Virgo (Kanya)",
      exception: "Affliction expunged via Mercurial intellectualization",
      archetypalResult: "Inactive",
      isActive: false,
    },
    {
      id: "YOGA #5",
      yogaType: "Mars in 4th House in Aries or Scorpio",
      exception: "Domestic immunity through Utter Martial Affinity",
      archetypalResult: "Inactive",
      isActive: false,
    },
    {
      id: "YOGA #6",
      yogaType: "Mars in 7th House in Cancer (Karkata) or Capricorn (Makara)",
      exception: "Exemption via Nodal softening or Lunar Discipline",
      archetypalResult: "Inactive",
      isActive: false,
    },
    {
      id: "YOGA #7",
      yogaType: "Mars in 8th House in Sagittarius (Dhanu) or Pisces (Meena)",
      exception: "Longevity Exemption via Jupiter's Dharmic Waters",
      archetypalResult: "Inactive",
      isActive: false,
    },
    {
      id: "YOGA #8",
      yogaType: "Age Maturity: Transition Mars Matures Naturally at Age 28",
      exception: "Natural Karmic Softening of Aggressive Impulses",
      archetypalResult: "PART CANCELLATION (90% MATCH)",
      isActive: false, // it's highlighted differently, let's treat it as inactive for the main highlight, or we can use another prop. We'll use false.
    },
  ],

  remedies: {
    mantra: {
      eyebrow: "VEDIC SHOCK RESONANCE",
      title: "Consecrated Mangal Beej Mantra",
      primary: "ॐ क्रां क्रीं क्रौं सः भौमाय नमः",
      description: "Recite 108 iterations on Tuesday dawns facing south, while burning red coral or sandalwood rosary. This chants channels raw kinetic force into structured achievements rather than explosive anger.",
      footer: "Deity: Kartikeya / Hanuman",
    },
    gemstone: {
      eyebrow: "EARTH ELEMENTAL INTERVENTION",
      title: "Mineral & Gemstone Shield",
      primary: "Untreated Italian Red Coral (Moonga)",
      description: "7.5 carats mounted in copper or gold, worn on the right ring finger during Shukla Paksha Tuesday sunrise.",
      footer: "Alternative: Bloodstone",
    },
    charity: {
      eyebrow: "KARMIC RECALIBRATION",
      title: "Harmonization Deeds & Charity",
      primary: "Donate split red lentils (Masoor Dal), jaggery, or red cloth to local orphanages/laborers on Tuesdays.",
      description: "Recite the sacred Hanuman Chalisa daily at dusk. Dedicate 20 minutes to rigorous physical martial arts or bodyweight exercise to channel the kinetic force.",
      footer: "Direction: South",
    },
  },
};

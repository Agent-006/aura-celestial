import { AtmakarakaTelemetry } from "../types/atmakaraka.types";

export const MOCK_ATMAKARAKA_TELEMETRY: AtmakarakaTelemetry = {
  atmakaraka: {
    role: "AK",
    title: "The Soul Sovereign",
    planet: "Venus",
    degree: 28.45,
    sign: "Pisces",
    nakshatra: "Revati",
    house: 11,
    description:
      "Venus as Atmakaraka indicates a soul journey focused on unconditional love, relationships, diplomacy, and the arts. Your karma revolves around finding balance between material indulgence and spiritual devotion.",
    karmicLesson: "Learning to love without attachment or expectation.",
  },
  darakaraka: {
    role: "DK",
    title: "The Sacred Partner",
    planet: "Mars",
    degree: 3.12,
    sign: "Capricorn",
    nakshatra: "Uttarashada",
    house: 9,
    description:
      "Mars as Darakaraka suggests a partner who is driven, protective, logical, and perhaps a bit dominant. The relationship will act as a catalyst for action and spiritual truth.",
    karmicLesson: "Transmuting conflict into constructive passion.",
  },
  sevenMinisters: [
    {
      role: "AK",
      title: "Soul (Atmakaraka)",
      planet: "Venus",
      degree: 28.45,
      sign: "Pisces",
      nakshatra: "Revati",
      house: 11,
    },
    {
      role: "AmK",
      title: "Career (Amatyakaraka)",
      planet: "Saturn",
      degree: 25.1,
      sign: "Aquarius",
      nakshatra: "Shatabhisha",
      house: 10,
    },
    {
      role: "BK",
      title: "Siblings (Bhratrikaraka)",
      planet: "Jupiter",
      degree: 18.33,
      sign: "Sagittarius",
      nakshatra: "Purva Ashadha",
      house: 8,
    },
    {
      role: "MK",
      title: "Mother (Matrikaraka)",
      planet: "Moon",
      degree: 15.05,
      sign: "Cancer",
      nakshatra: "Pushya",
      house: 3,
    },
    {
      role: "PK",
      title: "Children (Putrakaraka)",
      planet: "Mercury",
      degree: 12.4,
      sign: "Aries",
      nakshatra: "Ashvini",
      house: 12,
    },
    {
      role: "GK",
      title: "Obstacles (Gnatikaraka)",
      planet: "Sun",
      degree: 8.22,
      sign: "Leo",
      nakshatra: "Magha",
      house: 4,
    },
    {
      role: "DK",
      title: "Spouse (Darakaraka)",
      planet: "Mars",
      degree: 3.12,
      sign: "Capricorn",
      nakshatra: "Uttarashada",
      house: 9,
    },
  ],
  navamsaPlacement: {
    sign: "Pisces",
    house: 1,
    dignity: "Exalted",
  },
  synergyCalculus: [
    {
      title: "Elemental Synergy",
      score: 85,
      description:
        "Venus (Water/Pisces) and Mars (Earth/Capricorn) create a highly productive and nurturing union.",
    },
    {
      title: "Karmic Alignment",
      score: 92,
      description:
        "Deep past-life connections. The partner acts as a spiritual anchor for the soul's evolution.",
    },
    {
      title: "Dynamic Friction",
      score: 40,
      description:
        "Low friction. Occasional clashes between Venusian diplomacy and Martian assertiveness.",
    },
  ],
  protocols: {
    coreUpaya:
      "Donate white garments or sweets on Fridays. Practice compassion towards women and artists.",
    gemstone:
      "Diamond or White Sapphire (Wear only after full chart consultation)",
    austerities: [
      "Chant the Kamalatmika Mantra during Venus Hora.",
      "Observe silence (Mauna) for 2 hours every Friday.",
      "Cultivate absolute loyalty in partnerships.",
    ],
  },
};

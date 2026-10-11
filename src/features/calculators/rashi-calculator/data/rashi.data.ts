import { RashiTelemetryData } from "../types/rashi.types";

export const mockRashiData: RashiTelemetryData = {
  tropical: {
    signName: "Sagittarius Moon (Dhanu Tropical)",
    degrees: "14° 42' 10\"",
    element: "Fire (Agni)",
    modality: "Mutable (Dwisvabhava)",
    archetype: "The Philosopher/Seeker",
    polarity: "Masculine / Positive",
    description:
      "In Tropical (Seasonal) astrology, a Sagittarius Moon manifests an emotional core that is expansive, freedom-seeking, and driven by an intense need for truth and meaning. Inner security is found in exploration, philosophical wandering, and limitless learning.",
  },
  sidereal: {
    signName: "Vrischika Rashi (वृश्चिक) - Scorpio Sidereal",
    sanskritName: "Vrischika",
    degrees: "11° 12' 48\"",
    lordGraha: "Mangala (Mars) & Ketu",
    tattva: "Jala (Water)",
    nakshatra: "Anuradha (Mitra)",
    pada: 3,
    description:
      "In Vedic astrology, the Moon is debilitated (Neecha) in Scorpio. This creates a profound emotional intensity, psychic sensitivity, and a capacity for deep transformation. The native may experience emotional extremes, hidden vulnerabilities, but also incredible resilience and healing power.",
  },
  phaseDuration: {
    tropicalProgress: 60,
    siderealProgress: 45,
    tropicalTimeRemaining: "12h 15m",
    siderealTimeRemaining: "18h 30m",
  },
  destinyPoints: [
    {
      id: "1",
      title: "1. Manasvi, Auric Core",
      description:
        "Your Moon (Chandra) Rashi is the lens of your mind (Manas) and the filter for all karmic experience. It represents your emotional responses, deeper subconscious drives, and the way you connect to the world at a soul level.",
      iconType: "core",
    },
    {
      id: "2",
      title: "2. The 120-Year Vimshottari Engine",
      description:
        "Vedic astrology timelines are calculated entirely from the exact degree of your Moon. The Nakshatra your Moon is placed in determines your starting planetary period (Dasha), dictating the unfolding timeline of your life's major events.",
      iconType: "vimshottari",
    },
    {
      id: "3",
      title: "3. Daily Gochar & Sade Sati",
      description:
        "Transits (Gochar) of major planets (Saturn, Jupiter, Rahu, Ketu) are analyzed from your Moon sign. Most importantly, the infamous 7.5-year cycle of Saturn (Sade Sati) revolves around the Moon's placement in your birth chart.",
      iconType: "gochar",
    },
  ],
  remedies: {
    mantra: {
      title: "PRIMARY MANTRA",
      primary: "ॐ सों सोमाय नमः",
      description:
        "Recite 108 times daily on Mondays or during the Moon's hora to soothe an afflicted or intense Moon. Calms emotional turbulence and brings mental peace.",
      footer: "Deity: Shiva / Chandra (Soma)",
    },
    gemstone: {
      title: "GEMSTONE & METALS",
      primary: "Natural Pearl (Moti) / Moonstone",
      description:
        "Worn on the little finger to amplify the lunar energy (only if the Moon is a functional benefic for the Lagna). Balances the Jala tattva and promotes emotional grounding.",
      footer: "Metal: Silver (Chandi)",
    },
    colors: {
      title: "COLORS & LIFESTYLE",
      primary: "Radiant Milk White & Pure Silver",
      description:
        "Incorporate white clothing and silver items on Mondays. Avoid excessive black or dark blue colors which can suppress the lunar receptivity.",
      footer: "Charity: Rice, Milk, Sugar on Mondays",
    },
    lifestyle: {
      title: "MODERN LIFESTYLE",
      primary: "Lord Shiva (Chandrashekhara)",
      description:
        "Hydration is key. Spend time near bodies of water. Practice Yoga Nidra or meditation to center the mind and process deep emotional currents.",
      footer: "Focus: Emotional Regulation",
    },
  },
};

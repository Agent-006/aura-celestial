import { DashaTelemetryData } from "../types/dasha.types";

export const mockDashaData: DashaTelemetryData = {
  natalMoonLongitude: "223° 42' 10\" Scorpio",
  nakshatra: "Anuradha",
  pada: 3,
  activeCycle: {
    mahadashaLord: "Guru (Jupiter)",
    antardashaLord: "Shani (Saturn)",
    pratyantardashaLord: "Surya (Sun)",
    activeUntil: "Oct 14, 2026",
    elapsedPercentage: 65,
  },
  ephemerisCycle: [
    {
      lord: "Ketu (South Node)",
      spanYears: 7,
      karmicInfluence: "Spiritual detachment & past karmic settling",
      startEpoch: "Oct 01, 1994",
      completionEpoch: "Nov, 2001",
      functionalDignity: "Exalted in Scorpio 12th House",
      status: "PAST",
    },
    {
      lord: "Shukra (Venus)",
      spanYears: 20,
      karmicInfluence: "Aesthetic immersion, arts & relationship building",
      startEpoch: "Nov, 2001",
      completionEpoch: "Nov, 2021",
      functionalDignity: "Moolatrikona in Libra 11th House",
      status: "PAST",
    },
    {
      lord: "Surya (Sun)",
      spanYears: 6,
      karmicInfluence: "Soul authority, self-realization & vitality peak",
      startEpoch: "Nov, 2021",
      completionEpoch: "Nov, 2027",
      functionalDignity: "Digbala in 10th House Leo",
      status: "PAST",
    },
    {
      lord: "Guru (Jupiter)",
      spanYears: 16,
      karmicInfluence:
        "Spiritual expansion, higher dharma, progeny & academic synthesis",
      startEpoch: "Nov, 2027",
      completionEpoch: "Nov, 2043",
      functionalDignity: "Hamsa Yoga in 4th House Sagittarius",
      status: "ACTIVE",
    },
    {
      lord: "Shani (Saturn)",
      spanYears: 19,
      karmicInfluence:
        "Karmic consolidation, endurance, discipline & structural mastery",
      startEpoch: "Nov, 2043",
      completionEpoch: "Nov, 2062",
      functionalDignity: "Own Sign in Aquarius 3rd House",
      status: "FUTURE",
    },
    {
      lord: "Budha (Mercury)",
      spanYears: 17,
      karmicInfluence:
        "Intellectual dissemination, commerce, analytical mastery",
      startEpoch: "Nov, 2062",
      completionEpoch: "Nov, 2079",
      functionalDignity: "Bhadra Yoga in Gemini",
      status: "FUTURE",
    },
    {
      lord: "Chandra (Moon)",
      spanYears: 10,
      karmicInfluence:
        "Mind purification, emotional maturity & public connectivity",
      startEpoch: "Nov, 2079",
      completionEpoch: "Nov, 2089",
      functionalDignity: "Anuradha Nakshatra Ruler",
      status: "FUTURE",
    },
    {
      lord: "Mangala (Mars)",
      spanYears: 7,
      karmicInfluence:
        "Dynamic execution, courage matrix & overpowering predators",
      startEpoch: "Nov, 2089",
      completionEpoch: "Nov, 2096",
      functionalDignity: "Ruchaka Yoga in Aries 1st House",
      status: "FUTURE",
    },
    {
      lord: "Rahu (North Node)",
      spanYears: 18,
      karmicInfluence:
        "Material ambition, unconventional conquest & global amplification",
      startEpoch: "Nov, 2096",
      completionEpoch: "Nov, 2114",
      functionalDignity: "Taurus 2nd House Anchor",
      status: "FUTURE",
    },
  ],
  unfoldmentLevels: [
    {
      id: "1",
      title: "1. Mahadasha (The Climactic Epoch)",
      description:
        "The overarching planetary lord that dictates the global mindset and focus of a soul for up to 20 years. Ruled by the major Graha, it defines the overarching framework and alter karmic trajectory of your time-stream.",
      iconType: "mahadasa",
      tagText: "ONGOING EPOCH",
    },
    {
      id: "2",
      title: "2. Antardasha (The Event Catalyst)",
      description:
        "The secondary sub-period within the Mahadasha ruler. It triggers specific events like marriage, career shifts, geographical moves, and relational encounters within the broader environment established.",
      iconType: "antardasha",
      tagText: "CURRENT PHASE",
    },
    {
      id: "3",
      title: "3. Pratyantardasha & Gochar Synthesis",
      description:
        "Micro-timing down to days and weeks, where daily planetary transits (Gochar) intersect the sub-sub lords to precipitate concrete outcomes, sudden breakthroughs, or acute karmic obstacles.",
      iconType: "pratyantardasha",
      tagText: "PRECISION TIMING",
    },
  ],
  harmonization: {
    cycleName: "Guru-Shani",
    mantra: {
      title: "BRHASPATI MANTRA",
      text: "ॐ बृं बृहस्पतये नमः",
      description:
        "Recite 108 iterations of the Guru mantra at dawn on Thursdays, followed by Shani stotra at sunset to synchronize the expansive vision with structural discipline.",
    },
    materialFocus: {
      tags: ["Dharma Propagation", "Structural Authority"],
      description:
        "Saturn demands hard work and absolute discipline. This sub-period will test the foundations built during earlier Jupiter phases.",
    },
    actions: [
      "Commit to long-term goals and avoid speculative short-term gains.",
      "Engage in methodical structural planning and organization of your resources.",
      "Honor mentors, teachers, and elders in your community.",
      "Embrace routine and discipline; avoid procrastination.",
    ],
  },
};

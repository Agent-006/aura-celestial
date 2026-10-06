import { KaalSarpTelemetryData } from "../types/kaal-sarp.types";

export const MOCK_KAAL_SARP_DATA: KaalSarpTelemetryData = {
  stats: {
    encasementPercentage: "100%",
    encasementLabel: "Absolute Encasement (All planets inside nodal axis)",
    orbitalDirectionality: "Savya",
    orbitalLabel:
      "(Ketu to Rahu)\nAll planets moving sequentially toward Ketu (Bhoga)",
    nodalAxisDistance: "180° 00' 00\"",
    nodalLabel:
      "Exact Opposition\n0° 04' 22\" Ascendant -> 6° 12' 14\" Rahu/Ketu",
    doshaSeverityMetric: "92.5%",
    doshaLabel:
      "High Tension\nPure Anant Configuration (1st House - 7th House Trajectory)",
  },
  formations: [
    {
      id: "anant",
      title: "Anant Kaal Sarp",
      subtitle: "FORMATION 01 // 1ST - 7TH AXIS",
      description:
        "Rahu in Ascendant, Ketu in 7th. Severe challenges in domestic life, self-expression, and marital tension primarily governed by unstable mental peace and recurring public/partnership struggles.",
      statusLabel: "Phase 3: Active Status",
      isActive: true,
    },
    {
      id: "kulik",
      title: "Kulik Kaal Sarp",
      subtitle: "FORMATION 02 // 2ND - 8TH AXIS",
      description:
        "Rahu in 2nd, Ketu in 8th. Financial instability, vocal harshness, and health constraints. High risk of wealth fluctuation and sudden shocks in joint finances (8th House).",
      statusLabel: "Phase 1: Dormant",
      isActive: false,
    },
    {
      id: "vasuki",
      title: "Vasuki Kaal Sarp",
      subtitle: "FORMATION 03 // 3RD - 9TH AXIS",
      description:
        "Rahu in 3rd, Ketu in 9th. Sibling friction, extreme courage but faltering fortunes (Bhagya), and potential clashes with authority/father figures. Struggles with dharma.",
      statusLabel: "Phase 1: Dormant",
      isActive: false,
    },
    {
      id: "shankhpal",
      title: "Shankhpal Kaal Sarp",
      subtitle: "FORMATION 04 // 4TH - 10TH AXIS",
      description:
        "Rahu in 4th, Ketu in 10th. Disturbances in domestic peace (4th), mother's health, and unstable career trajectory (10th). Constant friction between work & home balance.",
      statusLabel: "Phase 1: Dormant",
      isActive: false,
    },
    {
      id: "padam",
      title: "Padam Kaal Sarp",
      subtitle: "FORMATION 05 // 5TH - 11TH AXIS",
      description:
        "Rahu in 5th, Ketu in 11th. Delay/anxiety concerning children, speculative losses, and blocked network/friendship gains (11th). Education disruptions.",
      statusLabel: "Phase 1: Dormant",
      isActive: false,
    },
    {
      id: "mahapadam",
      title: "Mahapadam Kaal Sarp",
      subtitle: "FORMATION 06 // 6TH - 12TH AXIS",
      description:
        "Rahu in 6th, Ketu in 12th. Chronic adversaries, litigation concerns, and hidden enemies. Unexpected hospitalization or overseas travel challenges (12th House isolation).",
      statusLabel: "Phase 1: Dormant",
      isActive: false,
    },
    {
      id: "takshak",
      title: "Takshak Kaal Sarp",
      subtitle: "FORMATION 07 // 7TH - 1ST AXIS",
      description:
        "Rahu in 7th, Ketu in 1st. Extreme marital problems or delayed unions. Loss in business partnerships and a recurring feeling of self-doubt and existential crisis.",
      statusLabel: "Phase 1: Dormant",
      isActive: false,
    },
    {
      id: "karkotak",
      title: "Karkotak Kaal Sarp",
      subtitle: "FORMATION 08 // 8TH - 2ND AXIS",
      description:
        "Rahu in 8th, Ketu in 2nd. Unexpected tragedies, hidden wealth gains followed by massive losses. Vocal deceit, dietary imbalances, and legacy/inheritance battles.",
      statusLabel: "Phase 1: Dormant",
      isActive: false,
    },
    {
      id: "shankhchud",
      title: "Shankhchud Kaal Sarp",
      subtitle: "FORMATION 09 // 9TH - 3RD AXIS",
      description:
        "Rahu in 9th, Ketu in 3rd. Loss of religious devotion, anti-tradition stance, or hypocritical gurus. Misguided efforts and lacking luck in long-distance travels.",
      statusLabel: "Phase 1: Dormant",
      isActive: false,
    },
    {
      id: "ghatak",
      title: "Ghatak Kaal Sarp",
      subtitle: "FORMATION 10 // 10TH - 4TH AXIS",
      description:
        "Rahu in 10th, Ketu in 4th. Highly erratic professional rises and steep falls. Maternal unrest, property loss, and significant stress in hierarchical dynamics.",
      statusLabel: "Phase 1: Dormant",
      isActive: false,
    },
    {
      id: "vishdhar",
      title: "Vishdhar Kaal Sarp",
      subtitle: "FORMATION 11 // 11TH - 5TH AXIS",
      description:
        "Rahu in 11th, Ketu in 5th. Blocked incoming earnings, erratic friendships, and difficulty in translating creative intellect (5th) into financial gain (11th).",
      statusLabel: "Phase 1: Dormant",
      isActive: false,
    },
    {
      id: "sheshnag",
      title: "Sheshnag Kaal Sarp",
      subtitle: "FORMATION 12 // 12TH - 6TH AXIS",
      description:
        "Rahu in 12th, Ketu in 6th. Subconscious fears, sleep deprivation, spiritual isolation. Constant covert opposition from enemies and unpredictable debts.",
      statusLabel: "Phase 1: Dormant",
      isActive: false,
    },
  ],
  vectors: [
    {
      graha: "Surya (Sun)",
      siderealLongitude: "Gemini / 14° 12' 45\"",
      housePosition: "2nd House",
      nakshatraPada: "Ardra / Pada 3",
      encasementStatus: "Severely Encased (Approaching Opposition Vector)",
      axisMetric: "82% INTERNAL",
      isEncased: true,
    },
    {
      graha: "Chandra (Moon)",
      siderealLongitude: "Scorpio / 04° 18' 22\"",
      housePosition: "7th House",
      nakshatraPada: "Anuradha / Pada 1 (Nodal Conj.)",
      encasementStatus: "PARTIAL ESCAPE / CONJUNCT KETU (Chandra Grahan)",
      axisMetric: "99% BOUND",
      isEncased: true,
    },
    {
      graha: "Mangala (Mars)",
      siderealLongitude: "Sagittarius / 22° 41' 05\"",
      housePosition: "8th House",
      nakshatraPada: "Purvashadha / Pada 3",
      encasementStatus: "Asymmetrically Bound (6th House relative to Rahu)",
      axisMetric: "ENCASED",
      isEncased: true,
    },
    {
      graha: "Budha (Mercury)",
      siderealLongitude: "Taurus / 24° 55' 18\"",
      housePosition: "1st House",
      nakshatraPada: "Mrigashira / Pada 1",
      encasementStatus: "Highly Intertwined / Combust / Springing towards Rahu",
      axisMetric: "ENCASED",
      isEncased: true,
    },
    {
      graha: "Guru (Jupiter)",
      siderealLongitude: "Pisces / 16° 04' 11\"",
      housePosition: "11th House",
      nakshatraPada: "Uttara Bhadrapada / Pada 4",
      encasementStatus: "OUTSIDE ORBITAL / SAVIOUR VECTOR (Guru Kripa)",
      axisMetric: "100% EXTERN",
      isEncased: false,
    },
    {
      graha: "Shukra (Venus)",
      siderealLongitude: "Aries / 02° 11' 14\"",
      housePosition: "12th House",
      nakshatraPada: "Ashwini / Pada 1",
      encasementStatus: "Encased within 12th House (Secretive pleasure blocks)",
      axisMetric: "ENCASED",
      isEncased: true,
    },
    {
      graha: "Shani (Saturn)",
      siderealLongitude: "Capricorn / 18° 14' 59\"",
      housePosition: "9th House",
      nakshatraPada: "Shravana / Pada 3",
      encasementStatus: "Retrograde Encased (Delayed Karmic Unwinding 9H)",
      axisMetric: "ENCASED",
      isEncased: true,
    },
  ],
  protocols: [
    {
      id: "mantra",
      type: "VIBRATIONAL NULLIFICATION // 432HZ",
      title: "Maha Mrityunjaya & Rahu Shanti",
      description:
        "Recitation of the Maha Mrityunjaya Mantra coupled with Rahu Beej Mantra.",
      instructions:
        "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात्॥",
      frequency:
        "Recite 108 Times daily for 40 days to neutralize nodal illusion.",
    },
    {
      id: "yantra",
      type: "PHYSICAL ANCHOR",
      title: "Trimbakeshwar Rudrabhisheka",
      description: "Canonical pacification ritual performed at Jyotirlinga.",
      instructions:
        "Conduct specialized Kaal Sarp Dosha Nivaran Puja at Trimbakeshwar, Ujjain, or Kalahasti.",
      frequency: "Perform Once a Year during Shravan Maas.",
    },
    {
      id: "puja",
      type: "DAANA // OFFERINGS",
      title: "Mineral Harmonic Pacifier",
      description: "Silver snake (Naag-Naagin Joda) offering in flowing water.",
      instructions:
        "Offer a pair of silver snakes with black sesame seeds (til) and raw milk into a flowing river on Amavasya.",
      frequency: "Perform strictly on Amavasya (New Moon).",
    },
  ],
};

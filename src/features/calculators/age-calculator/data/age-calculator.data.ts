import { AgeTelemetryData } from "../types/age-calculator.types";

export const MOCK_AGE_DATA: AgeTelemetryData = {
  stats: {
    biologicalAge: {
      value: "29y 5m 14d",
      desc: "Based on solar Gregorian calendar minus sidereal deviation.",
    },
    vedicTemporal: {
      value: "26,895 Ghatis",
      desc: "Measured in Pranas, Vighatis, Ghatis & Ahoratras.",
    },
    solarReturns: {
      value: "29 Completed",
      desc: "Varshphal cycles fully closed.",
    },
    lunarAge: { value: "364 Lunations", desc: "Synodic lunar months elapsed." },
  },
  orbital: {
    metrics: {
      heartbeats: "913,536,000",
      breaths: "232,192,800",
      earthDistance: "2,784 Billion km",
      solarSystemDistance: "204.6 Billion km",
    },
    cycles: {
      mars: "15.6y",
      jupiter: "2.48y",
      saturn: "1.00y",
      uranus: "0.35y",
      neptune: "0.18y",
    },
    arcPercentage: 24.5,
  },
  pillars: [
    {
      title: "Biological vs. Chronobiological Resonance",
      value: "94.2% Fortitude",
      description:
        "Synchronizing biological scale micro-degradation against the natal Sun-Moon angular arc. We have noted age scalar value against 29.45 years, cellular primor-mortal rate signature maps out max 94.2% capacity index.",
      icon: "pulse",
    },
    {
      title: "Varshphal & Muntha Trajectory (Year 30)",
      value: "10th House (Midheaven)",
      description:
        "The annual solar return chart (Tajika/Varshphal) calculates the exact moment the transit Sun re-enters its precise natal degree (19°41'21\"). For the upcoming 30th ingress, Muntha traverses through 10th House of Career Ascension.",
      icon: "sun",
    },
    {
      title: "Ghati-Pala-Vipala Vedic Decomposition",
      value: "1,613,700 Palas",
      description:
        "Vedic time uses strict divisions mapping solar/lunar mechanics. 60 Ghatis equal 24hrs; 60 Palas equal 1 Ghati; 60 Vipalas equal 1 Pala. Your life span converted accurately in cosmic ticks.",
      icon: "clock",
    },
    {
      title: "Astrological Milestone Countdown",
      value: "Sat Return: 124 Days",
      description:
        "Synchronous events that calibrate major life transitions. Saturn Return is imminent; transits cross Chandra, Rahu cross Chandra. Guru Chandalika and the exact Varshphal Solar ingress.",
      icon: "moon",
    },
  ],
  revolutions: [
    {
      graha: "Surya (Sun)",
      orbitalPeriod: "365.25 Days (1 Earth Yr)",
      revolutions: "29.45 Revolutions",
      planetaryAge: "29.45 Solar Years",
      nextReturn: "May 14, 2027 (Varshphal)",
      status: "Varshphal Incoming Transit",
    },
    {
      graha: "Chandra (Moon)",
      orbitalPeriod: "27.32 Days (Sidereal)",
      revolutions: "394.12 Revolutions",
      planetaryAge: "394.12 Lunar Months",
      nextReturn: "June 02, 2026 (Lunar Return)",
      status: "Approaching Lunar Return",
    },
    {
      graha: "Kuja (Mars)",
      orbitalPeriod: "687.00 Days (1.88 Yrs)",
      revolutions: "15.66 Revolutions",
      planetaryAge: "15.66 Martian Years",
      nextReturn: "Feb 18, 2028 (16th Return)",
      status: "Neutral Transit - Post-Kuja Dosha",
    },
    {
      graha: "Shukra (Venus)",
      orbitalPeriod: "224.70 Days (0.62 Yrs)",
      revolutions: "47.88 Revolutions",
      planetaryAge: "47.88 Venus Years",
      nextReturn: "Aug 12, 2026 (48th Return)",
      status: "Karmic Conjunction : Darakaraka (Spouse / Desire)",
    },
    {
      graha: "Guru (Jupiter)",
      orbitalPeriod: "4332.59 Days (11.86 Yrs)",
      revolutions: "2.48 Revolutions",
      planetaryAge: "2.48 Jovian Years",
      nextReturn: "Nov 05, 2027 (Jupiter Return)",
      status: "3rd Jupiter Return Approaching",
    },
    {
      graha: "Shani (Saturn)",
      orbitalPeriod: "10759.22 Days (29.45 Yrs)",
      revolutions: "1.00 Revolutions",
      planetaryAge: "1.00 Saturn Years",
      nextReturn: "ACTIVE IMMEDIATELY",
      status: "SATURN RETURN IN PROGRESS",
    },
  ],
  sadhana: [
    {
      title: "Solar Return (Varshphal) Ingress Havan",
      date: "14 May, 2027 • 06:45 AM",
      description:
        "Perform Ayush Havan precisely at Varshphal ingress. The Sun re-enters exact natal degree. This secures vitality and longevity for the coming solar cycle.",
      type: "success",
    },
    {
      title: "Ayushyahoma Maha Mrityunjaya Japa",
      date: "Every Ekadashi (Bimonthly)",
      description:
        "Due to Saturn Return phase, perform 108 japa of Maha Mrityunjaya mantra to alleviate karmic friction in chronological aging.",
      type: "warning",
    },
    {
      title: "Sidereal Daanam at Lunar Ingress",
      date: "2nd June, 2026 • Chandra Ingress",
      description:
        "Donation of white food items (sugar, rice, milk) at exact lunar natal recurrence. Balances the 395th lunar cycle emotional turbulence.",
      type: "info",
    },
  ],
};

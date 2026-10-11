import React from "react";
import { DestinyTelemetryData } from "../types/destiny-number-calculator.types";

export const MOCK_DESTINY_DATA: DestinyTelemetryData = {
  telemetry: {
    destinyRoot: {
      value: "9",
      desc: "Total Life Sovereignty / The Warrior. Dictates The 'Overarching Karmic Mission' of Universal Service.",
    },
    governingPlanet: {
      value: "Mangala ♂",
      desc: "Supreme Commander of Navagraha. Aggression, Execution, Leadership, Real Estate, Blood.",
    },
    compoundResonance: {
      value: "36 ➔ 9",
      desc: "3 (Jupiter) + 6 (Venus) = 9 (Mars). Synthesizes Wisdom & Art into Martial Perfection.",
    },
    cellularFrequency: {
      value: "639 Hz",
      desc: "Inter-dimensional Harmonic. Integrates left & right brain. Restores cellular relationships.",
    },
  },
  pinnacleCycles: [
    {
      title: "BASE FRAME",
      calculation: "18 ➔ 9",
      description:
        "Early maturity matrix. Indicates intense struggle leading to rapid character synthesis.",
      keywords: [
        "Karmic Ignition",
        "Evolutionary Zenith",
        "Dharmic Realization",
        "Universal Teacher",
      ],
    },
    {
      title: "MATURITY CYCLE",
      calculation: "36 ➔ 9",
      description:
        "Mid-life apex. Requires massive energy expenditure for societal restructuring.",
      keywords: ["Evolutionary Zenith"],
    },
    {
      title: "MASTER CULMINATION",
      calculation: "54 ➔ 9",
      description:
        "Final phase synthesis. Attainment of legacy through universal service and detachment.",
      keywords: ["Universal Teacher"],
    },
  ],
  pillars: {
    mission: {
      title: "Karmic Life Mission & Sovereign Calling",
      content:
        "Bhagyank 9 (Destiny 9) represents the culmination of the single-digit matrix. You are here to serve the collective, not the personal micro-system. You possess fierce determination and immense stamina. If you do not channel this martial energy towards humanitarian or systemic philosophy, it turns inward to breed frustration and destructive ego-clashes.",
      coreLesson:
        "Transcending individual ego to embrace global service. Channeling martial Kuja energy into constructive, non-destructive formats.",
    },
    concordance: {
      title: "Inter-Number Harmonic Concordance",
      naturalAffinities: "1 (Sun), 2 (Moon), 3 (Jupiter)",
      neutralTolerant: "5 (Mercury), 6 (Venus)",
      incompatibleTension: "4 (Rahu), 8 (Saturn)",
    },
    coordinates: {
      title: "Auspicious Coordinates & Catalysts",
      favorableYears:
        "Age: 18, 27, 36, 45, 54, 63\n(Highest peak at 36 / Zenith)",
      favorableColors: "Red, Rose, Crimson\n(Avoid deep green/black)",
      favorableDays: "Tuesday (Mars Hora)\nThursday (Jup. Harmony)",
      optimalGemstone: "Red Coral (Moonga)\n(Minimum 5.25 Ratti)",
    },
    evolution: {
      title: "Life Stage Evolution & Maturation",
      foundationPhase:
        "Training through physical stamina tests, encountering aggressive environments, early leadership dynamics in peer groups.",
      zenithPhase:
        "Mid-life brings extreme authority. Risk of burnout is severe if energy is not directed towards systemic repair rather than personal glory.",
      maturationPhase:
        "Transition from warrior to 'elder general'. Embracing detachment and advising others. Letting go of personal anger to achieve cosmic peace.",
    },
  },
  matrix: [
    {
      number: 1,
      ruler: "Surya (Sun)",
      element: "Agni (Fire)",
      archetype: "Creator, Pioneer, Leader, Innovator, Ego, Dictator",
      allies: "2, 3, 9",
      opponents: "6, 8",
      statusType: "success",
    },
    {
      number: 2,
      ruler: "Chandra (Moon)",
      element: "Jala (Water)",
      archetype: "Diplomat, Healer, Intuitive, Mother, Emotional Dependency",
      allies: "1, 3",
      opponents: "4, 8, 9",
      statusType: "info",
    },
    {
      number: 3,
      ruler: "Brihaspati (Jup)",
      element: "Akasha (Ether)",
      archetype: "Teacher, Visionary, Broad Expansion, Joy, Over-indulgence",
      allies: "1, 2, 9",
      opponents: "6",
      statusType: "success",
    },
    {
      number: 4,
      ruler: "Rahu (North Node)",
      element: "Vayu (Air)",
      archetype: "Subverter, Unorthodox, Technologist, Illusionist, Anxiety",
      allies: "5, 6, 7, 8",
      opponents: "1, 2, 9",
      statusType: "warning",
    },
    {
      number: 5,
      ruler: "Budha (Mercury)",
      element: "Prithvi (Earth)",
      archetype: "Communicator, Dynamic Versatility, Trader, Restlessness",
      allies: "1, 4, 6",
      opponents: "2",
      statusType: "success",
    },
    {
      number: 6,
      ruler: "Shukra (Venus)",
      element: "Jala (Water)",
      archetype: "Aesthete, Harmonizer, Romantic, Luxury, Over-attachment",
      allies: "4, 5, 8",
      opponents: "1, 2, 3",
      statusType: "success",
    },
    {
      number: 7,
      ruler: "Ketu (South Node)",
      element: "Akasha (Ether)",
      archetype: "Mystic, Analyst, Ascetic, Detachment, Extreme Isolation",
      allies: "4, 5",
      opponents: "1, 2",
      statusType: "warning",
    },
    {
      number: 8,
      ruler: "Shani (Saturn)",
      element: "Vayu (Air)",
      archetype: "Builder, Judge, Karmic Executioner, Delay, Coldness",
      allies: "4, 5, 6",
      opponents: "1, 2, 9",
      statusType: "info",
    },
    {
      number: 9,
      ruler: "Mangala (Mars)",
      element: "Agni (Fire)",
      archetype: "Commander, Humanitarian, Warrior, Burnout, Aggression",
      allies: "1, 2, 3",
      opponents: "4, 8",
      statusType: "danger",
    },
  ],
  remedials: [
    {
      title: "Mangala Gayatri & Bija Mantra",
      subtitle: "PROTOCOL 1",
      icon: "mantra",
      content:
        'Recite to channelize Mars and un-block Root (Muladhara) Chakra. Recite 10,000 times during Shukla Paksha on a Tuesday. "ॐ क्रं क्रीं क्रौं सः भौमाय नमः"',
    },
    {
      title: "Mineral & Talismanic Armor",
      subtitle: "PROTOCOL 2",
      icon: "gem",
      content:
        "Wear a Red Coral (Moonga) on the ring finger of the right hand in copper or gold. Energize on a Tuesday morning during Mars Hora. CAUTION: DO NOT WEAR WITH EMERALD OR BLUE SAPPHIRE.",
    },
    {
      title: "Dharmic Karma Yoga & Daanam",
      subtitle: "PROTOCOL 3",
      icon: "yoga",
      content:
        "To balance a highly aggressive 9 vibration, work with local charities, donate to surgeons or police funds, and feed strays on Tuesdays. PHYSICAL DISCHARGE OF ANGER IS MANDATORY.",
    },
  ],
};

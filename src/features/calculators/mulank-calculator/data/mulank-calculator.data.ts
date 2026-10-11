import { MulankTelemetryData } from "../types/mulank-calculator.types";

export const MOCK_MULANK_DATA: MulankTelemetryData = {
  stats: {
    rootNumber: {
      value: "9",
      desc: "The Cosmic Commander. High Spiritual Octane Vector.",
    },
    rulingGraha: {
      value: "Mangala (Mars)",
      desc: "Vitality, Bravery, Courage, Decisiveness, Drive.",
    },
    elementalAffinity: {
      value: "Agni (Fire / Tejas)",
      desc: "Trans-formative Combustion, Purification, Transmutation.",
    },
    cosmicFrequency: {
      value: "528 Hz",
      desc: "DNA Repair, Miracles, Solar Plexus Vibrational Tone.",
    },
  },
  triad: {
    items: [
      {
        title: "Mulank (Root)",
        value: "9",
        description:
          "From Day of birth. Core persona, intrinsic capability, raw drive, outward social mask.",
      },
      {
        title: "Bhagyank (Destiny)",
        value: "9",
        description:
          "Full Date of Birth (24-03-1999). What the universe demands of you, overarching karmic lesson.",
      },
      {
        title: "Namank (Name)",
        value: "9",
        description:
          "Phonetic resonance of Name. The public aura, acquired traits, external harmonic wave.",
      },
    ],
    synthesis:
      "The Triad of 9s (Square of Mars) generates a 'Pure Mars' (Kuja) over-clocked template. Immense drive, aggression, and leadership potential. Susceptible to extreme burnout, martial conflict, or accidents if not directed toward humanitarian service.",
  },
  matrix: [
    {
      number: 1,
      planetaryRuler: "Surya (Sun)",
      tattva: "Agni (Fire)",
      primaryTrait: "Leadership, Individuality, Pioneer",
      allies: "2, 3, 9",
      enemies: "6, 8",
      status: "Active",
    },
    {
      number: 2,
      planetaryRuler: "Chandra (Moon)",
      tattva: "Jala (Water)",
      primaryTrait: "Intuition, Receptivity, Emotional Harmony",
      allies: "1, 3, 5",
      enemies: "4, 8, 9",
      status: "Active",
    },
    {
      number: 3,
      planetaryRuler: "Brihaspati (Jupiter)",
      tattva: "Akasha (Ether)",
      primaryTrait: "Wisdom, Creativity, Expression",
      allies: "1, 2, 9",
      enemies: "6",
      status: "Active",
    },
    {
      number: 4,
      planetaryRuler: "Rahu (North Node)",
      tattva: "Vayu (Air)",
      primaryTrait: "Subversion, Unorthodoxy, Material Focus",
      allies: "5, 6, 7, 8",
      enemies: "1, 2, 9",
      status: "Active",
    },
    {
      number: 5,
      planetaryRuler: "Budha (Mercury)",
      tattva: "Prithvi (Earth)",
      primaryTrait: "Intellect, Adaptability, Commerce, Speech",
      allies: "1, 4, 6",
      enemies: "2",
      status: "Active",
    },
    {
      number: 6,
      planetaryRuler: "Shukra (Venus)",
      tattva: "Jala (Water)",
      primaryTrait: "Aesthetics, Luxury, Magnetism, Devotion",
      allies: "4, 5, 8",
      enemies: "1, 2",
      status: "Active",
    },
    {
      number: 7,
      planetaryRuler: "Ketu (South Node)",
      tattva: "Akasha (Ether)",
      primaryTrait: "Mysticism, Detachment, Deep Inquiry",
      allies: "4, 5, 6, 8",
      enemies: "1, 2, 9",
      status: "Active",
    },
    {
      number: 8,
      planetaryRuler: "Shani (Saturn)",
      tattva: "Vayu (Air)",
      primaryTrait: "Discipline, Endurance, Karmic Retribution",
      allies: "4, 5, 6",
      enemies: "1, 2, 9",
      status: "Active",
    },
    {
      number: 9,
      planetaryRuler: "Mangala (Mars)",
      tattva: "Agni (Fire)",
      primaryTrait: "Cosmic Commander, Valor, High Conviction",
      allies: "1, 2, 3",
      enemies: "4, 8",
      status: "Active Matrix",
    },
  ],
  pillars: [
    {
      title: "Planetary Ruler: Mars / Mangala",
      subtitle: "PILLAR 1 / COSMIC ARCHETYPE",
      content:
        "Mulank 9 individuals possess a hyper-kinetic willpower driven by martial passion. An unquenchable pioneering spirit, extreme physical/mental endurance, and the burden of Universal Service. Must learn to control ego-fire or face martial downfall. You are wired to lead from the front lines.",
      icon: "planet",
    },
    {
      title: "Inter-Number Resonance Matrix",
      subtitle: "PILLAR 2 / VIBRATIONAL KINSHIP",
      content:
        "Allies: 1 (Sun), 2 (Moon), 3 (Jupiter) / Enemies: 4 (Rahu), 8 (Saturn) / Neutral: 5 (Mercury), 6 (Venus), 7 (Ketu). Seek partnerships with 1, 2, and 3 for maximum synergy.",
      icon: "matrix",
    },
    {
      title: "Auspicious Timing & Coordinates",
      subtitle: "PILLAR 3 / TEMPORAL ANCHORING",
      content:
        "Favorable Days: Tuesday, Sunday / Favorable Colors: Red, Rose, Crimson / Direction: South (Dakshina) / Gemstone: Red Coral (Moonga).",
      icon: "coordinates",
    },
    {
      title: "Milestones & Tithi Transits",
      subtitle: "PILLAR 4 / CHRONOMETRY CYCLES",
      content:
        "Transformative operational/karmic years are at age 9, 18, 27, 36, 45, 54, 63, 72. Watch out for accident-prone transits around Mars-Rahu conjunctions. Next major operational peak occurs at age 36.",
      icon: "milestone",
    },
  ],
};

import { SunSignTelemetryData } from "../types/sun-sign.types";

export const mockSunSignData: SunSignTelemetryData = {
  solarSpeed: "0°59'11\"",
  declination: "+10°20'45\"",
  rightAscension: "01h 45m 32s",
  tropical: {
    signName: "Aries (The Ram)",
    degrees: "22° 14' 59\" Tropical Aries",
    planetaryRuler: {
      name: "Mars",
      sanskritName: "Mangala",
    },
    element: "Cardinal Fire",
    houseArchetype: "1st House Archetype",
    seasonalPhase: "Vernal Equinox Peak",
    psychologicalArchetype: "Choleric / Assertive",
    profileText:
      "The Tropical position reflects a pure, unadulterated expression of conscious willpower and pioneering momentum. Driven by martial impulses, the native displays an unyielding need to push boundaries. Driven by leadership, and dynamic physical agency.",
  },
  sidereal: {
    signName: "Mesha Rashi",
    degrees: "28° 14' 59\" Sidereal Aries",
    element: "Ugra (Fierce)",
    nakshatra: {
      name: "Ashwini",
      pada: 1,
    },
    planetaryLord: {
      name: "Mars",
      sanskritName: "Mangala",
    },
    solarShodashVarga: "1.48 Vimsopaka (High)",
    atmakarakaDegree: "Soul Dharma Indicator",
    profileText:
      "In Vedic sidereal cartography, the Sun represents the Atman (indwelling divine soul). Positioned in Ashwini Pada 1, the solar ray channels the miraculous healing and swift acceleration of the Ashwini Kumaras, bestowing profound vitality, spiritual dignity, and executive dharma.",
  },
  precession: {
    title: "Why do Tropical and Sidereal Signs Differ by ~24 Degrees?",
    solarEarthSeasons:
      "Rooted in the equinoxes, Tropical astrology fixes 0° Aries at the vernal equinox. The Sun's relative alignment with the Earth's seasonal tilt supersedes the background stellar coordinate grid.",
    cycle25k:
      "Due to Earth's gyroscopic wobble (axial precession), the vernal equinox point slowly shifts backwards against the fixed stars. This moves the apparent start of the Zodiac by ~1 degree every 71.6 years.",
    fixedStarConstellations:
      "Anchored to the fixed star Chitra (Spica) at 180°, the sidereal zodiac aligns perfectly with the true background constellations observed in the night sky, preserving the Sun's true physical position against stellar constellations above.",
    offsetDegrees: "~ 24° 14' Precession Shift",
  },
  remedies: {
    suryaMantra: {
      title: "Surya Mantra",
      mantra: "Om Hraam Hreem Hroum Sah Suryaya Namah",
      description:
        "Chant 108 times at sunrise, facing East, on Sundays to empower planetary vitality, enhance leadership, and align with the divine will.",
    },
    gemstone: {
      title: "Natural Burmese Ruby (Manikya)",
      name: "Natural Burmese Ruby (Manikya)",
      description:
        "Worn on the ring finger of the right hand. This radiant gemstone absorbs solar frequencies, boosting confidence, health, and solar prestige.",
    },
    astrologicalElements: {
      color: "Radiant Saffron & Crimson",
      metal: "Pure Copper / Suvarna",
      deity: "Lord Surya Narayana",
    },
  },
};

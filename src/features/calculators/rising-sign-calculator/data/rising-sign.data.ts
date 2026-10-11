import { RisingSignTelemetryData } from "../types/rising-sign.types";

export const mockRisingSignData: RisingSignTelemetryData = {
  exactDegree: "16° 42' 14\"",
  zodiacSign: "Vrischika (Scorpio)",
  tattva: "Jala (Water)",
  polarity: "Female (Even)",
  nakshatra: "Anuradha (Pada 2)",
  pada: 2,
  navamsha: "Virgo (Kanya)",
  ascendantDuration: {
    progress: 75,
    start: "15:34 PM",
    end: "18:12 PM",
    duration: "2h 38m",
    timeUntilNext: "1h 25 mins",
  },
  tropical: {
    signName: "Scorpio Ascendant (Tropical)",
    degrees: "16° 42' 14\"",
    descendant: "16° Taurus (Seeking Grounded Loyalty)",
    firstImpressionStyle: "Magnetic, Penetrating, Incisive",
    defensiveResponse: "Strategic Vigilance & Assessment",
  },
  sidereal: {
    signName: "Vrischika Lagna (वृश्चिक लग्न)",
    sanskritName: "Vrischika",
    degrees: "16° 42' 14\"",
    lagnesha: "Mangal (Mars) / Ketu",
    tattva: "Jala (Water)",
    navamshaLagna: "Kanya (Virgo)",
  },
  bhavachakra: [
    { house: "1st House", bhavaSanskrit: "Tanu Bhava (Self, Vitality, Head)", rashiSign: "Vrischika (Scorpio)", lordGraha: "Mangala (Mars)", exactCuspDegree: "16° 42' 14\"", occupantsGrahas: "Surya (Sun) (3° 12')" },
    { house: "2nd House", bhavaSanskrit: "Dhana Bhava (Wealth, Speech, Family)", rashiSign: "Dhanu (Sagittarius)", lordGraha: "Guru (Jupiter)", exactCuspDegree: "19° 14' 50\"", occupantsGrahas: "— Empty" },
    { house: "3rd House", bhavaSanskrit: "Sahaja Bhava (Courage, Siblings, Effort)", rashiSign: "Makara (Capricorn)", lordGraha: "Shani (Saturn)", exactCuspDegree: "22° 42' 10\"", occupantsGrahas: "Chandra (Moon) (14° 35')" },
    { house: "4th House", bhavaSanskrit: "Sukha Bhava (Mother, Lands, Inner Peace)", rashiSign: "Kumbha (Aquarius)", lordGraha: "Shani (Saturn)", exactCuspDegree: "25° 44' 30\"", occupantsGrahas: "Shani (Saturn) (Own House)" },
    { house: "5th House", bhavaSanskrit: "Putra Bhava (Intellect, Progeny, Purva Punya)", rashiSign: "Meena (Pisces)", lordGraha: "Guru (Jupiter)", exactCuspDegree: "28° 10' 15\"", occupantsGrahas: "— Empty" },
    { house: "6th House", bhavaSanskrit: "Ari Bhava (Debts, Adversaries, Service)", rashiSign: "Mesha (Aries)", lordGraha: "Mangala (Mars)", exactCuspDegree: "29° 41' 11\"", occupantsGrahas: "Ketu (2° 18')" },
    { house: "7th House", bhavaSanskrit: "Yuvati Bhava (Spouse, Contracts, Other)", rashiSign: "Vrishabha (Taurus)", lordGraha: "Shukra (Venus)", exactCuspDegree: "16° 42' 14\"", occupantsGrahas: "Guru (Jupiter) (4° 15')" },
    { house: "8th House", bhavaSanskrit: "Randhra Bhava (Longevity, Transformation)", rashiSign: "Mithuna (Gemini)", lordGraha: "Budha (Mercury)", exactCuspDegree: "19° 14' 50\"", occupantsGrahas: "— Empty" },
    { house: "9th House", bhavaSanskrit: "Dharma Bhava (Guru, Destiny, Father, Law)", rashiSign: "Karka (Cancer)", lordGraha: "Chandra (Moon)", exactCuspDegree: "22° 42' 10\"", occupantsGrahas: "Mangala (Mars) (Lagnesha in 9th)" },
    { house: "10th House", bhavaSanskrit: "Karma Bhava (Vocation, Public Status)", rashiSign: "Simha (Leo)", lordGraha: "Surya (Sun)", exactCuspDegree: "25° 44' 30\"", occupantsGrahas: "Budha (Mercury) (14° 19')" },
    { house: "11th House", bhavaSanskrit: "Labha Bhava (Gains, Associations, Network)", rashiSign: "Kanya (Virgo)", lordGraha: "Budha (Mercury)", exactCuspDegree: "28° 10' 15\"", occupantsGrahas: "Shukra (Venus) (1° 22')" },
    { house: "12th House", bhavaSanskrit: "Vyaya Bhava (Moksha, Solitude, Foreign Lands)", rashiSign: "Tula (Libra)", lordGraha: "Shukra (Venus)", exactCuspDegree: "29° 41' 11\"", occupantsGrahas: "Rahu (2° 18')" },
  ],
  remedies: {
    mantra: {
      text: "ॐ क्रां क्रीं क्रौं सः भौमाय नमः",
      description: "Recite 108 times daily on Tuesdays facing South. Enhances physical vigor and drives obstacles impeding personal initiative.",
      time: "Tuesdays - 09:12 AM"
    },
    gemstone: {
      name: "Natural Red Coral (Moonga / Pravalam)",
      description: "Worn in the ring finger, unheated/untreated. Balances suppressive Mangal energy. Set in Gold, consecrated on a Shukla Paksha Tuesday morning."
    },
    colors: {
      name: "Crimson, Deep Coral, Rust & Radiant Gold",
      description: "Incorporate into the aura via the frequencies of Scorpio. Avoid excessive blue, black or faded grey during auspicious commencements."
    }
  }
};

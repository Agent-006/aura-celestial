import { IshtaDevataTelemetryData } from "../types/ishta-devata.types";

export const MOCK_ISHTA_DEVATA_DATA: IshtaDevataTelemetryData = {
  stats: {
    atmakaraka: "Surya (Sun)",
    akSign: "29°45' Leo",
    akDegree: "29°45'12\"",
    karakamshaLagna: "Kanya (Virgo)",
    klHouse: "D9 Ascendant",
    twelfthFromAk: "Simha (Leo)",
    twelfthSign: "The Jivanmuktamsa",
    twelfthLord: "Budha (Mercury)",
    lordRole: "Sole Indicator of Ishta Devata",
  },
  resonanceScores: [
    { deity: "Sri Vishnu / Krishna (Budha)", planet: "Budha", percentage: 98 },
    { deity: "Shiva / Mahadev (Surya)", planet: "Surya", percentage: 85 },
    {
      deity: "Devi / Shakti (Chandra/Rahu)",
      planet: "Chandra/Rahu",
      percentage: 45,
    },
    {
      deity: "Ganesha / Skanda (Ketu / Mangal)",
      planet: "Ketu/Mangal",
      percentage: 30,
    },
  ],
  totalResonanceQuotient: "8.5 / 10",
  tutelaryDeities: [
    {
      type: "Ishta Devata",
      title: "Sri Maha Vishnu / Rama",
      planet: "Planet: Budha / Mercury",
      description:
        "Represented by Budha in the 12th from Karakamsha. Worship of Vishnu or Rama ensures moksha, unbinds the soul from the cycle of birth and death, aligns the mind towards dharma, and clears ultimate karmic debts.",
      mantra: "Om Namo Bhagavate Vasudevaya",
      mantraDescription: "Dwadashakshari Mantra",
      offering: "Tulsi Leaves, Yellow Flowers",
      offeringDescription: "Offered on Wednesdays / Ekadashi",
    },
    {
      type: "Dharma Devata",
      title: "Lord Shiva / Dakshinamurthy",
      planet: "Planet: Surya / Sun",
      description:
        "Based on the 9th from Karakamsha. Worship of Shiva brings the soul aligned to its life purpose, burns away ignorance, awakens higher consciousness, and guarantees success in dharmic duties.",
      mantra: "Om Namah Shivaya",
      mantraDescription: "Panchakshari Mantra",
      offering: "Bilva Leaves, Raw Milk, Bhasma",
      offeringDescription: "Offered on Mondays / Pradosham",
    },
    {
      type: "Palana Devata",
      title: "Sri Maha Lakshmi / Devi",
      planet: "Planet: Shukra / Venus",
      description:
        "Derived from the 6th from Amatyakaraka. Ensures physical sustenance, wealth, financial stability, clears debts, and removes obstacles in career progression and material well-being in the current incarnation.",
      mantra: "Om Shreem Mahalakshmaye Namah",
      mantraDescription: "Lakshmi Beeja Mantra",
      offering: "Red Lotus, Kheer, Rose Perfume",
      offeringDescription: "Offered on Fridays / Purnima",
    },
  ],
  charaKarakas: [
    {
      karakaType: "Atmakaraka (AK)",
      planet: "Surya (Sun)",
      rashi: "Simha (Leo)",
      nakshatra: "Magha (Pada 1)",
      degree: "29°45'12\"",
      jaiminiSignificance:
        "Soul's primary desire and karmic lesson in this life.",
    },
    {
      karakaType: "Amatyakaraka (AmK)",
      planet: "Chandra (Moon)",
      rashi: "Kanya (Virgo)",
      nakshatra: "Hasta (Pada 2)",
      degree: "27°12'05\"",
      jaiminiSignificance:
        "Career, wealth, and advisors guiding the soul's path.",
    },
    {
      karakaType: "Bhratrikaraka (BK)",
      planet: "Mangal (Mars)",
      rashi: "Vrischika (Scorpio)",
      nakshatra: "Anuradha (Pada 3)",
      degree: "22°05'45\"",
      jaiminiSignificance:
        "Gurus, mentors, father figures, and sibling influences.",
    },
    {
      karakaType: "Matrikaraka (MK)",
      planet: "Budha (Mercury)",
      rashi: "Kanya (Virgo)",
      nakshatra: "Chitra (Pada 1)",
      degree: "18°30'22\"",
      jaiminiSignificance: "Mother, home, education, and emotional grounding.",
    },
    {
      karakaType: "Putrakaraka (PK)",
      planet: "Guru (Jupiter)",
      rashi: "Dhanu (Sagittarius)",
      nakshatra: "Moola (Pada 4)",
      degree: "15°12'11\"",
      jaiminiSignificance:
        "Children, creativity, intellect, and spiritual disciples.",
    },
    {
      karakaType: "Gnatikaraka (GK)",
      planet: "Shani (Saturn)",
      rashi: "Kumbha (Aquarius)",
      nakshatra: "Shatabhisha (Pada 2)",
      degree: "10°45'00\"",
      jaiminiSignificance:
        "Obstacles, enemies, diseases, and karmic debts to clear.",
    },
    {
      karakaType: "Darakaraka (DK)",
      planet: "Shukra (Venus)",
      rashi: "Vrishabha (Taurus)",
      nakshatra: "Rohini (Pada 1)",
      degree: "05°10'33\"",
      jaiminiSignificance:
        "Spouse, partnerships, and physical world attachments.",
    },
  ],
  sadhanaProtocols: [
    {
      id: "p1",
      type: "PROTOCOL 001",
      title: "Sacred Japa & Mantra Dhyana",
      mantraOrAction: "ॐ नमो भगवते वासुदेवाय",
      description:
        "Recite this 12-syllable mantra for the Ishta Devata minimum 108 times (1 mala) daily before sunrise, facing East. Focus on the Anahata (Heart) chakra. Use a Tulsi mala for maximum resonance. Connects the soul to supreme consciousness.",
    },
    {
      id: "p2",
      type: "PROTOCOL 002",
      title: "Yantra Geometry / Altar Alignment",
      mantraOrAction: "Vishnu Yantra / North-East",
      description:
        "Install a consecrated Vishnu Yantra in the Ishan Kona (North-East) of your home. Offer fresh yellow flowers and light a ghee lamp daily. This creates a hyper-localized positive energy grid that amplifies your Ishta Devata's presence.",
    },
    {
      id: "p3",
      type: "PROTOCOL 003",
      title: "Moksha Ekadashi & Vrata Vidhi",
      mantraOrAction: "Fasting on Ekadashi Tithi",
      description:
        "Observe strict fasting on both Shukla and Krishna Paksha Ekadashis. Consume only fruits or water. Meditate on Lord Vishnu's form. This austerity burns deep-seated negative karmas and accelerates spiritual liberation (Moksha).",
    },
  ],
};

export type NavDropdownItem = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  dropdown?: NavDropdownItem[];
};

export const NAV_LINKS: NavItem[] = [
  {
    label: "CONSULTATIONS",
    href: "#",
    dropdown: [
      {
        label: "Chat with Astrologer",
        href: "#"
      },
      {
        label: "Call with Astrologer",
        href: "#"
      },
    ],
  },
  {
    label: "HOROSCOPE",
    href: "#",
    dropdown: [
      {
        label: "Daily Horoscope",
        href: "#"
      },
      {
        label: "Tomorrow's Horoscope",
        href: "#"
      },
      {
        label: "Yesterday's Horoscope",
        href: "#"
      },
      {
        label: "Weekly Horoscope",
        href: "#"
      },
      {
        label: "Monthly Horoscope",
        href: "#"
      },
      {
        label: "Yearly Horoscope",
        href: "#"
      },
    ],
  },
  {
    label: "FREE SERVICES",
    href: "#",
    dropdown: [
      {
        label: "Free Kundli",
        href: "#"
      },
      {
        label: "Kundli Matching",
        href: "#"
      },
      {
        label: "Compatibility",
        href: "#"
      },
    ],
  },
  {
    label: "CALCULATORS",
    href: "/calculators",
    dropdown: [
      {
        label: "Love Calculator",
        href: "/calculators/love-calculator"
      },
      {
        label: "Numerology Calculator",
        href: "/calculators/numerology-calculator",
      },
      {
        label: "Rising Sign Calculator",
        href: "/calculators/rising-sign-calculator",
      },
      {
        label: "Dasha Calculator",
        href: "/calculators/dasha-calculator"
      },
      {
        label: "Mangal Dosha Calculator",
        href: "/calculators/mangal-dosha-calculator",
      },
      {
        label: "Moon Phase Calculator",
        href: "/calculators/moon-phase-calculator",
      },
      {
        label: "Flames Calculator",
        href: "/calculators/flames-calculator"
      },
      {
        label: "Friendship Calculator",
        href: "/calculators/friendship-calculator",
      },
      {
        label: "Ishta Devata Calculator",
        href: "/calculators/ishta-devata-calculator",
      },
      {
        label: "Transit Chart Calculator",
        href: "/calculators/transit-chart-calculator",
      },
      {
        label: "Atmakaraka & Darakaraka Calculator",
        href: "/calculators/atmakaraka-darakaraka-calculator",
      },
      {
        label: "Sun Sign Calculator",
        href: "/calculators/sun-sign-calculator",
      },
      {
        label: "Rashi Calculator",
        href: "/calculators/rashi-calculator"
      },
      {
        label: "Nakshatra Calculator",
        href: "/calculators/nakshatra-calculator",
      },
      {
        label: "Shani Sade Sati Calculator",
        href: "/calculators/sade-sati-calculator",
      },
      {
        label: "Birth/Natal Chart Calculator",
        href: "/calculators/birth-chart-calculator",
      },
      {
        label: "Lucky Vehicle Number Calculator",
        href: "/calculators/lucky-vehicle-number-calculator",
      },
      {
        label: "Kaal Sarp Dosh Calculator",
        href: "/calculators/kaal-sarp-dosh-calculator",
      },
      {
        label: "Lo Shu Grid Calculator",
        href: "/calculators/lo-shu-grid-calculator",
      },
      {
        label: "Name Compatibility Calculator",
        href: "/calculators/name-compatibility-calculator",
      },
      {
        label: "Mulank Calculator",
        href: "/calculators/mulank-calculator"
      },
      {
        label: "Destiny Number Calculator",
        href: "/calculators/destiny-number-calculator",
      },
      {
        label: "Age Calculator",
        href: "/calculators/age-calculator"
      },
      {
        label: "Mobile Number Numerology Calculator",
        href: "/calculators/mobile-number-numerology-calculator",
      },
      {
        label: "Lucky Name Numerology Calculator",
        href: "/calculators/lucky-name-numerology-calculator",
      },
    ],
  },
  {
    label: "BLOG",
    href: "/blog"
  },
];

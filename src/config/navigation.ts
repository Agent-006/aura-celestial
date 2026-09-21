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
        label: 'CONSULTATIONS',
        href: '#',
        dropdown: [
            { label: 'Chat with Astrologer', href: '#' },
            { label: 'Call with Astrologer', href: '#' }
        ]
    },
    {
        label: 'HOROSCOPE',
        href: '#',
        dropdown: [
            { label: 'Daily Horoscope', href: '#' },
            { label: "Tomorrow's Horoscope", href: '#' },
            { label: "Yesterday's Horoscope", href: '#' },
            { label: 'Weekly Horoscope', href: '#' },
            { label: 'Monthly Horoscope', href: '#' },
            { label: 'Yearly Horoscope', href: '#' }
        ]
    },
    {
        label: 'FREE SERVICES',
        href: '#',
        dropdown: [
            { label: 'Free Kundli', href: '#' },
            { label: 'Kundli Matching', href: '#' },
            { label: 'Compatibility', href: '#' }
        ]
    },
    {
        label: 'CALCULATORS',
        href: '#',
        dropdown: [
            { label: 'Love Calculator', href: '#' },
            { label: 'Numerology Calculator', href: '#' },
            { label: 'Rising Sign Calculator', href: '#' },
            { label: 'Dasha Calculator', href: '#' },
            { label: 'Mangal Dosha Calculator', href: '#' },
            { label: 'Moon Phase Calculator', href: '#' },
            { label: 'Flames Calculator', href: '#' },
            { label: 'Friendship Calculator', href: '#' },
            { label: 'Ishta Devata Calculator', href: '#' },
            { label: 'Transit Chart Calculator', href: '#' },
            { label: 'Atmakaraka & Darakaraka Calculator', href: '#' },
            { label: 'Sun Sign Calculator', href: '#' },
            { label: 'Rashi Calculator', href: '#' },
            { label: 'Nakshatra Calculator', href: '#' },
            { label: 'Shani Sade Sati Calculator', href: '#' },
            { label: 'Birth/Natal Chart Calculator', href: '#' },
            { label: 'Lucky Vehicle Number Calculator', href: '#' },
            { label: 'Kaal Sarp Dosh Calculator', href: '#' },
            { label: 'Lo Shu Grid Calculator', href: '#' },
            { label: 'Name Compatibility Calculator', href: '#' },
            { label: 'Mulank Calculator', href: '#' },
            { label: 'Destiny Number Calculator', href: '#' },
            { label: 'Age Calculator', href: '#' },
            { label: 'Mobile Number Numerology Calculator', href: '#' },
            { label: 'Lucky Name Numerology Calculator', href: '#' }
        ]
    },
    { label: 'BLOG', href: '#' },
];

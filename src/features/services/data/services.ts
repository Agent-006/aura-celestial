import { Headset, Hash, Moon, Heart, Calculator } from 'lucide-react';
import type { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
    {
        id: 'astrologer',
        icon: Headset,
        badge: 'LIVE 24/7',
        title: 'Talk to Astrologer',
        desc: 'Instant encrypted voice or chat with accredited Vedic masters.',
        action: 'CONNECT NOW'
    },
    {
        id: 'kundli',
        icon: Hash,
        badge: 'D1 - D60',
        title: 'Janam Kundli',
        desc: 'Full 16-division Shodashvarga and planetary strength evaluation.',
        action: 'GENERATE CHART'
    },
    {
        id: 'horoscope',
        icon: Moon,
        badge: 'DAILY RASHI',
        title: 'Daily Horoscopes',
        desc: 'Sidereal moon sign transit updates, lucky aura hours, and remedies.',
        action: 'READ FORECAST'
    },
    {
        id: 'milan',
        icon: Heart,
        badge: '36 GUNAS',
        title: 'Kundli Milan',
        desc: 'Ashtakoota and Dashakoota synastry with dosha remedies.',
        action: 'CHECK SYNASTRY'
    },
    {
        id: 'calculators',
        icon: Calculator,
        badge: 'MUHURTAM',
        title: 'Vedic Calculators',
        desc: 'Precision computation for Sade Sati, Manglik Dosha, and Mahadashas.',
        action: 'RUN COMPUTE'
    }
]
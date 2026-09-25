import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
    id: string;
    icon: LucideIcon;
    badge: string;
    title: string;
    desc: string;
    action: string;
}
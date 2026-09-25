"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import type { ServiceItem } from "../../types";
import styles from './service-card.module.scss';

interface ServiceCardProps {
    service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
    const Icon = service.icon;
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        cardRef.current.style.setProperty("--mouse-x", `${x}px`);
        cardRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    return (
        <div
            ref={cardRef}
            className={styles.card}
            onMouseMove={handleMouseMove}
        >
            <div className={styles.spotlight} />

            <div className={styles.cardHeader}>
                <div className={styles.iconBox}>
                    <Icon strokeWidth={1.5} />
                </div>
                <div className={styles.badge}>{service.badge}</div>
            </div>

            <div className={styles.cardContent}>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
            </div>

            <div className={styles.cardFooter}>
                {service.action} <ArrowRight size={14} />
            </div>
        </div>
    );
}
"use client";

import { ServiceCard } from './ServiceCard/ServiceCard';
import { SERVICES_DATA } from '../data/services';
import styles from './services-section.module.scss';

export function ServicesSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <div className={styles.titleArea}>
                        <span className={styles.eyebrow}>— Sanctuary of High Science</span>
                        <h2>Your Questions. Your Journey. Your Stars.</h2>
                    </div>
                    <div className={styles.descArea}>
                        <p>
                            Every celestial consultation combines time-honored Parashara principles
                            with mathematically exact planetary ephemerides.
                        </p>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className={styles.grid}>
                    {SERVICES_DATA.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
}

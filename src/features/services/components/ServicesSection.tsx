"use client";

import { ServiceCard } from "./ServiceCard/ServiceCard";
import { SERVICES_DATA } from "../data/services";
import { StarfieldCanvas } from "@/components/ui/StarfieldCanvas/StarfieldCanvas";
import { SectionSeparator } from "@/components/ui/SectionSeparator/SectionSeparator";
import styles from "./services-section.module.scss";

export function ServicesSection() {
  return (
    <section className={styles.section}>
      {/* Background Elements */}
      <div className={styles.topSeparator}><SectionSeparator /></div>
      <StarfieldCanvas className={styles.starfield} />
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.bottomSeparator}><SectionSeparator /></div>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.titleArea}>
            <span className={styles.eyebrow}>- SANCTUARY OF HIGH SCIENCE</span>
            <h2 className={styles.title}>Your Questions. Your Journey. Your Stars.</h2>
          </div>
          <div className={styles.descArea}>
            <p>
              Every celestial consultation combines time-honored Parashara
              principles with mathematically exact planetary ephemerides.
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

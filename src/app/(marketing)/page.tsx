import { HeroOverlay, HeroCanvas, EphemerisHUD } from "@/features/hero";
import { TelemetrySection } from "@/features/telemetry/components/TelemetrySection/TelemetrySection";
import { HoroscopesSection } from "@/features/horoscope";
import { AstrologersSection } from "@/features/astrologers";
import { CalculatorsSection } from "@/features/calculators";
import { ServicesSection } from "@/features/services";
import { TrustSection } from "@/features/trust";
import { FaqSection } from "@/features/faq";
import styles from "./page.module.scss";
import { CTASection } from "@/features/cta";
export default function HomePage() {
  return (
    <div className={styles.homeContainer}>
      {/* --- HERO SECTION --- */}
      <section className={styles.heroSection}>
        {/* 3D Engine wrapper */}
        <div className={styles.canvasWrapper}>
          <HeroCanvas />
        </div>

        {/* Hero UI Overlay (Text, Buttons, etc. will go here) */}
        <div className={styles.heroOverlay}>
          <HeroOverlay />
          <EphemerisHUD />
        </div>
      </section>

      {/* --- FUTURE SECTIONS (About, Services, etc) --- */}
      <main className={styles.contentSection}>
        <ServicesSection />
        <AstrologersSection />
        <TelemetrySection />
        <CalculatorsSection />
        <HoroscopesSection />
        <FaqSection />
        <TrustSection />
        <CTASection />
      </main>
    </div>
  );
}

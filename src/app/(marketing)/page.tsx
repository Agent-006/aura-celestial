import { HeroOverlay, HeroCanvas, EphemerisHUD } from '@/features/hero';
import { ServicesSection } from '@/features/services';
import styles from './page.module.scss';

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
      </main>

    </div>
  )
}

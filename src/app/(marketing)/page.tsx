import { HeroOverlay } from '@/features/hero/components/HeroOverlay/HeroOverlay';
import { HeroCanvas } from '@/features/hero/components/HeroCanvas';
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
        </div>
      </section>

      {/* --- FUTURE SECTIONS (About, Services, etc) --- */}
      <main className={styles.contentSection}>
        <h2 style={{ color: 'white', textAlign: 'center', marginTop: '10rem' }}>
          Future sections will go here! The Hero section scrolls up normally.
        </h2>
      </main>

    </div>
  )
}

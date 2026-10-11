import { AtmakarakaDarakarakaCalculator } from "@/features/calculators/atmakaraka-darakaraka-calculator";
import { Metadata } from "next";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Atmakaraka & Darakaraka Calculator | Aura Celestial",
  description:
    "Discover your soul's purpose (Atmakaraka) and destined partner (Darakaraka) through Jaimini Astrology.",
};

export default function AtmakarakaDarakarakaPage() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>Atmakaraka & Darakaraka</h1>
        <p className={styles.description}>
          Find your soul planet and relationship karaka to understand your
          highest karmic purpose and partnerships.
        </p>
      </div>
      <AtmakarakaDarakarakaCalculator />
    </main>
  );
}

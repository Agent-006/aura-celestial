import type { Metadata } from "next";
import { Playfair_Display, Inter, Space_Mono, Cinzel_Decorative, Cormorant_Garamond } from "next/font/google";
import "@/styles/globals.scss";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import styles from "./layout.module.scss";

const cinzelDecorative = Cinzel_Decorative({
  variable: "--font-cinzel-decorative",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Aura Celestial",
  description: "A premium, celestial web experience.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${spaceMono.variable} ${cinzelDecorative.variable} ${cormorantGaramond.variable}`}>
      <body>
        <TopBar />
        <Header />

        {/* The main content area where the 3D canvas will eventually go */}
        <main className={styles.mainContent}>
          {children}
        </main>
      </body>
    </html>
  );
}

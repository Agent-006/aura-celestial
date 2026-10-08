"use client";

import { useState, useEffect } from "react";
import styles from "./TopBar.module.scss";

export const TopBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.topBar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.right}>
          <span>ACTIVE MAHADASHA: GURU - SHANI</span>
          <span className={styles.separator}>&bull;</span>
          <span>±0.001&apos; PRECISION</span>
        </div>
      </div>
    </header>
  );
};

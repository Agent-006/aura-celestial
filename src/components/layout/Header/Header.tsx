"use client";

import { useState, useEffect } from "react";
import { Logo } from "@/components/ui/Logo";
import { Navigation } from "../../navigation/Navigation";
import { HeaderActions } from "./HeaderActions";
import { MobileMenu } from "./MobileMenu";
import { X } from "lucide-react";
import styles from "./Header.module.scss";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check on initial mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <Logo />

        <div className={styles.desktopNav}>
          <Navigation />
          <HeaderActions />
        </div>

        <button
          className={styles.mobileMenuToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div
            className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ""}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`${styles.mobileMenuOverlay} ${isMobileMenuOpen ? styles.open : ""}`}
      >
        <div className={styles.mobileMenuHeader}>
          <Logo />
          <button
            className={styles.closeMenuBtn}
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
        </div>
        <div className={styles.mobileMenuContent}>
          <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
        </div>
      </div>
    </header>
  );
};

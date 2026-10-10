'use client';

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NAV_LINKS } from "@/config/navigation";
import styles from "./Navigation.module.scss";

interface NavigationProps {
  onLinkClick?: () => void;
}

export const Navigation = ({ onLinkClick }: NavigationProps) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (e: React.MouseEvent, label: string) => {
    // Only toggle accordion on mobile (screen width <= 1024)
    if (window.innerWidth <= 1024) {
      e.preventDefault(); // prevent default only on mobile so accordion can open
      setOpenDropdown(openDropdown === label ? null : label);
    }
  };

  const handleLinkClick = () => {
    if (onLinkClick) onLinkClick();
  };

  return (
    <nav className={styles.nav}>
      {NAV_LINKS.map((link, index) => (
        <React.Fragment key={link.label}>
          {link.dropdown ? (
            <div className={`${styles.dropdownContainer} ${openDropdown === link.label ? styles.isOpen : ''}`}>
              <button 
                className={styles.link}
                onClick={(e) => toggleDropdown(e, link.label)}
              >
                {link.label}
                <span className={`${styles.chevron} ${openDropdown === link.label ? styles.chevronUp : ''}`}>▾</span>
              </button>
              <div
                className={`${styles.dropdownMenu} ${link.dropdown.length > 8 ? styles.gridMenu : ""}`}
              >
                {link.dropdown.map((dropLink) => (
                  <Link
                    key={dropLink.label}
                    href={dropLink.href}
                    className={styles.dropdownItem}
                    onClick={handleLinkClick}
                  >
                    <span>{dropLink.label}</span>
                    <ArrowRight size={14} className={styles.itemIcon} />
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link href={link.href} className={styles.link} onClick={handleLinkClick}>
              {link.label}
            </Link>
          )}
          {index < NAV_LINKS.length - 1 && (
            <span className={styles.separator}>•</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

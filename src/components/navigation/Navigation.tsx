import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NAV_LINKS } from "@/config/navigation";
import styles from './Navigation.module.scss';

export const Navigation = () => {
    return (
        <nav className={styles.nav}>
            {NAV_LINKS.map((link, index) => (
                <React.Fragment key={link.label}>
                    {link.dropdown ? (
                        <div className={styles.dropdownContainer}>
                            <button className={styles.link}>
                                {link.label}
                                <span className={styles.chevron}>▾</span>
                            </button>
                            <div className={`${styles.dropdownMenu} ${link.dropdown.length > 8 ? styles.gridMenu : ''}`}>
                                {link.dropdown.map(dropLink => (
                                    <Link key={dropLink.label} href={dropLink.href} className={styles.dropdownItem}>
                                        <span>{dropLink.label}</span>
                                        <ArrowRight size={14} className={styles.itemIcon} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <Link href={link.href} className={styles.link}>
                            {link.label}
                        </Link>
                    )}
                    {index < NAV_LINKS.length - 1 && (
                        <span className={styles.separator}>•</span>
                    )}
                </React.Fragment>
            ))}
        </nav>
    )
}
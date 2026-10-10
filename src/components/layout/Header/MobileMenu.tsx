'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronDown, MessageSquare, Sun, Star, Calculator, FileText, Headphones } from 'lucide-react';
import { NAV_LINKS } from '@/config/navigation';
import styles from './MobileMenu.module.scss';

interface MobileMenuProps {
    onClose: () => void;
}

const formatLabel = (label: string) => {
    return label.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
};

// Map top-level items to icons for the modern look
const getIconForLabel = (label: string) => {
    switch (label.toLowerCase()) {
        case 'consultations': return <MessageSquare size={22} />;
        case 'horoscope': return <Sun size={22} />;
        case 'free services': return <Star size={22} />;
        case 'calculators': return <Calculator size={22} />;
        case 'blog': return <FileText size={22} />;
        default: return <Star size={22} />;
    }
};

export const MobileMenu = ({ onClose }: MobileMenuProps) => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const toggleDropdown = (label: string) => {
        setOpenDropdown(openDropdown === label ? null : label);
    };

    return (
        <div className={styles.mobileMenu}>
            {/* User Profile Card */}
            <div className={styles.userCard}>
                <div className={styles.avatar}>US</div>
                <div className={styles.userInfo}>
                    <span className={styles.userName}>Guest User</span>
                    <span className={styles.userPhone}>Login / Signup</span>
                </div>
                <ChevronRight size={22} className={styles.chevronIcon} />
            </div>

            {/* Menu Sections */}
            <div className={styles.menuSection}>
                <span className={styles.sectionTitle}>Astrology Services</span>
                <div className={styles.cardGroup}>
                    {NAV_LINKS.map((link, index) => {
                        const isOpen = openDropdown === link.label;
                        
                        return (
                            <div key={link.label} className={styles.menuItemWrapper}>
                                {link.dropdown ? (
                                    <>
                                        <button 
                                            className={`${styles.menuItem} ${isOpen ? styles.isOpen : ''}`}
                                            onClick={() => toggleDropdown(link.label)}
                                        >
                                            <div className={styles.itemLeft}>
                                                <div className={styles.iconBox}>
                                                    {getIconForLabel(link.label)}
                                                </div>
                                                <span className={styles.itemLabel}>{formatLabel(link.label)}</span>
                                            </div>
                                            {isOpen ? (
                                                <ChevronDown size={22} className={styles.chevronIcon} />
                                            ) : (
                                                <ChevronRight size={22} className={styles.chevronIcon} />
                                            )}
                                        </button>
                                        
                                        {/* Dropdown Items */}
                                        <div className={`${styles.dropdownList} ${isOpen ? styles.show : ''}`}>
                                            {link.dropdown.map((dropLink) => (
                                                <Link
                                                    key={dropLink.label}
                                                    href={dropLink.href}
                                                    className={styles.dropdownItem}
                                                    onClick={onClose}
                                                >
                                                    {formatLabel(dropLink.label)}
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <Link 
                                        href={link.href} 
                                        className={styles.menuItem}
                                        onClick={onClose}
                                    >
                                        <div className={styles.itemLeft}>
                                            <div className={styles.iconBox}>
                                                {getIconForLabel(link.label)}
                                            </div>
                                            <span className={styles.itemLabel}>{formatLabel(link.label)}</span>
                                        </div>
                                        <ChevronRight size={22} className={styles.chevronIcon} />
                                    </Link>
                                )}
                                {index < NAV_LINKS.length - 1 && <div className={styles.divider} />}
                            </div>
                        );
                    })}
                </div>
            </div>
            
            <div className={styles.menuSection}>
                <span className={styles.sectionTitle}>Support & More</span>
                <div className={styles.cardGroup}>
                    <div className={styles.menuItemWrapper}>
                        <button className={styles.menuItem}>
                            <div className={styles.itemLeft}>
                                <div className={styles.iconBox}>
                                    <Headphones size={22} />
                                </div>
                                <span className={styles.itemLabel}>Customer Support Chat</span>
                            </div>
                            <ChevronRight size={22} className={styles.chevronIcon} />
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

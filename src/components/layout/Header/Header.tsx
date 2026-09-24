'use client';

import { useState, useEffect } from 'react';
import { Logo } from '@/components/ui/Logo';
import { Navigation } from '../../navigation/Navigation';
import { HeaderActions } from './HeaderActions';
import styles from './Header.module.scss';

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Check on initial mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <Logo />
                <Navigation />
                <HeaderActions />
            </div>
        </header>
    );
};

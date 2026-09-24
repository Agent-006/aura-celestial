'use client';

import { useState } from 'react';
import { Globe } from 'lucide-react';
import styles from './ephemeris-hud.module.scss';

const PLANETS = [
    { id: 'sun', label: 'SURYA (SUN)' },
    { id: 'mercury', label: 'BUDH' },
    { id: 'venus', label: 'SHUKRA' },
    { id: 'earth', label: 'PRITHVI' },
    { id: 'mars', label: 'MANGAL' },
    { id: 'jupiter', label: 'GURU (JUPITER)' },
    { id: 'saturn', label: 'SHANI' },
    { id: 'uranus', label: 'ARUNA' },
    { id: 'neptune', label: 'VARUNA' },
];

export function EphemerisHUD() {
    const [activePlanet, setActivePlanet] = useState('jupiter');

    return (
        <div className={styles.hudContainer}>
            <div className={styles.inner}>

                {/* Status Section */}
                <div className={styles.statusGroup}>
                    <div className={styles.label}>
                        <Globe strokeWidth={1.5} />
                        <span>ORBITAL EPOCH SCRUB:</span>
                    </div>
                    <div className={styles.calibration}>
                        <div className={styles.dot}></div>
                        <span>CALIBRATED: LAHIRI 24°12&apos;42&ldquo;</span>
                    </div>
                </div>
                {/* Planet Selector */}
                <div className={styles.planetList}>
                    {PLANETS.map((planet) => {
                        const isActive = activePlanet === planet.id;
                        return (
                            <button
                                key={planet.id}
                                className={`${styles.planetBtn} ${isActive ? styles.active : ''}`}
                                onClick={() => setActivePlanet(planet.id)}
                            >
                                {/* Decorative dots only render when active */}
                                {isActive && <div className={styles.activeDot}></div>}
                                {planet.label}
                                {isActive && <div className={styles.activeDot}></div>}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
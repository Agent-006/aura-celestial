'use client';

import { useEffect, useRef } from 'react';
import { Phone, Sparkles, Globe } from 'lucide-react';
import gsap from 'gsap';
import { Button } from '@/components/ui/Button';
import styles from './hero-overlay.module.scss';

export function HeroOverlay() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            // Initial state: hidden and pushed down slightly
            gsap.set('.animate-item', { y: 30, opacity: 0 });
            gsap.set('.animate-line', { scaleY: 0, transformOrigin: "top" });

            const tl = gsap.timeline({ delay: 0.5 }); // Wait for 3D canvas to load

            // Stagger in the headline and subhead
            tl.to('.animate-item', {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out'
            })
                // Grow the golden accent line down
                .to('.animate-line', {
                    scaleY: 1,
                    duration: 0.8,
                    ease: 'power3.out'
                }, "-=0.8");

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className={styles.overlayContainer} ref={containerRef}>
            <div className={styles.container}>
                <div className={styles.contentWrapper}>

                <h1 className={`${styles.headline} animate-item`}>
                    Discover What the<br />
                    <span className={styles.highlight}>Stars</span> Reveal About<br />
                    You
                </h1>

                <div className={`${styles.subheadWrapper} animate-item`}>
                    <div className={`${styles.accentLine} animate-line`}></div>
                    <p className={styles.subheadline}>
                        Sidereal cosmic intelligence powered by sub-arcsecond NASA JPL mechanics.<br />
                        Explore orbital manifolds, consult verified Vedic masters, and decode your karmic destiny.
                    </p>
                </div>

                <div className={`${styles.ctaGroup} animate-item`}>
                    <Button variant="solid" size="lg" leftIcon={<Phone size={16} strokeWidth={2} />}>
                        Talk To An Astrologer
                    </Button>
                    <Button variant="outline" size="lg" leftIcon={<Sparkles size={16} strokeWidth={2} />}>
                        Generate Free Kundli
                    </Button>
                </div>

                <div className={`${styles.trustMarkers} animate-item`}>
                    <span className={styles.stars}>★★★★★</span>
                    <span>4.98/5 (350k+ Consultations)</span>
                    <span className={styles.separator}>•</span>
                    <span className={styles.feature}>
                        <Globe size={14} />
                        Interactive 3D Orbit View
                    </span>
                </div>
                </div>
            </div>
        </div>
    );
}

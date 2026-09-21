import Link from 'next/link';
import styles from './Logo.module.scss';

export const Logo = () => {
    return (
        <Link href="/" className={styles.logoContainer}>
            <div className={styles.iconWrapper}>
                <div className={styles.centralStar} />
                <div className={styles.orbit} />
                <div className={`${styles.orbit} ${styles.orbit2}`} />
                <div className={`${styles.orbit} ${styles.orbit3}`} />
            </div>

            <div className={styles.textContainer}>
                <span className={styles.aura}>AURA</span>
                <span className={styles.celestial}>CELESTIAL</span>
            </div>
        </Link>
    );
};

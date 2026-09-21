import styles from './TopBar.module.scss';

export const TopBar = () => {
    return (
        <header className={styles.topBar}>
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

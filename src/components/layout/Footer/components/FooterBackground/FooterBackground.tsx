import styles from "./FooterBackground.module.scss";

export const FooterBackground = () => {
  return (
    <div className={styles.bgContainer}>
      <svg
        className={styles.celestialSvg}
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Global lines */}
        <g className={styles.globalGrid}>
          <line x1="0" y1="400" x2="1440" y2="400" className={styles.chartLinesSolid} />
          <line x1="0" y1="450" x2="1440" y2="450" className={styles.chartLinesDashedFaint} />
          <line x1="0" y1="350" x2="1440" y2="350" className={styles.chartLinesDashedFaint} />
        </g>

        {/* Left celestial pole */}
        <g className={styles.poleLeft} transform="translate(150, 450)">
          <g className={styles.rotateSlow}>
            <circle cx="0" cy="0" r="100" className={styles.chartLinesSolid} />
            <circle cx="0" cy="0" r="200" className={styles.chartLinesSolid} />
            <circle cx="0" cy="0" r="320" className={styles.chartLinesDashed} />
            <circle cx="0" cy="0" r="450" className={styles.chartLinesSolid} />
            <circle cx="0" cy="0" r="700" className={styles.chartLinesDashedAlt} />
            
            <line x1="-800" y1="-800" x2="800" y2="800" className={styles.chartLinesSolid} />
            <line x1="-800" y1="800" x2="800" y2="-800" className={styles.chartLinesDashed} />
            <line x1="0" y1="-800" x2="0" y2="800" className={styles.chartLinesSolid} />
            <line x1="-800" y1="0" x2="800" y2="0" className={styles.chartLinesSolid} />
          </g>
        </g>

        {/* Right celestial pole */}
        <g className={styles.poleRight} transform="translate(1300, 150)">
          <g className={styles.rotateSlowReverse}>
            <circle cx="0" cy="0" r="80" className={styles.chartLinesSolid} />
            <circle cx="0" cy="0" r="150" className={styles.chartLinesSolid} />
            <circle cx="0" cy="0" r="250" className={styles.chartLinesDashed} />
            <circle cx="0" cy="0" r="350" className={styles.chartLinesSolid} />
            <circle cx="0" cy="0" r="600" className={styles.chartLinesDashedAlt} />
            <circle cx="0" cy="0" r="800" className={styles.chartLinesSolid} />
            
            <line x1="-800" y1="-800" x2="800" y2="800" className={styles.chartLinesSolid} />
            <line x1="-800" y1="800" x2="800" y2="-800" className={styles.chartLinesSolid} />
            <line x1="0" y1="-800" x2="0" y2="800" className={styles.chartLinesDashed} />
            <line x1="-800" y1="0" x2="800" y2="0" className={styles.chartLinesDashed} />
          </g>
        </g>

        {/* Center celestial orbit */}
        <g className={styles.poleCenter} transform="translate(720, 700)">
          <g className={styles.rotateVerySlow}>
            <circle cx="0" cy="0" r="300" className={styles.chartLinesSolid} />
            <circle cx="0" cy="0" r="450" className={styles.chartLinesDashed} />
            <line x1="-600" y1="-600" x2="600" y2="600" className={styles.chartLinesSolid} />
            <line x1="-600" y1="600" x2="600" y2="-600" className={styles.chartLinesSolid} />
          </g>
        </g>

        {/* Nodes (Stars / Orbits) */}
        <g className={styles.nodes} filter="url(#glow)">
          {/* Left pole nodes */}
          <circle cx="150" cy="450" r="5" className={`${styles.nodeGold} ${styles.pulseFast}`} />
          <circle cx="291" cy="309" r="2.5" className={styles.pulseSlow} />
          <circle cx="468" cy="132" r="3" className={`${styles.nodeGreen} ${styles.pulseNormal}`} />
          <circle cx="-50" cy="250" r="2" />
          <circle cx="70" cy="620" r="3" className={styles.nodeGold} />
          
          {/* Center wandering nodes */}
          <circle cx="720" cy="50" r="4.5" className={`${styles.nodeGold} ${styles.pulseSlow}`} />
          <circle cx="650" cy="350" r="2" />
          <circle cx="850" cy="280" r="3.5" className={`${styles.nodeGreen} ${styles.pulseFast}`} />
          <circle cx="950" cy="400" r="3" />
          <circle cx="1100" cy="20" r="3" className={`${styles.nodeGreen} ${styles.pulseNormal}`} />
          
          {/* Right pole nodes */}
          <circle cx="1300" cy="150" r="4.5" className={`${styles.nodeGold} ${styles.pulseNormal}`} />
          <circle cx="1194" cy="256" r="2.5" className={styles.pulseSlow} />
          <circle cx="1053" cy="397" r="3" className={`${styles.nodeGreen} ${styles.pulseFast}`} />
          <circle cx="1406" cy="44" r="2.5" />
          <circle cx="1380" cy="320" r="2" className={styles.pulseSlow} />
        </g>
      </svg>
    </div>
  );
};

import Image from "next/image";
import { RashiItem } from "../../types/horoscope.types";
import styles from "./rashi-card.module.scss";

interface RashiCardProps {
  rashi: RashiItem;
}

export function RashiCard({ rashi }: RashiCardProps) {
  return (
    <div className={styles.card}>
      {/* Top row: Icon and Number */}
      <div className={styles.header}>
        <Image
          src={rashi.iconSrc}
          alt={rashi.title}
          width={24}
          height={24}
          className={styles.zodiacSymbol}
        />
        <span className={styles.number}>{rashi.number}</span>
      </div>
      <h3 className={styles.title}>{rashi.title}</h3>
      <p className={styles.description}>{rashi.description}</p>
      {/* Footer: Lucky Number and Alignment */}
      <div className={styles.footer}>
        <span className={styles.lucky}>Lucky: {rashi.luckyNumber}</span>
        <span className={styles.alignment}>{rashi.alignment}% Align</span>
      </div>
    </div>
  );
}

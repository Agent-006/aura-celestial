import Link from "next/link";
import { CalculatorItem } from "../../types/calculators-section.types";
import styles from "./calculator-card.module.scss";

interface CalculatorCardProps {
  calculator: CalculatorItem;
}

export function CalculatorCard({ calculator }: CalculatorCardProps) {
  const Icon = calculator.icon;

  return (
    <Link href={calculator.href} className={styles.card}>
      <div className={styles.iconBox}>
        <Icon className={styles.icon} size={20} strokeWidth={1.5} />
      </div>

      <h3 className={styles.title}>{calculator.title}</h3>
      <p className={styles.description}>{calculator.description}</p>

      <span className={styles.cta}>{calculator.ctaText}</span>
    </Link>
  );
}

import React from "react";
import styles from "./calculator-header.module.scss";

interface CalculatorHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  badge?: React.ReactNode;
}

export function CalculatorHeader({
  eyebrow,
  title,
  description,
  badge,
}: CalculatorHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.mainContent}>
        <div className={styles.eyebrow}>{eyebrow}</div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
      {badge && <div className={styles.badgeWrapper}>{badge}</div>}
    </header>
  );
}

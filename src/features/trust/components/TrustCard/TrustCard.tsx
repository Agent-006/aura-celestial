import { LucideIcon } from "lucide-react";
import styles from "./trust-card.module.scss";

interface TrustCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function TrustCard({ title, description, icon: Icon }: TrustCardProps) {
  return (
    <div className={styles.trustCard}>
      <div className={styles.iconWrapper}>
        <Icon className={styles.icon} size={32} strokeWidth={1.5} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

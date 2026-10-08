import styles from "./section-separator.module.scss";

interface SectionSeparatorProps {
  position?: "top" | "bottom";
  className?: string;
}

export function SectionSeparator({
  position = "top",
  className = "",
}: SectionSeparatorProps) {
  return (
    <div className={`${styles.wrapper} ${styles[position]} ${className}`}>
      <div className={styles.blend} />
      <div className={styles.line} />
    </div>
  );
}

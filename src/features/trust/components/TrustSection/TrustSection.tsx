import { TRUST_DATA } from "../../data/trustData";
import styles from "./trust-section.module.scss";

export function TrustSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {TRUST_DATA.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className={styles.trustCard}>
                <div className={styles.iconWrapper}>
                  {/* Increased icon size to 32 to match the new mockup */}
                  <Icon className={styles.icon} size={32} strokeWidth={1.5} />
                </div>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

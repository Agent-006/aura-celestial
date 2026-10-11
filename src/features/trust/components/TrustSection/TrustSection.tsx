import { TRUST_DATA } from "../../data/trustData";
import { TrustCard } from "../TrustCard/TrustCard";
import { TrustBackground } from "../TrustBackground/TrustBackground";
import styles from "./trust-section.module.scss";

export function TrustSection() {
  return (
    <section className={styles.section}>
      <TrustBackground />
      <div className={styles.container}>
        <div className={styles.grid}>
          {TRUST_DATA.map((item) => (
            <TrustCard 
              key={item.id}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import { FOOTER_FEATURES } from "../../data/Footer.data";
import styles from "./FooterFeatures.module.scss";

export const FooterFeatures = () => {
  return (
    <div className={styles.featuresGrid}>
      {FOOTER_FEATURES.map((feat, idx) => (
        <div key={idx} className={styles.featureCard}>
          <div className={styles.featIconBox}>
            <feat.icon size={18} />
          </div>
          <div>
            <h4 className={styles.featTitle}>{feat.title}</h4>
            <p className={styles.featDesc}>{feat.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

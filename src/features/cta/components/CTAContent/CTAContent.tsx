import styles from "./CTAContent.module.scss";

export const CTAContent = () => {
  return (
    <div className={styles.content}>
      <span className={styles.eyebrow}>- INITIATE YOUR ALIGNMENT -</span>
      <h2 className={styles.title}>Align Your Path With the Universe</h2>
      <p className={styles.description}>
        Your first 5 minutes with any verified Acharya are completely
        complimentary.
      </p>
    </div>
  );
};

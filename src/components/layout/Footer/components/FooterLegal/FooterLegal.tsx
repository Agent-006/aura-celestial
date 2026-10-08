import Link from "next/link";
import styles from "./FooterLegal.module.scss";

export const FooterLegal = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.copyrightBar}>
      <div className={styles.copyrightText}>
        &copy; {currentYear} <strong>JYOTISHAASTRO Inc.</strong>{" "}
        <Link href="https://jyotishaastro.com">jyotishaastro.com</Link>. All
        rights reserved.
      </div>
      <div className={styles.legalLinks}>
        <Link href="/privacy">Privacy Policy</Link>
        <span className={styles.dotDivider}>•</span>
        <Link href="/terms">Terms of Use</Link>
        <span className={styles.dotDivider}>•</span>
        <Link href="/data-sovereignty">Data Sovereignty</Link>
        <span className={styles.dotDivider}>•</span>
        <Link href="/security-audits">Security Audits</Link>
      </div>
      {/* Mock Social Icons */}
      {/* <div className={styles.socialBox}>
        <div className={styles.socialIcon}></div>
        <div className={styles.socialIcon}></div>
        <div className={styles.socialIcon}></div>
        <div className={styles.socialIcon}></div>
      </div> */}
    </div>
  );
};

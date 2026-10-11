import Link from "next/link";
import { FOOTER_LINKS } from "../../data/Footer.data";
import styles from "./FooterLinkGrid.module.scss";

export const FooterLinkGrid = () => {
  return (
    <div className={styles.linkGrid}>
      {FOOTER_LINKS.map((column, idx) => (
        <div key={idx} className={styles.linkColumn}>
          <div className={styles.columnHeader}>
            <h3>{column.title}</h3>
          </div>
          <ul className={styles.linkList}>
            {column.links.map((link, lIdx) => (
              <li key={lIdx}>
                <Link href={link.href} className={styles.linkItem}>
                  {link.label}
                  {link.badge && (
                    <span
                      className={`${styles.linkBadge} ${
                        link.badgeType === "green" ? styles.bgGreen : ""
                      }`}
                    >
                      {link.badge}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

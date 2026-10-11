import React from "react";
import styles from "./ingress-panel.module.scss";

interface IngressPanelProps {
  title: string | React.ReactNode;
  icon?: React.ReactNode;
  headerRight?: React.ReactNode;
  footerLeft?: React.ReactNode;
  footerRight?: React.ReactNode;
  children: React.ReactNode;
}

export function IngressPanel({
  title,
  icon,
  headerRight,
  footerLeft,
  footerRight,
  children,
}: IngressPanelProps) {
  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          {icon && <span className={styles.icon}>{icon}</span>}
          <h2 className={styles.title}>{title}</h2>
        </div>
        {headerRight && <div className={styles.headerRight}>{headerRight}</div>}
      </div>
      <div className={styles.content}>{children}</div>
      {(footerLeft || footerRight) && (
        <div className={styles.footer}>
          <div className={styles.footerLeft}>{footerLeft}</div>
          <div className={styles.footerRight}>{footerRight}</div>
        </div>
      )}
    </div>
  );
}

import React from 'react';
import styles from './Badge.module.scss';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    icon?: React.ReactNode;
    variant?: 'gold' | 'default';
}

export const Badge = ({ children, icon, variant = 'default', className, ...props }: BadgeProps) => {
    return (
        <div className={`${styles.badge} ${styles[variant]} ${className || ''}`} {...props}>
            {icon && <span className={styles.icon}>{icon}</span>}
            <span className={styles.content}>{children}</span>
        </div>
    );
};

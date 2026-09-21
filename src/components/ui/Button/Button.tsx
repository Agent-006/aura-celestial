import React from 'react';
import styles from './Button.module.scss';

type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'glow';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            variant = 'solid',
            size = 'md',
            fullWidth = false,
            leftIcon,
            rightIcon,
            className,
            ...props
        },
        ref
    ) => {
        const classNames = [
            styles.button,
            styles[variant],
            styles[size],
            fullWidth ? styles.fullWidth : '',
            className,
        ]
            .filter(Boolean)
            .join(' ');

        return (
            <button ref={ref} className={classNames} {...props}>
                {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
                <span className={styles.content}>{children}</span>
                {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
            </button>
        );
    }
);

Button.displayName = 'Button';

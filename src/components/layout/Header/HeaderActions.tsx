import styles from './HeaderActions.module.scss';
import { Button } from '@/components/ui/Button';
import { ArrowRight, User } from 'lucide-react';

export const HeaderActions = () => {
    return (
        <div className={styles.actions}>
            <div className={styles.iconGroup}>
                <button className={styles.iconBtn} aria-label="Toggle Theme">
                    ☾
                </button>

                <button className={styles.iconBtn} aria-label="Toggle Language">
                    <span className={styles.langText}>अA</span>
                </button>

                <button className={styles.userBtn} aria-label="User Profile">
                    <User size={16} />
                </button>
            </div>

            <Button
                variant="glow"
                size="sm"
                rightIcon={<ArrowRight size={16} />}
            >
                Talk now | First Chat Free
            </Button>
        </div>
    );
};

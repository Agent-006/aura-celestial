import { Logo } from '@/components/ui/Logo';
import { Navigation } from '../../navigation/Navigation';
import { HeaderActions } from './HeaderActions';
import styles from './Header.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Logo />
                <Navigation />
                <HeaderActions />
            </div>
        </header>
    );
};

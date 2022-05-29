import { Navigation } from '../Navigation';
import styles from './Header.module.css';

export const Header = () => (
  <header className={styles.header}>
    <Navigation />
  </header>
);

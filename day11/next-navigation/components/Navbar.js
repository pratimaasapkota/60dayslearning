import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>MySite</div>
      <div className={styles.links}>
        <Link href="/" className={pathname === '/' ? styles.active : ''}>
          Home
        </Link>
        <Link href="/about" className={pathname === '/about' ? styles.active : ''}>
          About
        </Link>
        <Link href="/contact" className={pathname === '/contact' ? styles.active : ''}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

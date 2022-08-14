import styles from '../styles/Main.module.scss';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const current = router.pathname;

  function mobileNav() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className={styles.nav} role='navigation'>
      <div className={styles.container}>
        <div>
          <Link href='/' title='home' passHref>
            <img src='/logo.png' alt='Grace Lutheran Vale Logo' />
          </Link>
        </div>

        <div className={styles.links}>
          <div className={current === '/' ? styles.active : styles.single}>
            <Link href='/' title='home' passHref>
              <a>Home</a>
            </Link>
          </div>
          <div className={current === '/about' ? styles.active : styles.single}>
            <Link href='/about' title='about' passHref>
              <a>About</a>
            </Link>
          </div>
          <div className={current === '/staff' ? styles.active : styles.single}>
            <Link href='/staff' title='staff' passHref>
              <a>Staff</a>
            </Link>
          </div>
          <div className={current === '/events' ? styles.active : styles.single}>
            <Link href='/events' title='events' passHref>
              <a>Events</a>
            </Link>
          </div>
        </div>
        <div className={styles.mobile}>
          {isOpen ? (
            <div onClick={mobileNav}>
              <CloseIcon />
            </div>
          ) : (
            <div onClick={mobileNav}>
              <MenuIcon />
            </div>
          )}
        </div>
        {isOpen ? (
          <div className={styles.mobileNav}>
            <div onClick={mobileNav}>
              <Link href='/' title='home'>
                Home
              </Link>
            </div>
            <div onClick={mobileNav}>
              <Link href='/about' title='about'>
                About
              </Link>
            </div>
            <div onClick={mobileNav}>
              <Link href='/staff' title='staff'>
                Staff
              </Link>
            </div>
            <div onClick={mobileNav}>
              <Link href='/events' title='events'>
                Events
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
}

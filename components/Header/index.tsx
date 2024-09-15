"use client";

import styles from "./Header.module.css";
import MobileNavigation from "../MobileNavigation";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import Link from "next/link";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navLeft}>
          <li className={styles.navItem}>
            <Link href="">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="">Hair</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="">Products</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="">Services</Link>
          </li>
        </ul>
        <ul className={styles.navRight}>
          <li className={styles.navItem}>
            <Link href="">About</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="">Cart</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="">Book Appointment</Link>
          </li>
        </ul>

        <div className={`${styles.mobileNavContainer}`}>
          {isMenuOpen ? (
            <MdClose
              className={styles.close}
              size={45}
              onClick={() => {
                setIsMenuOpen((prevState) => !prevState);
              }}
            />
          ) : (
            <CiMenuBurger
              onClick={() => {
                setIsMenuOpen((prevState) => !prevState);
              }}
              className={styles.hamburger}
              size={40}
            />
          )}
        </div>
        <MobileNavigation isOpen={isMenuOpen} />
      </nav>
    </header>
  );
}

export default Header;

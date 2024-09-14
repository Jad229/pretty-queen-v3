import styles from "./Header.module.css";
import Logo from "../../assets/Logo.svg";
import { BsBagDash } from "react-icons/bs";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import Button from "../ui/Button/Button";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navLeft}>
          <li className={styles.navItem}>
            <a href="">Home</a>
          </li>
          <li className={styles.navItem}>
            <a href="">Hair</a>
          </li>
          <li className={styles.navItem}>
            <a href="">Products</a>
          </li>
          <li className={styles.navItem}>
            <a href="">Services</a>
          </li>
        </ul>
        <ul className={styles.navRight}>
          <li className={styles.navItem}>
            <a href="">About</a>
          </li>
          <li className={styles.navItem}>
            <a href="">Cart</a>
          </li>
          <li className={styles.navItem}>
            <a href="">Book Appointment</a>
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

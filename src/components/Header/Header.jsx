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
        <div className={`${styles.navItem} ${styles.logoContainer}`}>
          <a href="/">
            <img className={styles.logo} src={Logo} alt="pretty queen logo" />
          </a>
        </div>
        <ul className={`${styles.navItem} ${styles.navList}`}>
          {/* Change anchor tags to Link tags later */}
          <li className={styles.navLink}>
            <a href="/">Home</a>
          </li>
          <li className={styles.navLink}>
            <a href="/products">Products</a>
          </li>
          <li className={styles.navLink}>
            <a href="/services">Services</a>
          </li>
          <li className={styles.navLink}>
            <a href="/about">About Us</a>
          </li>
        </ul>

        <div className={`${styles.navItem} ${styles.buttons}`}>
          <BsBagDash size={25} />
          <Button>Book Now</Button>
        </div>

        <div className={`${styles.navItem} ${styles.mobileNavContainer}`}>
          {isMenuOpen ? (
            <MdClose
              size={30}
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
              size={25}
            />
          )}
        </div>

        <MobileNavigation isOpen={isMenuOpen} />
      </nav>
    </header>
  );
}

export default Header;

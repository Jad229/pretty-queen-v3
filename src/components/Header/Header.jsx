import styles from "./Header.module.css";
import Logo from "../../assets/Logo.svg";
import { BsBag } from "react-icons/bs";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={`${styles.navItem} ${styles.logoContainer}`}>
          <img className={styles.logo} src={Logo} alt="pretty queen logo" />
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
          <BsBag size={25} />
          <button className={styles.button}>Book Now</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;

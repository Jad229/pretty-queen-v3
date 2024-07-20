import styles from "./Header.module.css";
import Logo from "../../assets/Logo.svg";
import { BsBag } from "react-icons/bs";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={Logo} alt="pretty queen logo" />
        </div>
        <ul className={styles.navList}>
          {/* Change anchor tags to Link tags later */}
          <li className={styles.navItem}>
            <a href="/">Home</a>
          </li>
          <li className={styles.navItem}>
            <a href="/products">Products</a>
          </li>
          <li className={styles.navItem}>
            <a href="/services">Services</a>
          </li>
          <li className={styles.navItem}>
            <a href="/about">About Us</a>
          </li>
        </ul>

        <div className={styles.buttons}>
          <BsBag size={25} />
          <button className={styles.button}>Book Now</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;

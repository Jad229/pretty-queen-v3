import styles from "./MobileNavigation.module.css";

export default function MobileNavigation() {
  return (
    <div className={styles.mobileMenuContainer}>
      <a className={styles.menuItem} href="/">
        Home
      </a>
      <a className={styles.menuItem} href="/products">
        Products
      </a>
      <a className={styles.menuItem} href="/services">
        Services
      </a>
      <a className={styles.menuItem} href="/about">
        About Us
      </a>
      <button className={styles.button}>Book Now</button>
    </div>
  );
}

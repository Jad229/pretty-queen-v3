import styles from "./MobileNavigation.module.css";

export default function MobileNavigation() {
  return (
    <div className={styles.mobileNavContainer}>
      <a href="/">Home</a>
      <a href="/products">Products</a>
      <a href="/services">Services</a>
      <a href="/about">About Us</a>
    </div>
  );
}

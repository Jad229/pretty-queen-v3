import { FaHome } from "react-icons/fa";
import styles from "./MobileNavigation.module.css";
import { BsBagDash, BsScissors } from "react-icons/bs";
import { BiBookHeart } from "react-icons/bi";

export default function MobileNavigation() {
  return (
    <div className={styles.mobileMenuContainer}>
      <a className={styles.menuItem} href="/">
        <FaHome size={25} /> Home
      </a>
      <a className={styles.menuItem} href="/products">
        <BsBagDash size={25} />
        Products
      </a>
      <a className={styles.menuItem} href="/services">
        <BsScissors size={25} /> Services
      </a>
      <a className={styles.menuItem} href="/about">
        <BiBookHeart size={25} /> About Us
      </a>
      <button className={styles.button}>Book Now</button>
    </div>
  );
}

import { FaHome } from "react-icons/fa";
import styles from "./MobileNavigation.module.css";
import { BsBagDash, BsScissors } from "react-icons/bs";
import { BiBookHeart } from "react-icons/bi";
import Button from "../ui/Button/Button";

const MobileNavigation = ({ isOpen }: { isOpen: Boolean }) => {
  return (
    <div className={`${styles.mobileNavMenu} ${isOpen ? styles.open : ""}`}>
      <ul className={styles.mobileNavList}>
        <li className={styles.mobileNavItem}>
          <a href="/" className={styles.mobileNavLink}>
            <FaHome size={25} />
            Home
          </a>
        </li>
        <li className={styles.mobileNavItem}>
          <a href="/products" className={styles.mobileNavLink}>
            <BsBagDash size={25} />
            Products
          </a>
        </li>
        <li className={styles.mobileNavItem}>
          <a href="/services" className={styles.mobileNavLink}>
            <BsScissors size={25} />
            Services
          </a>
        </li>
        <li className={styles.mobileNavItem}>
          <a href="/about" className={styles.mobileNavLink}>
            <BiBookHeart size={25} />
            About Us
          </a>
        </li>
        <li className={styles.mobileNavItem}>
          <a href="/about" className={styles.mobileNavLink}>
            <Button>Book Now</Button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavigation;

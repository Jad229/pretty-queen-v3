import React from "react";
import styles from "./product-filter.module.css";
export default function ProductFilter() {
  return (
    <div className={styles.filterBar}>
      <ul className={styles.filterLeft}>
        <li className={styles.filterTab}>
          <button className={styles.btn}>All Products</button>
        </li>
        <li className={styles.filterTab}>
          <button className={styles.btn}>Hair</button>
        </li>
        <li className={styles.filterTab}>
          <button className={styles.btn}>Shampoo</button>
        </li>
      </ul>
      <ul className={styles.filterRight}>
        <li className={styles.filterTab}>
          <button className={styles.btn}>Filters</button>
        </li>
      </ul>
    </div>
  );
}

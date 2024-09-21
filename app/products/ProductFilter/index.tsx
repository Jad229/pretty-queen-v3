import React from "react";
import styles from "./product-filter.module.css";
export default function ProductFilter() {
  return (
    <div className={styles.filterBar}>
      <ul className={styles.filterLeft}>
        <li>
          <button>All Products</button>
        </li>
        <li>
          <button>Hair</button>
        </li>
        <li>
          <button>Shampoo</button>
        </li>
      </ul>
      <ul className={styles.filterRight}>
        <li>
          <button>Filters</button>
        </li>
      </ul>
    </div>
  );
}

import React from "react";
import ProductCard from "../ProductCard";
import styles from "./product-list.module.css";

export default function ProductList() {
  return (
    <div className={styles.productsContainer}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}

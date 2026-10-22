import React from "react";
import ProductCard from "../ProductCard";
import styles from "./product-list.module.css";
import products from "@/data/products";

export default function ProductList() {
  return (
    <div className={styles.productsContainer}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

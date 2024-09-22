import styles from "./products.module.css";
import ProductList from "./ProductList";
import ProductFilter from "./ProductFilter";

export default function ProductPage() {
  return (
    <section className={styles.section}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>Shop All Products</h2>
      </div>
      <ProductFilter />
      <ProductList />
    </section>
  );
}

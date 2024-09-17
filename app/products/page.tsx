import Image from "next/image";
import Hero from "@/public/images/hero.svg";
import styles from "./products.module.css";
import ProductCard from "./ProductCard";
export default function ProductPage() {
  return (
    <section className={styles.section}>
      <div className={styles.textContainer}>
        <h2 className={styles.textLeft}>Pretty</h2>
        <Image src={Hero.src} width={200} height={400} alt="hero image" />
        <h2 className={styles.textRight}>Queen</h2>
      </div>
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
      <div className={styles.productsContainer}>
        <ProductCard />
      </div>
    </section>
  );
}

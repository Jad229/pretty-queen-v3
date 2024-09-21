import Image from "next/image";
import Hero from "@/public/images/hero.svg";
import styles from "./products.module.css";

import ProductList from "./ProductList";
import ProductFilter from "./ProductFilter";
export default function ProductPage() {
  return (
    <section className={styles.section}>
      {/* <div className={styles.textContainer}>
        <h2 className={styles.textLeft}>Pretty</h2>
        <Image src={Hero.src} width={200} height={400} alt="hero image" />
        <h2 className={styles.textRight}>Queen</h2>
      </div> */}
      <ProductFilter />
      <ProductList />
    </section>
  );
}

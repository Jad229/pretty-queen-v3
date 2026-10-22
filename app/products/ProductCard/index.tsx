import styles from "./product-card.module.css";
import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className={styles.productCard}>
      <div className={styles.topCard}>
        <Image
          src={`${product.image}`}
          width={3456}
          height={5184}
          alt="product image"
          className={styles.productImage}
        />
        <span className={styles.price}>${product.price.toFixed(2)}</span>
      </div>
      <div className={styles.bottomCard}>
        <div className={styles.productName}>
          <h6 className={styles.brand}>{product.category}</h6>
          <h3 className={styles.title}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </h3>
        </div>
        <p className={styles.desc}>{product.description}</p>
        <button className={styles.btn}>Add to Cart</button>
      </div>
    </div>
  );
}

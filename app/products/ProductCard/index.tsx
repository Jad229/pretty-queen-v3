import ShampooImage from "@/public/images/shampoo_bottle.png";
import HairImage from "@/public/images/weave.png";
import styles from "./product-card.module.css";
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
};

console.log(ShampooImage);

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
        <span className={styles.price}>{product.price}</span>
      </div>
      <div className={styles.bottomCard}>
        <div className={styles.productName}>
          <h6 className={styles.brand}>Product Brand</h6>
          <h3 className={styles.title}>{product.name}</h3>
        </div>
        <p className={styles.desc}>{product.description}</p>
        <button className={styles.btn}>Add to Cart</button>
      </div>
    </div>
  );
}

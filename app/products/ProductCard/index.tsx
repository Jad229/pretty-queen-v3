import ShampooImage from "@/public/images/shampoo_bottle.png";
import HairImage from "@/public/images/weave.png";
import styles from "./product-card.module.css";
import Image from "next/image";

export default function ProductCard() {
  return (
    <div className={styles.productCard}>
      <div className={styles.topCard}>
        {/* <Image
          src={ShampooImage.src}
          width={3456}
          height={5184}
          alt="product image"
          className={styles.productImage}
        /> */}
        <span className={styles.price}>$45</span>
      </div>
      {/* <div className={styles.bottomCard}>
        <div className={styles.productName}>
          <h6 className={styles.brand}>Product Brand</h6>
          <h3 className={styles.title}>Product Title</h3>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          culpa minima.
        </p>
        <button className={styles.btn}>Add to Cart</button>
      </div> */}
    </div>
  );
}

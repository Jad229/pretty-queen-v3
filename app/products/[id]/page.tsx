import products from "@/data/products";
import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "./product-details.module.css";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
};

export default function ProductDetails({ params }: { params: { id: string } }) {
  const product = (products as Product[]).find(
    (item) => String(item.id) === params.id
  );

  if (!product) {
    notFound();
  }

  return (
    <section className={styles.section}>
      <Image
        src={product.image}
        width={800}
        height={800}
        alt={product.name}
        className={styles.image}
      />
      <div className={styles.details}>
        <p className={styles.category}>{product.category}</p>
        <h2 className={styles.title}>{product.name}</h2>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
        <p className={styles.description}>{product.description}</p>
        <button className={styles.btn}>Add to Cart</button>
      </div>
    </section>
  );
}

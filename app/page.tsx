import Image from "next/image";
import styles from "./style.module.css";
import Hero from "@/public/images/hero.svg";

export default function Page() {
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.textLeft}>Pretty</h1>
        <Image
          width={400}
          height={600}
          className={styles.heroImage}
          src={Hero.src}
          alt="hero image"
        />
        <h1 className={styles.textRight}>Queen</h1>
      </div>
      <button className={styles.btn}>Explore More</button>
    </section>
  );
}

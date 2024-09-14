import Hero from "../../assets/hero.svg";
import styles from "./Landing.module.css";

export default function Landing() {
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.textLeft}>Pretty</h1>
        <img className={styles.heroImage} src={Hero.src} alt="hero image" />
        <h1 className={styles.textRight}>Queen</h1>
      </div>
      <button className={styles.btn}>Explore More</button>
    </section>
  );
}

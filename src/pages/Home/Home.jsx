import styles from "./Home.module.css";
export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.hero}>
        <div className={styles.heroTextContainer}>
          <p>Welcome to Pretty Queen</p>
          <h1>Where every visit is a royal experience</h1>
        </div>
      </div>
    </section>
  );
}

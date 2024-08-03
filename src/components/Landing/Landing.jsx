import Hero from "../../assets/hero.png";
import styles from "./Landing.module.css";

export default function Landing() {
  return (
    <section className={styles.section}>
      <div className={styles.textContainer}>
        <h1 className={styles.sectionHeading}>
          A <span className={styles.headingRoyal}>Royal</span> Experience Every
          Visit
        </h1>
        <p className={styles.sectionParagraph}>
          Bring out and embrace your inner queen
        </p>
        <button className={styles.btn}>Explore Shop</button>
      </div>
      <div className={styles.heroContainer}>
        <div className={styles.halo}></div>
        <img
          className={styles.heroImage}
          src={Hero}
          alt="woman with hair flowing"
        />
      </div>
    </section>
  );
}

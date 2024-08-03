import Button from "../ui/Button/Button";
import Hero from "../../assets/hero.png";
import styles from "./Landing.module.css";

export default function Landing() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionHeading}>
        A <span className={styles.headingRoyal}>Royal</span> Experience Every
        Visit
      </h2>
      <p className={styles.sectionParagraph}>
        Bring out and embrace your inner queen
      </p>
      <Button className={styles.btn}>Explore Shop</Button>
      <img
        className={styles.heroImage}
        src={Hero}
        alt="woman with hair flowing"
      />
    </section>
  );
}

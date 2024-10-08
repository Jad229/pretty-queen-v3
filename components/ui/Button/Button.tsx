import styles from "./Button.module.css";

export default function Button({ children }: { children: React.ReactNode }) {
  return <button className={styles.btn}>{children}</button>;
}

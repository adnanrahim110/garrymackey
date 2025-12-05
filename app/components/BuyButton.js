import styles from "./BuyButton.module.css";

export default function BuyButton({
  size = "medium",
  variant = "primary",
  children = "Buy on Amazon"
}) {
  return (
    <a
      href="https://amazon.com"
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.btn} ${styles[size]} ${styles[variant]}`}
    >
      <span className={styles.icon}>🛒</span>
      <span className={styles.text}>{children}</span>
      <span className={styles.arrow}>→</span>
    </a>
  );
}

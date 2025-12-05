import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>✍️</span>
              <div className={styles.logoText}>
                <span className={styles.logoName}>Garrey</span>
                <span className={styles.logoTagline}>Children&apos;s Author</span>
              </div>
            </div>
            <p className={styles.tagline}>
              Creating magical stories that inspire young readers to dream big!
            </p>
          </div>

          <div className={styles.links}>
            <h4 className={styles.linksTitle}>Quick Links</h4>
            <nav className={styles.nav}>
              <Link href="/">Home</Link>
              <Link href="/book">Books</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>

          <div className={styles.cta}>
            <h4 className={styles.linksTitle}>Get the Book!</h4>
            <a
              href="https://amazon.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.buyBtn}
            >
              📚 Buy on Amazon
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.decorations}>
            <span>🐚</span>
            <span>⭐</span>
            <span>🐟</span>
            <span>🦀</span>
            <span>🐢</span>
          </div>
          <p className={styles.copyright}>
            © {currentYear} Garrey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

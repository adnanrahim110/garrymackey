import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        {/* Sunburst Rays */}
        <div className={styles.sunburst}></div>

        {/* Sea Creature Decorations */}
        <div className={styles.decorations}>
          {/* Left side creatures */}
          <div className={`${styles.creature} ${styles.octopus}`}>🐙</div>
          <div className={`${styles.creature} ${styles.crab1}`}>🦀</div>
          <div className={`${styles.creature} ${styles.starfish1}`}>⭐</div>
          <div className={`${styles.creature} ${styles.shell1}`}>🐚</div>

          {/* Right side creatures */}
          <div className={`${styles.creature} ${styles.crab2}`}>🦀</div>
          <div className={`${styles.creature} ${styles.turtle}`}>🐢</div>
          <div className={`${styles.creature} ${styles.starfish2}`}>⭐</div>
          <div className={`${styles.creature} ${styles.fish1}`}>🐟</div>
          <div className={`${styles.creature} ${styles.shell2}`}>🐚</div>
          <div className={`${styles.creature} ${styles.starfish3}`}>🌟</div>
        </div>

        <div className={styles.heroContainer}>
          {/* Tilted Book */}
          <div className={styles.bookWrapper}>
            <div className={styles.bookShadow}></div>
            <div className={styles.book}>
              <div className={styles.bookCover}>
                <span className={styles.bookIcon}>⭐</span>
                <span className={styles.bookMainTitle}>Joey</span>
                <span className={styles.bookSubtitle}>the Juggling</span>
                <span className={styles.bookSubtitle}>Starfish</span>
                <div className={styles.bookAuthor}>
                  <span>Written by</span>
                  <span>Garrey</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Text */}
          <h1 className={styles.heroTitle}>
            Meet Joey the<br />Juggling Starfish!
          </h1>

          {/* CTA Button */}
          <a
            href="https://amazon.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            BUY ON AMAZON
          </a>
        </div>

        {/* Wave at bottom */}
        <div className={styles.wave}></div>
      </section>

      {/* Book Brief Section */}
      <section className={styles.bookSection}>
        <div className={styles.container}>
          <div className={styles.bookBriefGrid}>
            <div className={styles.bookBriefContent}>
              <span className={styles.sectionTag}>📚 The Story</span>
              <h2 className={styles.sectionTitle}>An Underwater Adventure</h2>
              <p className={styles.sectionText}>
                Deep beneath the sparkling waves, in a colorful coral reef, lives Joey —
                a little starfish with an extraordinary talent. With his five arms,
                Joey creates the most amazing juggling performances that dazzle all
                the sea creatures!
              </p>
              <p className={styles.sectionText}>
                Join Joey as he learns valuable lessons about friendship, believing
                in yourself, and the magic that happens when you share your
                unique gifts with others.
              </p>
              <Link href="/book" className={styles.linkButton}>
                Learn More About the Book →
              </Link>
            </div>
            <div className={styles.bookBriefFeatures}>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>🎨</span>
                <div>
                  <h4>Beautiful Illustrations</h4>
                  <p>25 pages of vibrant, colorful artwork</p>
                </div>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>👶</span>
                <div>
                  <h4>Perfect for Ages 3-8</h4>
                  <p>Ideal for bedtime stories</p>
                </div>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>💖</span>
                <div>
                  <h4>Heartwarming Message</h4>
                  <p>Teaches friendship & self-belief</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Author Brief Section */}
      <section className={styles.authorSection}>
        <div className={styles.container}>
          <div className={styles.authorGrid}>
            <div className={styles.authorImage}>
              <div className={styles.authorPlaceholder}>
                <span>✍️</span>
              </div>
            </div>
            <div className={styles.authorContent}>
              <span className={styles.sectionTag}>👋 Meet the Author</span>
              <h2 className={styles.sectionTitle}>Written with Love by Garrey</h2>
              <p className={styles.sectionText}>
                Garrey is a passionate children&apos;s book author dedicated to creating
                stories that inspire young readers. With Joey the Juggling Starfish,
                Garrey brings a magical underwater world to life, teaching children
                about the importance of friendship and believing in themselves.
              </p>
              <p className={styles.sectionText}>
                &quot;Every child has a unique talent waiting to be discovered.
                Joey&apos;s story is a reminder that when we embrace what makes us
                special, wonderful things happen!&quot;
              </p>
              <Link href="/about" className={styles.linkButton}>
                Read More About Garrey →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaDecorations}>
          <span className={styles.ctaFish1}>🐠</span>
          <span className={styles.ctaFish2}>🐟</span>
          <span className={styles.ctaStar}>🌟</span>
          <span className={styles.ctaCrab}>🦀</span>
        </div>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Dive In?</h2>
            <p className={styles.ctaText}>
              Bring Joey&apos;s magical adventure home to your family today!
              Perfect for bedtime stories and creating special reading moments.
            </p>
            <a
              href="https://amazon.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButtonLarge}
            >
              🛒 Get Your Copy on Amazon
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

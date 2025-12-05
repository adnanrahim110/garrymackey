import styles from "./page.module.css";

export const metadata = {
  title: "Joey the Juggling Starfish | Sunny Beach Books",
  description: "Get your copy of Joey the Juggling Starfish, a heartwarming children's book about friendship and believing in yourself.",
};

export default function Book() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.sunburst}></div>
        <div className={styles.decorations}>
          <span className={styles.star1}>⭐</span>
          <span className={styles.star2}>🌟</span>
          <span className={styles.octopus}>🐙</span>
          <span className={styles.turtle}>🐢</span>
        </div>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.bookDisplay}>
              <div className={styles.book}>
                <div className={styles.bookCover}>
                  <span className={styles.bookIcon}>⭐</span>
                  <span className={styles.bookMainTitle}>Joey</span>
                  <span className={styles.bookSubtitle}>the Juggling</span>
                  <span className={styles.bookSubtitle}>Starfish</span>
                  <div className={styles.bookAuthorLabel}>
                    <span>Written by Garrey</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.bookInfo}>
              <span className={styles.tag}>📚 Children&apos;s Picture Book</span>
              <h1 className={styles.heroTitle}>Joey the Juggling Starfish</h1>
              <p className={styles.heroSubtitle}>
                A heartwarming underwater adventure about friendship,
                talent, and believing in yourself.
              </p>
              <div className={styles.bookMeta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Age Range</span>
                  <span className={styles.metaValue}>3-8 Years</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Pages</span>
                  <span className={styles.metaValue}>25 Pages</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Format</span>
                  <span className={styles.metaValue}>Picture Book</span>
                </div>
              </div>
              <a
                href="https://amazon.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButton}
              >
                🛒 BUY ON AMAZON
              </a>
            </div>
          </div>
        </div>
        <div className={styles.wave}></div>
      </section>

      {/* Synopsis Section */}
      <section className={styles.synopsisSection}>
        <div className={styles.container}>
          <div className={styles.synopsisGrid}>
            <div className={styles.synopsisContent}>
              <span className={styles.sectionTag}>📖 The Story</span>
              <h2 className={styles.sectionTitle}>About the Book</h2>
              <p className={styles.synopsisText}>
                Deep beneath the sparkling waves, in a colorful coral reef, lives Joey —
                a little starfish with an extraordinary talent: he can juggle! With his
                five arms, Joey creates the most amazing performances that dazzle all
                the sea creatures.
              </p>
              <p className={styles.synopsisText}>
                But when Joey begins to doubt himself and wonders if his talent is truly
                special, he embarks on a journey of self-discovery. Along the way, he
                learns important lessons about friendship, the value of being unique,
                and the magic that happens when you believe in yourself.
              </p>
              <p className={styles.synopsisText}>
                Join Joey on his heartwarming adventure and discover the joy of
                celebrating what makes each of us special!
              </p>
            </div>
            <div className={styles.synopsisImage}>
              <div className={styles.imagePlaceholder}>
                <span>🌊</span>
                <span>⭐</span>
                <span>🐠</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitleCenter}>What&apos;s Inside</h2>
          <p className={styles.sectionSubtitle}>
            Everything that makes this book special
          </p>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>🎨</span>
              <h3 className={styles.featureTitle}>Vibrant Illustrations</h3>
              <p className={styles.featureText}>
                25 pages filled with beautiful, colorful artwork that brings the
                underwater world to life. Every page is a visual treat!
              </p>
            </div>

            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>💫</span>
              <h3 className={styles.featureTitle}>Inspiring Message</h3>
              <p className={styles.featureText}>
                A heartfelt story about believing in yourself, embracing your
                unique talents, and the power of true friendship.
              </p>
            </div>

            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>👶</span>
              <h3 className={styles.featureTitle}>Perfect for Young Readers</h3>
              <p className={styles.featureText}>
                Written with ages 3-8 in mind, with engaging text that&apos;s perfect
                for bedtime stories and early readers alike.
              </p>
            </div>

            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>❤️</span>
              <h3 className={styles.featureTitle}>Family Reading Time</h3>
              <p className={styles.featureText}>
                A wonderful book to share together, sparking conversations
                about talents, dreams, and being a good friend.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section className={styles.charactersSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitleCenter}>Meet the Characters</h2>
          <p className={styles.sectionSubtitle}>
            The wonderful friends you&apos;ll meet in Joey&apos;s world
          </p>

          <div className={styles.charactersGrid}>
            <div className={styles.characterCard}>
              <div className={styles.characterEmoji}>⭐</div>
              <h3>Joey</h3>
              <p>A talented starfish who loves to juggle and dreams big!</p>
            </div>
            <div className={styles.characterCard}>
              <div className={styles.characterEmoji}>🐙</div>
              <h3>Oliver</h3>
              <p>A wise octopus and Joey&apos;s encouraging best friend.</p>
            </div>
            <div className={styles.characterCard}>
              <div className={styles.characterEmoji}>🐢</div>
              <h3>Terry</h3>
              <p>A gentle sea turtle who teaches Joey about patience.</p>
            </div>
            <div className={styles.characterCard}>
              <div className={styles.characterEmoji}>🦀</div>
              <h3>Carlo</h3>
              <p>A cheerful crab who always knows how to have fun!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className={styles.reviewsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitleCenter}>What Parents Say</h2>

          <div className={styles.reviewsGrid}>
            <div className={styles.reviewCard}>
              <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
              <p className={styles.reviewText}>
                &quot;My kids absolutely love Joey! We read it every night and
                they never get tired of it. Beautiful illustrations!&quot;
              </p>
              <span className={styles.reviewer}>— Sarah M.</span>
            </div>
            <div className={styles.reviewCard}>
              <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
              <p className={styles.reviewText}>
                &quot;A wonderful story with a great message. Joey teaches kids
                to believe in themselves. Highly recommend!&quot;
              </p>
              <span className={styles.reviewer}>— Michael T.</span>
            </div>
            <div className={styles.reviewCard}>
              <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
              <p className={styles.reviewText}>
                &quot;The perfect bedtime story! Engaging, colorful, and teaches
                important values. A new family favorite.&quot;
              </p>
              <span className={styles.reviewer}>— Emily R.</span>
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
        </div>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Meet Joey?</h2>
            <p className={styles.ctaText}>
              Bring this magical underwater adventure home to your family today!
            </p>
            <a
              href="https://amazon.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButtonLarge}
            >
              🛒 Order Your Copy Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

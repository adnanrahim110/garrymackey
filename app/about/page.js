import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "About Garrey | Sunny Beach Books",
  description: "Meet Garrey, the author of Joey the Juggling Starfish - a passionate children's book writer dedicated to inspiring young readers.",
};

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.decorations}>
          <span className={styles.star1}>⭐</span>
          <span className={styles.star2}>🌟</span>
          <span className={styles.shell}>🐚</span>
          <span className={styles.crab}>🦀</span>
        </div>
        <div className={styles.container}>
          <span className={styles.heroTag}>👋 Meet the Author</span>
          <h1 className={styles.heroTitle}>About Garrey</h1>
          <p className={styles.heroSubtitle}>
            The creative mind behind Joey the Juggling Starfish
          </p>
        </div>
      </section>

      {/* Author Bio Section */}
      <section className={styles.bioSection}>
        <div className={styles.container}>
          <div className={styles.bioGrid}>
            <div className={styles.authorImage}>
              <div className={styles.authorPlaceholder}>
                <span>✍️</span>
              </div>
              <div className={styles.authorBadge}>
                <span>📚</span>
                <span>Author</span>
              </div>
            </div>
            <div className={styles.bioContent}>
              <h2 className={styles.bioTitle}>Hello, I&apos;m Garrey!</h2>
              <p className={styles.bioText}>
                I&apos;m a children&apos;s book author with a passion for creating magical
                stories that inspire young readers. My journey into writing began with
                a simple belief: every child deserves stories that make them feel
                special and capable of achieving their dreams.
              </p>
              <p className={styles.bioText}>
                <strong>Joey the Juggling Starfish</strong> is my debut picture book,
                born from my love of the ocean and my desire to teach children about
                the power of self-belief and friendship. I believe that the best
                stories are those that entertain while gently teaching important
                life lessons.
              </p>
              <p className={styles.bioText}>
                When I&apos;m not writing, you can find me exploring beaches, dreaming up
                new characters, and thinking about the next adventure I want to share
                with young readers around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className={styles.philosophySection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitleCenter}>My Writing Philosophy</h2>
          <p className={styles.sectionSubtitle}>
            The values that guide every story I create
          </p>

          <div className={styles.philosophyGrid}>
            <div className={styles.philosophyCard}>
              <span className={styles.philosophyIcon}>💖</span>
              <h3>Stories from the Heart</h3>
              <p>
                Every book I write comes from a place of genuine love for children
                and storytelling. I pour my heart into creating characters and
                adventures that resonate with young readers.
              </p>
            </div>

            <div className={styles.philosophyCard}>
              <span className={styles.philosophyIcon}>✨</span>
              <h3>Imagination First</h3>
              <p>
                I believe in nurturing creativity and wonder. My stories are designed
                to spark imagination and encourage children to dream big and explore
                their own unique talents.
              </p>
            </div>

            <div className={styles.philosophyCard}>
              <span className={styles.philosophyIcon}>🌟</span>
              <h3>Meaningful Messages</h3>
              <p>
                While my stories are fun and entertaining, they always carry important
                messages about kindness, friendship, self-belief, and embracing what
                makes each of us special.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.missionSection}>
        <div className={styles.container}>
          <div className={styles.missionCard}>
            <span className={styles.missionIcon}>🎯</span>
            <h2 className={styles.missionTitle}>My Mission</h2>
            <p className={styles.missionText}>
              &quot;I write to inspire the next generation of dreamers. Every child
              has something special inside them — a unique talent, a creative spark,
              a kind heart. Through my stories, I hope to help children discover
              their gifts and have the courage to share them with the world.&quot;
            </p>
            <span className={styles.missionAuthor}>— Garrey</span>
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className={styles.factsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitleCenter}>Fun Facts About Me</h2>

          <div className={styles.factsGrid}>
            <div className={styles.factCard}>
              <span className={styles.factEmoji}>🌊</span>
              <p>I love visiting the beach and finding inspiration in the ocean</p>
            </div>
            <div className={styles.factCard}>
              <span className={styles.factEmoji}>⭐</span>
              <p>Starfish are my favorite sea creatures (can you tell?)</p>
            </div>
            <div className={styles.factCard}>
              <span className={styles.factEmoji}>📝</span>
              <p>I always carry a notebook for capturing story ideas</p>
            </div>
            <div className={styles.factCard}>
              <span className={styles.factEmoji}>🎨</span>
              <p>I work closely with illustrators to bring my visions to life</p>
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
            <h2 className={styles.ctaTitle}>Read My First Book!</h2>
            <p className={styles.ctaText}>
              Discover Joey&apos;s magical underwater adventure
            </p>
            <div className={styles.ctaButtons}>
              <a
                href="https://amazon.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButtonPrimary}
              >
                🛒 Buy on Amazon
              </a>
              <Link href="/book" className={styles.ctaButtonSecondary}>
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

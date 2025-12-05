import Link from "next/link";

export const metadata = {
  title: "About Garrey | Children's Book Author",
  description:
    "Meet Garrey, the author of Joey the Juggling Starfish - a passionate children's book writer dedicated to inspiring young readers.",
};

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#FF9A3C] via-[#FFB347] to-[#FFCBA4] pt-40 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <span className="absolute top-[20%] left-[10%] text-[2.5rem] animate-[float_4s_ease-in-out_infinite]">
            ⭐
          </span>
          <span className="absolute top-[18%] right-[12%] text-[2.5rem] animate-[float_4s_ease-in-out_infinite_1s]">
            🌟
          </span>
          <span className="absolute bottom-[20%] right-[8%] text-[2.5rem] animate-[float_4s_ease-in-out_infinite_0.5s]">
            🐚
          </span>
          <span className="absolute bottom-[25%] left-[8%] text-[2.5rem] animate-[float_4s_ease-in-out_infinite_1.5s]">
            🦀
          </span>
        </div>
        <div className="max-w-[1000px] mx-auto px-6">
          <span className="inline-block bg-gradient-to-br from-[#FF8C42] to-[#FF6B35] text-white py-2 px-5 rounded-full font-['Baloo_2'] font-semibold text-[0.95rem] mb-5">
            👋 Meet the Author
          </span>
          <h1 className="text-[clamp(2.5rem,6vw,3.5rem)] font-['Baloo_2'] text-[#2C3E50] mb-4 [text-shadow:2px_2px_0_rgba(255,255,255,0.5)]">
            About Garrey
          </h1>
          <p className="text-xl text-[#2C3E50]/85 max-w-[500px] mx-auto">
            The creative mind behind Joey the Juggling Starfish
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="bg-gradient-to-b from-[#FFCBA4] via-30% to-[#FFF8F0] py-20">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="grid grid-cols-[0.8fr_1.2fr] gap-16 items-start max-md:grid-cols-1 max-md:gap-10 max-md:text-center">
            <div className="relative flex flex-col items-center">
              <div className="w-[280px] h-[280px] bg-gradient-to-br from-[#FF9A3C] to-[#FFB347] rounded-full flex items-center justify-center text-7xl shadow-[0_20px_50px_rgba(255,140,66,0.35)] border-8 border-white transition-transform duration-300 hover:scale-105 hover:rotate-[3deg] max-md:w-[220px] max-md:h-[220px] max-md:text-6xl">
                ✍️
              </div>
              <div className="flex items-center gap-2 bg-white py-3 px-6 rounded-full shadow-lg -mt-6 relative z-10 font-['Baloo_2'] font-semibold text-[#FF8C42]">
                <span>📚</span>
                <span>Author</span>
              </div>
            </div>
            <div>
              <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-['Baloo_2'] text-[#2C3E50] mb-6">
                Hello, I&apos;m Garrey!
              </h2>
              <p className="text-lg text-[#636E72] leading-relaxed mb-5">
                I&apos;m a children&apos;s book author with a passion for
                creating magical stories that inspire young readers. My journey
                into writing began with a simple belief: every child deserves
                stories that make them feel special and capable of achieving
                their dreams.
              </p>
              <p className="text-lg text-[#636E72] leading-relaxed mb-5">
                <strong className="text-[#FF8C42]">
                  Joey the Juggling Starfish
                </strong>{" "}
                is my debut picture book, born from my love of the ocean and my
                desire to teach children about the power of self-belief and
                friendship. I believe that the best stories are those that
                entertain while gently teaching important life lessons.
              </p>
              <p className="text-lg text-[#636E72] leading-relaxed">
                When I&apos;m not writing, you can find me exploring beaches,
                dreaming up new characters, and thinking about the next
                adventure I want to share with young readers around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-[#FFF8F0] py-20">
        <div className="max-w-[1000px] mx-auto px-6">
          <h2 className="text-[clamp(2rem,4vw,2.5rem)] font-['Baloo_2'] text-[#2C3E50] text-center mb-3">
            My Writing Philosophy
          </h2>
          <p className="text-lg text-[#636E72] text-center max-w-[500px] mx-auto mb-12">
            The values that guide every story I create
          </p>

          <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1 max-md:gap-6">
            {[
              {
                icon: "💖",
                title: "Stories from the Heart",
                text: "Every book I write comes from a place of genuine love for children and storytelling. I pour my heart into creating characters and adventures that resonate with young readers.",
              },
              {
                icon: "✨",
                title: "Imagination First",
                text: "I believe in nurturing creativity and wonder. My stories are designed to spark imagination and encourage children to dream big and explore their own unique talents.",
              },
              {
                icon: "🌟",
                title: "Meaningful Messages",
                text: "While my stories are fun and entertaining, they always carry important messages about kindness, friendship, self-belief, and embracing what makes each of us special.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white py-10 px-8 rounded-3xl text-center shadow-[0_6px_25px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_15px_40px_rgba(255,140,66,0.15)]"
              >
                <span className="text-6xl block mb-5">{item.icon}</span>
                <h3 className="font-['Baloo_2'] text-xl text-[#2C3E50] mb-4">
                  {item.title}
                </h3>
                <p className="text-[0.95rem] text-[#636E72] leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gradient-to-br from-[#FFB347] to-[#FF9A3C] py-20">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="bg-white py-14 px-14 rounded-[32px] text-center max-w-[800px] mx-auto shadow-[0_15px_50px_rgba(0,0,0,0.15)] max-md:py-10 max-md:px-6">
            <span className="text-6xl block mb-6">🎯</span>
            <h2 className="text-3xl font-['Baloo_2'] text-[#FF8C42] mb-6">
              My Mission
            </h2>
            <p className="text-xl text-[#636E72] leading-relaxed italic mb-6">
              &quot;I write to inspire the next generation of dreamers. Every
              child has something special inside them — a unique talent, a
              creative spark, a kind heart. Through my stories, I hope to help
              children discover their gifts and have the courage to share them
              with the world.&quot;
            </p>
            <span className="font-['Baloo_2'] font-bold text-lg text-[#FF8C42]">
              — Garrey
            </span>
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="bg-[#FFF8F0] py-20">
        <div className="max-w-[1000px] mx-auto px-6">
          <h2 className="text-[clamp(2rem,4vw,2.5rem)] font-['Baloo_2'] text-[#2C3E50] text-center mb-12">
            Fun Facts About Me
          </h2>

          <div className="grid grid-cols-4 gap-6 max-md:grid-cols-2 max-md:gap-4">
            {[
              {
                emoji: "🌊",
                text: "I love visiting the beach and finding inspiration in the ocean",
              },
              {
                emoji: "⭐",
                text: "Starfish are my favorite sea creatures (can you tell?)",
              },
              {
                emoji: "📝",
                text: "I always carry a notebook for capturing story ideas",
              },
              {
                emoji: "🎨",
                text: "I work closely with illustrators to bring my visions to life",
              },
            ].map((fact) => (
              <div
                key={fact.emoji}
                className="bg-white py-8 px-6 rounded-2xl text-center shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:rotate-[2deg] hover:shadow-[0_12px_30px_rgba(255,140,66,0.15)] max-md:py-6 max-md:px-4"
              >
                <span className="text-5xl block mb-4 max-md:text-4xl">
                  {fact.emoji}
                </span>
                <p className="text-[0.95rem] text-[#636E72] leading-relaxed">
                  {fact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#FF9A3C] to-[#FF8C42] py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <span className="absolute top-[20%] left-[10%] text-[2.5rem] opacity-50 animate-[float_4s_ease-in-out_infinite]">
            🐠
          </span>
          <span className="absolute bottom-[20%] right-[10%] text-[2.5rem] opacity-50 animate-[float_4s_ease-in-out_infinite_1s]">
            🐟
          </span>
          <span className="absolute top-[30%] right-[20%] text-[2.5rem] opacity-50 animate-[float_4s_ease-in-out_infinite_0.5s]">
            🌟
          </span>
        </div>
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center relative z-10">
            <h2 className="text-[clamp(2rem,5vw,2.8rem)] font-['Baloo_2'] text-white mb-3 [text-shadow:2px_2px_4px_rgba(0,0,0,0.15)]">
              Read My First Book!
            </h2>
            <p className="text-xl text-white/95 mb-8">
              Discover Joey&apos;s magical underwater adventure
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="https://amazon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-4 px-10 bg-white text-[#FF8C42] font-['Baloo_2'] font-bold text-lg no-underline rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:text-[#FF6B35]"
              >
                🛒 Buy on Amazon
              </a>
              <Link
                href="/book"
                className="inline-flex items-center gap-2 py-4 px-8 bg-white text-[#0EA5E9] font-['Baloo_2'] font-bold text-lg no-underline rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

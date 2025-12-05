import Link from "next/link";

export const metadata = {
  title: "Joey the Juggling Starfish | Sunny Beach Books",
  description:
    "Get your copy of Joey the Juggling Starfish, a heartwarming children's book about friendship and believing in yourself.",
};

export default function Book() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#FF9A3C] via-[#FFB347] to-[#FFCBA4] pt-40 pb-32 relative overflow-hidden">
        {/* Sunburst */}
        <div className="absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none animate-[spin_60s_linear_infinite] bg-[repeating-conic-gradient(from_0deg,rgba(255,255,255,0.15)_0deg_10deg,transparent_10deg_20deg)]" />

        {/* Decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <span className="absolute top-[15%] left-[5%] text-[2.5rem] animate-[float_4s_ease-in-out_infinite]">
            ⭐
          </span>
          <span className="absolute top-[12%] right-[8%] text-[2.5rem] animate-[float_4s_ease-in-out_infinite_1s]">
            🌟
          </span>
          <span className="absolute bottom-[15%] left-[5%] text-[3rem] animate-[float_4s_ease-in-out_infinite_0.5s]">
            🐙
          </span>
          <span className="absolute bottom-[18%] right-[5%] text-[3rem] animate-[float_4s_ease-in-out_infinite_1.5s]">
            🐢
          </span>
        </div>

        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-[1fr_1.3fr] gap-16 items-center relative z-10 max-md:grid-cols-1 max-md:text-center max-md:gap-12">
            {/* Book Display */}
            <div className="flex justify-center">
              <div className="-rotate-[5deg] transition-transform duration-400 hover:-rotate-[2deg] hover:scale-105">
                <div className="w-[280px] h-[360px] bg-gradient-to-br from-[#87CEEB] via-[#5DADE2] to-[#3498DB] rounded-lg p-6 flex flex-col items-center justify-center shadow-[12px_15px_40px_rgba(0,0,0,0.3),inset_0_0_60px_rgba(255,255,255,0.2)] border-4 border-white/50 relative max-md:w-[220px] max-md:h-[290px]">
                  <span className="text-5xl mb-2 animate-[wobble_2s_ease-in-out_infinite]">
                    ⭐
                  </span>
                  <span className="font-['Baloo_2'] text-[2.2rem] font-extrabold text-[#2C5F7C] [text-shadow:1px_1px_0_white] max-md:text-[1.8rem]">
                    Joey
                  </span>
                  <span className="font-['Baloo_2'] text-lg font-semibold text-[#2C5F7C] leading-tight">
                    the Juggling
                  </span>
                  <span className="font-['Baloo_2'] text-lg font-semibold text-[#2C5F7C] leading-tight">
                    Starfish
                  </span>
                  <span className="absolute bottom-4 text-xs text-[#2C5F7C]/80">
                    Written by Garrey
                  </span>
                </div>
              </div>
            </div>

            {/* Book Info */}
            <div className="text-left max-md:text-center">
              <span className="inline-block bg-gradient-to-br from-[#FF8C42] to-[#FF6B35] text-white py-2 px-5 rounded-full font-['Baloo_2'] font-semibold text-sm mb-4">
                📚 Children&apos;s Picture Book
              </span>
              <h1 className="text-[clamp(2rem,5vw,2.8rem)] font-['Baloo_2'] text-[#2C3E50] mb-4 [text-shadow:2px_2px_0_rgba(255,255,255,0.5)]">
                Joey the Juggling Starfish
              </h1>
              <p className="text-lg text-[#2C3E50]/85 mb-6 leading-relaxed">
                A heartwarming underwater adventure about friendship, talent,
                and believing in yourself.
              </p>
              <div className="flex gap-6 mb-8 flex-wrap max-md:justify-center">
                <div className="bg-white py-3 px-5 rounded-xl shadow-sm">
                  <span className="block text-xs text-[#FF8C42] font-semibold uppercase tracking-wide">
                    Age Range
                  </span>
                  <span className="font-['Baloo_2'] text-base text-[#2C3E50] font-semibold">
                    3-8 Years
                  </span>
                </div>
                <div className="bg-white py-3 px-5 rounded-xl shadow-sm">
                  <span className="block text-xs text-[#FF8C42] font-semibold uppercase tracking-wide">
                    Pages
                  </span>
                  <span className="font-['Baloo_2'] text-base text-[#2C3E50] font-semibold">
                    25 Pages
                  </span>
                </div>
                <div className="bg-white py-3 px-5 rounded-xl shadow-sm">
                  <span className="block text-xs text-[#FF8C42] font-semibold uppercase tracking-wide">
                    Format
                  </span>
                  <span className="font-['Baloo_2'] text-base text-[#2C3E50] font-semibold">
                    Picture Book
                  </span>
                </div>
              </div>
              <a
                href="https://amazon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-4 px-10 bg-gradient-to-br from-[#FF8C42] to-[#FF6B35] text-white font-['Baloo_2'] font-bold text-lg no-underline rounded-full shadow-[0_6px_20px_rgba(255,107,53,0.4)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(255,107,53,0.5)]"
              >
                🛒 BUY ON AMAZON
              </a>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%201440%20100%27%3E%3Cpath%20fill=%27%23FFF8F0%27%20d=%27M0,50%20C200,80%20400,20%20600,50%20C800,80%201000,20%201200,50%20C1350,70%201440,40%201440,40%20L1440,100%20L0,100%20Z%27/%3E%3C/svg%3E')] bg-no-repeat bg-bottom bg-cover" />
      </section>

      {/* Synopsis Section */}
      <section className="bg-[#FFF8F0] py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-[1.3fr_1fr] gap-16 items-center max-md:grid-cols-1 max-md:gap-10">
            <div>
              <span className="inline-block bg-gradient-to-br from-[#FF8C42] to-[#FF6B35] text-white py-1.5 px-4 rounded-full font-['Baloo_2'] font-semibold text-sm mb-4">
                📖 The Story
              </span>
              <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-['Baloo_2'] text-[#2C3E50] mb-6">
                About the Book
              </h2>
              <p className="text-lg text-[#636E72] leading-relaxed mb-5">
                Deep beneath the sparkling waves, in a colorful coral reef,
                lives Joey — a little starfish with an extraordinary talent: he
                can juggle! With his five arms, Joey creates the most amazing
                performances that dazzle all the sea creatures.
              </p>
              <p className="text-lg text-[#636E72] leading-relaxed mb-5">
                But when Joey begins to doubt himself and wonders if his talent
                is truly special, he embarks on a journey of self-discovery.
                Along the way, he learns important lessons about friendship, the
                value of being unique, and the magic that happens when you
                believe in yourself.
              </p>
              <p className="text-lg text-[#636E72] leading-relaxed">
                Join Joey on his heartwarming adventure and discover the joy of
                celebrating what makes each of us special!
              </p>
            </div>
            <div className="flex justify-center max-md:order-first">
              <div className="w-[280px] h-[280px] bg-gradient-to-br from-[#38BDF8] to-[#0EA5E9] rounded-3xl flex items-center justify-center gap-4 text-6xl shadow-[0_15px_40px_rgba(56,189,248,0.3)] max-md:w-[220px] max-md:h-[220px] max-md:text-5xl">
                <span>🌊</span>
                <span>⭐</span>
                <span>🐠</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-[#FFF8F0] to-[#FFCBA4] py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="text-[clamp(2rem,4vw,2.5rem)] font-['Baloo_2'] text-[#2C3E50] text-center mb-3">
            What&apos;s Inside
          </h2>
          <p className="text-lg text-[#636E72] text-center max-w-[500px] mx-auto mb-12">
            Everything that makes this book special
          </p>

          <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
            {[
              {
                icon: "🎨",
                title: "Vibrant Illustrations",
                text: "25 pages filled with beautiful, colorful artwork that brings the underwater world to life. Every page is a visual treat!",
              },
              {
                icon: "💫",
                title: "Inspiring Message",
                text: "A heartfelt story about believing in yourself, embracing your unique talents, and the power of true friendship.",
              },
              {
                icon: "👶",
                title: "Perfect for Young Readers",
                text: "Written with ages 3-8 in mind, with engaging text that's perfect for bedtime stories and early readers alike.",
              },
              {
                icon: "❤️",
                title: "Family Reading Time",
                text: "A wonderful book to share together, sparking conversations about talents, dreams, and being a good friend.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-8 rounded-2xl shadow-[0_6px_25px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_35px_rgba(255,140,66,0.15)]"
              >
                <span className="text-5xl block mb-4">{feature.icon}</span>
                <h3 className="font-['Baloo_2'] text-xl text-[#2C3E50] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#636E72] leading-relaxed text-[0.95rem]">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section className="bg-gradient-to-b from-[#FFCBA4] to-[#FFB347] py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="text-[clamp(2rem,4vw,2.5rem)] font-['Baloo_2'] text-[#2C3E50] text-center mb-3">
            Meet the Characters
          </h2>
          <p className="text-lg text-[#636E72] text-center max-w-[500px] mx-auto mb-12">
            The wonderful friends you&apos;ll meet in Joey&apos;s world
          </p>

          <div className="grid grid-cols-4 gap-6 max-md:grid-cols-2 max-sm:gap-4">
            {[
              {
                emoji: "⭐",
                name: "Joey",
                desc: "A talented starfish who loves to juggle and dreams big!",
              },
              {
                emoji: "🐙",
                name: "Oliver",
                desc: "A wise octopus and Joey's encouraging best friend.",
              },
              {
                emoji: "🐢",
                name: "Terry",
                desc: "A gentle sea turtle who teaches Joey about patience.",
              },
              {
                emoji: "🦀",
                name: "Carlo",
                desc: "A cheerful crab who always knows how to have fun!",
              },
            ].map((char) => (
              <div
                key={char.name}
                className="bg-white py-8 px-6 rounded-2xl text-center shadow-[0_6px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2.5 hover:rotate-[2deg] hover:shadow-[0_15px_35px_rgba(0,0,0,0.12)] max-sm:py-6 max-sm:px-4"
              >
                <span className="text-6xl block mb-4 max-sm:text-5xl">
                  {char.emoji}
                </span>
                <h3 className="font-['Baloo_2'] text-xl text-[#FF8C42] mb-2">
                  {char.name}
                </h3>
                <p className="text-sm text-[#636E72] leading-relaxed">
                  {char.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-[#FFF8F0] py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="text-[clamp(2rem,4vw,2.5rem)] font-['Baloo_2'] text-[#2C3E50] text-center mb-12">
            What Parents Say
          </h2>

          <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
            {[
              {
                text: "My kids absolutely love Joey! We read it every night and they never get tired of it. Beautiful illustrations!",
                reviewer: "Sarah M.",
              },
              {
                text: "A wonderful story with a great message. Joey teaches kids to believe in themselves. Highly recommend!",
                reviewer: "Michael T.",
              },
              {
                text: "The perfect bedtime story! Engaging, colorful, and teaches important values. A new family favorite.",
                reviewer: "Emily R.",
              },
            ].map((review) => (
              <div
                key={review.reviewer}
                className="bg-white p-8 rounded-2xl shadow-[0_6px_25px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_35px_rgba(255,140,66,0.15)]"
              >
                <div className="text-xl mb-4 tracking-wide">⭐⭐⭐⭐⭐</div>
                <p className="text-base text-[#636E72] leading-relaxed italic mb-4">
                  &quot;{review.text}&quot;
                </p>
                <span className="font-['Baloo_2'] font-semibold text-[#FF8C42] text-[0.95rem]">
                  — {review.reviewer}
                </span>
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
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center relative z-10">
            <h2 className="text-[clamp(2rem,5vw,3rem)] font-['Baloo_2'] text-white mb-4 [text-shadow:2px_2px_4px_rgba(0,0,0,0.15)]">
              Ready to Meet Joey?
            </h2>
            <p className="text-xl text-white/95 max-w-[500px] mx-auto mb-8">
              Bring this magical underwater adventure home to your family today!
            </p>
            <a
              href="https://amazon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-5 px-12 bg-white text-[#FF8C42] font-['Baloo_2'] font-bold text-xl no-underline rounded-full shadow-[0_8px_25px_rgba(0,0,0,0.15),0_4px_10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-[0_12px_35px_rgba(0,0,0,0.2),0_6px_15px_rgba(0,0,0,0.15)] hover:text-[#FF6B35]"
            >
              🛒 Order Your Copy Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

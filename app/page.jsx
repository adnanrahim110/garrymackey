"use client";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-b from-[#FF9A3C] via-[#FFB347] via-40% to-[#FFD9B3] relative overflow-hidden flex flex-col items-center justify-center pt-[100px] pb-[120px]">
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none animate-[spin_60s_linear_infinite] bg-[repeating-conic-gradient(from_0deg,rgba(255,255,255,0.15)_0deg_10deg,transparent_10deg_20deg)]" />

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[25%] left-[3%] text-[4rem] animate-[float_4s_ease-in-out_infinite] drop-shadow-md">
            🐙
          </div>
          <div className="absolute bottom-[25%] left-[5%] text-[2.5rem] animate-[float_4s_ease-in-out_infinite_0.5s] drop-shadow-md">
            🦀
          </div>
          <div className="absolute top-[15%] left-[15%] text-[2rem] animate-[float_4s_ease-in-out_infinite_1s] drop-shadow-md">
            ⭐
          </div>
          <div className="absolute top-[50%] left-[8%] text-[2rem] animate-[float_4s_ease-in-out_infinite_1.5s] drop-shadow-md">
            🐚
          </div>
          <div className="absolute top-[20%] right-[5%] text-[2.5rem] animate-[float_4s_ease-in-out_infinite_0.3s] drop-shadow-md">
            🦀
          </div>
          <div className="absolute bottom-[30%] right-[3%] text-[3.5rem] animate-[float_4s_ease-in-out_infinite_0.8s] drop-shadow-md">
            🐢
          </div>
          <div className="absolute top-[35%] right-[10%] text-[2rem] animate-[float_4s_ease-in-out_infinite_1.2s] drop-shadow-md">
            ⭐
          </div>
          <div className="absolute top-[55%] right-[5%] text-[2rem] animate-[float_4s_ease-in-out_infinite_1.8s] drop-shadow-md">
            🐟
          </div>
          <div className="absolute bottom-[45%] right-[12%] text-[1.8rem] animate-[float_4s_ease-in-out_infinite_2s] drop-shadow-md">
            🐚
          </div>
          <div className="absolute top-[12%] right-[18%] text-[1.5rem] animate-[float_4s_ease-in-out_infinite_2.5s] drop-shadow-md">
            🌟
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <div className="relative mb-8">
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 -rotate-[8deg] w-[240px] h-[30px] bg-black/15 rounded-full blur-[15px]" />
            <div className="-rotate-[8deg] transition-transform duration-400 hover:-rotate-[5deg] hover:scale-105">
              <div className="w-[280px] h-[340px] bg-gradient-to-br from-[#87CEEB] via-[#5DADE2] to-[#3498DB] rounded-lg p-6 flex flex-col items-center justify-center shadow-[8px_12px_30px_rgba(0,0,0,0.25),inset_0_0_60px_rgba(255,255,255,0.2)] border-4 border-white/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[60%] bg-gradient-to-b from-[#FFE4B5] to-[#87CEEB] rounded-t-[4px] rounded-b-[50%]" />
                <span className="text-5xl relative z-[2] mb-2 animate-[wobble_2s_ease-in-out_infinite]">
                  ⭐
                </span>
                <span className="font-['Baloo_2'] text-[2.2rem] font-extrabold text-[#2C5F7C] relative z-[2] [text-shadow:1px_1px_0_white]">
                  Joey
                </span>
                <span className="font-['Baloo_2'] text-lg font-semibold text-[#2C5F7C] relative z-[2] leading-tight">
                  the Juggling
                </span>
                <span className="font-['Baloo_2'] text-lg font-semibold text-[#2C5F7C] relative z-[2] leading-tight">
                  Starfish
                </span>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center font-['Quicksand'] text-xs text-[#2C5F7C]/80">
                  <span>Written by</span>
                  <span>Garrey</span>
                </div>
              </div>
            </div>
          </div>

          <h1 className="font-['Baloo_2'] text-[clamp(2.5rem,7vw,4rem)] font-extrabold text-[#2C3E50] text-center mb-8 leading-tight [text-shadow:2px_2px_0_rgba(255,255,255,0.5)]">
            Meet Joey the
            <br />
            Juggling Starfish!
          </h1>

          <a
            href="https://amazon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-4 px-10 bg-gradient-to-br from-[#FF8C42] to-[#FF6B35] text-white font-['Baloo_2'] font-bold text-xl no-underline rounded-full uppercase tracking-[2px] shadow-[0_6px_20px_rgba(255,107,53,0.4),0_3px_10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(255,107,53,0.5),0_5px_15px_rgba(0,0,0,0.15)]"
          >
            BUY ON AMAZON
          </a>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%201440%20120%27%3E%3Cpath%20fill=%27%2338BDF8%27%20d=%27M0,60%20C150,100%20350,20%20500,60%20C650,100%20850,20%201000,60%20C1150,100%201350,20%201440,60%20L1440,120%20L0,120%20Z%27/%3E%3Cpath%20fill=%27%237DD3FC%27%20fill-opacity=%270.5%27%20d=%27M0,80%20C150,40%20350,100%20500,80%20C650,40%20850,100%201000,80%20C1150,40%201350,100%201440,80%20L1440,120%20L0,120%20Z%27/%3E%3C/svg%3E')] bg-no-repeat bg-bottom bg-cover" />
      </section>

      <section className="bg-gradient-to-b from-[#38BDF8] via-[#7DD3FC] via-20% to-[#FFF8F0] py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-[1.2fr_1fr] gap-16 items-center max-md:grid-cols-1 max-md:gap-10">
            <div className="animate-[fadeInUp_0.8s_ease]">
              <span className="inline-block bg-gradient-to-br from-[#FF8C42] to-[#FF6B35] text-white py-1.5 px-4 rounded-full font-['Baloo_2'] font-semibold text-sm mb-4">
                📚 The Story
              </span>
              <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-['Baloo_2'] text-[#2C3E50] mb-6">
                An Underwater Adventure
              </h2>
              <p className="text-lg text-[#636E72] leading-relaxed mb-4">
                Deep beneath the sparkling waves, in a colorful coral reef,
                lives Joey — a little starfish with an extraordinary talent.
                With his five arms, Joey creates the most amazing juggling
                performances that dazzle all the sea creatures!
              </p>
              <p className="text-lg text-[#636E72] leading-relaxed mb-4">
                Join Joey as he learns valuable lessons about friendship,
                believing in yourself, and the magic that happens when you share
                your unique gifts with others.
              </p>
              <Link
                href="/book"
                className="inline-flex items-center font-['Baloo_2'] font-semibold text-lg text-[#FF8C42] no-underline mt-2 transition-all duration-300 hover:text-[#FF6B35] hover:translate-x-[5px]"
              >
                Learn More About the Book →
              </Link>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:translate-x-[10px] hover:shadow-[0_6px_25px_rgba(255,140,66,0.15)]">
                <span className="text-[2.5rem] shrink-0">🎨</span>
                <div>
                  <h4 className="font-['Baloo_2'] text-lg text-[#2C3E50] mb-1">
                    Beautiful Illustrations
                  </h4>
                  <p className="text-sm text-[#636E72]">
                    25 pages of vibrant, colorful artwork
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:translate-x-[10px] hover:shadow-[0_6px_25px_rgba(255,140,66,0.15)]">
                <span className="text-[2.5rem] shrink-0">👶</span>
                <div>
                  <h4 className="font-['Baloo_2'] text-lg text-[#2C3E50] mb-1">
                    Perfect for Ages 3-8
                  </h4>
                  <p className="text-sm text-[#636E72]">
                    Ideal for bedtime stories
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:translate-x-[10px] hover:shadow-[0_6px_25px_rgba(255,140,66,0.15)]">
                <span className="text-[2.5rem] shrink-0">💖</span>
                <div>
                  <h4 className="font-['Baloo_2'] text-lg text-[#2C3E50] mb-1">
                    Heartwarming Message
                  </h4>
                  <p className="text-sm text-[#636E72]">
                    Teaches friendship & self-belief
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF8F0] py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-[0.8fr_1.2fr] gap-16 items-center max-md:grid-cols-1 max-md:gap-8 max-md:text-center">
            <div className="flex justify-center">
              <div className="w-[250px] h-[250px] bg-gradient-to-br from-[#FF9A3C] to-[#FFB347] rounded-full flex items-center justify-center text-[5rem] shadow-[0_15px_40px_rgba(255,140,66,0.3)] border-[6px] border-white transition-transform duration-300 hover:scale-105 hover:rotate-[3deg] max-md:w-[200px] max-md:h-[200px] max-md:text-[4rem]">
                ✍️
              </div>
            </div>
            <div className="animate-[fadeInUp_0.8s_ease]">
              <span className="inline-block bg-gradient-to-br from-[#FF8C42] to-[#FF6B35] text-white py-1.5 px-4 rounded-full font-['Baloo_2'] font-semibold text-sm mb-4">
                👋 Meet the Author
              </span>
              <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-['Baloo_2'] text-[#2C3E50] mb-6">
                Written with Love by Garrey
              </h2>
              <p className="text-lg text-[#636E72] leading-relaxed mb-4">
                Garrey is a passionate children&apos;s book author dedicated to
                creating stories that inspire young readers. With Joey the
                Juggling Starfish, Garrey brings a magical underwater world to
                life, teaching children about the importance of friendship and
                believing in themselves.
              </p>
              <p className="text-lg text-[#636E72] leading-relaxed mb-4">
                &quot;Every child has a unique talent waiting to be discovered.
                Joey&apos;s story is a reminder that when we embrace what makes
                us special, wonderful things happen!&quot;
              </p>
              <Link
                href="/about"
                className="inline-flex items-center font-['Baloo_2'] font-semibold text-lg text-[#FF8C42] no-underline mt-2 transition-all duration-300 hover:text-[#FF6B35] hover:translate-x-[5px]"
              >
                Read More About Garrey →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#FF9A3C] to-[#FF8C42] py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <span className="absolute top-[20%] left-[8%] text-[2.5rem] opacity-50 animate-[float_4s_ease-in-out_infinite]">
            🐠
          </span>
          <span className="absolute bottom-[25%] right-[8%] text-[2.5rem] opacity-50 animate-[float_4s_ease-in-out_infinite_1s]">
            🐟
          </span>
          <span className="absolute top-[30%] right-[15%] text-[2.5rem] opacity-50 animate-[float_4s_ease-in-out_infinite_0.5s]">
            🌟
          </span>
          <span className="absolute bottom-[20%] left-[15%] text-[2.5rem] opacity-50 animate-[float_4s_ease-in-out_infinite_1.5s]">
            🦀
          </span>
        </div>
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center relative z-10">
            <h2 className="text-[clamp(2rem,5vw,3rem)] font-['Baloo_2'] text-white mb-4 [text-shadow:2px_2px_4px_rgba(0,0,0,0.15)]">
              Ready to Dive In?
            </h2>
            <p className="text-xl text-white/95 max-w-[550px] mx-auto mb-8 leading-relaxed">
              Bring Joey&apos;s magical adventure home to your family today!
              Perfect for bedtime stories and creating special reading moments.
            </p>
            <a
              href="https://amazon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-5 px-12 bg-white text-[#FF8C42] font-['Baloo_2'] font-bold text-xl no-underline rounded-full shadow-[0_8px_25px_rgba(0,0,0,0.15),0_4px_10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-[5px] hover:scale-[1.02] hover:shadow-[0_12px_35px_rgba(0,0,0,0.2),0_6px_15px_rgba(0,0,0,0.15)] hover:text-[#FF6B35]"
            >
              🛒 Get Your Copy on Amazon
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

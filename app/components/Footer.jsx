import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#38BDF8] to-[#0EA5E9] text-white overflow-hidden">
      <div className="py-16 pb-8">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-[1.5fr_1fr_1fr] gap-12 max-md:grid-cols-1 max-md:gap-8 max-md:text-center">
          <div className="flex flex-col gap-2 max-md:items-center">
            <div className="flex items-center gap-3 max-md:justify-center">
              <Image
                src="/imgs/logo.png"
                alt="Garry Mackey"
                width={1080}
                height={520}
                className="w-56"
              />
            </div>
            <p className="text-base opacity-90 leading-relaxed max-w-[280px] max-md:max-w-full">
              Creating magical stories that inspire young readers to dream big!
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-['Baloo_2'] text-xl font-bold mb-2">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2.5">
              <Link
                href="/"
                className="text-white/90 no-underline text-base transition-all duration-300 w-fit hover:text-white hover:translate-x-[5px] max-md:mx-auto"
              >
                Home
              </Link>
              <Link
                href="/book"
                className="text-white/90 no-underline text-base transition-all duration-300 w-fit hover:text-white hover:translate-x-[5px] max-md:mx-auto"
              >
                Books
              </Link>
              <Link
                href="/about"
                className="text-white/90 no-underline text-base transition-all duration-300 w-fit hover:text-white hover:translate-x-[5px] max-md:mx-auto"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-white/90 no-underline text-base transition-all duration-300 w-fit hover:text-white hover:translate-x-[5px] max-md:mx-auto"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-['Baloo_2'] text-xl font-bold mb-2">
              Get the Book!
            </h4>
            <a
              href="https://amazon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-gradient-to-br from-[#FF8C42] to-[#FF6B35] text-white font-['Baloo_2'] font-bold text-base no-underline rounded-full shadow-[0_4px_15px_rgba(255,107,53,0.4)] transition-all duration-300 w-fit hover:-translate-y-[3px] hover:scale-105 hover:shadow-[0_6px_25px_rgba(255,107,53,0.5)] max-md:mx-auto"
            >
              📚 Buy on Amazon
            </a>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto mt-10 pt-6 px-6 border-t border-white/20 text-center">
          <div className="flex justify-center gap-6 text-xl mb-4">
            <span className="animate-[float_3s_ease-in-out_infinite]">🐚</span>
            <span className="animate-[float_3s_ease-in-out_infinite_0.5s]">
              ⭐
            </span>
            <span className="animate-[float_3s_ease-in-out_infinite_1s]">
              🐟
            </span>
            <span className="animate-[float_3s_ease-in-out_infinite_1.5s]">
              🦀
            </span>
            <span className="animate-[float_3s_ease-in-out_infinite_2s]">
              🐢
            </span>
          </div>
          <p className="opacity-80 text-sm">
            © {currentYear} Garrey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

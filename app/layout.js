import { Baloo_2, Quicksand } from "next/font/google";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const baloo2 = Baloo_2({
  variable: "--font-baloo-2",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"]
})

export const metadata = {
  title: "Joey the Juggling Starfish | Children's Book by Garrey",
  description: "Dive into an underwater adventure with Joey the Juggling Starfish! A heartwarming children's book about friendship, talent, and believing in yourself. Buy now on Amazon.",
  keywords: "children's book, Joey, juggling starfish, kids book, picture book, Garrey, underwater adventure",
  openGraph: {
    title: "Joey the Juggling Starfish | Children's Book by Garrey",
    description: "Dive into an underwater adventure with Joey the Juggling Starfish!",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} ${baloo2.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

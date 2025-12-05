import { Quicksand } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={quicksand.variable}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

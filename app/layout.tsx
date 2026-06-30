import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "ABC Realtors – Find Your Dream Home in Eldoria",
  description:
    "ABC Realtors is Eldoria's premier real estate agency. Browse luxury homes, investment properties, and rentals across Crystalvale, Solhaven, and the greater Eldoria Valley.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
       <script src="https://3beeez.com/widget-script?installToken=549ef2dc3f270430bd4da1b501386e741dc4f126&position=bottom-right" async></script>

      </body>
    </html>
  );
}

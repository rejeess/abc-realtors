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
        <script src="https://3beeez.com/widget-script?installToken=76a725cb5b3b12a156e9d7aa25364499c6b1ecb7&position=bottom-right&iconColor=%23e1b860" async></script>
        {/* <script
          src="/widget-script?installToken=d02304a79ae33e03c2ed8264f019285ec67b02ef"
          data-position="bottom-right"
        ></script> */}
      </body>
    </html>
  );
}

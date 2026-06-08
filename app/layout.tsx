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
  title: "ABC Realtors – Find Your Dream Home in Arizona",
  description:
    "ABC Realtors is Arizona's premier real estate agency. Browse luxury homes, investment properties, and rentals across Scottsdale, Phoenix, and the greater Valley.",
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
        <Script
          src="https://3beeez.com/widget-script?installToken=8b17a9852117b20c9556cb127f68b3b206269f83&position=bottom-right&iconColor=%23e1ab60"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

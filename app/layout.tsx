import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CartProvider } from "@/lib/cart-context";
import "./globals.css";

const sans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Somnara — Mattresses, Pillows & Sleep Essentials",
    template: "%s · Somnara",
  },
  description:
    "Shop mattresses, pillows, bedding, and foundations. A Shopify-ready sleep catalog inspired by modern DTC mattress retail.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} h-full`}>
      <body className="min-h-full antialiased">
        <CartProvider>
          <div className="store">
            <Header />
            <main className="store-main">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}

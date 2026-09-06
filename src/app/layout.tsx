import type { Metadata } from "next";
import { Cinzel, Italiana, Cormorant_Garamond, Outfit, Alex_Brush } from "next/font/google";
import "./globals.css";
import { AmbienceProvider } from "@/context/AmbienceContext";
import { CartProvider } from "@/context/CartContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { QuickViewModal } from "@/components/catalog/QuickViewModal";
import { AuthModal } from "@/components/auth/AuthModal";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-cinzel",
  display: "swap",
});

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-signature",
  display: "swap",
});

const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-italiana",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zahrasworld.com"),
  title: "Zahra's World | 3D Crystal Lamps, Voice Keepsakes & Aesthetic Gifts",
  description:
    "Shop 3D glowing crystal ball lamps, custom voice-recording cassette keychains, moving sand art, and romantic gift sets. Cash on Delivery across Bangladesh.",
  openGraph: {
    title: "Zahra's World — 3D Crystal Lamps & Thoughtful Gifts",
    description: "Shop glowing 3D crystal lamps, voice keepsake cassettes, and aesthetic room decor with Cash on Delivery in Bangladesh.",
    images: ["/assets/products/crystal_galaxy.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${alexBrush.variable} ${italiana.variable} ${cormorant.variable} ${outfit.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Parisienne&family=Playfair+Display:ital,wght@0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col selection:bg-roseBlossom selection:text-noir">
        <SmoothScroll>
          <AmbienceProvider>
            <CartProvider>
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <CartDrawer />
              <QuickViewModal />
              <AuthModal />
            </CartProvider>
          </AmbienceProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}

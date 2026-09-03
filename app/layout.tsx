import "./globals.css";
import Script from "next/script";
import type { Metadata } from "next";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { Inter, Noto_Sans_JP, Playfair_Display } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  variable: '--font-inter',
});

const notoSans = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-noto',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['600'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-playfair',
});


const SITE_DESCRIPTION =
  "株式会社midは、ファッションブランド「WANSIE」、ユニフォーム、Web制作、人材サービス、飲食の5つの事業を通じて、企業やブランドの表現と成長を支えるクリエイティブカンパニーです。";

export const metadata: Metadata = {
  metadataBase: new URL("https://mid-group.jp"),
  title: {
    template: "%s | 株式会社mid",
    default: "株式会社mid | 表層を超えて、本質へ。",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://mid-group.jp",
    siteName: "株式会社mid",
    title: "株式会社mid | 表層を超えて、本質へ。",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "株式会社mid | 表層を超えて、本質へ。",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社mid | 表層を超えて、本質へ。",
    description: SITE_DESCRIPTION,
    images: ["/ogp.png"],
  },
  alternates: {
    canonical: "https://mid-group.jp",
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSans.variable} ${playfairDisplay.variable}`}><head /><body>
      <Header />
      {children}
      <Footer />

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XLM4RBCR3P"
        strategy="lazyOnload"
      />
      <Script id="ga-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XLM4RBCR3P');
        `}
      </Script>
    </body></html>
  );
}

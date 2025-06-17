import "./globals.css";
import Script from "next/script";
import type { Metadata } from "next";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { Noto_Sans_JP } from 'next/font/google';

const notoSans = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});


export const metadata: Metadata = {
  metadataBase: new URL("https://mid-corporate.vercel.app"),
  title: {
    template: "%s | 株式会社 mid",
    default: "株式会社midはアパレルブランド「WANSIE」の運営、WEB制作・運用、人材派遣を行うクリエイティブカンパニーです。",
  },
  description: "株式会社midはアパレルブランド「WANSIE」の運営、WEB制作・運用、人材派遣を行うクリエイティブカンパニーです。",
  openGraph: {
    title: "株式会社 mid",
    description: "株式会社midはアパレルブランド「WANSIE」の運営、WEB制作・運用、人材派遣を行うクリエイティブカンパニーです。",
    images: ["/ogp.png"],
  },
  alternates: {
    canonical: "https://mid-corporate.vercel.app",
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
    <html lang="ja" className={notoSans.className}><head /><body>
      <Header />
      {children}
      <Footer />

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-5KFTZLJEMB"
        strategy="lazyOnload"
      />
      <Script id="ga-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5KFTZLJEMB');
        `}
      </Script>
    </body></html>
  );
}

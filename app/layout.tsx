import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import Header from "@/app/_components/Header/index";
import Footer from "@/app/_components/Footer/index";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    template: "%s | 株式会社 mid",
    default: "株式会社ミッドはアパレルブランド「WANSIE」の運営、WEB制作・運用、人材派遣",
  },
  openGraph: {
    title: "株式会社 mid",
    description: "株式会社ミッドはアパレルブランド「WANSIE」の運営、WEB制作・運用、人材派遣",
    images: ["/ogp.png"],
  },
  alternates: {
    canonical: "http://localhost:3000",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-5KFTZLJEMB" />
    </html>
  );
}

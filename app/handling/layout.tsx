import { GoogleAnalytics } from '@next/third-parties/google';
import Sheet from '@/app/_components/Sheet';
import Hero from '@/app/_components/Hero';

export const metadata = {
  title: '個人情報の取り扱い | Handling of Personal Information',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Handling of Personal Information" sub="個人情報の取り扱いについて" />
      <Sheet>{children}</Sheet>
      <GoogleAnalytics gaId="G-XXX" />
    </>
  );
}
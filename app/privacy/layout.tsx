import { GoogleAnalytics } from '@next/third-parties/google';
import Sheet from '@/app/_components/Sheet';
import Hero from '@/app/_components/Hero';

export const metadata = {
  title: '個人情報保護方針 | Privacy Policy',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Privacy Policy" sub="個人情報保護方針" />
      <Sheet>{children}</Sheet>
      <GoogleAnalytics gaId="G-CEZ1PKDJPS" />
    </>
  );
}
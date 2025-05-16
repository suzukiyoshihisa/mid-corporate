import Hero from '@/app/_components/Hero/index';
import Sheet from '@/app/_components/Sheet/index';

export const metadata = {
  title: 'CONTACT',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Contact" sub="お問い合わせ" />
      <Sheet>{children}</Sheet>
    </>
  );
}

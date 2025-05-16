import Sheet from '@/app/_components/Sheet/index';
import Hero from '@/app/_components/Hero/index';

export const metadata = {
  title: 'MEMBERS',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Members" sub="メンバー" />
      <Sheet>{children}</Sheet>
    </>
  );
}
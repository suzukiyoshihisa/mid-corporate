import Hero from '@/app/_components/Hero/index';
import Sheet from '@/app/_components/Sheet/index';

export const metadata = {
  title: 'NEWS',
};

type Props = {
  children: React.ReactNode;
};

export const revalidate = 60;

export default function Layout({ children }: Props) {
  return (
    <>
      <Hero title='NEWS' sub="ニュース" />
      <Sheet>{children}</Sheet>
    </>
  );
}
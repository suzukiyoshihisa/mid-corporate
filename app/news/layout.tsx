import Hero from '@/app/_components/Hero';
import Sheet from '@/app/_components/Sheet';

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
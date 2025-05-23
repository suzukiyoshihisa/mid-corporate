import Hero from '../_components/Hero/index';
import Sheet from '../_components/Sheet/index';

export const metadata = {
  title: 'NEWS',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
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
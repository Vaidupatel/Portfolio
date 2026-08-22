import { Nav } from '@/components/ui/nav';
import { Footer } from '@/components/ui/footer';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="flex-grow flex flex-col">{children}</main>
      <Footer />
    </>
  );
}

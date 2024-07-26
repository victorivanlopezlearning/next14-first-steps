import { Navbar } from '@/components';

export default function PublicLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex justify-center py-16">
        {children}
      </main>
    </>
  );
}
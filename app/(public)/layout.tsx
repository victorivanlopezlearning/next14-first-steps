

export default function PublicLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex justify-center py-24">
      {children}
    </main>
  );
}
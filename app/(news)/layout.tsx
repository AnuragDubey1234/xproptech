export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="py-6 md:py-8">{children}</div>;
}

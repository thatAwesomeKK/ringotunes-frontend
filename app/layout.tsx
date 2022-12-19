import Link from "next/link";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <Link href="/upload">upload</Link>
      <body>{children}</body>
    </html>
  );
}

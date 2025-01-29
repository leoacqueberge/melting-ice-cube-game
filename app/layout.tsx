import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Melting Ice Cube Game',
  description: 'Click the ice cube to make it melt',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
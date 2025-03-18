import Footer from '@/components/Footer';
import Header from '@/components/header';
import type { Metadata } from 'next';
import './globals.css';
import KBar from './providers/kbar';

export const metadata: Metadata = {
  title: {
    template: '%s | IIIT Dharwad',
    default: 'IIIT Dharwad'
  },
  description: 'IIIT Dharwad'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-grotesk flex flex-col relative`}>
        <KBar>
          <Header />
          {children}
          <Footer />
        </KBar>
      </body>
    </html>
  );
}

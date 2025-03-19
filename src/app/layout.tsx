import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import type { Metadata } from 'next';
import './globals.css';
import KBarProvider from './providers/kbar';

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
        <KBarProvider>
          <Header />
          {children}
          <Footer />
        </KBarProvider>
      </body>
    </html>
  );
}

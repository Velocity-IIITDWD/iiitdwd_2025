import Footer from '@/components/Footer';
import Header from '@/components/Header';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col relative`}
      >
        {/* <SidebarProvider defaultOpen={false}> */}
        {/* <SidebarInset> */}
        <Header />
        {children}
        <Footer />
        {/* </SidebarInset> */}
        {/* </SidebarProvider> */}
      </body>
    </html>
  );
}

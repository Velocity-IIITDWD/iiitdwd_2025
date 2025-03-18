import Footer from '@/components/Footer';
import AnimatedHeader from '@/components/header/animated-navbar';
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
          {/* <SidebarProvider defaultOpen={false}> */}
          {/* <SidebarInset> */}
          <AnimatedHeader />
          {children}
          <Footer />
          {/* </SidebarInset> */}
          {/* </SidebarProvider> */}
        </KBar>
      </body>
    </html>
  );
}

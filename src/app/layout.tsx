import Header from '@/components/Header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { Metadata } from 'next';
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SidebarProvider defaultOpen={false}>
          <SidebarInset>
            <Header />
            {children}
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}

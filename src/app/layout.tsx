import type { Metadata } from 'next';
import { Newsreader, Inter } from 'next/font/google';
import { CartProvider } from '@/context/CartContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './globals.css';

const newsreader = Newsreader({ subsets: ['latin'], variable: '--font-newsreader', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: 'Foundry — a marketplace for independent makers',
    template: '%s · Foundry',
  },
  description: 'Ceramics, woodwork, textiles and paper goods, made by small studios and independent makers.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${newsreader.variable} ${inter.variable}`}>
      <body className="font-sans">
        <CartProvider>
          <Header />
          <main className="mx-auto min-h-[60vh] max-w-6xl px-6 py-10">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

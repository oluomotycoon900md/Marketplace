import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import { CartProvider } from '@/context/CartContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './globals.css';

const heading = Space_Grotesk({ subsets: ['latin'], variable: '--font-heading', display: 'swap' });
const body = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: 'Foundry — a marketplace for independent makers',
    template: '%s · Foundry',
  },
  description: 'Ceramics, woodwork, textiles and paper goods, made by small studios and independent makers.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
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

import Link from 'next/link';
import { CartCount } from './CartCount';
import { MobileMenuToggle } from './MobileMenuToggle';

const NAV_LINKS = [
  { href: '/products', label: 'Shop all' },
  { href: '/products?category=ceramics', label: 'Ceramics' },
  { href: '/products?category=wood', label: 'Wood' },
  { href: '/products?category=textiles', label: 'Textiles' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/90 backdrop-blur">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-xl">
          Foundry
        </Link>

        <nav className="hidden gap-6 sm:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-ink/80 hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/cart" className="flex items-center text-sm">
            Cart
            <CartCount />
          </Link>
          <MobileMenuToggle links={NAV_LINKS} />
        </div>
      </div>
    </header>
  );
}

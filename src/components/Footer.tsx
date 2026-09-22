import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:justify-between">
        <div className="max-w-xs">
          <p className="font-serif text-lg">Foundry</p>
          <p className="mt-2 text-sm text-ink/70">
            A marketplace for small studios and independent makers. Every piece is made, not manufactured.
          </p>
          <a
            href="mailto:oluomotycoon900md@gmail.com"
            className="mt-3 inline-block text-sm text-ink/70 hover:text-ink"
          >
            oluomotycoon900md@gmail.com
          </a>
        </div>
        <div className="flex gap-12 text-sm text-ink/70">
          <div className="flex flex-col gap-2">
            <p className="text-ink">Shop</p>
            <Link href="/products">All products</Link>
            <Link href="/products?category=ceramics">Ceramics</Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-ink">Foundry</p>
            <Link href="/about">About</Link>
            <Link href="/account">Account</Link>
          </div>
        </div>
      </div>
      <p className="border-t border-line px-6 py-4 text-xs text-ink/50">© 2026 Foundry Marketplace.</p>
    </footer>
  );
}

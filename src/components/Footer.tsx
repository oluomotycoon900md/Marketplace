export function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:justify-between">
        <div className="max-w-xs">
          <p className="font-serif text-lg">Foundry</p>
          <p className="mt-2 text-sm text-ink/70">
            A marketplace for small studios and independent makers. Every piece is made, not manufactured.
          </p>
        </div>
        <div className="flex gap-12 text-sm text-ink/70">
          <div className="flex flex-col gap-2">
            <p className="text-ink">Shop</p>
            <a href="/products">All products</a>
            <a href="/products?category=ceramics">Ceramics</a>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-ink">Foundry</p>
            <a href="/about">About</a>
            <a href="/account">Account</a>
          </div>
        </div>
      </div>
      <p className="border-t border-line px-6 py-4 text-xs text-ink/50">© 2026 Foundry Marketplace.</p>
    </footer>
  );
}

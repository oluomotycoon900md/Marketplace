'use client';

import { useState } from 'react';
import Link from 'next/link';

export function MobileMenuToggle({ links }: { links: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        className="flex h-8 w-8 flex-col items-center justify-center gap-1 rounded-sm border border-line"
      >
        <span className="block h-px w-4 bg-ink" />
        <span className="block h-px w-4 bg-ink" />
        <span className="block h-px w-4 bg-ink" />
        <span className="sr-only">Menu</span>
      </button>
      {open && (
        <nav id="mobile-nav" className="absolute inset-x-0 top-full border-b border-line bg-paper px-6 py-4">
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-ink/80" onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}

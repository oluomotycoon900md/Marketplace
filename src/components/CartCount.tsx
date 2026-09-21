'use client';

import { useCart } from '@/context/CartContext';

export function CartCount() {
  const { itemCount } = useCart();
  if (itemCount === 0) return null;
  return (
    <span className="ml-1 rounded-full bg-moss px-1.5 py-0.5 text-[11px] leading-none text-paper">
      {itemCount}
    </span>
  );
}

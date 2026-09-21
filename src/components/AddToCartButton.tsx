'use client';

import { useState } from 'react';
import { Product } from '@/lib/types';
import { useCart } from '@/context/CartContext';

export function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  function handleClick() {
    addItem(product);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1500);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-live="polite"
      className="w-full rounded-sm bg-moss px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-moss-dark"
    >
      {justAdded ? 'Added ✓' : 'Add to cart'}
    </button>
  );
}

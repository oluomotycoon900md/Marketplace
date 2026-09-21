'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { formatCurrency } from '@/lib/formatCurrency';

export default function CartPage() {
  const { items, removeItem, setQuantity, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="py-16 text-center">
        <h1 className="font-serif text-3xl">Your cart is empty</h1>
        <Link href="/products" className="mt-4 inline-block text-moss underline">
          Browse products
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="font-serif text-3xl">Your cart</h1>

      <ul className="mt-8 flex flex-col gap-6">
        {items.map(({ product, quantity }) => (
          <li key={product.id} className="flex gap-4 border-b border-line pb-6">
            <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-sm bg-line">
              <Image src={product.image} alt={product.name} fill sizes="96px" className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <div>
                <p className="font-serif">{product.name}</p>
                <p className="text-sm text-ink/60">{formatCurrency(product.price)}</p>
              </div>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 text-sm">
                  Qty
                  <input
                    type="number"
                    min={1}
                    value={quantity}
                    onChange={(e) => setQuantity(product.id, Number(e.target.value))}
                    className="w-14 rounded-sm border border-line px-2 py-1"
                  />
                </label>
                <button
                  type="button"
                  onClick={() => removeItem(product.id)}
                  className="text-sm text-ink/60 underline"
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-center justify-between border-t border-line pt-6">
        <p className="font-serif text-xl">Subtotal: {formatCurrency(subtotal)}</p>
        <Link
          href="/checkout"
          className="rounded-sm bg-moss px-6 py-3 text-sm font-medium text-paper hover:bg-moss-dark"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}

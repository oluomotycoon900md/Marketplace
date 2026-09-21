import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/types';
import { formatCurrency } from '@/lib/formatCurrency';

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="relative aspect-square overflow-hidden rounded-sm bg-line">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <p className="mt-3 text-xs text-ink/60">{product.maker}</p>
      <h3 className="font-serif text-lg leading-snug text-ink">{product.name}</h3>
      <p className="mt-1 text-sm text-ink/80">{formatCurrency(product.price)}</p>
    </Link>
  );
}

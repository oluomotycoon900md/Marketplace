import type { Metadata } from 'next';
import Link from 'next/link';
import { getProductsByCategory } from '@/lib/products';
import { ProductGrid } from '@/components/ProductGrid';

export const metadata: Metadata = { title: 'Shop all' };

const CATEGORIES = [
  { value: 'all', label: 'All' },
  { value: 'ceramics', label: 'Ceramics' },
  { value: 'wood', label: 'Wood' },
  { value: 'textiles', label: 'Textiles' },
  { value: 'paper', label: 'Paper' },
];

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category = 'all' } = await searchParams;
  const products = await getProductsByCategory(category);

  return (
    <div>
      <h1 className="font-serif text-3xl">Shop all</h1>

      <div className="mt-6 flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <Link
            key={c.value}
            href={c.value === 'all' ? '/products' : `/products?category=${c.value}`}
            className={`rounded-full border px-4 py-1.5 text-sm ${
              category === c.value ? 'border-moss bg-moss text-paper' : 'border-line text-ink/70'
            }`}
          >
            {c.label}
          </Link>
        ))}
      </div>

      <div className="mt-10">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}

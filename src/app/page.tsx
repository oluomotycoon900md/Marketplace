import Link from 'next/link';
import { getFeaturedProducts } from '@/lib/products';
import { ProductGrid } from '@/components/ProductGrid';

export default async function HomePage() {
  const featured = await getFeaturedProducts();

  return (
    <div>
      <section className="max-w-xl">
        <h1 className="font-serif text-4xl leading-tight sm:text-5xl">
          Made by hand, sold by the people who made it.
        </h1>
        <p className="mt-4 text-ink/70">
          Foundry connects small studios and independent makers directly with people who want fewer,
          better things.
        </p>
        <Link
          href="/products"
          className="mt-6 inline-block rounded-sm bg-moss px-6 py-3 text-sm font-medium text-paper hover:bg-moss-dark"
        >
          Shop all products
        </Link>
      </section>

      <section className="mt-16">
        <h2 className="font-serif text-2xl">Featured this week</h2>
        <div className="mt-6">
          <ProductGrid products={featured} />
        </div>
      </section>
    </div>
  );
}

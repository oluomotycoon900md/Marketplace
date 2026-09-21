import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getAllProducts, getProductBySlug } from '@/lib/products';
import { formatCurrency } from '@/lib/formatCurrency';
import { AddToCartButton } from '@/components/AddToCartButton';

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return {};
  return { title: product.name, description: product.description };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div className="grid gap-10 sm:grid-cols-2">
      <div className="relative aspect-square overflow-hidden rounded-sm bg-line">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div>
        <p className="text-sm text-ink/60">{product.maker}</p>
        <h1 className="mt-1 font-serif text-3xl">{product.name}</h1>
        <p className="mt-3 text-xl">{formatCurrency(product.price)}</p>
        <p className="mt-6 text-ink/80">{product.description}</p>
        <div className="mt-8 max-w-xs">
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}

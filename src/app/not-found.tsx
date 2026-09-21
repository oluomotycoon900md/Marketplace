import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="py-24 text-center">
      <h1 className="font-serif text-3xl">We couldn't find that page</h1>
      <p className="mt-3 text-ink/70">It may have been moved, or the link might be out of date.</p>
      <Link href="/products" className="mt-6 inline-block text-moss underline">
        Back to shop
      </Link>
    </div>
  );
}

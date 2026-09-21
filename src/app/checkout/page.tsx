import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Checkout' };

export default function CheckoutPage() {
  return (
    <div className="max-w-md">
      <h1 className="font-serif text-3xl">Checkout</h1>
      <p className="mt-4 text-ink/70">
        This is a placeholder — wire this page up to a real payment provider (Stripe Checkout is the
        fastest path) once you have a backend to create orders against.
      </p>
    </div>
  );
}

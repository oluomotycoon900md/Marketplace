'use client';

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="py-24 text-center">
      <h1 className="font-serif text-3xl">Something went wrong</h1>
      <button type="button" onClick={() => reset()} className="mt-6 text-moss underline">
        Try again
      </button>
    </div>
  );
}

export default function LoadingProducts() {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="aspect-square rounded-sm bg-line" />
          <div className="mt-3 h-3 w-2/3 rounded bg-line" />
          <div className="mt-2 h-4 w-1/2 rounded bg-line" />
        </div>
      ))}
    </div>
  );
}

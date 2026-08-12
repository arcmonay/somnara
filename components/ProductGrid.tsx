import type { Product } from "@/lib/types";
import { ProductCard } from "@/components/ProductCard";

export function ProductGrid({ products }: { products: Product[] }) {
  if (!products.length) {
    return (
      <p className="max-w-md text-[var(--ink-muted)]">
        Nothing in this closet. Try another floor of the house.
      </p>
    );
  }

  return (
    <div className="nightstand__grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

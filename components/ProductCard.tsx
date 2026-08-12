import Link from "next/link";
import { ProductVisual } from "@/components/ProductVisual";
import { formatMoney } from "@/lib/products";
import type { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.handle}`} className="group block">
      <ProductVisual product={product} />
      <p className="mt-3 font-display text-2xl leading-snug">
        {product.title.replace("Somnara ", "")}
      </p>
      <p className="text-sm text-[var(--ink-muted)]">{formatMoney(product.price)}</p>
    </Link>
  );
}

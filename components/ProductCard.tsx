import Link from "next/link";
import { ProductVisual } from "@/components/ProductVisual";
import { formatMoney } from "@/lib/products";
import type { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  const title = product.title.replace(/^Somnara\s+/, "");
  const onSale = Boolean(product.compareAtPrice && product.compareAtPrice > product.price);

  return (
    <Link href={`/shop/${product.handle}`} className="product-card">
      <div style={{ position: "relative" }}>
        {onSale ? <span className="sale-badge">Sale</span> : null}
        <ProductVisual product={product} />
      </div>
      <div className="product-card__body">
        <h3 className="product-card__title">{title}</h3>
        <p className="product-card__meta">
          {product.material} · {product.size}
        </p>
        <p className="product-card__price">
          {formatMoney(product.price)}
          {onSale ? (
            <span className="product-card__compare">
              {formatMoney(product.compareAtPrice!)}
            </span>
          ) : null}
        </p>
      </div>
    </Link>
  );
}

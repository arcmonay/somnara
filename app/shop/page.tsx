import { Suspense } from "react";
import { ProductGrid } from "@/components/ProductGrid";
import { ShopFilters } from "@/components/ShopFilters";
import {
  getCollections,
  getProducts,
  getProductsByCollection,
  searchProducts,
} from "@/lib/products";

export const metadata = {
  title: "Shop",
  description: "Browse Somnara mattresses, pillows, foundations, and bedroom bundles.",
};

type Props = {
  searchParams: Promise<{ collection?: string; q?: string }>;
};

export default async function ShopPage({ searchParams }: Props) {
  const { collection, q } = await searchParams;
  const collections = getCollections();

  let products = q ? searchProducts(q) : getProducts();
  if (collection && collection !== "all") {
    const inCollection = new Set(
      getProductsByCollection(collection).map((p) => p.id),
    );
    products = products.filter((p) => inCollection.has(p.id));
  }

  return (
    <div className="page">
      <h1 className="page__title">Shop all</h1>
      <p className="page__lede">
        {products.length} products
        {collection
          ? ` in ${collections.find((c) => c.handle === collection)?.title ?? collection}`
          : ""}
        {q ? ` matching “${q}”` : ""}.
      </p>
      <Suspense fallback={<div style={{ height: "4rem" }} />}>
        <ShopFilters collections={collections} />
      </Suspense>
      <ProductGrid products={products} />
    </div>
  );
}

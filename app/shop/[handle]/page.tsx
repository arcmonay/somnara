import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/AddToCartButton";
import { ProductGrid } from "@/components/ProductGrid";
import {
  formatMoney,
  getCollection,
  getProduct,
  getProducts,
  getProductsByCollection,
} from "@/lib/products";

type Params = Promise<{ handle: string }>;

export function generateStaticParams() {
  return getProducts().map((p) => ({ handle: p.handle }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { handle } = await params;
  const product = getProduct(handle);
  if (!product) return { title: "Product" };
  return {
    title: product.title,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Params }) {
  const { handle } = await params;
  const product = getProduct(handle);
  if (!product) notFound();

  const collection = getCollection(product.collection);
  const related = getProductsByCollection(product.collection)
    .filter((p) => p.id !== product.id)
    .slice(0, 3);
  const src = product.image || `/products/${product.handle}.webp`;

  return (
    <>
      <div className="page">
        <article className="pdp">
          <div className="pdp__media">
            <Image
              src={src}
              alt={product.title}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            {collection ? (
              <p className="pdp__crumb">
                <Link href={`/collections/${collection.handle}`}>
                  {collection.title}
                </Link>
              </p>
            ) : null}
            <h1 className="pdp__title">{product.title}</h1>
            <p className="pdp__price">
              {formatMoney(product.price)}
              {product.compareAtPrice ? (
                <span className="product-card__compare">
                  {formatMoney(product.compareAtPrice)}
                </span>
              ) : null}
            </p>
            <p className="pdp__desc">{product.description}</p>
            <ul className="pdp__specs">
              {[
                ["Material", product.material],
                ["Size", product.size],
                ["Finish", product.finish],
                ["Profile", product.highlight],
                ["Weight", `${product.weightLbs} lb`],
                ["SKU", product.sku],
              ].map(([label, value]) => (
                <li key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </li>
              ))}
            </ul>
            <div className="pdp__buy">
              <AddToCartButton handle={product.handle} />
              <Link href="/sleep" className="btn btn-outline">
                Sleep guide
              </Link>
            </div>
          </div>
        </article>
      </div>

      {related.length ? (
        <section className="section--soft">
          <div className="section__inner">
            <div className="section__head">
              <h2>You may also like</h2>
            </div>
            <ProductGrid products={related} />
          </div>
        </section>
      ) : null}
    </>
  );
}

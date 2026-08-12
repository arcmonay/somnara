import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { ProductGrid } from "@/components/ProductGrid";
import { getCollections, getFeaturedProducts, getProducts } from "@/lib/products";

export default function HomePage() {
  const featured = getFeaturedProducts(8);
  const collections = getCollections().slice(0, 6);
  const total = getProducts().length;

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(201,163,106,0.22),transparent_55%)]" />
          <div className="absolute inset-y-0 right-0 w-full bg-[linear-gradient(90deg,var(--bg)_18%,transparent_70%)] md:w-[70%]" />
        </div>

        <div className="container relative grid min-h-[calc(100svh-4.25rem)] items-center py-16 md:py-20">
          <div className="max-w-xl">
            <p className="eyebrow fade-up">Mattresses, pillows, foundations</p>
            <BrandLogo width={420} height={243} priority className="fade-up mt-5" />
            <h1 className="sr-only">Somnara</h1>
            <p className="fade-up-delay-2 mt-5 max-w-md text-lg leading-relaxed text-[var(--ink-muted)]">
              Sleep systems engineered as a set—hybrids, latex, pillows, and
              box springs that share the same cover language and sizing.
            </p>
            <div className="fade-up-delay-2 mt-8 flex flex-wrap gap-3">
              <Link href="/shop" className="btn btn-primary">
                Shop the catalog
              </Link>
              <Link href="/sleep" className="btn btn-ghost">
                How we build a bed
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)] py-16 md:py-20">
        <div className="container">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Collections</p>
              <h2 className="font-display mt-2 text-3xl tracking-tight md:text-4xl">
                A full bedroom line
              </h2>
            </div>
            <Link href="/shop" className="text-sm text-[var(--copper)] hover:underline">
              View all {total} listings →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {collections.map((c) => (
              <Link
                key={c.handle}
                href={`/collections/${c.handle}`}
                className="rounded-2xl border border-[var(--line)] bg-[rgba(255,255,255,0.02)] p-6 transition-colors hover:border-[rgba(201,163,106,0.4)] hover:bg-[rgba(201,163,106,0.06)]"
              >
                <h3 className="font-display text-2xl tracking-tight">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
                  {c.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)] py-16 md:py-20">
        <div className="container">
          <div className="mb-10">
            <p className="eyebrow">Featured</p>
            <h2 className="font-display mt-2 text-3xl tracking-tight md:text-4xl">
              Start with these beds
            </h2>
          </div>
          <ProductGrid products={featured} />
        </div>
      </section>

      <section className="border-t border-[var(--line)] py-16 md:py-20">
        <div className="container grid gap-8 rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(135deg,rgba(201,163,106,0.12),rgba(18,20,26,0.2))] p-8 md:grid-cols-[1.2fr_1fr] md:p-12">
          <div>
            <p className="eyebrow">Shopify-ready</p>
            <h2 className="font-display mt-3 text-3xl tracking-tight md:text-4xl">
              Import the full catalog in one CSV
            </h2>
            <p className="mt-4 max-w-lg text-[var(--ink-muted)] leading-relaxed">
              {total} products across {getCollections().length} collections ship
              with this project as a Shopify Admin CSV—connect your store when
              you&apos;re ready to go live.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <Link href="/shop" className="btn btn-primary w-full sm:w-auto">
              Browse the shop
            </Link>
            <p className="text-xs text-[var(--ink-faint)]">
              File: <code>data/shopify-products.csv</code>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

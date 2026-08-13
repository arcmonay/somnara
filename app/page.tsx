import Image from "next/image";
import Link from "next/link";
import { ProductVisual } from "@/components/ProductVisual";
import { getCollections, getFeaturedProducts, getProducts } from "@/lib/products";

export default function HomePage() {
  const featured = getFeaturedProducts(6);
  const collections = getCollections();
  const total = getProducts().length;

  return (
    <>
      <section className="dusk-hero">
        <Image
          src="/hero-dusk.jpg"
          alt="A bed at dusk beside a nightstand with a warm lamp"
          fill
          priority
          sizes="100vw"
          className="dusk-hero__img"
        />
        <div className="dusk-hero__scrim" aria-hidden="true" />
        <div className="dusk-hero__copy">
          <p className="eyebrow">The house is quiet</p>
          <h1 className="font-display turn-down__title">
            Turn the
            <br />
            light down.
          </h1>
          <p className="turn-down__lede">
            Mattresses, pillows, and foundations specified as one bed—not a
            pile of unrelated SKUs.
          </p>
          <Link href="/shop" className="linen-link">
            Request the beds →
          </Link>
        </div>
      </section>

      <section className="directory">
        <div className="directory__head">
          <h2 className="font-display">House directory</h2>
          <Link href="/shop">{total} listings</Link>
        </div>
        <ol className="directory__list">
          {collections.map((c, i) => (
            <li key={c.handle}>
              <Link href={`/collections/${c.handle}`}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <strong className="font-display">{c.title}</strong>
                <em>{c.description}</em>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="nightstand">
        <h2 className="font-display">Already turned down</h2>
        <div className="nightstand__grid">
          {featured.map((product) => (
            <Link key={product.id} href={`/shop/${product.handle}`}>
              <ProductVisual product={product} />
              <p className="font-display">{product.title.replace("Somnara ", "")}</p>
              <span>${product.price}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

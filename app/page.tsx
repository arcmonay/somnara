import Image from "next/image";
import Link from "next/link";
import { ProductGrid } from "@/components/ProductGrid";
import { getCollections, getFeaturedProducts } from "@/lib/products";

export default function HomePage() {
  const featured = getFeaturedProducts(6);
  const collections = getCollections().slice(0, 8);

  return (
    <>
      <section className="hero">
        <div className="hero__media">
          <Image
            src="/hero-dusk.jpg"
            alt="Bedroom with rumpled bedding and a warm nightstand lamp"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 55vw"
          />
        </div>
        <div className="hero__copy">
          <p className="hero__eyebrow">Mattresses &amp; sleep essentials</p>
          <h1 className="hero__title">Shop the bed that fits your night.</h1>
          <p className="hero__lede">
            Mattresses, pillows, and bedding in one clear catalog—compare feel,
            size, and price without the noise.
          </p>
          <div className="hero__ctas">
            <Link href="/shop" className="btn btn-primary">
              Shop mattresses
            </Link>
            <Link href="/sleep" className="btn btn-outline">
              Take the sleep guide
            </Link>
          </div>
        </div>
      </section>

      <div className="proof">
        <div className="proof__item">
          <strong>100-night trial</strong>
          <span>Try it at home risk-free</span>
        </div>
        <div className="proof__item">
          <strong>Free shipping</strong>
          <span>On qualifying orders</span>
        </div>
        <div className="proof__item">
          <strong>Easy returns</strong>
          <span>Simple pickup when needed</span>
        </div>
      </div>

      <section className="section">
        <div className="section__head">
          <h2>Shop by category</h2>
          <Link href="/shop">View all</Link>
        </div>
        <div className="cat-grid">
          {collections.map((c) => (
            <Link key={c.handle} href={`/collections/${c.handle}`} className="cat-tile">
              <strong>{c.title}</strong>
              <span>{c.description}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section--soft">
        <div className="section__inner">
          <div className="section__head">
            <h2>Bestsellers</h2>
            <Link href="/shop">Shop all</Link>
          </div>
          <ProductGrid products={featured} />
        </div>
      </section>

      <section className="section">
        <div className="section__head">
          <h2>Find your feel</h2>
          <Link href="/sleep">Sleep guide</Link>
        </div>
        <p className="page__lede" style={{ marginBottom: "1.5rem" }}>
          Not sure where to start? Compare constructions and firmness, then pick
          a size—no medical claims, just a clearer path to the right bed.
        </p>
        <Link href="/sleep" className="btn btn-secondary">
          Start the guide
        </Link>
      </section>
    </>
  );
}

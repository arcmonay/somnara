export const metadata = {
  title: "House",
  description: "About Somnara sleep systems.",
};

export default function AboutPage() {
  return (
    <article className="suite-page" style={{ maxWidth: "38rem" }}>
      <p className="eyebrow">House</p>
      <h1 className="font-display turn-down__title" style={{ fontSize: "clamp(2.6rem, 6vw, 4.2rem)" }}>
        Built like a bedroom line.
      </h1>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-[var(--ink-muted)]">
        <p>
          Somnara is a mattress, pillow, and foundation catalog designed as one
          storefront—hybrids next to latex, box springs next to power bases,
          sheets cut for the same deep pockets.
        </p>
        <p>
          This project ships with 100+ SKUs so the house feels complete from day
          one. Import{" "}
          <code className="text-[var(--copper)]">data/shopify-products.csv</code>
          , add Storefront API credentials, and wire live checkout when you are
          ready.
        </p>
      </div>
    </article>
  );
}

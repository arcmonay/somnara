export const metadata = {
  title: "About",
  description: "About Somnara sleep systems.",
};

export default function AboutPage() {
  return (
    <div className="container max-w-3xl py-12 md:py-16">
      <p className="eyebrow">About</p>
      <h1 className="font-display mt-3 text-4xl tracking-tight md:text-5xl">
        Built like a bedroom line
      </h1>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-[var(--ink-muted)]">
        <p>
          Somnara is a mattress, pillow, and foundation catalog designed as one
          storefront—hybrids next to latex, box springs next to power bases,
          sheets cut for the same deep pockets.
        </p>
        <p>
          This project ships with 100+ SKUs so the shop feels complete from day
          one. Import{" "}
          <code className="text-[var(--copper)]">data/shopify-products.csv</code>
          , add Storefront API credentials, and wire live checkout when you are
          ready.
        </p>
      </div>
    </div>
  );
}

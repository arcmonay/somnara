export const metadata = {
  title: "Sleep",
  description: "How Somnara mattresses, pillows, and foundations are specified.",
};

export default function SleepPage() {
  return (
    <div className="container max-w-3xl py-12 md:py-16">
      <p className="eyebrow">Sleep</p>
      <h1 className="font-display mt-3 text-4xl tracking-tight md:text-5xl">
        A bed is a system
      </h1>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-[var(--ink-muted)]">
        <p>
          Firmness, fill, and foundation work together. A plush hybrid on a
          sagging box spring does not sleep like the same hybrid on a locked
          low-profile base.
        </p>
        <p>
          Somnara listings are specified the way a showroom would: construction,
          size, cover, and profile—so you can match a Queen Harbor hybrid to the
          Harbor foundation and the same-cover pillows.
        </p>
      </div>
      <dl className="mt-10 grid gap-4 sm:grid-cols-2">
        {[
          ["Hybrid", "Coils for bounce, foam for contour. The default adult bed."],
          ["Latex", "Buoyant, cooler, and heavier. Best for hot sleepers."],
          ["Memory foam", "Slow contour, motion isolation, denser feel."],
          ["Foundation", "The frame that keeps the warranty honest."],
        ].map(([k, v]) => (
          <div
            key={k}
            className="rounded-2xl border border-[var(--line)] bg-[rgba(255,255,255,0.02)] p-5"
          >
            <dt className="font-display text-xl text-[var(--ink)]">{k}</dt>
            <dd className="mt-2 text-sm text-[var(--ink-muted)]">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export const metadata = {
  title: "Sleep",
  description: "How Somnara mattresses, pillows, and foundations are specified.",
};

export default function SleepPage() {
  return (
    <article className="suite-page" style={{ maxWidth: "40rem" }}>
      <p className="eyebrow">Sleep</p>
      <h1 className="font-display turn-down__title" style={{ fontSize: "clamp(2.6rem, 6vw, 4.2rem)" }}>
        A bed is a system.
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
      <dl className="directory__list mt-10">
        {[
          ["Hybrid", "Coils for bounce, foam for contour. The default adult bed."],
          ["Latex", "Buoyant, cooler, and heavier. Best for hot sleepers."],
          ["Memory foam", "Slow contour, motion isolation, denser feel."],
          ["Foundation", "The frame that keeps the warranty honest."],
        ].map(([k, v], i) => (
          <div key={k} className="directory__list">
            <div className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-t border-[var(--line)] py-4">
              <span className="text-[0.78rem] tracking-[0.12em] text-[var(--ink-faint)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <dt className="font-display text-2xl">{k}</dt>
                <dd className="mt-1 text-sm text-[var(--ink-muted)]">{v}</dd>
              </div>
            </div>
          </div>
        ))}
      </dl>
    </article>
  );
}

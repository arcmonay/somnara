import Link from "next/link";

export const metadata = {
  title: "Sleep Guide",
  description: "How to choose a Somnara mattress, pillow, and foundation.",
};

export default function SleepPage() {
  const steps = [
    {
      n: "01",
      title: "Mattresses",
      copy: "Start with construction—hybrid, latex, foam, or innerspring—then pick a series that fits your room.",
    },
    {
      n: "02",
      title: "Feel",
      copy: "Compare firmness from plush to firm on one simple scale. Match how you sleep, not a buzzword.",
    },
    {
      n: "03",
      title: "Size",
      copy: "Twin through Cal King. Same cover language across sizes—change only the footprint.",
    },
    {
      n: "04",
      title: "Compare",
      copy: "Hold two builds side by side: material, profile, and feel before you add to cart.",
    },
    {
      n: "05",
      title: "Sleep goals",
      copy: "Cooler surface, quieter motion, or a deeper cradle—pick a preference, then finish with pillow and foundation.",
    },
  ];

  return (
    <div className="page prose">
      <h1 className="page__title">Sleep guide</h1>
      <p className="page__lede">
        A clearer path to the right bed: mattresses → feel → size → compare →
        goals. Comfort guidance only—not medical advice.
      </p>
      <ol className="step-list">
        {steps.map((step) => (
          <li key={step.n}>
            <span>{step.n}</span>
            <div>
              <strong>{step.title}</strong>
              <em>{step.copy}</em>
            </div>
          </li>
        ))}
      </ol>
      <Link href="/shop" className="btn btn-primary" style={{ marginTop: "2rem" }}>
        Shop mattresses
      </Link>
    </div>
  );
}

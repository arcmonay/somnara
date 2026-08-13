export const metadata = {
  title: "About",
  description: "About Somnara sleep products.",
};

export default function AboutPage() {
  return (
    <div className="page prose">
      <h1 className="page__title">About Somnara</h1>
      <p className="page__lede">
        We make sleep shopping easier—mattresses, pillows, and foundations in one
        clear catalog.
      </p>
      <div style={{ marginTop: "1.5rem", display: "grid", gap: "1rem" }}>
        <p>
          Somnara is a mattress and bedroom essentials storefront designed like a
          modern DTC sleep brand: straightforward navigation, product cards you can
          compare at a glance, and a guide that helps you choose by feel and size.
        </p>
        <p>
          This project ships with 100+ SKUs so the catalog feels complete from day
          one. Import{" "}
          <code style={{ color: "var(--navy)", fontWeight: 600 }}>
            data/shopify-products.csv
          </code>
          , add Storefront API credentials, and connect live checkout when you are
          ready.
        </p>
      </div>
    </div>
  );
}

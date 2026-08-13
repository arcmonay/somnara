import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="site-footer__brand">somnara</p>
          <p style={{ margin: "0.75rem 0 0", opacity: 0.8, maxWidth: "18rem", lineHeight: 1.5 }}>
            Mattresses, pillows, and bedroom essentials designed for an easier night in.
          </p>
        </div>
        <div className="site-footer__cols">
          <div>
            <h3>Shop</h3>
            <Link href="/shop">Shop All</Link>
            <Link href="/collections/mattresses">Mattresses</Link>
            <Link href="/collections/pillows">Pillows</Link>
            <Link href="/collections/sheets">Bedding</Link>
          </div>
          <div>
            <h3>Help</h3>
            <Link href="/sleep">Sleep Guide</Link>
            <Link href="/cart">Cart</Link>
            <Link href="/about">About</Link>
          </div>
          <div>
            <h3>Collections</h3>
            <Link href="/collections/foundations">Foundations</Link>
            <Link href="/collections/toppers">Toppers</Link>
            <Link href="/collections/bases">Adjustable Bases</Link>
            <Link href="/collections/bundles">Bundles</Link>
          </div>
          <div>
            <h3>Company</h3>
            <Link href="/about">Our story</Link>
            <Link href="/shop">Catalog</Link>
          </div>
        </div>
        <p className="site-footer__legal">
          © 2025 Somnara. Sleep products for the home—not medical devices.
        </p>
      </div>
    </footer>
  );
}

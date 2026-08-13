import Link from "next/link";

export function Footer() {
  return (
    <footer className="footboard">
      <p className="font-display goodnight">good night</p>
      <div className="footboard__tuck">
        <nav>
          <Link href="/shop">The beds</Link>
          <Link href="/collections/mattresses">Mattresses</Link>
          <Link href="/sleep">Sleep</Link>
          <Link href="/about">House</Link>
          <Link href="/cart">Tray</Link>
        </nav>
        <p>© 2025 Somnara. Sleep products, not medical devices.</p>
      </div>
    </footer>
  );
}

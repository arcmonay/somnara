"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/BrandLogo";
import { useCart } from "@/lib/cart-context";

const links = [
  { href: "/shop", label: "The beds" },
  { href: "/collections/mattresses", label: "Mattresses" },
  { href: "/collections/pillows", label: "Down" },
  { href: "/sleep", label: "Sleep" },
  { href: "/about", label: "House" },
];

export function Header() {
  const pathname = usePathname();
  const { count } = useCart();

  return (
    <header className="headboard">
      <Link href="/cart" className="tray">
        Tray{count > 0 ? ` ${count}` : ""}
      </Link>
      <Link href="/" className="monogram">
        <BrandLogo width={72} height={72} priority />
        <span className="font-display suite-mark">SOMNARA</span>
      </Link>
      <nav className="stitches">
        {links.map((link) => {
          const active =
            pathname === link.href || pathname.startsWith(`${link.href}/`);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={active ? "is-active" : ""}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

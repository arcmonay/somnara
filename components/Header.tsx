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
    <header className="duskbar">
      <Link href="/" className="duskbar__mark">
        <BrandLogo width={30} height={30} priority />
        <span className="font-display">somnara</span>
      </Link>
      <nav className="duskbar__nav">
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
        <Link href="/cart" className="duskbar__tray">
          Tray{count > 0 ? ` ${count}` : ""}
        </Link>
      </nav>
    </header>
  );
}

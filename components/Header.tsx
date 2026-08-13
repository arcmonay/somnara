"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";

const links = [
  { href: "/shop", label: "Shop All" },
  { href: "/collections/mattresses", label: "Mattresses" },
  { href: "/collections/pillows", label: "Pillows" },
  { href: "/collections/sheets", label: "Bedding" },
  { href: "/sleep", label: "Sleep Guide" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="announce">Free shipping on orders over $100 · 100-night trial</div>
      <header className="site-header">
        <div className="site-header__inner">
          <Link href="/" className="site-logo">
            somnara
          </Link>

          <nav className="site-nav" aria-label="Primary">
            {links.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={active ? "is-active" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="site-header__actions">
            <Link href="/cart" className="cart-link">
              Cart{count > 0 ? ` (${count})` : ""}
            </Link>
            <button
              type="button"
              className="menu-btn"
              aria-expanded={open}
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <nav className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Mobile">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}

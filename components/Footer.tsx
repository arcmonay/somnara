import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--line)]">
      <div className="container grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <BrandLogo size={52} />
            <p className="font-display text-3xl font-semibold tracking-tight">
              Som<span className="text-[var(--ember)]">nara</span>
            </p>
          </div>
          <p className="mt-3 max-w-sm text-[var(--ink-muted)] leading-relaxed">
            Mattresses, pillows, and foundations built as a complete sleep
            system—not a pile of unrelated SKUs.
          </p>
        </div>
        <div>
          <p className="eyebrow">Shop</p>
          <ul className="mt-4 space-y-2 text-sm text-[var(--ink-muted)]">
            <li>
              <Link href="/shop" className="hover:text-[var(--ink)]">
                All products
              </Link>
            </li>
            <li>
              <Link href="/collections/mattresses" className="hover:text-[var(--ink)]">
                Mattresses
              </Link>
            </li>
            <li>
              <Link href="/collections/pillows" className="hover:text-[var(--ink)]">
                Pillows
              </Link>
            </li>
            <li>
              <Link href="/collections/bundles" className="hover:text-[var(--ink)]">
                Bundles
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Company</p>
          <ul className="mt-4 space-y-2 text-sm text-[var(--ink-muted)]">
            <li>
              <Link href="/sleep" className="hover:text-[var(--ink)]">
                Sleep
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[var(--ink)]">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--line)]">
        <div className="container flex flex-col gap-2 py-5 text-xs text-[var(--ink-faint)] sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Somnara. Built for Shopify catalog import.</p>
          <p>Sleep products, not medical devices.</p>
        </div>
      </div>
    </footer>
  );
}

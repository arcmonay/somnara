"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/lib/cart-context";
import { formatMoney } from "@/lib/products-client";

export function CartView() {
  const { items, subtotal, setQuantity, removeItem, clear } = useCart();

  if (!items.length) {
    return (
      <div>
        <p style={{ color: "var(--blue-muted)", fontSize: "1.0625rem" }}>
          Your cart is empty.
        </p>
        <Link href="/shop" className="btn btn-primary" style={{ marginTop: "1.25rem" }}>
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-layout">
      <div>
        {items.map(({ product, quantity }) => (
          <div key={product.handle} className="cart-line">
            <div className="cart-line__thumb">
              <Image
                src={product.image || `/products/${product.handle}.webp`}
                alt={product.title}
                fill
                sizes="120px"
                className="object-cover"
              />
            </div>
            <div>
              <Link href={`/shop/${product.handle}`} style={{ fontWeight: 600, color: "var(--navy)" }}>
                {product.title}
              </Link>
              <p style={{ margin: "0.35rem 0 0", color: "var(--blue-muted)", fontSize: "0.9rem" }}>
                {formatMoney(product.price)}
              </p>
              <div style={{ marginTop: "0.75rem", display: "flex", gap: "1rem", alignItems: "center" }}>
                <label style={{ fontSize: "0.8125rem", color: "var(--blue-muted)" }}>
                  Qty{" "}
                  <input
                    type="number"
                    min={1}
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(product.handle, Number(e.target.value))
                    }
                    style={{
                      marginLeft: "0.35rem",
                      width: "3.5rem",
                      border: "1px solid var(--line)",
                      borderRadius: "0.5rem",
                      padding: "0.25rem 0.4rem",
                    }}
                  />
                </label>
                <button
                  type="button"
                  onClick={() => removeItem(product.handle)}
                  style={{
                    background: "none",
                    border: 0,
                    color: "var(--blue-muted)",
                    cursor: "pointer",
                    fontSize: "0.8125rem",
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
            <p style={{ fontWeight: 700, color: "var(--navy)", textAlign: "right" }}>
              {formatMoney(product.price * quantity)}
            </p>
          </div>
        ))}
      </div>

      <aside className="cart-summary">
        <h2>Order summary</h2>
        <div className="cart-summary__row">
          <span>Subtotal</span>
          <span>{formatMoney(subtotal)}</span>
        </div>
        <p className="cart-summary__note">
          Checkout connects to Shopify once store credentials are set. Until then,
          cart state stays in this browser.
        </p>
        <button type="button" className="btn btn-primary" style={{ width: "100%", marginTop: "1.15rem" }} disabled>
          Checkout via Shopify
        </button>
        <button type="button" onClick={clear} className="btn btn-ghost" style={{ width: "100%", marginTop: "0.65rem" }}>
          Clear cart
        </button>
        <Link
          href="/shop"
          style={{
            display: "block",
            textAlign: "center",
            marginTop: "1rem",
            fontSize: "0.9rem",
            fontWeight: 600,
            color: "var(--blue-mid)",
          }}
        >
          Keep shopping
        </Link>
      </aside>
    </div>
  );
}

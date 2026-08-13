import { CartView } from "@/components/CartView";

export const metadata = { title: "Cart" };

export default function CartPage() {
  return (
    <div className="page">
      <h1 className="page__title">Your cart</h1>
      <div style={{ marginTop: "2rem" }}>
        <CartView />
      </div>
    </div>
  );
}

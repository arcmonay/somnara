import { CartView } from "@/components/CartView";

export const metadata = { title: "Tray" };

export default function CartPage() {
  return (
    <div className="suite-page">
      <h1 className="font-display turn-down__title" style={{ fontSize: "clamp(2.6rem, 6vw, 4.2rem)" }}>
        The tray
      </h1>
      <div className="mt-10">
        <CartView />
      </div>
    </div>
  );
}

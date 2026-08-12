"use client";

import { useRouter, useSearchParams } from "next/navigation";
import type { Collection } from "@/lib/types";

export function ShopFilters({ collections }: { collections: Collection[] }) {
  const router = useRouter();
  const params = useSearchParams();
  const active = params.get("collection") ?? "all";
  const q = params.get("q") ?? "";

  function update(next: { collection?: string; q?: string }) {
    const sp = new URLSearchParams(params.toString());
    const collection = next.collection ?? active;
    const query = next.q ?? q;
    if (!collection || collection === "all") sp.delete("collection");
    else sp.set("collection", collection);
    if (!query) sp.delete("q");
    else sp.set("q", query);
    router.push(`/shop?${sp.toString()}`);
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-x-5 gap-y-2">
        <button
          type="button"
          onClick={() => update({ collection: "all" })}
          className={`text-[0.72rem] uppercase tracking-[0.18em] ${
            active === "all" ? "text-[var(--ink)]" : "text-[var(--ink-faint)]"
          }`}
        >
          The house
        </button>
        {collections.map((c) => (
          <button
            key={c.handle}
            type="button"
            onClick={() => update({ collection: c.handle })}
            className={`text-[0.72rem] uppercase tracking-[0.18em] ${
              active === c.handle ? "text-[var(--ink)]" : "text-[var(--ink-faint)]"
            }`}
          >
            {c.title}
          </button>
        ))}
      </div>
      <label className="block w-full max-w-sm">
        <span className="sr-only">Search products</span>
        <input
          type="search"
          defaultValue={q}
          placeholder="Look for a bed…"
          onChange={(e) => update({ q: e.target.value })}
          className="w-full border-0 border-b border-[var(--line)] bg-transparent px-0 py-2 text-sm outline-none placeholder:text-[var(--ink-faint)] focus:border-[var(--ember)]"
        />
      </label>
    </div>
  );
}

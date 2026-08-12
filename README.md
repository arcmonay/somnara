# Somnara

Custom sleep-system storefront — mattresses, pillows, box springs, and bedroom bundles. Next.js + Shopify-ready catalog.

**Repo:** https://github.com/arcmonay/somnara

## What’s included

- Brand storefront (home, shop, collections, product pages, cart, sleep, about)
- **100+ product listings** across 8 collections
- Unique product image for every listing in `public/products/`
- Shopify Admin import CSV at `data/shopify-products.csv`
- Local catalog at `data/catalog.json`
- Storefront API helper at `lib/shopify.ts`

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Catalog scripts

```bash
npm run catalog       # regenerate data/catalog.json
npm run photos        # download Unsplash stock into assets/photo-library
npm run images        # apply unique crops to all product images
npm run catalog:csv   # export Shopify Admin CSV
```

## Shopify setup

1. Create a Shopify store.
2. **Products → Import** and upload `data/shopify-products.csv`.
3. Create a Storefront API token.
4. Copy `.env.example` → `.env.local` and fill `SHOPIFY_STORE_DOMAIN` / `SHOPIFY_STOREFRONT_TOKEN`.
5. Deploy as a **new** Vercel project pointed at `arcmonay/somnara`.

Until Shopify credentials are connected, the site runs on the local catalog and browser cart.

## Collections

Mattresses · Pillows · Box Springs & Foundations · Toppers · Sheets & Bedding · Protectors · Adjustable Bases · Bedroom Bundles

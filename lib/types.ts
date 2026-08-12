export type Collection = {
  handle: string;
  title: string;
  description: string;
};

export type Product = {
  id: string;
  handle: string;
  title: string;
  description: string;
  collection: string;
  price: number;
  compareAtPrice: number | null;
  currency: string;
  sku: string;
  material: string;
  size: string;
  finish: string;
  highlight: string;
  weightLbs: number;
  featured: boolean;
  tags: string[];
  inStock: boolean;
  image: string;
};

export type CartLine = {
  handle: string;
  quantity: number;
};

export type Catalog = {
  brand: string;
  generatedAt?: string;
  collections: Collection[];
  products: Product[];
};

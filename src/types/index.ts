export interface ProductVariant {
  id: string;
  name: string;
  image: string;
  colorCode?: string;
}

export interface Product {
  id: string;
  slug: string;
  category: "crystal-lamps" | "retro-gadgets" | "romantic-gifts" | "ambient-dioramas" | "sand-art";
  categoryNameEn: string;
  badgeEn: string;
  nameEn: string;
  taglineEn: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  image: string;
  variants: ProductVariant[];
  featuresEn: string[];
  boxIncludesEn: string;
}

export interface CartItem {
  product: Product;
  variantId: string;
  quantity: number;
}

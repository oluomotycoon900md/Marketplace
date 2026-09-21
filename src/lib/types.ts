export interface Product {
  id: string;
  slug: string;
  name: string;
  maker: string;
  price: number;
  image: string;
  description: string;
  category: 'ceramics' | 'wood' | 'textiles' | 'paper';
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

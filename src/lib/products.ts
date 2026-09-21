import { Product } from './types';

// Stand-in for a real product API/CMS. Swap the body of these functions for
// `fetch()` calls to your backend once one exists -- the pages that call them
// don't need to change.
const PRODUCTS: Product[] = [
  {
    id: 'p1',
    slug: 'stoneware-mug-ash-glaze',
    name: 'Stoneware mug, ash glaze',
    maker: 'Rivet & Clay',
    price: 32,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800',
    description:
      'Wheel-thrown stoneware finished with a wood-ash glaze, so no two mugs come out quite the same. Holds 350ml, safe for the dishwasher and microwave.',
    category: 'ceramics',
    featured: true,
  },
  {
    id: 'p2',
    slug: 'walnut-cutting-board',
    name: 'Walnut cutting board',
    maker: 'Heartwood Studio',
    price: 68,
    image: 'https://images.unsplash.com/photo-1584946364639-3d3a1dd1c34e?w=800',
    description:
      'A single slab of black walnut, oiled by hand. Slight variation in grain is normal and part of the wood, not a flaw.',
    category: 'wood',
    featured: true,
  },
  {
    id: 'p3',
    slug: 'lambswool-throw',
    name: 'Lambswool throw',
    maker: 'Norrland Weaving Co.',
    price: 145,
    image: 'https://images.unsplash.com/photo-1600369672770-985fd30004eb?w=800',
    description:
      'Woven on a shuttle loom from undyed lambswool. Roughly 130 x 180cm -- big enough for a couch, light enough to travel.',
    category: 'textiles',
    featured: true,
  },
  {
    id: 'p4',
    slug: 'porcelain-bud-vase',
    name: 'Porcelain bud vase',
    maker: 'Rivet & Clay',
    price: 24,
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800',
    description: 'A small porcelain vase for a single stem or a short handful of cuttings.',
    category: 'ceramics',
  },
  {
    id: 'p5',
    slug: 'ash-serving-bowl',
    name: 'Ash serving bowl',
    maker: 'Heartwood Studio',
    price: 54,
    image: 'https://images.unsplash.com/photo-1608303588026-884930af2559?w=800',
    description: 'Turned from a single piece of ash on a manual lathe, finished food-safe.',
    category: 'wood',
  },
  {
    id: 'p6',
    slug: 'letterpress-card-set',
    name: 'Letterpress card set',
    maker: 'Study Hall Press',
    price: 18,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=800',
    description: 'Six blank cards, letterpress printed on 100% cotton stock. Envelopes included.',
    category: 'paper',
  },
];

export async function getAllProducts(): Promise<Product[]> {
  return PRODUCTS;
}

export async function getFeaturedProducts(): Promise<Product[]> {
  return PRODUCTS.filter((p) => p.featured);
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  return PRODUCTS.find((p) => p.slug === slug);
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  if (category === 'all') return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === category);
}

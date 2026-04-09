export interface TileReview {
  name: string;
  text: string;
  rating: number;
}

export interface Tile {
  id: string;
  name: string;
  slug: string;
  collection: string;
  room: ("bathroom" | "kitchen" | "living" | "outdoor" | "commercial")[];
  material: "Marble" | "Porcelain" | "Cement" | "Terrazzo" | "Mosaic" | "Slate" | "Travertine";
  finish: "Matte" | "Glossy" | "Textured" | "Polished" | "Brushed";
  size: string;
  color: string;
  pricePerSqFt: number;
  coveragePerBox: number;
  description: string;
  images: string[];
  rating: number;
  reviews: TileReview[];
}

export const tiles: Tile[] = [
  {
    id: "1",
    name: "Obsidian Noir",
    slug: "obsidian-noir",
    collection: "Noir Series",
    room: ["living", "commercial"],
    material: "Porcelain",
    finish: "Polished",
    size: "60×120 cm",
    color: "Deep Black",
    pricePerSqFt: 450,
    coveragePerBox: 15.5,
    description: "A deep, monolithic black porcelain tile with subtle dark-grey veining, reminiscent of volcanic glass.",
    images: ["/images/tiles/obsidian-1.jpg", "/images/tiles/obsidian-2.jpg"],
    rating: 4.9,
    reviews: [
      { name: "Julian V.", text: "The reflection is like a dark mirror. Stunning.", rating: 5 },
      { name: "Sarah K.", text: "Perfect for our studio lobby.", rating: 5 }
    ]
  },
  {
    id: "2",
    name: "Arctic Silk",
    slug: "arctic-silk",
    collection: "Arctic Frost",
    room: ["bathroom", "living"],
    material: "Marble",
    finish: "Matte",
    size: "80×80 cm",
    color: "Pure White",
    pricePerSqFt: 850,
    coveragePerBox: 13.8,
    description: "Ultra-pure white marble with a silk-touch finish. Minimalist elegance at its peak.",
    images: ["/images/tiles/arctic-1.jpg", "/images/tiles/arctic-2.jpg"],
    rating: 4.8,
    reviews: [
      { name: "Marco P.", text: "Exquisite texture. Feels warm even for a white tile.", rating: 5 }
    ]
  },
  {
    id: "3",
    name: "Raw Terra",
    slug: "raw-terra",
    collection: "Raw Earth",
    room: ["outdoor", "living"],
    material: "Terracotta",
    finish: "Textured",
    size: "30×30 cm",
    color: "Warm Rust",
    pricePerSqFt: 220,
    coveragePerBox: 10.5,
    description: "Hand-pressed feel with raw edges. Brings the soul of the Mediterranean to your terrace.",
    images: ["/images/tiles/terra-1.jpg"],
    rating: 4.7,
    reviews: []
  },
  {
    id: "4",
    name: "Concrete Brut",
    slug: "concrete-brut",
    collection: "Industrial Grid",
    room: ["living", "commercial", "kitchen"],
    material: "Cement",
    finish: "Matte",
    size: "100×100 cm",
    color: "Industrial Grey",
    pricePerSqFt: 380,
    coveragePerBox: 21.5,
    description: "Raw concrete aesthetics with the durability of high-fired cement. Architectural and bold.",
    images: ["/images/tiles/concrete-1.jpg"],
    rating: 4.5,
    reviews: []
  },
  {
    id: "5",
    name: "Emerald Mosaic",
    slug: "emerald-mosaic",
    collection: "Casa Moderna",
    room: ["bathroom", "kitchen"],
    material: "Mosaic",
    finish: "Glossy",
    size: "30×30 cm Sheet",
    color: "Deep Emerald",
    pricePerSqFt: 1200,
    coveragePerBox: 5.4,
    description: "Intricate glass mosaic tiles in a gradient of emerald and forest greens.",
    images: ["/images/tiles/emerald-1.jpg"],
    rating: 5.0,
    reviews: []
  },
  {
    id: "6",
    name: "Sands of Time",
    slug: "sands-of-time",
    collection: "Raw Earth",
    room: ["living", "bathroom", "outdoor"],
    material: "Travertine",
    finish: "Brushed",
    size: "60×60 cm",
    color: "Warm Sand",
    pricePerSqFt: 670,
    coveragePerBox: 11.6,
    description: "Natural travertine with open pores for a truly organic feel. Soft sandy tones.",
    images: ["/images/tiles/sand-1.jpg"],
    rating: 4.6,
    reviews: []
  },
  {
    id: "7",
    name: "Midnight Slate",
    slug: "midnight-slate",
    collection: "Noir Series",
    room: ["outdoor", "commercial"],
    material: "Slate",
    finish: "Textured",
    size: "40×80 cm",
    color: "Charcoal Blue",
    pricePerSqFt: 310,
    coveragePerBox: 14.2,
    description: "Riven slate texture with naturally occurring metallic flakes.",
    images: ["/images/tiles/slate-1.jpg"],
    rating: 4.9,
    reviews: []
  },
  {
    id: "8",
    name: "Carrara Cloud",
    slug: "carrara-cloud",
    collection: "Arctic Frost",
    room: ["bathroom", "living", "kitchen"],
    material: "Marble",
    finish: "Polished",
    size: "60×120 cm",
    color: "White with Grey Veins",
    pricePerSqFt: 950,
    coveragePerBox: 15.5,
    description: "Classic Italian Carrara marble with sprawling grey veins. Time-honored luxury.",
    images: ["/images/tiles/carrara-1.jpg"],
    rating: 4.9,
    reviews: []
  },
  {
    id: "9",
    name: "Azure Terrazzo",
    slug: "azure-terrazzo",
    collection: "Casa Moderna",
    room: ["kitchen", "bathroom"],
    material: "Terrazzo",
    finish: "Matte",
    size: "60×60 cm",
    color: "Blue & Grey speckled",
    pricePerSqFt: 520,
    coveragePerBox: 11.6,
    description: "Modern terrazzo with large blue and grey aggregate suspended in white cement.",
    images: ["/images/tiles/terrazzo-1.jpg"],
    rating: 4.4,
    reviews: []
  },
  {
    id: "10",
    name: "Wabi Stone",
    slug: "wabi-stone",
    collection: "Wabi-Sabi",
    room: ["living", "bathroom"],
    material: "Porcelain",
    finish: "Textured",
    size: "60×120 cm",
    color: "Earthy Taupe",
    pricePerSqFt: 480,
    coveragePerBox: 15.5,
    description: "The beauty of imperfection. Subtle irregular patterns and a weathered stone finish.",
    images: ["/images/tiles/wabi-1.jpg"],
    rating: 4.8,
    reviews: []
  },
  {
    id: "11",
    name: "Iron Grid",
    slug: "iron-grid",
    collection: "Industrial Grid",
    room: ["commercial", "living"],
    material: "Porcelain",
    finish: "Matte",
    size: "120×240 cm Slab",
    color: "Rust & Iron",
    pricePerSqFt: 720,
    coveragePerBox: 31.0,
    description: "Large format slab with a metallic rust effect. Ideal for feature walls and floors.",
    images: ["/images/tiles/iron-1.jpg"],
    rating: 4.7,
    reviews: []
  },
  {
    id: "12",
    name: "Frost Mosaic",
    slug: "frost-mosaic",
    collection: "Arctic Frost",
    room: ["bathroom", "kitchen"],
    material: "Mosaic",
    finish: "Glossy",
    size: "30×30 cm Sheet",
    color: "Icy White",
    pricePerSqFt: 1100,
    coveragePerBox: 5.4,
    description: "Hexagonal glass mosaic tiles with a frosted finish and iridescent sheen.",
    images: ["/images/tiles/frost-mosaic-1.jpg"],
    rating: 4.9,
    reviews: []
  },
  {
    id: "13",
    name: "Basalt Ridge",
    slug: "basalt-ridge",
    collection: "Noir Series",
    room: ["outdoor", "living"],
    material: "Porcelain",
    finish: "Textured",
    size: "60×60 cm",
    color: "Dark Graphite",
    pricePerSqFt: 410,
    coveragePerBox: 11.6,
    description: "Inspired by the columnar basalt formations. High-grip, high-impact.",
    images: ["/images/tiles/basalt-1.jpg"],
    rating: 4.6,
    reviews: []
  },
  {
    id: "14",
    name: "Modern Clay",
    slug: "modern-clay",
    collection: "Casa Moderna",
    room: ["living", "kitchen", "bathroom"],
    material: "Cement",
    finish: "Matte",
    size: "40×40 cm",
    color: "Terracotta Pink",
    pricePerSqFt: 340,
    coveragePerBox: 10.3,
    description: "Contemporary take on traditional clay tiles. Velvet matte finish in muted pink.",
    images: ["/images/tiles/clay-1.jpg"],
    rating: 4.5,
    reviews: []
  },
  {
    id: "15",
    name: "Luxe Travertine",
    slug: "luxe-travertine",
    collection: "Wabi-Sabi",
    room: ["living", "bathroom", "commercial"],
    material: "Travertine",
    finish: "Polished",
    size: "90×90 cm",
    color: "Creamy Ivory",
    pricePerSqFt: 890,
    coveragePerBox: 17.4,
    description: "Filled and polished travertine. The ultimate statement in quiet luxury.",
    images: ["/images/tiles/luxe-trav-1.jpg"],
    rating: 5.0,
    reviews: []
  },
  {
    id: "16",
    name: "Silver Slate",
    slug: "silver-slate",
    collection: "Raw Earth",
    room: ["outdoor", "commercial"],
    material: "Slate",
    finish: "Textured",
    size: "60×120 cm",
    color: "Light Grey Slate",
    pricePerSqFt: 440,
    coveragePerBox: 15.5,
    description: "Lightweight architectural slate panels with a silver-grey shimmer.",
    images: ["/images/tiles/silver-slate-1.jpg"],
    rating: 4.8,
    reviews: []
  }
];

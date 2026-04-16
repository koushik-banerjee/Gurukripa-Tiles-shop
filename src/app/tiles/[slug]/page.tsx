"use client";

import * as React from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { tiles } from "@/lib/tiles-data";
import Link from "next/link";
import { AreaCalculator } from "@/components/tiles/AreaCalculator";
import { Button } from "@/components/ui/button";
import { Heart, ChevronLeft, Share2, Info, Ruler, Settings, ShieldCheck } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useWishlistStore } from "@/lib/store";
import { TileCard } from "@/components/tiles/TileCard";
import { motion } from "framer-motion";

export default function TileDetailPage() {
  const { slug } = useParams();
  const router = useRouter();
  const tile = tiles.find((t) => t.slug === slug);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlistStore();

  const [activeImage, setActiveImage] = React.useState(0);

  if (!tile) {
    return (
      <div className="pt-32 pb-24 px-6 text-center">
        <h1 className="text-4xl font-display text-ag-white mb-8">Tile Not Found</h1>
        <Button onClick={() => router.push("/tiles")} variant="outline" className="border-ag-copper text-ag-copper">
          Back to Catalogue
        </Button>
      </div>
    );
  }

  const isWishlisted = isInWishlist(tile.id);

  // Filter complementary tiles (same collection or material)
  const complementaryTiles = tiles
    .filter((t) => t.id !== tile.id && (t.collection === tile.collection || t.material === tile.material))
    .slice(0, 4);

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 px-6 bg-ag-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={() => router.back()}
          className="flex items-center space-x-2 text-ag-sand/50 hover:text-ag-sand mb-12 transition-colors uppercase tracking-widest text-[10px]"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Collection</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          {/* Left: Gallery */}
          <div className="space-y-6">
            <motion.div 
              layoutId={`image-${tile.id}`}
              className="relative aspect-square border border-ag-mist overflow-hidden bg-ag-charcoal"
            >
              <Image
                src={tile.images[activeImage] || tile.images[0]}
                alt={tile.name}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            
            <div className="grid grid-cols-4 gap-4">
              {tile.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative aspect-square border transition-all ${
                    activeImage === i ? "border-ag-copper scale-95" : "border-ag-mist opacity-50 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt={`${tile.name} ${i}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-ag-copper font-mono mb-2 block">
                  {tile.material} • {tile.collection}
                </span>
                <h1 className="text-4xl md:text-6xl font-display text-ag-white tracking-tight">
                  {tile.name}
                </h1>
              </div>
              <div className="flex space-x-2">
                <button className="p-3 border border-ag-mist text-ag-white/40 hover:text-ag-white hover:border-ag-white transition-all rounded-full">
                  <Share2 className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => isWishlisted ? removeFromWishlist(tile.id) : addToWishlist(tile.id)}
                  className={`p-3 border transition-all rounded-full ${
                    isWishlisted ? "bg-ag-copper border-ag-copper text-ag-white" : "border-ag-mist text-ag-white/40 hover:text-ag-white hover:border-ag-white"
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`} />
                </button>
              </div>
            </div>

            <div className="text-xl md:text-2xl font-mono text-ag-white mb-8">
              ₹{tile.pricePerSqFt} <span className="text-xs md:text-sm text-ag-sand/50 font-sans uppercase tracking-widest ml-2">per sq ft</span>
            </div>

            <p className="text-ag-sand/70 leading-relaxed font-sans mb-12 max-w-lg">
              {tile.description}
            </p>

            {/* Area Calculator */}
            <AreaCalculator tile={tile} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <Button className="bg-ag-copper hover:bg-ag-copper/90 text-ag-white rounded-none py-6 md:py-8 uppercase tracking-widest text-[10px] md:text-xs h-auto leading-none">
                Request Sample
              </Button>
              <Button variant="outline" className="border-ag-white text-ag-white hover:bg-ag-white hover:text-ag-black rounded-none py-6 md:py-8 uppercase tracking-widest text-[10px] md:text-xs h-auto leading-none">
                Book Consultation
              </Button>
            </div>
          </div>
        </div>

        {/* Tabs: Specs & Care */}
        <div className="mb-32">
          <Tabs defaultValue="specs" className="w-full">
            <TabsList className="bg-transparent border-b border-ag-mist w-full justify-start rounded-none h-auto p-0 mb-12">
              <TabsTrigger value="specs" className="rounded-none border-b-2 border-transparent data-[state=active]:border-ag-copper data-[state=active]:bg-transparent text-ag-sand/50 data-[state=active]:text-ag-white uppercase tracking-[0.2em] text-[10px] px-8 py-4 h-full">
                Technical Specs
              </TabsTrigger>
              <TabsTrigger value="installation" className="rounded-none border-b-2 border-transparent data-[state=active]:border-ag-copper data-[state=active]:bg-transparent text-ag-sand/50 data-[state=active]:text-ag-white uppercase tracking-[0.2em] text-[10px] px-8 py-4 h-full">
                Installation
              </TabsTrigger>
              <TabsTrigger value="care" className="rounded-none border-b-2 border-transparent data-[state=active]:border-ag-copper data-[state=active]:bg-transparent text-ag-sand/50 data-[state=active]:text-ag-white uppercase tracking-[0.2em] text-[10px] px-8 py-4 h-full">
                Maintenance
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="specs" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 text-ag-copper">
                    <Ruler className="w-5 h-5" />
                    <span className="text-xs uppercase tracking-widest font-semibold">Dimensions</span>
                  </div>
                  <ul className="space-y-4 text-sm font-sans text-ag-sand/70">
                    <li className="flex justify-between border-b border-ag-mist/30 pb-2">
                      <span>Tile Size</span>
                      <span className="text-ag-white">{tile.size}</span>
                    </li>
                    <li className="flex justify-between border-b border-ag-mist/30 pb-2">
                      <span>Thickness</span>
                      <span className="text-ag-white">9 mm</span>
                    </li>
                    <li className="flex justify-between border-b border-ag-mist/30 pb-2">
                      <span>Coverage per Box</span>
                      <span className="text-ag-white">{tile.coveragePerBox} sq ft</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-3 text-ag-copper">
                    <Settings className="w-5 h-5" />
                    <span className="text-xs uppercase tracking-widest font-semibold">Material Properties</span>
                  </div>
                  <ul className="space-y-4 text-sm font-sans text-ag-sand/70">
                    <li className="flex justify-between border-b border-ag-mist/30 pb-2">
                      <span>Finish</span>
                      <span className="text-ag-white">{tile.finish}</span>
                    </li>
                    <li className="flex justify-between border-b border-ag-mist/30 pb-2">
                      <span>Water Absorption</span>
                      <span className="text-ag-white">&lt; 0.5% (E&lt;0.5)</span>
                    </li>
                    <li className="flex justify-between border-b border-ag-mist/30 pb-2">
                      <span>Edge Type</span>
                      <span className="text-ag-white">Rectified / Lasercut</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-3 text-ag-copper">
                    <ShieldCheck className="w-5 h-5" />
                    <span className="text-xs uppercase tracking-widest font-semibold">Certification</span>
                  </div>
                  <ul className="space-y-4 text-sm font-sans text-ag-sand/70">
                    <li className="flex justify-between border-b border-ag-mist/30 pb-2">
                      <span>Standard</span>
                      <span className="text-ag-white">ISO 13006 / EN 14411</span>
                    </li>
                    <li className="flex justify-between border-b border-ag-mist/30 pb-2">
                      <span>Sustainability</span>
                      <span className="text-ag-white">LEED / GreenGuard</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="installation" className="text-ag-sand/70 font-sans leading-relaxed max-w-3xl">
              <h3 className="text-ag-white mb-4">Professional Installation Recommended</h3>
              <p className="mb-4">For the best results with Gurukripa Tiles architectural surfaces, we recommend using M-100 grade adhesive and 1mm spacers for a seamless finish. Ensure the substrate is level and free of dust before application.</p>
              <Button variant="link" className="text-ag-copper p-0 h-auto uppercase tracking-widest text-[10px]">Download PDF Guide →</Button>
            </TabsContent>

            <TabsContent value="care" className="text-ag-sand/70 font-sans leading-relaxed max-w-3xl">
              <h3 className="text-ag-white mb-4">Maintaining Your Surface</h3>
              <p className="mb-4">Our tiles are designed for longevity. For daily cleaning, use a PH-neutral cleaner and a microfiber mop. Avoid abrasive pads or highly acidic chemicals that may dull the finish over decades.</p>
              <Button variant="link" className="text-ag-copper p-0 h-auto uppercase tracking-widest text-[10px]">Maintenance Schedule →</Button>
            </TabsContent>
          </Tabs>
        </div>

        {/* Customer Reviews */}
        <div className="mb-32">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-display text-ag-white">Client Feedback</h2>
            <div className="flex items-center space-x-2">
              <div className="flex text-ag-copper">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className={`w-4 h-4 ${i < Math.floor(tile.rating) ? "fill-current" : "opacity-30"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                ))}
              </div>
              <span className="text-ag-white font-mono text-lg">{tile.rating}</span>
              <span className="text-ag-sand/40 text-xs uppercase tracking-widest ml-2">({tile.reviews.length} Reviews)</span>
            </div>
          </div>

          {tile.reviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tile.reviews.map((review, i) => (
                <div key={i} className="p-8 border border-ag-mist/30 bg-ag-charcoal/30 flex flex-col space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-ag-white font-display text-xl">{review.name}</span>
                    <div className="flex text-ag-copper">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <svg key={j} className={`w-3 h-3 ${j < review.rating ? "fill-current" : "opacity-30"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-ag-sand/70 font-sans italic leading-relaxed">"{review.text}"</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 border border-ag-mist/20 text-center">
              <p className="text-ag-sand/40 font-sans italic">No client reviews yet for this selection.</p>
            </div>
          )}
        </div>

        {/* Recommended Tiles */}
        {complementaryTiles.length > 0 && (
          <div>
            <div className="flex items-baseline justify-between mb-12">
              <h2 className="text-4xl font-display text-ag-white">Works well with</h2>
              <Link href="/tiles" className="text-ag-copper text-[10px] uppercase tracking-widest hover:underline">View More Designs</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {complementaryTiles.map((t) => (
                <TileCard key={t.id} tile={t} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

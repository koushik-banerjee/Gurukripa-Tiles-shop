"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Zap, Users, Code } from "lucide-react";
import Image from "next/image";

export default function CareersPage() {
  const positions = [
    {
      title: "Material Designer",
      type: "Full-time",
      location: "Mumbai Studio",
      category: "Design",
    },
    {
      title: "Architectural Consultant",
      type: "Full-time",
      location: "London Hub",
      category: "Sales",
    },
    {
      title: "Logistics Coordinator",
      type: "Contract",
      location: "Remote",
      category: "Operations",
    },
    {
      title: "Supply Chain Manager",
      type: "Full-time",
      location: "Mumbai Studio",
      category: "Operations",
    },
  ];

  return (
    <div className="bg-ag-black min-h-screen pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="relative mb-32">
          <div className="max-w-3xl relative z-10">
            <span className="text-xs uppercase tracking-[0.3em] text-ag-copper font-mono mb-4 block">Careers</span>
            <h1 className="text-6xl md:text-9xl font-display text-ag-white tracking-tighter mb-12">
              Shape the <br /> Future of <br /> Surface.
            </h1>
            <p className="text-ag-sand/70 text-lg md:text-xl font-sans leading-relaxed max-w-xl">
              We are a collective of designers, geological enthusiasts, and supply chain visionaries 
              redefining the aesthetics of the built environment. Join us in our pursuit of silent luxury.
            </p>
          </div>
          
          {/* Decorative element */}
          <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-ag-copper/5 rounded-full blur-[100px] pointer-events-none" />
        </div>

        {/* Culture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center mb-40">
          <div className="space-y-12">
            <h2 className="text-4xl font-display text-ag-white">Our Ethos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: Globe, title: "Global Impact", desc: "Sourcing from the depths of the Earth for spaces around the world." },
                { icon: Zap, title: "Raw Innovation", desc: "Merging ancient materials with futuristic precision technology." },
                { icon: Users, title: "Elite Collective", desc: "Working alongside the world's most discerning architects." },
                { icon: Code, title: "Digital First", desc: "Streamlining the heavy world of stone through digital efficiency." },
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="w-10 h-10 border border-ag-mist flex items-center justify-center text-ag-copper">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-ag-white font-display text-lg tracking-tight">{item.title}</h3>
                  <p className="text-ag-sand/50 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square border border-ag-mist p-4">
            <div className="relative h-full w-full grayscale contrast-125 overflow-hidden">
              <Image 
                src="/images/tiles/brutalist-1.jpg" 
                alt="Studio atmosphere" 
                fill 
                className="object-cover"
              />
            </div>
            {/* Overlay line */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 border-l border-b border-ag-copper" />
          </div>
        </div>

        {/* Positions */}
        <div className="space-y-12">
          <div className="flex justify-between items-end border-b border-ag-mist pb-8">
            <h2 className="text-4xl font-display text-ag-white">Open Roles</h2>
            <span className="text-[10px] uppercase tracking-widest text-ag-sand/40 font-mono">{positions.length} Available Positions</span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {positions.map((pos, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 10 }}
                className="group flex flex-col md:flex-row md:items-center justify-between p-8 border border-ag-mist/30 hover:border-ag-copper transition-all bg-ag-charcoal/30 cursor-pointer"
              >
                <div className="space-y-2 mb-4 md:mb-0">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-ag-copper font-mono">{pos.category}</span>
                  <h3 className="text-2xl font-display text-ag-white group-hover:text-ag-copper transition-colors">{pos.title}</h3>
                </div>
                <div className="flex items-center space-x-12">
                  <div className="flex flex-col items-end">
                    <span className="text-sm text-ag-white">{pos.location}</span>
                    <span className="text-xs text-ag-sand/50">{pos.type}</span>
                  </div>
                  <ArrowRight className="w-6 h-6 text-ag-white/10 group-hover:text-ag-copper transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Spontaneous Application */}
        <div className="mt-40 bg-ag-charcoal p-12 md:p-24 border border-ag-mist relative overflow-hidden text-center space-y-8">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale" />
          <h2 className="text-4xl md:text-5xl font-display text-ag-white relative z-10">Don't see your fit?</h2>
          <p className="text-ag-sand/70 max-w-xl mx-auto relative z-10">
            We are always looking for exceptional talent in geology, logistics, and spatial design. 
            Send us your portfolio and tell us how you'll redefine luxury.
          </p>
          <div className="relative z-10">
            <Button className="bg-ag-white text-ag-black hover:bg-ag-copper hover:text-ag-white px-12 py-8 h-auto uppercase tracking-[0.2em] text-xs font-bold rounded-none">
              Spontaneous Application
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

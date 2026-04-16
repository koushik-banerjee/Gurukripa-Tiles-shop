"use client";

import { motion } from "framer-motion";
import { 
  BookOpen, 
  Wrench, 
  ShieldCheck, 
  HelpCircle, 
  Download,
  ArrowRight,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SupportPage() {
  const categories = [
    {
      icon: Wrench,
      title: "Installation",
      desc: "Substrate preparation, adhesive recommendations, and spacing guides.",
      links: ["Adhesive Guide", "Substrate Preparation", "Grout Selection"],
    },
    {
      icon: BookOpen,
      title: "Maintenance",
      desc: "Cleaning protocols for polished, matte, and textured surfaces.",
      links: ["Daily Care", "Deep Cleaning", "Stain Removal"],
    },
    {
      icon: Search,
      title: "Sampling",
      desc: "Order physical material samples for your project board.",
      links: ["Sampling Process", "Order Samples", "Collection Kits"],
    },
    {
      icon: HelpCircle,
      title: "General FAQ",
      desc: "Shipping times, sampling processes, and order tracking.",
      links: ["International Shipping", "Custom Designs", "Order Status"],
    },
  ];

  return (
    <div className="bg-ag-black min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-32 space-y-8">
          <span className="text-xs uppercase tracking-[0.3em] text-ag-copper font-mono block">Resources</span>
          <h1 className="text-6xl md:text-8xl font-display text-ag-white tracking-tighter">Support Hub</h1>
          <div className="max-w-xl mx-auto relative mt-12">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ag-sand/30" />
            <input 
              type="text" 
              placeholder="How can we help you today?" 
              className="w-full bg-ag-charcoal border border-ag-mist/30 py-5 pl-12 pr-6 text-ag-white font-sans outline-none focus:border-ag-copper transition-colors"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-40">
          {categories.map((cat, i) => (
            <div key={i} className="p-8 border border-ag-mist/30 bg-ag-charcoal/30 flex flex-col space-y-6">
              <div className="w-12 h-12 border border-ag-copper/30 flex items-center justify-center text-ag-copper">
                <cat.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-display text-ag-white mb-2">{cat.title}</h3>
                <p className="text-sm text-ag-sand/50 leading-relaxed font-sans">{cat.desc}</p>
              </div>
              <ul className="space-y-3 pt-4 border-t border-ag-mist/10">
                {cat.links.map((link, j) => (
                  <li key={j}>
                    <button className="flex items-center text-[10px] uppercase tracking-widest text-ag-white/60 hover:text-ag-copper transition-colors group">
                      <span>{link}</span>
                      <ArrowRight className="w-3 h-3 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Downloads Strip */}
        <div className="border-y border-ag-mist/30 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-display text-ag-white leading-tight">Technical Data Sheets</h2>
            <p className="text-sm text-ag-sand/50 font-sans">Full architectural specifications for every collection.</p>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "2025 General Catalogue",
              "Installation Master Guide",
              "Sustainability & LEED Report",
              "Surface Maintenance Matrix",
            ].map((doc, i) => (
              <button 
                key={i} 
                className="flex items-center justify-between p-6 bg-ag-charcoal/50 border border-ag-mist/20 hover:border-ag-copper transition-all"
              >
                <div className="flex items-center space-x-4">
                  <Download className="w-5 h-5 text-ag-copper" />
                  <span className="text-xs uppercase tracking-widest text-ag-white">{doc}</span>
                </div>
                <span className="text-[10px] text-ag-sand/30 font-mono">PDF / 4.2 MB</span>
              </button>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-32 flex flex-col md:flex-row items-center justify-between p-12 bg-ag-copper/5 border border-ag-copper/20 rounded-lg">
          <div className="mb-8 md:mb-0 space-y-2 text-center md:text-left">
            <h2 className="text-2xl font-display text-ag-white tracking-tight">Need technical consultation?</h2>
            <p className="text-ag-sand/60 text-sm">Our material experts are available for deep-dive technical sessions.</p>
          </div>
          <Button className="bg-ag-copper hover:bg-ag-copper/90 text-ag-white px-10 py-6 h-auto uppercase tracking-widest text-[10px] rounded-none">
            Schedule a session
          </Button>
        </div>
      </div>
    </div>
  );
}

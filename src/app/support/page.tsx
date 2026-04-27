"use client";

import { motion } from "framer-motion";
import { 
  FileText, 
  ShieldCheck, 
  Wrench, 
  HelpCircle, 
  ArrowRight,
  Download,
  MessageSquare,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";

const supportCategories = [
  {
    title: "Installation Guide",
    icon: Wrench,
    description: "Detailed protocols for sub-floor preparation, adhesive selection, and laser-calibrated joint alignment.",
    items: ["Surface Preparation", "Adhesive Standards", "Grout Selection", "Large Format Handling"]
  },
  {
    title: "Care & Maintenance",
    icon: ShieldCheck,
    description: "Preserving the raw integrity and mineral brilliance of your surfaces for decades of use.",
    items: ["Daily Cleaning", "Sealing Marble", "Stain Removal", "Texture Preservation"]
  },
  {
    title: "Technical Archive",
    icon: FileText,
    description: "Full specifications including MOHS hardness, water absorption rates, and fire safety ratings.",
    items: ["Spec Sheets", "MOHS Ratings", "ASTM Certificates", "Quality Assurance"]
  },
  {
    title: "Knowledge Base",
    icon: HelpCircle,
    description: "Answering the most common inquiries regarding lead times, logistics, and spatial planning.",
    items: ["Lead Times", "Shipping Logistics", "Custom Orders", "Sample Requests"]
  }
];

export default function SupportPage() {
  return (
    <div className="bg-ag-black min-h-screen pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="relative mb-20 md:mb-32">
          <div className="max-w-3xl relative z-10">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xs uppercase tracking-[0.3em] text-ag-copper font-mono mb-4 block"
            >
              Resources & Archive
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-9xl font-display text-ag-white tracking-tighter mb-12"
            >
              Technical <br /> <span className="italic text-ag-sand/50">Support.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-ag-sand/70 text-lg md:text-xl font-sans leading-relaxed max-w-xl"
            >
              Excellence in design requires precision in execution. Our technical archive 
              provides the blueprints for perfect installation and enduring preservation.
            </motion.p>
          </div>
          
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-ag-copper/5 rounded-full blur-[80px] pointer-events-none" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
          {supportCategories.map((category, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 md:p-12 border border-ag-mist/30 bg-ag-charcoal/30 flex flex-col hover:border-ag-copper/50 transition-all duration-500"
            >
              <div className="w-12 h-12 border border-ag-mist flex items-center justify-center text-ag-copper mb-8 group-hover:bg-ag-copper group-hover:text-ag-white transition-all duration-500">
                <category.icon className="w-6 h-6" />
              </div>
              
              <h2 className="text-3xl font-display text-ag-white mb-4 group-hover:text-ag-copper transition-colors">
                {category.title}
              </h2>
              <p className="text-ag-sand/60 text-sm leading-relaxed mb-10 flex-grow font-sans">
                {category.description}
              </p>
              
              <ul className="space-y-4 mb-10">
                {category.items.map((item, j) => (
                  <li key={j} className="flex items-center text-xs uppercase tracking-widest text-ag-white/40 group-hover:text-ag-white/70 transition-colors">
                    <div className="w-1 h-1 bg-ag-copper mr-4" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <button className="flex items-center text-[10px] uppercase tracking-[0.3em] text-ag-copper hover:text-ag-white transition-colors group/btn">
                Access Document archive <ArrowRight className="ml-4 w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* FAQ Preview / Quick Links */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center border-t border-ag-mist/30 pt-24">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-display text-ag-white mb-6">Concierge Support</h2>
            <p className="text-ag-sand/70 text-sm leading-relaxed mb-8">
              For complex projects or custom architectural requirements, our specialist team 
              is available for one-on-one consultation.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center space-x-4 text-ag-white/60">
                <Clock className="w-4 h-4 text-ag-copper" />
                <span className="text-xs uppercase tracking-widest">Response within 12 hours</span>
              </div>
              <div className="flex items-center space-x-4 text-ag-white/60">
                <MessageSquare className="w-4 h-4 text-ag-copper" />
                <span className="text-xs uppercase tracking-widest">Direct specialist access</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-ag-charcoal/50 p-8 border border-ag-mist/20">
              <h3 className="text-lg font-display text-ag-white mb-4">Request Samples</h3>
              <p className="text-xs text-ag-sand/50 mb-6 leading-relaxed">Experience our textures in your own space before finalizing your architectural vision.</p>
              <Button variant="outline" className="w-full border-ag-mist text-ag-white hover:bg-ag-copper hover:border-ag-copper uppercase tracking-widest text-[10px]">Order Sample Box</Button>
            </div>
            
            <div className="bg-ag-charcoal/50 p-8 border border-ag-mist/20">
              <h3 className="text-lg font-display text-ag-white mb-4">Logistics Tracking</h3>
              <p className="text-xs text-ag-sand/50 mb-6 leading-relaxed">Real-time monitoring of your high-value mineral surfaces from studio to site.</p>
              <Button variant="outline" className="w-full border-ag-mist text-ag-white hover:bg-ag-copper hover:border-ag-copper uppercase tracking-widest text-[10px]">Track Shipment</Button>
            </div>
          </div>
        </div>

        {/* Global Footer CTA overlap */}
        <div className="mt-40 text-center">
          <p className="text-ag-sand/40 text-[10px] uppercase tracking-[0.5em]">Still have questions?</p>
          <div className="mt-6">
            <a href="mailto:support@gurukripatiles.com" className="text-4xl md:text-6xl font-display text-ag-white hover:text-ag-copper transition-colors">
              support@gurukripatiles.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

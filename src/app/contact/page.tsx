"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe, Users, MessageSquare } from "lucide-react";

const emailAddress = "gurukrupahardware90@gmail.com";

export default function ContactPage() {
  return (
    <div className="bg-ag-black min-h-screen pt-32 md:pt-48 pb-16 md:pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left: Contact Info */}
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl sm:text-7xl md:text-9xl font-display text-ag-white mb-8 tracking-tighter">
                Reach <br /> Out.
              </h1>
              <p className="text-lg text-ag-sand/70 font-sans max-w-md">
                Our consultants are available for site visits, material planning, 
                and bespoke architectural solutions.
              </p>
            </motion.div>

            <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-xs uppercase tracking-[0.3em] text-ag-copper font-mono">Headquarters</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 text-ag-white/80 group">
                    <MapPin className="w-5 h-5 text-ag-copper shrink-0" />
                    <span className="font-sans text-lg group-hover:text-ag-white transition-colors">
                      Gurukripa Hardware and Building Material, <br />
                      Choraya Siwana Road, Mokalsar, Barmer District - 344043
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-ag-white/80 group">
                    <Phone className="w-5 h-5 text-ag-copper shrink-0" />
                    <span className="font-sans text-lg group-hover:text-ag-white transition-colors">+919024557490</span>
                  </div>
                  <div className="flex items-center space-x-4 text-ag-white/80 group">
                    <Mail className="w-5 h-5 text-ag-copper shrink-0" />
                    <span className="font-sans text-lg group-hover:text-ag-white transition-colors">{emailAddress}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xs uppercase tracking-[0.3em] text-ag-copper font-mono">Social</h3>
                <div className="flex space-x-6">
                  {[
                    { icon: Globe, label: "Website" },
                    { icon: Users, label: "Community" },
                    { icon: MessageSquare, label: "Support" },
                  ].map((social, i) => (
                    <a 
                      key={i} 
                      href="#" 
                      className="p-3 border border-ag-mist text-ag-white/40 hover:text-ag-white hover:border-ag-white transition-all rounded-full"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-ag-charcoal border border-ag-mist p-4 md:p-6 flex flex-col space-y-4 relative overflow-hidden min-h-105"
          >
            <div className="aspect-4/5 md:aspect-auto md:flex-1 w-full overflow-hidden border border-ag-mist bg-ag-black">
              <iframe
                title="Gurukripa Hardware and Building Material location"
                src="https://www.google.com/maps?q=Gurukripa%20Hardware%20and%20Building%20Material%2C%20Choraya%20Siwana%20Road%2C%20Mokalsar%2C%20Barmer%20District%20-%20344043&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-ag-sand/30 font-mono text-center">
              Visit us at our Mokalsar showroom
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

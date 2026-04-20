import Link from "next/link";
import { Globe, Users, MessageSquare, Send, MapPin, Phone, Mail } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Showrooms", href: "/contact#map" },
    { name: "Sustainability", href: "/about#sustainability" },
    { name: "Careers", href: "/careers" },
  ],
  support: [
    { name: "Installation Guide", href: "/support" },
    { name: "Care & Maintenance", href: "/support" },
    { name: "FAQ", href: "/support" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-ag-charcoal border-t border-ag-mist text-ag-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-display font-semibold tracking-tighter">GURUKRIPA TILES</h2>
            <p className="text-ag-sand/70 font-sans max-w-sm leading-relaxed">
              Curating architectural surfaces that redefine the intersection of raw materiality 
              and luxury craftsmanship. Based in Mokalsar, serving the region's most 
              discerning spaces.
            </p>
            <div className="flex space-x-4 pt-4">
              {[Globe, Users, Send, MessageSquare].map((Icon, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 border border-ag-mist flex items-center justify-center rounded-full hover:border-ag-copper hover:text-ag-copper transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-ag-sand font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-ag-white/60 hover:text-ag-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-ag-sand font-semibold mb-6">Support</h4>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-ag-white/60 hover:text-ag-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10 border-y border-ag-mist mb-10 text-sm">
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-ag-copper" />
            <span className="text-ag-white/70">Gurukripa Hardware and Building Material, Choraya Siwana Road, Mokalsar, Barmer District - 344043</span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-ag-copper" />
            <span className="text-ag-white/70">+919024557490</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-ag-copper" />
            <span className="text-ag-white/70">gurukrupahardware90@gmail.com</span>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-widest text-ag-white/40">
          <p>© 2025 GURUKRIPA TILES. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8">
            <Link href="#" className="hover:text-ag-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-ag-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-ag-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

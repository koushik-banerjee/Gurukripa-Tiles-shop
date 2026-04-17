"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "+919024557490";
  const message = "Hello, I'm interested in Gurukripa Tiles. I would like to schedule a consultation.";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 border-none shadow-2xl z-50 text-white flex items-center justify-center animate-bounce-subtle transition-transform hover:scale-110"
    >
      <MessageCircle className="w-8 h-8 fill-current" />
      <span className="sr-only">Contact on WhatsApp</span>
    </a>
  );
}

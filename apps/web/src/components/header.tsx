"use client";
import { useState } from "react";
import Link from "next/link";

import { useLanguage } from "./language-provider";
import { translations } from "@/lib/translations";
import { ContactModal } from "./contact-modal";

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const links = [
    { to: "#contact", label: t.navigation.contact, isModal: true },
    { to: "https://www.linkedin.com/in/marcelo-rodrigues-5988a1227/", label: t.navigation.linkedin, isModal: false },
    { to: "https://github.com/MarceloDChagas", label: t.navigation.github, isModal: false },
  ];

  const handleLinkClick = (link: any) => {
    if (link.isModal) {
      setIsContactModalOpen(true);
    }
  };

  return (
    <div>
      <div className="flex flex-row items-center justify-between px-2 py-1">
        {/* Avatar placeholder */}
        <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
          <img src="/frieren.webp" alt="icon" width={32} height={32} className="rounded-sm" />
        </div>
        
        <nav className="flex gap-4 text-sm">
          {links.map((link) => {
            if (link.isModal) {
              return (
                <button
                  key={link.to}
                  onClick={() => handleLinkClick(link)}
                  className="hover:underline font-pixelify text-gray-200 hover:text-white bg-transparent border-none cursor-pointer"
                >
                  {link.label}
                </button>
              );
            }
            return (
              <Link key={link.to} href={link.to} className="hover:underline font-pixelify text-gray-200 hover:text-white">
                {link.label}
              </Link>
            );
          })}
        </nav>
        
        <div className="flex items-center gap-2">
          {/* Language Toggle */}
          <div className="flex items-center bg-gray-800 rounded-full p-1">
            <button 
              className={`px-2 py-1 text-xs rounded-full font-pixelify transition-colors ${
                language === "en" 
                  ? "bg-white text-black" 
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
            <button 
              className={`px-2 py-1 text-xs rounded-full font-pixelify transition-colors ${
                language === "pt" 
                  ? "bg-white text-black" 
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setLanguage("pt")}
            >
              PT
            </button>
          </div>
        </div>
      </div>
      <hr className="border-gray-700" />
      
      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}

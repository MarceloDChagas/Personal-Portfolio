"use client";

import { useState } from "react";
import { useLanguage } from "./language-provider";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);

  const email = "mlcr1@discente.ifpe.edu.br";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-pixelify text-white">
            {language === "en" ? "Contact" : "Contato"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl font-bold"
          >
            ×
          </button>
        </div>
        
        <p className="text-gray-300 mb-4">
          {language === "en" 
            ? "Click the button below to copy my email address:" 
            : "Clique no botão abaixo para copiar meu endereço de email:"
          }
        </p>
        
        <div className="bg-gray-800 p-3 rounded border border-gray-600 mb-4">
          <code className="text-green-400 font-mono text-sm break-all">
            {email}
          </code>
        </div>
        
        <button
          onClick={copyToClipboard}
          className={`w-full py-2 px-4 rounded font-pixelify transition-colors ${
            copied 
              ? 'bg-green-600 text-white' 
              : 'bg-gray-700 text-white hover:bg-gray-600'
          }`}
        >
          {copied 
            ? (language === "en" ? "Copied!" : "Copiado!") 
            : (language === "en" ? "Copy Email" : "Copiar Email")
          }
        </button>
        
        <div className="mt-4 text-center">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-sm"
          >
            {language === "en" ? "Close" : "Fechar"}
          </button>
        </div>
      </div>
    </div>
  );
} 
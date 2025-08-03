"use client"

import { useState } from "react";
import Header from "@/components/header";
import { useLanguage } from "@/components/language-provider";
import { translations } from "@/lib/translations";
import { AtmosphericGradient, ComplementaryGradient } from "@/components/gradient-background";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];
  const [question, setQuestion] = useState("");

  const handleSend = () => {
    if (question.trim()) {
      // Aqui você pode implementar a lógica para processar a pergunta
      console.log("Pergunta enviada:", question);
      alert(language === "en" ? "Question sent!" : "Pergunta enviada!");
      setQuestion("");
    }
  };

  const handleClear = () => {
    setQuestion("");
  };

  return (
    <AtmosphericGradient className="container mx-auto max-w-3xl px-4 py-2 min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-8">
        <h1 className="text-4xl font-bold mb-4 font-pixelify text-white">{t.hero.title}</h1>
        <p className="text-lg mb-6 text-gray-200">
          {t.hero.subtitle}
        </p>
      </section>

      {/* Currently Section with complementary gradient */}
      <ComplementaryGradient className="py-6 rounded-lg mb-6">
        <section className="px-6">
          <h2 className="text-2xl font-semibold mb-4 font-pixelify text-white">{t.currently.title}</h2>
          <ul className="space-y-3 text-gray-200">
            <li className="flex items-start gap-3">
              <span className="text-gray-400">•</span>
              <span>
                {t.currently.studying} {t.currently.institution}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400">•</span>
              <span>
                {t.currently.internship} {t.currently.company}
              </span>
            </li>
          </ul>
        </section>
      </ComplementaryGradient>

      {/* Previously Section */}
      <section className="py-6">
        <h2 className="text-2xl font-semibold mb-4 font-pixelify text-white">{t.previously.title}</h2>
        <ul className="space-y-3 text-gray-200">
          <li className="flex items-start gap-3">
            <span className="text-gray-400">•</span>
            <span>
              {t.previously.selfDev}
            </span>
          </li>
        </ul>
      </section>

      {/* Projects Section with complementary gradient */}
      <ComplementaryGradient className="py-6 rounded-lg mb-6">
        <section className="px-6">
          <h2 className="text-2xl font-semibold mb-4 font-pixelify text-white">{t.projects.title}</h2>
          <ul className="space-y-3 text-gray-200">
            <li className="flex items-start gap-3">
              <span className="text-gray-400">•</span>
              <span>
                <span className="underline">{t.projects.merchantTools}</span> - {t.projects.merchantToolsDesc}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400">•</span>
              <span>
                <span className="underline">{t.projects.agroSystem}</span> - {t.projects.agroSystemDesc}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400">•</span>
              <span>
                <span className="underline">{t.projects.closer}</span> - {t.projects.closerDesc}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400">•</span>
              <span>
                <span className="underline">{t.projects.checklistMoura}</span> - {t.projects.checklistMouraDesc}
              </span>
            </li>
          </ul>
        </section>
      </ComplementaryGradient>

      {/* Interactive Section */}
      <section className="py-6">
        <h2 className="text-2xl font-semibold mb-4 font-pixelify text-white">{t.interactive.title}</h2>
        <div className="flex gap-2">
          <input 
            type="text" 
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder={t.interactive.placeholder}
            className="flex-1 px-3 py-2 border border-gray-600 rounded bg-gray-900 text-white placeholder-gray-400 font-pixelify"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSend();
              }
            }}
          />
          <button 
            onClick={handleSend}
            disabled={!question.trim()}
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed font-pixelify"
          >
            {t.interactive.send}
          </button>
          <button 
            onClick={handleClear}
            disabled={!question.trim()}
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed font-pixelify"
          >
            {t.interactive.clear}
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-6">
        <p className="mb-4 text-gray-200">
          {t.contact.intro}{" "}
          <span className="underline">{t.contact.email}</span>, {t.contact.connectText} <span className="underline">{t.contact.linkedin}</span>.
        </p>
      </section>

      {/* Navigation Footer */}
      <section className="py-6 flex justify-center gap-4">
        <button className="p-2 bg-gray-800 text-white rounded hover:bg-gray-700">
          &lt;
        </button>
        <button className="p-2 bg-gray-800 text-white rounded hover:bg-gray-700">
          ⚙️
        </button>
        <button className="p-2 bg-gray-700 text-white rounded hover:bg-gray-600">
          &gt;
        </button>
      </section>
    </AtmosphericGradient>
  );
}

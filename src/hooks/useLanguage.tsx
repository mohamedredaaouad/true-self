import React, { createContext, useContext, useEffect, useState } from "react";
import { translations, type Language } from "@/lib/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, replacements?: Record<string, string>) => string;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("ts_language") as Language;
      if (saved === "fr" || saved === "en" || saved === "ar") {
        return saved;
      }
    }
    return "fr"; // Default to French
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("ts_language", lang);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const dir = language === "ar" ? "rtl" : "ltr";
      document.documentElement.dir = dir;
      document.documentElement.lang = language;
    }
  }, [language]);

  const t = (key: string, replacements?: Record<string, string>): string => {
    const langDict = translations[language] || translations["fr"];
    let translation = langDict[key] || translations["fr"][key] || translations["en"][key] || key;

    if (replacements) {
      Object.entries(replacements).forEach(([k, v]) => {
        translation = translation.replace(`{${k}}`, v);
      });
    }

    return translation;
  };

  const dir = language === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

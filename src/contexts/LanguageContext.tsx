import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "kh";

interface LanguageContextType {
  currentLang: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    "nav.about": "About",
    "nav.services": "Services",
    "nav.blog": "Blog",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact",
    "cta.getInTouch": "Get in Touch",
  },
  kh: {
    "nav.about": "អំពីយើង",
    "nav.services": "សេវាកម្ម",
    "nav.blog": "ប្លុក",
    "nav.portfolio": "ស្នាដៃ",
    "nav.contact": "ទំនាក់ទំនង",
    "cta.getInTouch": "ទំនាក់ទំនងមកយើង",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const savedLang = localStorage.getItem("language");
    return (savedLang as Language) || "en";
  });

  useEffect(() => {
    localStorage.setItem("language", currentLang);
  }, [currentLang]);

  const setLanguage = (lang: Language) => {
    setCurrentLang(lang);
  };

  const t = (key: string): string => {
    return (
      translations[currentLang][key as keyof (typeof translations)["en"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ currentLang, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

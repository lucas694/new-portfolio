"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importar os arquivos de tradução
import enTranslation from "../../public/locales/en/translation.json";
import ptTranslation from "../../public/locales/pt/translation.json";

// Inicializa com idioma fixo para evitar mismatch na hidratação
i18n
  .use(initReactI18next)
  .init({
    lng: "pt", // idioma inicial consistente entre server e client
    fallbackLng: "pt",
    debug: process.env.NODE_ENV === "development",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { translation: enTranslation },
      pt: { translation: ptTranslation },
    },
  });

export default i18n;
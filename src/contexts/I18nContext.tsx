import { createContext, useContext, ReactNode } from "react";

export type Lang = "en" | "zh";

const translations = {
  en: {
    heroScroll: "↓ scroll to explore ↓",
    aboutTitle: "about_me",
    skillsTitle: "skills",
    expTitle: "experience",
    achievementsTitle: "achievements",
    educationTitle: "education",
    contactTitle: "contact",
    contactFooter: "Built with reliability in mind",
    viewResume: "View Cake Resume",
  },
  zh: {
    heroScroll: "↓ 向下捲動探索 ↓",
    aboutTitle: "關於我",
    skillsTitle: "技能",
    expTitle: "工作經歷",
    achievementsTitle: "競賽與分享",
    educationTitle: "學歷",
    contactTitle: "聯絡方式",
    contactFooter: "以可靠性與工程紀律打造",
    viewResume: "查看 Cake 履歷",
  },
};

type Translations = typeof translations.en;

interface I18nContextType {
  lang: Lang;
  t: Translations;
}

const I18nContext = createContext<I18nContextType>({
  lang: "en",
  t: translations.en,
});

export const useI18n = () => useContext(I18nContext);

export const I18nProvider = ({ children, lang }: { children: ReactNode; lang: Lang }) => {
  return (
    <I18nContext.Provider value={{ lang, t: translations[lang] }}>
      {children}
    </I18nContext.Provider>
  );
};

import { useEffect } from "react";
import { useI18n } from "@/contexts/I18nContext";
import { profileContent, profileLinks } from "@/data/profile";

const setMetaContent = (selector: string, content: string) => {
  const element = document.head.querySelector<HTMLMetaElement>(selector);
  element?.setAttribute("content", content);
};

const PageMeta = () => {
  const { lang } = useI18n();
  const profile = profileContent[lang];
  const title = `${profile.heroName} | ${profile.heroTitle}`;
  const description = profile.about[0];
  const url = lang === "en" ? `${window.location.origin}/en` : window.location.origin;

  useEffect(() => {
    document.documentElement.lang = lang === "en" ? "en" : "zh-TW";
    document.title = title;

    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[name="author"]', profile.heroName);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent('meta[property="og:url"]', url);
    setMetaContent('meta[property="og:image"]', profileLinks.avatar);
    setMetaContent('meta[name="twitter:title"]', title);
    setMetaContent('meta[name="twitter:description"]', description);
    setMetaContent('meta[name="twitter:image"]', profileLinks.avatar);
  }, [description, lang, profile.heroName, title, url]);

  return null;
};

export default PageMeta;

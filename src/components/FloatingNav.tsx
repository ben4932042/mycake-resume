import { useI18n } from "@/contexts/I18nContext";
import { motion } from "framer-motion";
import { profileLinks } from "@/data/profile";
import { Link } from "react-router-dom";

const FloatingNav = () => {
  const { lang, t } = useI18n();
  const langTarget = lang === "en" ? "/" : "/en";

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="fixed top-4 right-4 z-50 flex items-center gap-3"
    >
      {/* Language Toggle */}
      <Link
        to={langTarget}
        className="px-3 py-2 font-mono text-xs rounded-lg bg-card/80 backdrop-blur-sm text-primary hover:text-glow gradient-border border-glow transition-all duration-300"
      >
        <span className="text-ai-purple">[</span>
        {lang === "en" ? "中文" : "EN"}
        <span className="text-ai-purple">]</span>
      </Link>

      {/* Resume Link */}
      <a
        href={profileLinks.cake}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-2 font-mono text-xs rounded-lg bg-card/80 backdrop-blur-sm text-terminal-amber hover:text-glow-purple gradient-border border-glow-purple transition-all duration-300"
      >
        <span className="text-ai-purple">[</span>
        ↗ {t.viewResume}
        <span className="text-ai-purple">]</span>
      </a>
    </motion.nav>
  );
};

export default FloatingNav;

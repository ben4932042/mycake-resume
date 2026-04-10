import { motion } from "framer-motion";
import { useI18n } from "@/contexts/I18nContext";
import { profileContent } from "@/data/profile";

const AchievementsSection = () => {
  const { lang, t } = useI18n();
  const profile = profileContent[lang];

  return (
    <section className="py-24 px-4 relative" id="achievements">
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-2xl font-bold mb-10"
        >
          <span className="text-ai-purple mr-2">##</span>
          <span className="gradient-text">{t.achievementsTitle}</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profile.achievements.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="rounded-lg p-5 bg-card/50 backdrop-blur-sm gradient-border border-glow hover:border-glow-purple transition-all duration-300"
            >
              <p className="font-mono text-xs text-muted-foreground mb-2">{item.period}</p>
              <h3 className="font-mono text-base text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-ai-cyan text-glow-cyan">{item.subtitle}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

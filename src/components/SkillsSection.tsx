import { motion } from "framer-motion";
import { useI18n } from "@/contexts/I18nContext";
import { profileContent } from "@/data/profile";

const SkillsSection = () => {
  const { lang, t } = useI18n();
  const profile = profileContent[lang];

  return (
    <section className="py-24 px-4 relative" id="skills">
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-2xl font-bold mb-10"
        >
          <span className="text-ai-purple mr-2">##</span>
          <span className="gradient-text">{t.skillsTitle}</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profile.skills.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-lg p-5 bg-card/50 backdrop-blur-sm gradient-border border-glow group hover:border-glow-purple transition-all duration-500"
            >
              <h3 className="font-mono text-sm text-ai-purple text-glow-purple mb-3">{`// ${cat.title}`}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-mono rounded-full border border-primary/20 text-primary/90 bg-primary/5 hover:bg-primary/15 hover:border-primary/40 hover:text-glow transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

import { motion } from "framer-motion";
import { useI18n } from "@/contexts/I18nContext";
import { profileContent } from "@/data/profile";

const EducationSection = () => {
  const { lang, t } = useI18n();
  const profile = profileContent[lang];

  return (
    <section className="py-24 px-4 relative" id="education">
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-2xl font-bold mb-10"
        >
          <span className="text-ai-purple mr-2">##</span>
          <span className="gradient-text">{t.educationTitle}</span>
        </motion.h2>
        <div className="space-y-6">
          {profile.education.map((item, index) => (
            <motion.div
              key={`${item.school}-${item.program}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="rounded-lg p-5 bg-card/50 backdrop-blur-sm gradient-border border-glow"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h3 className="font-mono text-base text-foreground">{item.school}</h3>
                  <p className="text-sm text-ai-cyan text-glow-cyan">{item.program}</p>
                </div>
                <p className="font-mono text-xs text-muted-foreground">{item.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

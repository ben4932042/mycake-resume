import { motion } from "framer-motion";
import { useI18n } from "@/contexts/I18nContext";
import { profileContent } from "@/data/profile";

const AboutSection = () => {
  const { lang, t } = useI18n();
  const profile = profileContent[lang];

  return (
    <section className="py-24 px-4 relative" id="about">
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-2xl font-bold mb-2">
            <span className="text-ai-purple mr-2">##</span>
            <span className="gradient-text">{t.aboutTitle}</span>
          </h2>
          <div className="rounded-lg p-6 bg-card/50 backdrop-blur-sm mt-6 space-y-5 font-body text-foreground/90 leading-relaxed gradient-border border-glow">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="flex flex-wrap gap-2 pt-2">
              {profile.focus.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 text-xs font-mono rounded-full border border-ai-cyan/20 text-ai-cyan bg-ai-cyan/5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

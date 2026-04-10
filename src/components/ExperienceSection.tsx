import { motion } from "framer-motion";
import { useI18n } from "@/contexts/I18nContext";
import { profileContent } from "@/data/profile";

const ExperienceSection = () => {
  const { lang, t } = useI18n();
  const profile = profileContent[lang];

  return (
    <section className="py-24 px-4 relative" id="experience">
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-2xl font-bold mb-10"
        >
          <span className="text-ai-purple mr-2">##</span>
          <span className="gradient-text">{t.expTitle}</span>
        </motion.h2>
        <div className="relative">
          {/* Timeline line with gradient */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-ai-cyan via-ai-purple to-ai-blue opacity-30" />
          <div className="space-y-10">
            {profile.experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="pl-8 relative"
              >
                {/* Timeline dot with glow */}
                <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-ai-cyan bg-background shadow-[0_0_8px_hsl(185_80%_55%/0.4)]" />
                <div className="rounded-lg p-5 bg-card/50 backdrop-blur-sm gradient-border border-glow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="font-mono text-base font-semibold text-foreground">{exp.role}</h3>
                    <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="font-mono text-sm text-ai-cyan text-glow-cyan mb-3">{exp.company}</p>
                  <ul className="space-y-1.5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-foreground/80 font-body flex gap-2">
                        <span className="text-ai-purple shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

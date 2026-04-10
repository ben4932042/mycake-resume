import { motion } from "framer-motion";
import { useI18n } from "@/contexts/I18nContext";
import { profileContent, profileLinks } from "@/data/profile";

const links = [
  { label: "Cake", href: profileLinks.cake },
  { label: "LinkedIn", href: profileLinks.linkedin },
  { label: "Email", href: profileLinks.email },
];

const ContactSection = () => {
  const { lang, t } = useI18n();
  const profile = profileContent[lang];

  return (
    <section className="py-24 px-4 relative" id="contact">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-2xl font-bold mb-4">
            <span className="text-ai-purple mr-2">##</span>
            <span className="gradient-text">{t.contactTitle}</span>
          </h2>
          <p className="text-foreground/70 font-body mb-8">
            {profile.contactDescription}
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 font-mono text-sm rounded-lg text-primary hover:text-glow gradient-border border-glow hover:border-glow-purple transition-all duration-300"
              >
                <span className="text-ai-purple mr-1">[</span>
                {link.label}
                <span className="text-ai-purple ml-1">]</span>
              </a>
            ))}
          </div>
          <p className="mt-16 text-xs text-muted-foreground font-mono">
            © {new Date().getFullYear()} — {t.contactFooter}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

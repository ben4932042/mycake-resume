import { I18nProvider, type Lang } from "@/contexts/I18nContext";
import PageMeta from "@/components/PageMeta";
import NeuralBackground from "@/components/NeuralBackground";
import FloatingNav from "@/components/FloatingNav";
import TerminalHero from "@/components/TerminalHero";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import AchievementsSection from "@/components/AchievementsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";

const Index = ({ lang }: { lang: Lang }) => {
  return (
    <I18nProvider lang={lang}>
      <PageMeta />
      <main className="min-h-screen relative aurora-bg ai-grid">
        <NeuralBackground />
        <div className="data-stream fixed inset-0 pointer-events-none z-0" />
        <FloatingNav />
        <div key={lang} className="relative z-10">
          <TerminalHero />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <AchievementsSection />
          <EducationSection />
          <ContactSection />
        </div>
      </main>
    </I18nProvider>
  );
};

export default Index;

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/contexts/I18nContext";
import { profileContent } from "@/data/profile";

const TypingText = ({ text, delay, onDone }: { text: string; delay: number; onDone?: () => void }) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length < text.length) {
      const t = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), 35);
      return () => clearTimeout(t);
    } else {
      onDoneRef.current?.();
    }
  }, [started, displayed, text]);

  if (!started) return null;
  return (
    <span>
      {displayed}
      {displayed.length < text.length && <span className="animate-pulse text-ai-cyan">▊</span>}
    </span>
  );
};

const StatusIndicator = () => (
  <div className="flex items-center gap-2 text-xs font-mono text-ai-cyan/60">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ai-cyan opacity-75" />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-ai-cyan" />
    </span>
    <span>AI_CORE: ONLINE</span>
  </div>
);

const TerminalHero = () => {
  const { lang, t } = useI18n();
  const [showStatus, setShowStatus] = useState(false);
  const profile = profileContent[lang];

  const lines = [
    { prompt: "~$", text: "whoami", delay: 0 },
    { prompt: "", text: profile.heroName, delay: 900, isOutput: true },
    { prompt: "~$", text: "cat role.txt", delay: 1700 },
    { prompt: "", text: profile.heroTitle, delay: 2500, isOutput: true },
    { prompt: "~$", text: "cat motto.txt", delay: 3400 },
    { prompt: "", text: profile.heroMotto, delay: 3950, isOutput: true },
  ];

  const handleLastDone = useCallback(() => setShowStatus(true), []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="scanline absolute inset-0 pointer-events-none z-10" />
      
      {/* Orbiting rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full border border-ai-cyan/5 pulse-ring" />
        <div className="absolute w-[700px] h-[700px] rounded-full border border-ai-purple/5 pulse-ring" style={{ animationDelay: "1s" }} />
        <div className="absolute w-[900px] h-[900px] rounded-full border border-ai-blue/5 pulse-ring" style={{ animationDelay: "2s" }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl relative z-10"
      >
        <div className="rounded-lg overflow-hidden gradient-border border-glow">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/60 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-ai-pink/80" />
              <div className="w-3 h-3 rounded-full bg-terminal-amber/80" />
              <div className="w-3 h-3 rounded-full bg-ai-green/80" />
              <span className="ml-2 text-xs font-mono text-muted-foreground">yc-liu@portfolio — bash</span>
            </div>
            {showStatus && <StatusIndicator />}
          </div>
          <div className="p-6 font-mono text-sm space-y-2 bg-card/80 backdrop-blur-sm">
            {lines.map((line, i) => (
              <div key={`${i}-${line.text}`} className={line.isOutput ? "text-foreground pl-0" : ""}>
                {line.prompt && (
                  <span className="text-ai-purple mr-2">{line.prompt}</span>
                )}
                <span className={line.isOutput ? "text-primary text-glow" : "text-foreground"}>
                  <TypingText
                    text={line.text}
                    delay={line.delay}
                    onDone={i === lines.length - 1 ? handleLastDone : undefined}
                  />
                </span>
              </div>
            ))}
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5.2 }}
          className="text-center mt-8 text-muted-foreground text-sm font-mono animate-float"
        >
          {t.heroScroll}
        </motion.p>
      </motion.div>
    </section>
  );
};

export default TerminalHero;

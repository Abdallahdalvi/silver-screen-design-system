import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { solutions } from "@/content/site";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { btnPrimary } from "@/components/site/ui";
import { cn } from "@/lib/utils";

export function Solutions() {
  const [active, setActive] = useState(solutions[0]!.id);
  const current = solutions.find((s) => s.id === active) ?? solutions[0]!;

  return (
    <section id="solutions" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Our Services" title="AIoT solutions for" highlight="smarter infrastructure" />

        <div className="mt-14 grid gap-8 lg:grid-cols-[380px_1fr]">
          {/* Selector */}
          <div className="flex flex-col gap-3" role="tablist" aria-label="Solutions">
            {solutions.map((s) => (
              <Reveal key={s.id} delay={0.05}>
                <button
                  role="tab"
                  aria-selected={active === s.id}
                  onClick={() => setActive(s.id)}
                  className={cn(
                    "group flex w-full items-center gap-4 rounded-3xl border p-4 text-left transition-all",
                    active === s.id
                      ? "border-brand/40 bg-card shadow-lg shadow-brand/10"
                      : "border-border bg-card/50 hover:border-brand/20 hover:bg-card"
                  )}
                >
                  <span
                    className={cn(
                      "relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl font-display text-sm font-bold transition-colors",
                      active === s.id ? "text-white" : "bg-muted text-muted-foreground"
                    )}
                  >
                    {active === s.id ? (
                      <motion.span
                        layoutId="solutions-chip"
                        className="absolute inset-0 rounded-xl bg-gradient-brand"
                        transition={{ type: "spring", stiffness: 350, damping: 28 }}
                      />
                    ) : null}
                    <span className="relative">{s.index}</span>
                  </span>
                  <span className="font-display text-sm font-semibold leading-snug text-foreground sm:text-base">
                    {s.title}
                  </span>
                  <ArrowRight
                    className={cn(
                      "ml-auto h-4 w-4 shrink-0 transition-all",
                      active === s.id ? "text-brand opacity-100" : "opacity-0"
                    )}
                    aria-hidden
                  />
                </button>
              </Reveal>
            ))}
          </div>

          {/* Panel */}
          <Reveal delay={0.1}>
            <div className="relative h-full overflow-hidden rounded-4xl border border-border bg-card shadow-xl shadow-brand/5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 16, scale: 0.985 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.99 }}
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                  className="flex h-full flex-col"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-ink">
                    <motion.img
                      src={current.img}
                      alt={`${current.title} visualization`}
                      loading="lazy"
                      initial={{ scale: 1.08 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                    <p className="absolute bottom-4 left-6 font-display text-lg font-bold text-white sm:text-xl">
                      {current.title}
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{current.blurb}</p>
                    <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                      {current.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-foreground/80">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex-1" />
                    <Link to={current.to} className={`self-start ${btnPrimary}`}>
                      View Solution
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { process, trust } from "@/content/site";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { useReducedMotion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";

export function PlatformFlow() {
  const reduce = useReducedMotion();
  const journeyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: journeyRef,
    offset: ["start 0.85", "end 0.45"],
  });
  const draw = useSpring(scrollYProgress, { stiffness: 90, damping: 25, mass: 0.4 });

  return (
    <section className="relative overflow-hidden rounded-[2.5rem] bg-ink py-20 text-white sm:rounded-[4rem] sm:py-28">
      <div
        aria-hidden
        className="absolute -right-40 top-0 h-[420px] w-[420px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--color-brand), transparent)" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading dark eyebrow="How It Works" title="From the field to the cloud —" highlight="a continuous, secure data journey" />

        <div ref={journeyRef} className="relative mt-16">
          {/* Scroll-drawn connecting line (desktop) */}
          <svg
            aria-hidden
            className="absolute left-0 right-0 top-24 hidden h-2 w-full lg:block"
            viewBox="0 0 1000 8"
            preserveAspectRatio="none"
          >
            <line x1="120" y1="4" x2="880" y2="4" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
            {reduce ? (
              <line x1="120" y1="4" x2="880" y2="4" stroke="url(#flowGradient)" strokeWidth="2.5" className="flow-dash" />
            ) : (
              <line
                x1="120"
                y1="4"
                x2="880"
                y2="4"
                stroke="url(#flowGradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="1 1"
                pathLength={1}
                style={{ strokeDashoffset: 1 - draw.get() } as never}
              />
            )}
            <defs>
              <linearGradient id="flowGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--color-electric)" />
                <stop offset="50%" stopColor="var(--color-brand)" />
                <stop offset="100%" stopColor="var(--color-violet)" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid gap-8 lg:grid-cols-3">
            {process.stages.map((stage, i) => (
              <Reveal key={stage.title} delay={i * 0.15}>
                <article className="group relative flex h-full flex-col rounded-4xl border border-ink-border bg-ink-soft/50 p-6 backdrop-blur transition-all hover:-translate-y-1.5 hover:border-brand/30 hover:bg-ink-soft/80 hover:shadow-2xl hover:shadow-brand/10">
                  <div className="relative mx-auto mb-6 w-full max-w-xs overflow-hidden rounded-3xl">
                    <img
                      src={stage.img}
                      alt=""
                      aria-hidden
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                    <span className="absolute left-4 top-4 flex items-center">
                      {reduce ? null : (
                        <span
                          aria-hidden
                          className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric opacity-40"
                        />
                      )}
                      <span className="relative rounded-full bg-gradient-brand px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                        {stage.step}
                      </span>
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold">{stage.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">{stage.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* NVIDIA trust strip */}
        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-col items-center gap-6 rounded-4xl border border-ink-border bg-ink-soft/40 px-6 py-8 text-center backdrop-blur transition-colors hover:border-brand/30 sm:flex-row sm:text-left">
            <img src={trust.img} alt="NVIDIA Inception Program" loading="lazy" className="h-14 w-auto" />
            <div>
              <h3 className="font-display text-lg font-bold">{trust.title}</h3>
              <p className="mt-1 max-w-3xl text-sm text-white/55">{trust.text}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

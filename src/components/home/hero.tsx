import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { hero, metrics } from "@/content/site";
import { Aurora, Float, Magnetic, WordReveal } from "@/components/site/fx";
import { btnGhostDark, btnPrimary } from "@/components/site/ui";

export function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 700], [0, 90]);
  const fade = useTransform(scrollY, [0, 500], [1, 0.25]);

  return (
    <section className="relative min-h-[100svh] overflow-hidden rounded-b-[2.5rem] bg-ink text-white sm:rounded-b-[4rem]">
      {/* Cinematic backdrop */}
      <motion.div style={reduce ? {} : { y: imgY }} className="absolute inset-0" aria-hidden>
        <img
          src={hero.image}
          alt=""
          className="h-full w-full object-cover opacity-60"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/30" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-ink to-transparent" />
      </motion.div>

      {/* Flash layer: aurora glows, blueprint grid, scanning light */}
      <Aurora className="opacity-80" />
      <div aria-hidden className="absolute inset-0 bg-grid-dark opacity-50" />
      {reduce ? null : <div aria-hidden className="scanline" />}

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pb-24 pt-32 sm:px-6 sm:pb-28 sm:pt-40 lg:px-8">
        <div className="max-w-3xl">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-electric backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-electric" />
            </span>
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:mt-6 sm:text-6xl lg:text-7xl"
          >
            <WordReveal text={hero.headline} delay={0.15} />
            <br />
            <span className="text-shimmer">{hero.headlineGradient}</span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/65"
          >
            {hero.sub}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <Link to={hero.ctaPrimary.to} className={`${btnPrimary} relative`}>
                <span
                  aria-hidden
                  className="absolute inset-0 -z-10 animate-pulse rounded-full bg-gradient-brand opacity-60 blur-lg"
                />
                {hero.ctaPrimary.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
            </Magnetic>
            <Magnetic strength={0.2}>
              <a href={hero.ctaSecondary.href} className={btnGhostDark}>
                {hero.ctaSecondary.label}
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </div>

      {/* Floating live-metric chips (desktop) */}
      <div className="pointer-events-none absolute bottom-44 right-10 hidden w-60 flex-col gap-4 lg:flex xl:right-20">
        {metrics.map((m, i) => (
          <Float key={m.label} delay={i * 0.8} distance={12} duration={5.5 + i}>
            <div className="surface-glass rounded-2xl px-4 py-3 text-right shadow-lg shadow-black/30">
              <p className="font-display text-2xl font-bold text-gradient">{`${m.value}${m.suffix}`}</p>
              <p className="text-[11px] leading-snug text-white/60">{m.label}</p>
            </div>
          </Float>
        ))}
      </div>

      <motion.a
        href="#customers"
        aria-label="Scroll to see our customers"
        style={reduce ? {} : { opacity: fade }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 transition-colors hover:text-white"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" aria-hidden />
      </motion.a>
    </section>
  );
}

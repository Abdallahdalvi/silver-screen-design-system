import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { hero } from "@/content/site";
import { btnGhostDark, btnPrimary } from "@/components/site/ui";

export function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 700], [0, 90]);
  const fade = useTransform(scrollY, [0, 500], [1, 0.25]);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-ink text-white">
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

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pb-28 pt-40 sm:px-6 lg:px-8">
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
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {hero.headline}
            <br />
            <span className="text-gradient">{hero.headlineGradient}</span>
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
            <Link to={hero.ctaPrimary.to} className={btnPrimary}>
              {hero.ctaPrimary.label}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <a href={hero.ctaSecondary.href} className={btnGhostDark}>
              {hero.ctaSecondary.label}
            </a>
          </motion.div>
        </div>
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

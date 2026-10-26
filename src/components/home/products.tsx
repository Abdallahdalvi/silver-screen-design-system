import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { kleon, samasth, kleonDevices } from "@/content/site";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { btnPrimary, btnGhostDark } from "@/components/site/ui";

function ProductBlock({
  name,
  tagline,
  description,
  features,
  visual,
  cta,
  reverse,
}: {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  visual: React.ReactNode;
  cta: { to: string; label: string };
  reverse?: boolean;
}) {
  return (
    <div className={`grid items-center gap-12 lg:grid-cols-2 ${reverse ? "lg:[direction:rtl]" : ""}`}>
      <Reveal className="lg:[direction:ltr]">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-electric">{tagline}</p>
        <h3 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">{name}</h3>
        <p className="mt-4 text-base leading-relaxed text-white/60">{description}</p>
        <ul className="mt-6 space-y-2.5">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-white/75">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-brand">
                <Check className="h-3 w-3 text-white" aria-hidden />
              </span>
              {f}
            </li>
          ))}
        </ul>
        <Link to={cta.to} className={`mt-8 ${btnPrimary}`}>
          {cta.label}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </Reveal>
      <Reveal delay={0.1} className="lg:[direction:ltr]">
        {visual}
      </Reveal>
    </div>
  );
}

export function Products() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
      <div
        aria-hidden
        className="absolute -left-40 top-1/4 h-[480px] w-[480px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--color-violet), transparent)" }}
      />
      <div className="relative mx-auto max-w-7xl space-y-24 px-4 sm:px-6 lg:px-8">
        <SectionHeading dark eyebrow="Our Product" title="One platform stack," highlight="end to end" sub="From the field device to the cloud dashboard — engineered and owned by Ubiqedge." />

        {/* KLEON */}
        <ProductBlock
          name={kleon.name}
          tagline={kleon.tagline}
          description={kleon.description}
          features={kleon.features}
          cta={{ to: "/kleon", label: "Explore KLEON" }}
          visual={
            <div className="relative mx-auto max-w-lg">
              <div
                aria-hidden
                className="absolute -inset-6 rounded-[2.5rem] opacity-30 blur-3xl"
                style={{ background: "radial-gradient(closest-side, var(--color-brand), transparent)" }}
              />
              <motion.div whileHover={reduce ? undefined : { rotate: -1.5, scale: 1.02 }} transition={{ type: "spring", stiffness: 200, damping: 18 }} className="relative rounded-3xl border border-ink-border bg-ink-soft/60 p-6 backdrop-blur">
                <img src={kleon.image} alt="KLEON IoT gateway" loading="lazy" className="w-full rounded-2xl object-contain" />
                <div className="mt-4 flex items-center justify-between border-t border-ink-border pt-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">KLEON — Data Everywhere</p>
                  <div className="flex gap-1.5" aria-hidden>
                    {kleonDevices.slice(0, 5).map((d) => (
                      <span key={d.name} className="h-1.5 w-6 rounded-full bg-white/15" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          }
        />

        {/* SAMASTH */}
        <ProductBlock
          reverse
          name={samasth.name}
          tagline={samasth.tagline}
          description={samasth.description}
          features={samasth.features.slice(0, 6)}
          cta={{ to: "/samasth", label: "Explore SAMASTH" }}
          visual={
            <div className="relative">
              <img src={samasth.image} alt="SAMASTH cloud dashboard" loading="lazy" className="w-full rounded-3xl border border-ink-border shadow-2xl shadow-black/40" />
              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-ink-border bg-ink-soft/95 px-4 py-3 shadow-xl backdrop-blur sm:block">
                <p className="font-display text-sm font-bold text-white">Live Dashboards</p>
                <p className="text-xs text-white/50">Alerts · Reports · Analytics</p>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}

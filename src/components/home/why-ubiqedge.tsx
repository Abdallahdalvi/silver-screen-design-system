import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { why } from "@/content/site";
import { assets } from "@/assets";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { btnGhostLight } from "@/components/site/ui";

export function WhyUbiqedge() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow={why.heading} title="Hardware & software," align="left" highlight="engineered together" />
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">{why.text}</p>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {why.points.map((p, i) => (
                <Reveal key={p.title} delay={0.1 + i * 0.06}>
                  <div className="h-full rounded-3xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/5">
                    <div className="h-1.5 w-8 rounded-full bg-gradient-brand" aria-hidden />
                    <h3 className="mt-3 font-display text-base font-semibold text-foreground">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2}>
              <Link to="/about-us" className={`mt-8 ${btnGhostLight}`}>
                More About Us
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Reveal>
          </div>

          {/* Layered visual */}
          <Reveal delay={0.15} className="relative">
            <div className="relative mx-auto max-w-lg">
              <div
                aria-hidden
                className="absolute -inset-8 rounded-[2.5rem] opacity-30 blur-3xl"
                style={{
                  background:
                    "radial-gradient(closest-side, var(--color-brand), var(--color-violet) 65%, transparent)",
                }}
              />
              <img
                src={assets.kleonV3}
                alt="KLEON industrial IoT gateway"
                loading="lazy"
                className="relative w-full rounded-[2rem] border border-border bg-white object-contain p-6 shadow-2xl shadow-brand/10"
              />
              <img
                src={assets.samasth2}
                alt="SAMASTH cloud monitoring platform"
                loading="lazy"
                className="absolute -bottom-10 -right-4 w-44 rounded-2xl border border-border shadow-xl sm:-right-8 sm:w-56"
              />
              <div className="absolute -left-4 top-8 rounded-2xl border border-border bg-card/95 px-4 py-3 shadow-lg backdrop-blur sm:-left-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">KLEON</p>
                <p className="font-display text-sm font-bold text-foreground">Rugged Field Devices</p>
              </div>
              <div className="absolute -bottom-6 left-2 rounded-2xl border border-border bg-card/95 px-4 py-3 shadow-lg backdrop-blur sm:-left-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">SAMASTH</p>
                <p className="font-display text-sm font-bold text-foreground">Monitoring & Analytics</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

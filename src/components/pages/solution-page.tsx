import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { solutions, company } from "@/content/site";
import { PageHero } from "@/components/site/page-hero";
import { PageShell } from "@/components/site/page-shell";
import { Reveal } from "@/components/site/reveal";
import { btnPrimary } from "@/components/site/ui";

export function SolutionPage({ id }: { id: string }) {
  const s = solutions.find((x) => x.id === id)!;
  return (
    <PageShell>
      <PageHero eyebrow="Ubiqedge Solution" title={s.title} sub={s.blurb} image={s.img} />
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <img src={s.img} alt={`${s.title} visualization`} loading="lazy" className="w-full rounded-3xl border border-border shadow-xl" />
          </Reveal>
          <div>
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">What this solution delivers</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{s.blurb}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="mt-8 grid gap-3">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 text-sm text-foreground/85">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-brand">
                      <Check className="h-3 w-3 text-white" aria-hidden />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 rounded-2xl border border-brand/20 bg-brand/5 p-4 text-sm leading-relaxed text-foreground/80">
                Powered end to end by KLEON rugged field devices and the SAMASTH cloud platform.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link to="/contact-us" className={btnPrimary}>
                  Request a Demo
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <a href={company.site} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40">
                  Read more at ubiqedge.com ↗
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { about, metrics } from "@/content/site";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { Counter } from "@/components/site/counter";
import { btnPrimary } from "@/components/site/ui";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us | Ubiqedge" },
      { name: "description", content: "Ubiqedge Technology Private Limited — simplifying sustainability and data for all. Vision, mission, values and the team behind our AIoT platforms." },
      { property: "og:title", content: "About Us | Ubiqedge" },
      { property: "og:description", content: "Vision: Simplify Sustainability & Data For All. Mission: Simplify IoT & AI adoption for everyone." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Company"
        title="Simplifying IoT & AI adoption"
        highlight="for everyone"
        sub="professional & Friendly is our slogan. Meet Ubiqedge Technology Private Limited."
      />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { label: "Vision", text: about.vision },
              { label: "Mission", text: about.mission },
            ].map((v, i) => (
              <Reveal key={v.label} delay={i * 0.08}>
                <div className="h-full rounded-3xl bg-ink p-8 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-electric">{v.label}</p>
                  <p className="mt-3 font-display text-xl font-semibold leading-snug sm:text-2xl">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Core Values</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {about.values.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.06}>
                  <div className="h-full rounded-2xl border border-border bg-card p-6">
                    <div className="h-1.5 w-8 rounded-full bg-gradient-brand" aria-hidden />
                    <h3 className="mt-3 font-display text-base font-semibold text-foreground">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">What We Do</h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {about.whatWeDo.map((w, i) => (
                <Reveal key={w.name} delay={i * 0.08}>
                  <div className="h-full rounded-3xl border border-border bg-card p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{w.role}</p>
                    <h3 className="mt-2 font-display text-2xl font-bold text-foreground">{w.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Our Leaders</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {about.leaders.map((l, i) => (
                <Reveal key={l.name} delay={i * 0.06}>
                  <div className="overflow-hidden rounded-3xl border border-border bg-card text-center">
                    <img src={l.img} alt={l.name} loading="lazy" className="aspect-square w-full object-cover" />
                    <div className="p-5">
                      <h3 className="font-display text-base font-semibold text-foreground">{l.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{l.role}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.08}>
                <div className="rounded-3xl border border-border bg-card p-8 text-center">
                  <p className="font-display text-4xl font-bold text-foreground sm:text-5xl">
                    <Counter to={m.value} suffix={m.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{m.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="rounded-3xl bg-ink p-10 text-center text-white">
              <h2 className="font-display text-2xl font-bold sm:text-3xl">Want to work with us?</h2>
              <Link to="/contact-us" className={`mt-6 ${btnPrimary}`}>
                Get in Touch
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}

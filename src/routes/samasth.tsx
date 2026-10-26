import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { samasth } from "@/content/site";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { btnPrimary } from "@/components/site/ui";

export const Route = createFileRoute("/samasth")({
  head: () => ({
    meta: [
      { title: "SAMASTH — Cloud Monitoring, Control & Analytics | Ubiqedge" },
      {
        name: "description",
        content:
          "SAMASTH is Ubiqedge's centralized cloud platform for monitoring, control, and analytics — live dashboards, alerts, reports, and actionable insights.",
      },
      { property: "og:title", content: "SAMASTH — Cloud Monitoring, Control & Analytics | Ubiqedge" },
      {
        property: "og:description",
        content: "Transform raw field data into live dashboards, alerts, reports, and actionable insights.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SamasthPage,
});

function SamasthPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Product"
        title="SAMASTH"
        highlight="Cloud Platform"
        sub={samasth.description}
        image={samasth.image}
      />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <img src={samasth.image} alt="SAMASTH cloud dashboard" loading="lazy" className="w-full rounded-3xl border border-border shadow-2xl shadow-brand/5" />
          </Reveal>

          <SectionHeading className="mt-20" eyebrow="Platform Features" title="Everything your team needs," highlight="in one platform" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {samasth.features.map((f, i) => (
              <Reveal key={f} delay={i * 0.04}>
                <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-brand">
                    <Check className="h-4 w-4 text-white" aria-hidden />
                  </span>
                  <p className="text-sm font-semibold text-foreground/90">{f}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <SectionHeading className="mt-20" eyebrow="How It Works" title="How SAMASTH" highlight="works" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {samasth.howItWorks.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.08}>
                <div className="relative h-full rounded-3xl border border-border bg-card p-6">
                  <span className="font-display text-4xl font-bold text-gradient">{step.step}</span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 rounded-3xl bg-ink p-10 text-center text-white">
              <h2 className="font-display text-2xl font-bold sm:text-3xl">See SAMASTH running on live data</h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-white/60">
                Book a walkthrough with our team and explore dashboards, alerts, and reporting for your use case.
              </p>
              <Link to="/contact-us" className={`mt-6 ${btnPrimary}`}>
                Book a Demo
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}

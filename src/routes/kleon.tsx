import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { kleon, kleonDevices } from "@/content/site";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { btnPrimary } from "@/components/site/ui";

export const Route = createFileRoute("/kleon")({
  head: () => ({
    meta: [
      { title: "KLEON — Industrial IoT Hardware Platform | Ubiqedge" },
      {
        name: "description",
        content:
          "KLEON is Ubiqedge's industrial IoT hardware platform — rugged gateways, dongles, sensors, and edge devices for real-time data capture in harsh environments.",
      },
      { property: "og:title", content: "KLEON — Industrial IoT Hardware Platform | Ubiqedge" },
      {
        property: "og:description",
        content: "Rugged gateways, dongles, sensors, and edge devices built for continuous real-time data capture from field assets.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: KleonPage,
});

function KleonPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Product"
        title="KLEON"
        highlight="IoT Hardware Platform"
        sub={kleon.description}
        image={kleon.image}
      />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Why KLEON" title="Built for harsh" highlight="operating environments" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {kleon.features.map((f, i) => (
              <Reveal key={f} delay={i * 0.06}>
                <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-brand">
                    <Check className="h-3 w-3 text-white" aria-hidden />
                  </span>
                  <p className="text-sm font-medium text-foreground/85">{f}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <SectionHeading className="mt-20" eyebrow="Device Lineup" title="The KLEON" highlight="device family" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {kleonDevices.map((d, i) => (
              <Reveal key={d.name} delay={i * 0.05}>
                <a
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/5"
                >
                  <div className="flex aspect-square items-center justify-center overflow-hidden bg-white p-6">
                    <img src={d.img} alt={d.name} loading="lazy" className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="border-t border-border p-5">
                    <h3 className="font-display text-lg font-semibold text-foreground">{d.name}</h3>
                    <p className="mt-1.5 flex-1 text-sm text-muted-foreground">{d.blurb}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                      View Details
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 rounded-3xl bg-ink p-10 text-center text-white">
              <h2 className="font-display text-2xl font-bold sm:text-3xl">Need a KLEON device for your deployment?</h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-white/60">
                Our team will help you pick the right gateway, sensors, and connectivity for your assets.
              </p>
              <Link to="/contact-us" className={`mt-6 ${btnPrimary}`}>
                Talk to Our Experts
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}

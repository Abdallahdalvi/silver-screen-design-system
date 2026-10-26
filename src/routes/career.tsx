import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Briefcase, Send } from "lucide-react";
import { career } from "@/content/site";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Careers | Ubiqedge" },
      { name: "description", content: "Join Ubiqedge — work on cutting-edge IoT technologies. Current openings in sales, finance, hardware design and production in Powai, Mumbai." },
      { property: "og:title", content: "Careers | Ubiqedge" },
      { property: "og:description", content: "Current openings in sales, finance, hardware design and production in Powai, Mumbai." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CareerPage,
});

function CareerPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Company"
        title="Why join"
        highlight="Ubiqedge?"
        sub="We foster a culture of creativity, collaboration, and excellence."
      />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {career.perks.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.04}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-display text-base font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <SectionHeading className="mt-20" eyebrow="Openings" title="Current" highlight="openings" sub="Explore our current career opportunities and find your next challenge." />
          <div className="mx-auto mt-12 max-w-4xl space-y-4">
            {career.openings.map((job, i) => (
              <Reveal key={job.title} delay={i * 0.05}>
                <article className="rounded-3xl border border-border bg-card p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground">{job.title}</h3>
                      <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <Briefcase className="h-4 w-4" aria-hidden /> {job.type}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-4 w-4" aria-hidden /> {job.location}
                        </span>
                        <span>{job.experience}</span>
                      </div>
                    </div>
                    <a
                      href={`mailto:careers@ubiqedge.com?subject=${encodeURIComponent(`Application: ${job.title}`)}`}
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                    >
                      Apply Now
                      <Send className="h-3.5 w-3.5" aria-hidden />
                    </a>
                  </div>
                  <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">{job.summary}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { legal, company } from "@/content/site";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";

export const Route = createFileRoute("/terms-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Ubiqedge" },
      { name: "description", content: "Terms & Conditions for the Ubiqedge website. Last updated June 2026." },
      { property: "og:title", content: "Terms & Conditions | Ubiqedge" },
      { property: "og:description", content: "Terms & Conditions for the Ubiqedge website. Last updated June 2026." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <LegalPage kind="terms" />,
});

export function LegalPage({ kind }: { kind: "terms" | "privacy" }) {
  const doc = kind === "terms" ? legal.terms : legal.privacy;
  return (
    <PageShell>
      <PageHero eyebrow="Legal" title={kind === "terms" ? "Terms &" : "Privacy"} highlight={kind === "terms" ? "Conditions" : "Policy"} sub={`Last updated: ${doc.updated}`} />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          {"intro" in doc ? <Reveal><p className="text-sm leading-relaxed text-muted-foreground">{(doc as { intro: string }).intro}</p></Reveal> : null}
          <div className="mt-10 space-y-8">
            {doc.sections.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.03}>
                <article>
                  <h2 className="font-display text-xl font-semibold text-foreground">{s.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <footer className="mt-12 rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">{company.legalName}</p>
              <p className="mt-2">{company.address}</p>
              <p className="mt-1">
                Email: {company.support.email} · Phone: {company.support.phone}
              </p>
            </footer>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}

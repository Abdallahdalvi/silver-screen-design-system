import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, FileText } from "lucide-react";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { btnPrimary } from "@/components/site/ui";

export const Route = createFileRoute("/whitepaper")({
  head: () => ({
    meta: [
      { title: "Whitepaper | Ubiqedge" },
      { name: "description", content: "Deep-dive whitepapers on industrial IoT, smart water, solar monitoring and air quality from the Ubiqedge team." },
      { property: "og:title", content: "Whitepaper | Ubiqedge" },
      { property: "og:description", content: "Deep-dive whitepapers on industrial IoT, smart water, solar monitoring and air quality." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhitepaperPage,
});

function WhitepaperPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Resources"
        title="Ubiqedge"
        highlight="Whitepapers"
        sub="Deep-dive research on industrial IoT, smart water networks, solar performance and environmental monitoring."
      />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-10">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand">
                <FileText className="h-6 w-6 text-white" aria-hidden />
              </span>
              <h2 className="mt-6 font-display text-2xl font-bold text-foreground">Request the whitepaper library</h2>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                Our whitepapers cover CGWA compliance reporting, solar performance monitoring, water conservation and
                air quality analytics. Get in touch and we'll share the documents relevant to your domain.
              </p>
              <Link to="/contact-us" className={`mt-8 ${btnPrimary}`}>
                Request Whitepapers
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}

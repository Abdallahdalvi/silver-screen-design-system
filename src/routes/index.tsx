import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";
import { Hero } from "@/components/home/hero";
import { CustomerMarquee } from "@/components/home/logo-marquee";
import { Metrics } from "@/components/home/metrics";
import { WhyUbiqedge } from "@/components/home/why-ubiqedge";
import { Products } from "@/components/home/products";
import { Solutions } from "@/components/home/solutions";
import { PlatformFlow } from "@/components/home/platform-flow";
import { BlogSection } from "@/components/home/blog-section";
import { FinalCta } from "@/components/home/final-cta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ubiqedge | Full-Stack AIoT Platform for Smart Infrastructure" },
      {
        name: "description",
        content:
          "Ubiqedge helps enterprises modernize and manage IT and edge infrastructure with AI- and IoT-driven solutions — KLEON rugged hardware and the SAMASTH cloud platform.",
      },
      { property: "og:title", content: "Ubiqedge | Full-Stack AIoT Platform for Smart Infrastructure" },
      {
        property: "og:description",
        content:
          "Smart Water, Solar PV, Concrete and Air Quality solutions — powered by KLEON IoT hardware and SAMASTH cloud monitoring, control and analytics.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell>
      <Hero />
      <CustomerMarquee />
      <Metrics />
      <WhyUbiqedge />
      <Products />
      <Solutions />
      <PlatformFlow />
      <BlogSection />
      <FinalCta />
    </PageShell>
  );
}

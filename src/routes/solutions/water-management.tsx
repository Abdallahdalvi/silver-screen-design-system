import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/pages/solution-page";

export const Route = createFileRoute("/solutions/water-management")({
  head: () => ({
    meta: [
      { title: "Smart Water Management | Ubiqedge" },
      { name: "description", content: "Optimize water networks end to end — flow, pressure, level and quality monitoring with leak detection and conservation across the distribution chain." },
      { property: "og:title", content: "Smart Water Management | Ubiqedge" },
      { property: "og:description", content: "Flow & pressure monitoring, leak detection, automated water audits, and real-time dashboards powered by KLEON + SAMASTH." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <SolutionPage id="water" />,
});

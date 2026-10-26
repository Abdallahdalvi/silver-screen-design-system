import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/pages/solution-page";

export const Route = createFileRoute("/solutions/concrete-management")({
  head: () => ({
    meta: [
      { title: "Smart Concrete Management | Ubiqedge" },
      { name: "description", content: "Bring transparency to concrete operations — from batching to delivery and placement — with continuous monitoring of mixers, schedules and quality." },
      { property: "og:title", content: "Smart Concrete Management | Ubiqedge" },
      { property: "og:description", content: "Mixer & transit tracking, batch quality visibility, utilization analytics and operational alerts powered by KLEON + SAMASTH." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <SolutionPage id="concrete" />,
});

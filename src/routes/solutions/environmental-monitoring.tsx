import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/pages/solution-page";

export const Route = createFileRoute("/solutions/environmental-monitoring")({
  head: () => ({
    meta: [
      { title: "Air Quality Monitoring | Ubiqedge" },
      { name: "description", content: "Real-time ambient air quality data with plug-and-play KLEON Air devices, turning environmental readings into actionable insights and compliance reports." },
      { property: "og:title", content: "Air Quality Monitoring | Ubiqedge" },
      { property: "og:description", content: "Real-time air quality data, multi-site environmental dashboards, automated compliance reports, and threshold alerts." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <SolutionPage id="air" />,
});

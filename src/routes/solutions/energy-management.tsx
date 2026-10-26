import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/pages/solution-page";

export const Route = createFileRoute("/solutions/energy-management")({
  head: () => ({
    meta: [
      { title: "Solar PV Remote Monitoring & Control | Ubiqedge" },
      { name: "description", content: "Monitor and control solar PV plants remotely with KLEON's MNRE-compliant communication gateways and live performance analytics on SAMASTH." },
      { property: "og:title", content: "Solar PV Remote Monitoring & Control | Ubiqedge" },
      { property: "og:description", content: "Plant-level performance monitoring, remote inverter control, and performance ratio tracking powered by KLEON + SAMASTH." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <SolutionPage id="solar" />,
});

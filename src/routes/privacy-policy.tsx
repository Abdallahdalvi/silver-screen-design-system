import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "./terms-conditions";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Ubiqedge" },
      { name: "description", content: "Privacy Policy of Ubiqedge Technology Private Limited. Last updated June 2026." },
      { property: "og:title", content: "Privacy Policy | Ubiqedge" },
      { property: "og:description", content: "Privacy Policy of Ubiqedge Technology Private Limited. Last updated June 2026." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <LegalPage kind="privacy" />,
});

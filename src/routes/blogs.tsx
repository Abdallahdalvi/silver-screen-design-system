import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { blogs } from "@/content/site";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Blog & Insights | Ubiqedge" },
      { name: "description", content: "News, insights and articles from the Ubiqedge team on IoT, water, solar, air quality and industrial AIoT." },
      { property: "og:title", content: "Blog & Insights | Ubiqedge" },
      { property: "og:description", content: "News, insights and articles on IoT, water, solar, air quality and industrial AIoT." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogsPage,
});

function BlogsPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Resources" title="Blog &" highlight="insights" sub="Ideas, updates and field learnings from the Ubiqedge team." />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((post, i) => (
              <Reveal key={post.url} delay={(i % 3) * 0.06}>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/5"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <img src={post.img} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <span className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="flex-1 font-display text-lg font-semibold leading-snug text-foreground group-hover:text-brand">{post.title}</h2>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                      Read Article
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

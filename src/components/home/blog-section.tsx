import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { blogs } from "@/content/site";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { btnGhostLight } from "@/components/site/ui";

export function BlogSection() {
  const featured = blogs.slice(0, 3);
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading align="left" eyebrow="Insights" title="News & articles from" highlight="the Ubiqedge team" />
          <Reveal delay={0.1}>
            <Link to="/blogs" className={btnGhostLight}>
              View All Articles
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((post, i) => (
            <Reveal key={post.url} delay={i * 0.08}>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-4xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/5"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={post.img}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="flex-1 font-display text-lg font-semibold leading-snug text-foreground group-hover:text-brand">
                    {post.title}
                  </h3>
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
  );
}

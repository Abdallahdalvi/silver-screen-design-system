import { metrics } from "@/content/site";
import { Counter } from "@/components/site/counter";
import { Reveal } from "@/components/site/reveal";
import { Spotlight } from "@/components/site/fx";

export function Metrics() {
  return (
    <section className="relative bg-background py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        {metrics.map((m, i) => (
          <Reveal key={m.label} delay={i * 0.1}>
            <Spotlight className="h-full overflow-hidden rounded-4xl border border-border bg-card p-8 text-center transition-all hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-2xl hover:shadow-brand/15">
              <div
                aria-hidden
                className="absolute inset-x-10 top-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, var(--color-electric), transparent)" }}
              />
              <p className="font-display text-5xl font-bold tracking-tight text-gradient sm:text-6xl">
                <Counter to={m.value} suffix={m.suffix} />
              </p>
              <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">{m.label}</p>
            </Spotlight>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

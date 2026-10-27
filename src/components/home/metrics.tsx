import { metrics } from "@/content/site";
import { Counter } from "@/components/site/counter";
import { Reveal } from "@/components/site/reveal";

export function Metrics() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        {metrics.map((m, i) => (
          <Reveal key={m.label} delay={i * 0.1}>
            <div className="group relative overflow-hidden rounded-4xl border border-border bg-card p-8 text-center transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10">
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-1 opacity-0 transition-opacity group-hover:opacity-100"
                style={{ background: "linear-gradient(90deg, var(--color-electric), var(--color-violet))" }}
              />
              <p className="font-display text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
                <Counter to={m.value} suffix={m.suffix} />
              </p>
              <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">{m.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

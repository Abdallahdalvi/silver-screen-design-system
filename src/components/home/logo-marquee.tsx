import { customers, intro } from "@/content/site";
import { Reveal } from "@/components/site/reveal";

export function CustomerMarquee() {
  const doubled = [...customers.logos, ...customers.logos];
  return (
    <section id="customers" className="border-y border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">{intro.trustedBy}</p>
          <p className="mt-3 font-display text-xl font-semibold text-foreground sm:text-2xl">
            {customers.heading}
          </p>
        </Reveal>
      </div>
      <div className="relative mt-10 overflow-hidden" aria-label="Customer logos">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="marquee-track flex w-max items-center gap-14 px-8">
          {doubled.map((c, i) => (
            <img
              key={`${c.name}-${i}`}
              src={c.img}
              alt={c.name}
              loading="lazy"
              className="h-10 w-auto max-w-[130px] object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-12"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

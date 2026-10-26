import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  sub?: string;
  image?: string;
  className?: string;
}

/** Dark cinematic hero band used at the top of every secondary page. */
export function PageHero({ eyebrow, title, highlight, sub, image, className }: PageHeroProps) {
  return (
    <section
      className={cn("relative overflow-hidden bg-ink px-4 pb-20 pt-36 text-white sm:px-6 lg:px-8", className)}
    >
      {image ? (
        <>
          <img
            src={image}
            alt=""
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/85 to-ink" />
        </>
      ) : (
        <>
          <div
            aria-hidden
            className="absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, var(--color-brand), var(--color-violet) 60%, transparent)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-px opacity-60"
            style={{
              background: "linear-gradient(90deg, transparent, var(--color-electric), transparent)",
            }}
          />
        </>
      )}
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-electric">{eyebrow}</p>
        <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          {title} {highlight ? <span className="text-gradient">{highlight}</span> : null}
        </h1>
        {sub ? <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/65">{sub}</p> : null}
        <div className="mx-auto mt-6 h-px w-24 bg-gradient-brand" />
      </div>
      <Link
        to="/contact-us"
        className="absolute right-6 top-32 hidden rounded-full border border-white/15 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-white/10 lg:inline-flex"
      >
        Talk to Our Experts
      </Link>
    </section>
  );
}

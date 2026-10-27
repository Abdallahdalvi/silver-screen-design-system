import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { finalCta } from "@/content/site";
import { Reveal } from "@/components/site/reveal";

export function FinalCta() {
  return (
    <section className="bg-background px-4 pb-20 pt-6 sm:px-6 sm:pb-24">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-ink px-6 py-20 text-center sm:rounded-[3rem] sm:px-12 sm:py-24">
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
            style={{
              background: "radial-gradient(closest-side, var(--color-brand), var(--color-violet) 60%, transparent)",
            }}
          />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
              {finalCta.heading}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/60">
              Tell us about your infrastructure and we'll show you how KLEON and SAMASTH fit your operations.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                to={finalCta.cta.to}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-sm font-semibold text-white shadow-[0_16px_50px_-12px_var(--color-brand)] transition-transform hover:-translate-y-0.5"
              >
                {finalCta.cta.label}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

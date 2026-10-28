import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { finalCta } from "@/content/site";
import { Reveal } from "@/components/site/reveal";
import { Aurora, Float, Magnetic } from "@/components/site/fx";

const particles = [
  { left: "12%", top: "24%", size: 6, color: "var(--color-electric)", delay: 0 },
  { left: "84%", top: "18%", size: 8, color: "var(--color-violet)", delay: 1.2 },
  { left: "22%", top: "72%", size: 5, color: "var(--color-purple)", delay: 2 },
  { left: "72%", top: "78%", size: 7, color: "var(--color-electric)", delay: 0.6 },
];

export function FinalCta() {
  return (
    <section className="bg-background px-4 pb-20 pt-6 sm:px-6 sm:pb-24">
      <Reveal>
        <div className="conic-ring relative mx-auto max-w-6xl rounded-[2.5rem] sm:rounded-[3rem]">
          <div className="relative overflow-hidden rounded-[inherit] bg-ink px-6 py-20 text-center sm:px-12 sm:py-24">
            <Aurora className="opacity-90" />
            {/* Floating light particles */}
            {particles.map((p, i) => (
              <Float
                key={i}
                className="pointer-events-none absolute"
                delay={p.delay}
                distance={16}
                duration={4 + i}
              >
                <span
                  aria-hidden
                  className="absolute -left-1/2 -top-1/2 block rounded-full opacity-70 blur-[2px]"
                  style={{
                    left: p.left,
                    top: p.top,
                    width: p.size,
                    height: p.size,
                    background: p.color,
                    boxShadow: `0 0 18px 4px ${p.color}`,
                  }}
                />
              </Float>
            ))}
            <div className="relative">
              <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
                {finalCta.heading}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-white/60">
                Tell us about your infrastructure and we'll show you how KLEON and SAMASTH fit your operations.
              </p>
              <div className="mt-8 flex justify-center">
                <Magnetic strength={0.35}>
                  <Link
                    to={finalCta.cta.to}
                    className="relative inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-sm font-semibold text-white shadow-[0_16px_50px_-12px_var(--color-brand)] transition-transform hover:-translate-y-0.5"
                  >
                    <span
                      aria-hidden
                      className="absolute inset-0 -z-10 animate-pulse rounded-full bg-gradient-brand opacity-60 blur-lg"
                    />
                    {finalCta.cta.label}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Magnetic>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

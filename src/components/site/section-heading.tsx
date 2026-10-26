import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  sub?: string;
  dark?: boolean;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ eyebrow, title, highlight, sub, dark, align = "center", className }: SectionHeadingProps) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.22em]",
            dark ? "text-electric" : "text-brand"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "mt-3 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]",
          dark ? "text-white" : "text-foreground"
        )}
      >
        {title} {highlight ? <span className="text-gradient">{highlight}</span> : null}
      </h2>
      {sub ? (
        <p className={cn("mt-4 text-base leading-relaxed", dark ? "text-white/60" : "text-muted-foreground")}>{sub}</p>
      ) : null}
    </Reveal>
  );
}

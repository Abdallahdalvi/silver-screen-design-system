import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { nav } from "@/content/site";
import { assets } from "@/assets";
import { Magnetic } from "@/components/site/fx";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  to: string;
  description?: string;
}

const itemGroups = nav.primary.filter((g) => "items" in g && Array.isArray(g.items)) as {
  label: string;
  items: NavItem[];
}[];
const simpleLinks = nav.primary.filter((g) => "to" in g) as { label: string; to: string }[];

function Dropdown({ group }: { group: { label: string; items: NavItem[] } }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white focus-visible:text-white focus-visible:outline-2 focus-visible:outline-primary"
      >
        {group.label}
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")} aria-hidden />
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 1 } : { opacity: 0, y: 8 }}
            transition={reduce ? { duration: 0 } : { duration: 0.18 }}
            className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3"
          >
            <div className="w-80 rounded-2xl border border-ink-border bg-ink-soft/95 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl">
              {group.items.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="group/item block rounded-xl px-4 py-3 transition-colors hover:bg-white/5"
                >
                  <span className="block text-sm font-semibold text-white transition-transform group-hover/item:translate-x-0.5">
                    {item.label}
                  </span>
                  {item.description ? (
                    <span className="mt-0.5 block text-xs text-white/50">{item.description}</span>
                  ) : null}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? { opacity: 1 } : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reduce ? { opacity: 1 } : { opacity: 0 }}
      className="fixed inset-0 z-50 bg-ink/98 backdrop-blur-xl lg:hidden"
    >
      <div className="flex items-center justify-between px-4 py-4 sm:px-6">
        <Link to="/" onClick={onClose} className="flex items-center gap-2">
          <img src={assets.logo} alt="Ubiqedge" className="h-9 w-auto" />
        </Link>
        <button onClick={onClose} aria-label="Close menu" className="rounded-full p-2 text-white hover:bg-white/10">
          <X className="h-6 w-6" />
        </button>
      </div>
      <nav className="mt-4 space-y-1 overflow-y-auto px-4 pb-24" aria-label="Mobile navigation">
        {itemGroups.map((group) => (
          <div key={group.label} className="rounded-xl">
            <button
              onClick={() => setExpanded((e) => (e === group.label ? null : group.label))}
              aria-expanded={expanded === group.label}
              className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left font-display text-lg font-semibold text-white"
            >
              {group.label}
              <ChevronDown className={cn("h-4 w-4 transition-transform", expanded === group.label && "rotate-180")} />
            </button>
            <AnimatePresence initial={false}>
              {expanded === group.label ? (
                <motion.div
                  initial={reduce ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: reduce ? 0 : 0.25 }}
                  className="overflow-hidden"
                >
                  {group.items.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={onClose}
                      className="block border-l border-ink-border py-2.5 pl-6 text-sm text-white/70"
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        ))}
        {simpleLinks.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            onClick={onClose}
            className="block rounded-xl px-4 py-3 font-display text-lg font-semibold text-white"
          >
            {item.label}
          </Link>
        ))}
        <Link
          to={nav.cta.to}
          onClick={onClose}
          className="mt-4 block rounded-full bg-gradient-brand px-6 py-3 text-center text-sm font-semibold text-white"
        >
          {nav.cta.label}
        </Link>
      </nav>
    </motion.div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-5 sm:pt-4">
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-full border px-4 py-2.5 transition-all duration-300 sm:px-6",
            scrolled || menuOpen
              ? "border-ink-border bg-ink/80 shadow-2xl shadow-black/30 backdrop-blur-xl"
              : "border-transparent bg-transparent"
          )}
        >
          <Link to="/" className="flex items-center" aria-label="Ubiqedge home">
            <img src={assets.logo} alt="Ubiqedge" className="h-9 w-auto sm:h-10" />
          </Link>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {itemGroups.map((group) => (
              <Dropdown key={group.label} group={group} />
            ))}
            {simpleLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-white",
                  pathname === item.to ? "text-white" : "text-white/80"
                )}
              >
                {pathname === item.to && !reduce ? (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full border border-white/10 bg-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : null}
                <span className="relative">{item.label}</span>
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Magnetic strength={0.22} className="hidden md:inline-flex">
              <Link
                to={nav.cta.to}
                className="relative rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_var(--color-brand)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-10px_var(--color-violet)]"
              >
                {nav.cta.label}
              </Link>
            </Magnetic>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="rounded-full p-2 text-white hover:bg-white/10 lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>{menuOpen ? <MobileMenu onClose={() => setMenuOpen(false)} /> : null}</AnimatePresence>
    </>
  );
}

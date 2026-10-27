import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { company, footer } from "@/content/site";
import { assets } from "@/assets";

export function Footer() {
  return (
    <footer className="relative overflow-hidden rounded-t-[2.5rem] bg-ink text-white sm:rounded-t-[4rem]">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--color-violet), transparent)" }}
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link to="/" className="inline-flex items-center" aria-label="Ubiqedge home">
              <img src={assets.logo} alt="Ubiqedge" className="h-10 w-auto" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">{footer.tagline}</p>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-electric" aria-hidden />
                <span>
                  {company.legalName}
                  <br />
                  {company.address}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-electric" aria-hidden />
                <span>
                  Sales:{" "}
                  <a href={`tel:${company.sales.phone.replace(/[^+\d]/g, "")}`} className="hover:text-white">
                    {company.sales.phone}
                  </a>
                  {" · "}
                  Support:{" "}
                  <a href={`tel:${company.support.phone.replace(/[^+\d]/g, "")}`} className="hover:text-white">
                    {company.support.phone}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-electric" aria-hidden />
                <span>
                  <a href={`mailto:${company.sales.email}`} className="hover:text-white">
                    {company.sales.email}
                  </a>
                  {" · "}
                  <a href={`mailto:${company.support.email}`} className="hover:text-white">
                    {company.support.email}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-electric" aria-hidden />
                <span>{company.hours}</span>
              </li>
            </ul>
          </div>
          <nav className="grid grid-cols-2 gap-8 sm:grid-cols-4" aria-label="Footer navigation">
            {footer.columns.map((col) => (
              <div key={col.heading}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">{col.heading}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} className="text-sm text-white/65 transition-colors hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink-border pt-8 sm:flex-row">
          <p className="text-xs text-white/40">{footer.copyright}</p>
          <a
            href={company.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/40 transition-colors hover:text-white"
          >
            Find us on Google Maps ↗
          </a>
        </div>
      </div>
    </footer>
  );
}

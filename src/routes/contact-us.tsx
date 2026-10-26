import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react";
import { company } from "@/content/site";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title: "Contact Us | Ubiqedge" },
      { name: "description", content: "Get in touch with Ubiqedge — sales and support in Powai, Mumbai. Book a demo of KLEON and SAMASTH for your infrastructure." },
      { property: "og:title", content: "Contact Us | Ubiqedge" },
      { property: "og:description", content: "Get in touch with Ubiqedge sales and support in Powai, Mumbai." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
    );
    window.location.href = `mailto:${company.sales.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputClass =
    "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20";

  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Get in"
        highlight="touch"
        sub="Fill out the form below and we will get back to you shortly."
      />
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
          <div className="space-y-4">
            {[
              { icon: Phone, label: "Sales", value: company.sales.phone, href: `tel:${company.sales.phone.replace(/[^+\d]/g, "")}` },
              { icon: Mail, label: "Sales Email", value: company.sales.email, href: `mailto:${company.sales.email}` },
              { icon: Phone, label: "Support", value: company.support.phone, href: `tel:${company.support.phone.replace(/[^+\d]/g, "")}` },
              { icon: Mail, label: "Support Email", value: company.support.email, href: `mailto:${company.support.email}` },
            ].map((c, i) => (
              <Reveal key={c.label} delay={i * 0.05}>
                <a href={c.href} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-brand">
                    <c.icon className="h-5 w-5 text-white" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">{c.label}</span>
                    <span className="block text-sm font-semibold text-foreground">{c.value}</span>
                  </span>
                </a>
              </Reveal>
            ))}
            <Reveal delay={0.2}>
              <div className="rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground">
                <p className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
                  <span>
                    {company.legalName}
                    <br />
                    {company.address}
                    <br />
                    <a href={company.mapsUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand hover:underline">
                      Open in Maps ↗
                    </a>
                  </span>
                </p>
                <p className="mt-4 flex items-center gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-brand" aria-hidden />
                  {company.hours}
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-6 sm:p-8" aria-label="Contact form">
              <h2 className="font-display text-xl font-bold text-foreground">Send us a message</h2>
              <p className="mt-1 text-sm text-muted-foreground">Fields marked * are required.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <input required placeholder="Name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
                <input required type="email" placeholder="Email *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
                <input placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={`${inputClass} sm:col-span-2`} />
                <textarea required rows={5} placeholder="Tell us about your project *" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} sm:col-span-2`} />
              </div>
              <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">
                <Send className="h-4 w-4" aria-hidden />
                Send Message
              </button>
              {sent ? (
                <p role="status" className="mt-4 text-sm font-medium text-brand">
                  Your email draft is ready — hit send in your mail app and we'll get back to you.
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}

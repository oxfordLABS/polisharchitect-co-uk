import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Gavel,
  Search,
  Landmark,
  DraftingCompass,
  Plus,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import heroImage from "@/assets/hero-architecture.jpg";
import { content, type Lang } from "@/content/site-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Polish Architect UK | ARB Registered Architect in Oxford" },
      {
        name: "description",
        content:
          "ARB registered Polish architect in Oxford serving all of the UK. Planning applications, building regulations, technical design and CDM compliance in Polish and English.",
      },
      { property: "og:title", content: "Polish Architect UK | ARB Registered Architect" },
      {
        property: "og:description",
        content:
          "Complete architectural design, planning approvals, technical compliance and site project management — explained in Polish and English.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const serviceIcons = [Gavel, Search, Landmark, DraftingCompass];
const stageNumbers = ["01", "02", "03", "04", "05", "06", "07"];

function Index() {
  const [open, setOpen] = useState<number | null>(null);
  const [lang, setLang] = useState<Lang>("en");
  const t = content[lang];

  useEffect(() => {
    const stored = window.localStorage.getItem("site-lang");
    if (stored === "pl" || stored === "en") setLang(stored);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("site-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    setLang((l) => (l === "en" ? "pl" : "en"));
    setOpen(null);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <div className="glass-card section-shell flex items-center justify-between gap-6 rounded-2xl py-4">
          <a href="#top" className="max-w-[16rem] text-lg font-semibold leading-tight">
            <span className="rounded bg-white px-1 text-red-500">Polish</span> <span className="rounded bg-red-500 px-1 text-white">Architect</span>&nbsp;<br />
            <button
              type="button"
              onClick={toggleLang}
              aria-label={lang === "en" ? "Switch to Polish" : "Przełącz na angielski"}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className={lang === "pl" ? "text-foreground" : undefined}>PL</span>
              <span className="text-muted-foreground">/</span>
              <span className={lang === "en" ? "text-foreground" : undefined}>UK</span>
            </button>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
          </a>
          <nav className="hidden items-center gap-7 lg:flex">
            {t.nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="label-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <button
              type="button"
              onClick={toggleLang}
              aria-label={lang === "en" ? "Switch to Polish" : "Przełącz na angielski"}
              className="label-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className={lang === "en" ? "text-foreground" : undefined}>EN</span>
              {" | "}
              <span className={lang === "pl" ? "text-foreground" : undefined}>PL</span>
            </button>
          </nav>
          <a
            href="#contact"
            className="label-xs rounded-full bg-primary px-5 py-3 text-center leading-tight text-primary-foreground transition-opacity hover:opacity-85"
          >
            {t.bookConsultation[0]}
            <br className="hidden md:block" /> {t.bookConsultation[1]}
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden pb-24 pt-44 md:pt-52">
          <img
            src={heroImage}
            alt={t.heroAlt}
            width={1920}
            height={1088}
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/50 via-background/85 to-background" />
          <div className="section-shell">
            <h1 className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              {t.heroTitle}
              <span className="block text-3xl text-muted-foreground md:text-5xl lg:text-6xl">
                {t.heroTagline[0]}
                <br />
                {t.heroTagline[1]}
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {t.heroBody}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="label-xs inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-primary-foreground transition-opacity hover:opacity-85"
              >
                {t.ctaStart} <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="label-xs glass-card glass-card-hover inline-flex items-center rounded-full px-8 py-4"
              >
                {t.ctaServices}
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-32 py-24">
          <div className="section-shell">
            <div className="glass-card rounded-3xl p-8 md:p-16">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                {t.aboutTitle}
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
                {t.aboutBody}
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-32 py-24">
          <div className="section-shell">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              {t.servicesTitle}
            </h2>
            <p className="label-xs mt-5 text-muted-foreground">{t.servicesSub}</p>
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {t.services.map((s, i) => {
                const Icon = serviceIcons[i] ?? Gavel;
                return (
                  <article key={s.title} className="glass-card glass-card-hover rounded-2xl p-8">
                    <Icon className="h-6 w-6 text-muted-foreground" />
                    <h3 className="mt-6 text-xl font-semibold md:text-2xl">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                    <ul className="mt-6 space-y-2">
                      {s.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <ArrowRight className="h-3.5 w-3.5" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="scroll-mt-32 py-24">
          <div className="section-shell">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              {t.processTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-base text-muted-foreground">{t.processSub}</p>
            <div className="mt-14 space-y-4">
              {t.stages.map((s, i) => (
                <div
                  key={s.title}
                  className="glass-card glass-card-hover flex flex-col gap-4 rounded-2xl p-6 md:flex-row md:items-center md:gap-12 md:p-8"
                >
                  <span className="text-4xl font-bold text-muted-foreground/40 md:w-24 md:text-5xl">
                    {stageNumbers[i]}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold md:text-xl">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-32 py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">{t.faqTitle}</h2>
            <p className="mt-5 text-base text-muted-foreground">{t.faqSub}</p>
            <div className="mt-12 space-y-3">
              {t.faqs.map((f, i) => (
                <div key={f.q} className="glass-card overflow-hidden rounded-xl">
                  <button
                    type="button"
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  >
                    <span className="text-sm font-medium md:text-base">{f.q}</span>
                    <Plus
                      className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${
                        open === i ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                  {open === i && (
                    <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                      {f.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-32 py-24">
          <div className="section-shell">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              {t.contactTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-base text-muted-foreground">{t.contactSub}</p>
            <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
              <div className="space-y-10">
                <div>
                  <h3 className="label-xs text-muted-foreground">{t.officeLabel}</h3>
                  <p className="mt-3 flex items-center gap-2 text-lg">
                    <MapPin className="h-4 w-4 text-muted-foreground" /> {t.officeCity}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{t.officeNote}</p>
                </div>
                <div>
                  <h3 className="label-xs text-muted-foreground">{t.contactLabel}</h3>
                  <p className="mt-3 flex items-center gap-2 text-lg">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a href="mailto:polskiarchitekt.UK@gmail.com" className="hover:text-primary transition-colors">
                      email
                    </a>
                  </p>
                  <p className="mt-1 flex items-center gap-2 text-lg">
                    <Phone className="h-4 w-4 text-muted-foreground" /> 0748 12 44 212
                  </p>
                </div>
              </div>

              <form
                className="glass-card space-y-5 rounded-2xl p-8"
                onSubmit={(e) => e.preventDefault()}
              >
                {[
                  { id: "name", label: t.fields.name, type: "text" },
                  { id: "email", label: t.fields.email, type: "email" },
                  { id: "phone", label: t.fields.phone, type: "tel" },
                  { id: "postcode", label: t.fields.postcode, type: "text" },
                ].map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="label-xs block text-muted-foreground">
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      type={f.type}
                      className="mt-2 w-full rounded-lg border border-border bg-input/40 px-4 py-3 text-sm outline-none transition-colors focus:border-ring"
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="type" className="label-xs block text-muted-foreground">
                    {t.fields.type}
                  </label>
                  <select
                    id="type"
                    defaultValue=""
                    className="mt-2 w-full rounded-lg border border-border bg-input/40 px-4 py-3 text-sm outline-none focus:border-ring"
                  >
                    <option value="">{t.fields.typePlaceholder}</option>
                    {t.fields.typeOptions.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="desc" className="label-xs block text-muted-foreground">
                    {t.fields.desc}
                  </label>
                  <textarea
                    id="desc"
                    rows={4}
                    className="mt-2 w-full rounded-lg border border-border bg-input/40 px-4 py-3 text-sm outline-none transition-colors focus:border-ring"
                  />
                </div>
                <button
                  type="submit"
                  className="label-xs w-full rounded-full bg-primary px-8 py-4 text-primary-foreground transition-opacity hover:opacity-85"
                >
                  {t.fields.submit}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-10">
        <div className="section-shell flex flex-wrap items-center justify-between gap-4">
          <p className="label-xs text-muted-foreground">Polish Architect .co.uk</p>
          <p className="label-xs text-muted-foreground">{t.footerRight}</p>
        </div>
      </footer>
    </div>
  );
}

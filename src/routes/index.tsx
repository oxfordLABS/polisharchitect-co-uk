import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];


const services = [
  {
    icon: Gavel,
    title: "Regulatory Compliance",
    body: "Navigating the complexities of UK Building Regulations, Building Safety Act, Party Wall, CDM and H&S compliance.",
    points: [
      "Principal Designer Duties",
      "Building Control Applications",
      "Party Wall Coordination",
    ],
  },
  {
    icon: Search,
    title: "Initial Design",
    body: "Initial site appraisals and conceptual designs to maximise the potential of your property while respecting local context and constraints.",
    points: ["Site Appraisals", "Capacity Studies", "Initial Concept Layouts"],
  },
  {
    icon: Landmark,
    title: "Planning Applications",
    body: "Preparation and submission of full planning applications, navigating local authority requirements to secure permission for your project.",
    points: ["Pre-application Advice", "Full Planning Submissions", "Listed Building Consent"],
  },
  {
    icon: DraftingCompass,
    title: "Technical Design & Tender",
    body: "Detailed technical drawings and specifications for construction, enabling accurate pricing and seamless execution on site.",
    points: ["Detailed Construction Drawings", "Schedule of Works", "Tender Documentation & Coordination"],
  },
];

const stages = [
  {
    n: "01",
    title: "Preparation and Brief",
    body: "Defining project objectives, spatial requirements, budget parameters, and initial feasibility assessments.",
  },
  {
    n: "02",
    title: "Concept Design",
    body: "Developing initial architectural proposals, exploring layout options, and establishing the design vision.",
  },
  {
    n: "03",
    title: "Spatial Coordination (Planning)",
    body: "Refining the design and preparing documentation for statutory planning applications to the local authority.",
  },
  {
    n: "04",
    title: "Technical Design",
    body: "Producing detailed architectural and engineering information for Building Control approval and construction.",
  },
  {
    n: "05",
    title: "Manufacturing and Construction",
    body: "Administering the building contract, resolving site queries, and monitoring progress against the design intent.",
  },
  {
    n: "06",
    title: "Handover",
    body: "Concluding the building contract, inspecting the final works, and issuing certificates to facilitate occupation.",
  },
  {
    n: "07",
    title: "Use",
    body: "Post-occupancy evaluation to ensure the building performs as designed and meets the original brief.",
  },
];

const faqs = [
  {
    q: "What is the difference between Planning Permission and Building Regulations?",
    a: "Planning permission concerns how a building looks, its volume, its impact on neighbours, and how the land is used. Building Regulations set the minimum legal standards for technical construction, structural integrity, fire safety, drainage, ventilation, and energy efficiency. Most extensions require compliance with both systems independently.",
  },
  {
    q: "How long does the Planning Permission process take?",
    a: "Once submitted and validated by your local planning authority, a standard householder planning application takes approximately 8 weeks to reach a statutory decision. Complex schemes, major developments, or applications requiring committee reviews may take up to 13 weeks or longer.",
  },
  {
    q: "What types of house extensions are there?",
    a: "Common extensions include single-storey rear extensions (expanding living/kitchen space into the garden), side infill/return extensions (utilising dead alley space), wraparound extensions (combining side and rear for maximum ground-floor space), two-storey extensions (adding space across both levels), and loft conversions (converting empty roof space into habitable rooms).",
  },
  {
    q: "Flat roof vs pitched roof: what are the advantages and disadvantages?",
    a: "Flat roofs are more cost-effective to construct and accommodate modern features like large roof lanterns, but typically have a 20–30 year lifespan and require regular maintenance. Pitched roofs offer superior durability (50+ years), blend with traditional aesthetics, and allow vaulted ceilings, but involve higher initial construction costs and may trigger planning ridge-height limits.",
  },
  {
    q: "What is the difference between a cold flat roof and a warm flat roof?",
    a: "A cold flat roof places insulation between timber joists with a ventilated void above to stop condensation. A warm flat roof places continuous rigid insulation directly on top of the structural timber deck, keeping the entire roof structure warm and eliminating condensation and thermal bridging risks. Warm roof construction is the modern standard under UK Building Regulations.",
  },
  {
    q: "What are the problems with asbestos, and where might it be found?",
    a: "Asbestos fibres cause severe lung disease if disturbed and inhaled. In pre-2000 UK properties, asbestos is commonly present in textured ceiling coatings (Artex), corrugated garage roof sheets, soffit boards, vinyl floor tiles, rainwater pipes, and old flue insulation. Any suspect material must be tested before structural demolition or alteration.",
  },
  {
    q: "How do I calculate the construction cost of my extension?",
    a: "Costs are calculated by multiplying the proposed gross internal area (m²) by regional construction rates (typically £2,000 to £3,000+ per m² outside London). You must also budget for professional fees (architect, structural engineer, party wall surveyor), statutory application fees, Thames Water agreements, a 10–15% contingency, and 20% VAT.",
  },
  {
    q: "Which is cheaper: a loft conversion or a rear extension?",
    a: "A standard Velux or rear dormer loft conversion is generally cheaper than a ground-floor rear extension of equivalent floor area because it utilises the existing building envelope and foundations, avoiding extensive ground excavation, new foundations, and drainage diversions.",
  },
  {
    q: "What are the regulations for outbuildings and garden sheds?",
    a: "Under Permitted Development, outbuildings must be single-storey with maximum eaves height of 2.5m and maximum overall height of 4m (dual-pitched) or 2.5m within 2m of a boundary. They must sit behind the principal front wall, cannot cover over 50% of the garden, and cannot be used as self-contained residential living accommodation without planning permission.",
  },
  {
    q: "Do I need planning permission to build a garden office?",
    a: "Not always. A garden office can usually be built under Permitted Development if it meets standard outbuilding size and height limits and its use remains incidental to the main home. If used as a primary commercial business premise with visiting clients or fitted out with sleeping accommodation, full planning permission is required.",
  },
  {
    q: "Can I convert my garage into habitable accommodation?",
    a: "Yes. Internal garage conversions without extending the envelope often fall under Permitted Development (a Lawful Development Certificate is recommended). However, full Building Regulations approval is mandatory to ensure proper damp-proofing, wall/floor insulation, structural infill of the garage door, ventilation, and fire escape windows.",
  },
  {
    q: "Why is it always worth employing a registered Polish Architect in the UK?",
    a: "An architect delivers far more than council drawings. We optimise spatial flow and natural light, navigate complex UK planning laws, ensure statutory Building Safety Act and CDM compliance, prevent expensive site mistakes through precise technical detailing, and manage builder tenders to protect your budget — while explaining the entire process clearly in your native language.",
  },
];

function Index() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <div className="glass-card section-shell flex items-center justify-between gap-6 rounded-2xl py-4">
          <a href="#top" className="max-w-[16rem] text-lg font-semibold leading-tight">
            <span className="text-foreground">Polish</span> Architect&nbsp;<br />
            <span className="text-red-500">(co.uk)</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
          </a>
          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="label-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <span className="label-xs text-muted-foreground">EN | PL</span>
          </nav>
          <a
            href="#contact"
            className="label-xs rounded-full bg-primary px-5 py-3 text-center leading-tight text-primary-foreground transition-opacity hover:opacity-85"
          >
            Book
            <br className="hidden md:block" /> Consultation
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden pb-24 pt-44 md:pt-52">
          <img
            src={heroImage}
            alt="Dark minimalist concrete stairwell in a contemporary building"
            width={1920}
            height={1088}
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/50 via-background/85 to-background" />
          <div className="section-shell">
            <h1 className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Polish Architect (.co.uk)
              <span className="block text-3xl text-muted-foreground md:text-5xl lg:text-6xl">
                Construction made simple<br />from concept to completion
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Complete architectural design, planning and other statutory approvals, technical
              compliance, and complete site project management for your development. We guide you
              through the entire construction process handling every legal, technical, and safety
              detail — explained and run seamlessly in Polish and English.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="label-xs inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-primary-foreground transition-opacity hover:opacity-85"
              >
                Start Your Project <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="label-xs glass-card glass-card-hover inline-flex items-center rounded-full px-8 py-4"
              >
                Explore Services
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-32 py-24">
          <div className="section-shell">
            <div className="glass-card rounded-3xl p-8 md:p-16">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                An architect who speaks your language
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
                Based in Oxford and working across the whole of the UK, the practice specialises
                in all aspects of construction and property-related services. From the first
                sketch to the final certificate, every legal, technical, and safety requirement is
                handled and explained clearly — in Polish or English. We pride ourselves on deep
                industry knowledge and 20+ years of UK experience designing award-winning
                residential and commercial projects, delivering complete architectural vision,
                technical precision, and total peace of mind for every client.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-32 py-24">
          <div className="section-shell">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Architectural Services
            </h2>
            <p className="label-xs mt-5 text-muted-foreground">
              SURVEYING I DESIGN I ARCHITECTURE I PROJECT MANAGEMENT I PROPERTY CONSULTANCY
            </p>
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {services.map((s) => (
                <article key={s.title} className="glass-card glass-card-hover rounded-2xl p-8">
                  <s.icon className="h-6 w-6 text-muted-foreground" />
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
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="scroll-mt-32 py-24">
          <div className="section-shell">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              The UK Property Development Framework
            </h2>
            <p className="mt-5 max-w-2xl text-base text-muted-foreground">
              A structured 7-stage approach aligned with RIBA Plan of Work, ensuring clarity and
              control at every step.
            </p>
            <div className="mt-14 space-y-4">
              {stages.map((s) => (
                <div
                  key={s.n}
                  className="glass-card glass-card-hover flex flex-col gap-4 rounded-2xl p-6 md:flex-row md:items-center md:gap-12 md:p-8"
                >
                  <span className="text-4xl font-bold text-muted-foreground/40 md:w-24 md:text-5xl">
                    {s.n}
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
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-5 text-base text-muted-foreground">
              Common queries regarding the architectural process and regulations in the UK.
            </p>
            <div className="mt-12 space-y-3">
              {faqs.map((f, i) => (
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
              Start Your Project
            </h2>
            <p className="mt-5 max-w-2xl text-base text-muted-foreground">
              Whether you need full architectural services, regulatory compliance advice, or just
              want to discuss your ideas, please get in touch.
            </p>
            <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
              <div className="space-y-10">
                <div>
                  <h3 className="label-xs text-muted-foreground">Office</h3>
                  <p className="mt-3 flex items-center gap-2 text-lg">
                    <MapPin className="h-4 w-4 text-muted-foreground" /> Oxford, United Kingdom
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">Serving all of the UK</p>
                </div>
                <div>
                  <h3 className="label-xs text-muted-foreground">Contact</h3>
                  <p className="mt-3 flex items-center gap-2 text-lg">
                    <Mail className="h-4 w-4 text-muted-foreground" /> contact@polisharchitect.uk
                  </p>
                  <p className="mt-1 flex items-center gap-2 text-lg">
                    <Phone className="h-4 w-4 text-muted-foreground" /> +44 (0) 7000 000 000
                  </p>
                </div>
              </div>

              <form
                className="glass-card space-y-5 rounded-2xl p-8"
                onSubmit={(e) => e.preventDefault()}
              >
                {[
                  { id: "name", label: "Name", type: "text" },
                  { id: "email", label: "Email", type: "email" },
                  { id: "phone", label: "Phone", type: "tel" },
                  { id: "postcode", label: "Project Postcode", type: "text" },
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
                    Project Type
                  </label>
                  <select
                    id="type"
                    defaultValue=""
                    className="mt-2 w-full rounded-lg border border-border bg-input/40 px-4 py-3 text-sm outline-none focus:border-ring"
                  >
                    <option value="">Select project type</option>
                    <option>Residential Extension / Remodel</option>
                    <option>New Build Home</option>
                    <option>Commercial Space</option>
                    <option>Planning / Regulatory Advice</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="desc" className="label-xs block text-muted-foreground">
                    Project Description
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
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-10">
        <div className="section-shell flex flex-wrap items-center justify-between gap-4">
          <p className="label-xs text-muted-foreground">Polish Architect .co.uk</p>
          <p className="label-xs text-muted-foreground">ARB Registered • Oxford, UK</p>
        </div>
      </footer>
    </div>
  );
}

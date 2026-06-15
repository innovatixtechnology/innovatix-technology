import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

const services = [
  {
    icon: "smart_toy",
    title: "Software & AI Solutions",
    eyebrow: "Automation, intelligence, and custom systems",
    summary:
      "We build software that removes repetitive work, connects teams, and gives your business smarter ways to operate. From internal tools to AI-enabled products, we focus on practical automation that saves time and improves decisions.",
    includes: [
      "Custom business software and SaaS platforms",
      "AI chatbots and assistant workflows",
      "Business process automation",
      "Dashboards, reporting, and analytics systems",
      "API integrations and third-party tool connections",
      "Role-based admin panels and internal portals",
    ],
    deliverables: ["Discovery map", "System architecture", "Prototype", "Production build", "Launch support"],
    tint: "from-blue-600/14 to-cyan-400/10",
  },
  {
    icon: "devices",
    title: "Website & Mobile Development",
    eyebrow: "Fast, responsive, conversion-ready experiences",
    summary:
      "We create websites, e-commerce storefronts, landing pages, and mobile-first digital products that feel polished and work smoothly across devices. Every build is structured for speed, usability, SEO, and growth.",
    includes: [
      "Business websites and landing pages",
      "E-commerce websites and catalog experiences",
      "Mobile app interfaces for Android and iOS",
      "Frontend and backend development",
      "CMS and content management setup",
      "Performance, accessibility, and responsive QA",
    ],
    deliverables: ["UX plan", "Responsive UI", "Frontend build", "Backend setup", "Deployment"],
    tint: "from-blue-500/12 to-cyan-400/8",
  },
  {
    icon: "palette",
    title: "Branding & Creative Design",
    eyebrow: "Identity, visuals, and premium presentation",
    summary:
      "We help brands look sharper before they launch, pitch, advertise, or sell. Our creative work covers identity systems, UI/UX, content visuals, photography direction, and marketing-ready design assets.",
    includes: [
      "Logo and brand identity systems",
      "UI/UX design for websites and applications",
      "Social media creatives and campaign graphics",
      "Pitch decks, brochures, and launch collateral",
      "Photography direction and film production support",
      "Design systems for consistent brand execution",
    ],
    deliverables: ["Moodboard", "Brand direction", "Design system", "Asset kit", "Usage guidance"],
    tint: "from-blue-500/12 to-cyan-400/8",
  },
  {
    icon: "campaign",
    title: "Digital Marketing & Growth",
    eyebrow: "Visibility, leads, and measurable campaigns",
    summary:
      "We plan and run growth systems that turn attention into qualified customers. From SEO foundations to paid campaigns and social content, our work is built around measurable goals and continuous improvement.",
    includes: [
      "SEO strategy and on-page optimization",
      "Lead generation funnels and landing pages",
      "Paid ads strategy and campaign management",
      "Social media management and content calendars",
      "Performance tracking and reporting",
      "Conversion optimization and audience testing",
    ],
    deliverables: ["Growth audit", "Campaign plan", "Content calendar", "Ad setup", "Monthly reporting"],
    tint: "from-blue-500/12 to-slate-400/10",
  },
];

const process = [
  ["01", "Discover", "We understand your business, audience, current systems, and the result you want."],
  ["02", "Plan", "We convert goals into a practical scope, timeline, user flow, and delivery roadmap."],
  ["03", "Design", "We shape the experience visually and structurally before moving into production."],
  ["04", "Build", "We develop, integrate, test, and prepare the solution for real users."],
  ["05", "Launch", "We deploy carefully, monitor early performance, and support the next improvement cycle."],
];

const packages = [
  {
    title: "Launch",
    text: "Best for new brands or teams that need a sharp first version of a website, landing page, or campaign.",
    items: ["Clear scope", "Fast turnaround", "Launch-ready assets"],
  },
  {
    title: "Scale",
    text: "Best for businesses ready to improve systems, automate work, and upgrade their digital operations.",
    items: ["Custom workflows", "Integrations", "Performance focus"],
  },
  {
    title: "Partner",
    text: "Best for ongoing product, marketing, and technology support across multiple growth initiatives.",
    items: ["Roadmap support", "Monthly execution", "Reporting and iteration"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-grow overflow-hidden bg-slate-50 text-slate-950 dark:bg-[#070a12] dark:text-white">
        <section className="relative px-5 py-16 md:px-8 md:py-24">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_0%,#f8fbff_38%,#eef5ff_100%)] pointer-events-none dark:bg-[linear-gradient(135deg,#070a12_0%,#0b1220_46%,#070a12_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(37,99,235,0.14),transparent_28%),radial-gradient(circle_at_86%_20%,rgba(14,165,233,0.12),transparent_26%),radial-gradient(circle_at_78%_78%,rgba(99,102,241,0.10),transparent_30%)] pointer-events-none dark:bg-[radial-gradient(circle_at_18%_10%,rgba(59,130,246,0.20),transparent_28%),radial-gradient(circle_at_86%_20%,rgba(34,211,238,0.11),transparent_26%),radial-gradient(circle_at_78%_78%,rgba(37,99,235,0.12),transparent_30%)]" />
          <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none dark:opacity-[0.07]" />

          <div className="relative z-10 mx-auto max-w-[1760px]">
            <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
              <div className="rounded-[28px] border border-slate-200 bg-white/86 p-8 text-slate-950 shadow-2xl shadow-blue-500/10 backdrop-blur md:rounded-[34px] md:p-12 dark:border-slate-700 dark:bg-[#101827]/88 dark:text-white dark:shadow-black/25">
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-blue-600 shadow-sm dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-300">
                  <span className="size-2 rounded-full bg-blue-500 dark:bg-cyan-300" />
                  Detailed Services
                </span>
                <h1 className="mt-8 max-w-5xl text-5xl font-bold leading-[0.98] tracking-tight md:text-7xl">
                  Services designed to take your business from idea to growth.
                </h1>
                <p className="mt-7 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl dark:text-slate-300">
                  Innovatix combines software, AI, design, development, and marketing into one practical delivery partner. Choose one focused service or build a complete digital roadmap with us.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link href="/contact" className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 font-bold text-white shadow-xl shadow-blue-600/20 transition hover:bg-blue-500">
                    Discuss a project
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </Link>
                  <Link href="/projects" className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 font-bold text-slate-950 shadow-sm transition hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-950/40 dark:text-white dark:hover:border-cyan-400/50 dark:hover:text-cyan-200">
                    See our work
                    <span className="material-symbols-outlined text-base">arrow_outward</span>
                  </Link>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                {["Strategy first", "AI-ready builds", "Design + development", "Growth focused"].map((item, index) => (
                  <div
                    key={item}
                    className="rounded-[24px] border border-slate-200 bg-white/86 p-6 text-slate-950 shadow-xl shadow-blue-500/8 backdrop-blur dark:border-slate-700 dark:bg-[#101827]/78 dark:text-white dark:shadow-black/20"
                  >
                    <span className="material-symbols-outlined text-3xl text-blue-600 dark:text-cyan-300">{["route", "smart_toy", "design_services", "trending_up"][index]}</span>
                    <p className="mt-4 text-2xl font-bold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 pb-20 md:px-8">
          <div className="mx-auto max-w-[1760px] space-y-7">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-8 shadow-xl shadow-blue-500/8 md:rounded-[34px] md:p-10 dark:border-slate-700 dark:bg-[#101827]/82 dark:shadow-black/20"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.tint} opacity-80 dark:opacity-40`} />
                <div className="absolute -right-24 -bottom-24 size-80 rounded-full bg-blue-400/10 blur-3xl md:size-96 dark:bg-cyan-400/8" />
                <div className="relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                  <div>
                    <div className="flex size-16 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-600 backdrop-blur-sm dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-300">
                      <span className="material-symbols-outlined text-4xl">{service.icon}</span>
                    </div>
                    <p className="mt-7 text-sm font-bold uppercase tracking-[0.22em] text-blue-600 dark:text-cyan-300">{service.eyebrow}</p>
                    <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">{service.title}</h2>
                    <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">{service.summary}</p>
                  </div>

                  <div className="grid gap-6 xl:grid-cols-2">
                    <div className="rounded-3xl border border-slate-200 bg-white/78 p-6 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-950/35">
                      <h3 className="text-xl font-bold">What we include</h3>
                      <div className="mt-5 grid gap-3">
                        {service.includes.map((item) => (
                          <div key={item} className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                            <span className="material-symbols-outlined mt-0.5 text-base text-blue-600 dark:text-cyan-300">check_circle</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-3xl border border-slate-200 bg-white/78 p-6 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-950/35">
                      <h3 className="text-xl font-bold">Typical deliverables</h3>
                      <div className="mt-5 flex flex-wrap gap-3">
                        {service.deliverables.map((item) => (
                          <span key={item} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200">
                            {item}
                          </span>
                        ))}
                      </div>
                      <Link href={`/contact?service=${encodeURIComponent(service.title)}`} className="mt-8 inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-500 dark:text-cyan-300 dark:hover:text-cyan-200">
                        Request this service
                        <span className="material-symbols-outlined text-base">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <span className="absolute right-8 top-8 text-6xl font-bold text-blue-600/8 md:text-8xl dark:text-cyan-300/5">0{index + 1}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white px-5 py-20 dark:bg-[#080b13] md:px-8">
          <div className="mx-auto max-w-[1760px]">
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-600 dark:text-cyan-300">Delivery Process</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-6xl">A clear path from discovery to launch.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-5">
              {process.map(([number, title, text]) => (
                <article key={title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-[#101827]/82">
                  <p className="text-sm font-bold text-blue-600 dark:text-cyan-300">{number}</p>
                  <h3 className="mt-5 text-2xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8">
          <div className="mx-auto max-w-[1760px]">
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-600 dark:text-cyan-300">Engagement Models</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-6xl">Pick the level of support you need.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {packages.map((item, index) => (
                <article key={item.title} className={`rounded-[28px] border p-8 shadow-xl shadow-blue-500/8 ${index === 1 ? "border-blue-200 bg-blue-50 text-slate-950 ring-1 ring-blue-100 dark:border-cyan-400/35 dark:bg-blue-600/22 dark:text-white dark:ring-cyan-400/10" : "border-slate-200 bg-white text-slate-950 dark:border-slate-700 dark:bg-[#101827]/82 dark:text-white"}`}>
                  <h3 className="text-3xl font-bold">{item.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
                  <div className="mt-7 grid gap-3">
                    {item.items.map((point) => (
                      <div key={point} className="flex items-center gap-3 text-sm font-semibold">
                        <span className="material-symbols-outlined text-base text-blue-600 dark:text-cyan-300">check_circle</span>
                        {point}
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-24 md:px-8">
          <div className="mx-auto max-w-[1760px] overflow-hidden rounded-[28px] border border-slate-200 bg-white p-8 text-slate-950 shadow-2xl shadow-blue-500/10 md:rounded-[34px] md:p-12 dark:border-slate-700 dark:bg-[#101827]/88 dark:text-white dark:shadow-black/20">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] opacity-70">Ready when you are</p>
                <h2 className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">Tell us what you want to build, improve, or automate.</h2>
              </div>
              <Link href="/contact" className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 font-bold text-white transition hover:bg-blue-500">
                Get Consultation
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        icon: "smart_toy",
        title: "Software & AI Solutions",
        description:
            "Custom software, AI assistants, automation workflows, dashboards, and integrations that make operations faster and smarter.",
        tags: ["AI apps", "Automation", "SaaS"],
    },
    {
        icon: "devices",
        title: "Website & Mobile Development",
        description:
            "Modern websites, e-commerce stores, mobile interfaces, and web platforms built for speed, clarity, and real users.",
        tags: ["Websites", "Mobile apps", "E-commerce"],
    },
    {
        icon: "palette",
        title: "Branding & Creative Design",
        description:
            "Logo systems, UI/UX design, launch graphics, collateral, and creative direction that make your brand feel premium.",
        tags: ["Identity", "UI/UX", "Creative"],
    },
    {
        icon: "campaign",
        title: "Digital Marketing & Growth",
        description:
            "SEO, social campaigns, lead generation, and content systems that turn attention into qualified business opportunities.",
        tags: ["SEO", "Campaigns", "Leads"],
    },
];

export default function ServicesSection() {
    return (
        <section
            className="relative overflow-hidden bg-slate-50 px-6 py-20 text-slate-950 md:py-24 dark:bg-[#080b13] dark:text-white"
            id="services"
        >
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_52%,#eef5ff_100%)] pointer-events-none dark:bg-[linear-gradient(180deg,#080b13_0%,#0b1020_52%,#070a12_100%)]"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none dark:opacity-[0.07]"></div>
            <div className="absolute left-0 top-0 h-[34rem] w-[34rem] -translate-x-1/3 rounded-full bg-blue-300/20 blur-[110px] pointer-events-none dark:bg-blue-500/16"></div>
            <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] translate-x-1/4 rounded-full bg-cyan-300/16 blur-[110px] pointer-events-none dark:bg-cyan-500/10"></div>

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 0.75, ease: "easeOut" }}
                    className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
                >
                    <div className="max-w-3xl">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-blue-600 dark:text-cyan-300">
                            What We Offer
                        </p>
                        <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl dark:text-white">
                            Digital services for businesses ready to build, brand, launch, and grow.
                        </h2>
                    </div>
                    <div className="max-w-xl">
                        <p className="text-base leading-relaxed text-slate-600 md:text-lg dark:text-slate-300">
                            Strategy, design, engineering, AI, and growth support shaped into clear services that can work independently or as one connected roadmap.
                        </p>
                        <Link href="/services" className="mt-5 inline-flex items-center gap-2 font-bold text-blue-600 transition hover:text-blue-500 dark:text-cyan-300 dark:hover:text-cyan-200">
                            Explore detailed services
                            <span className="material-symbols-outlined text-base">arrow_forward</span>
                        </Link>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
                    {services.map((service, index) => (
                        <motion.article
                            key={service.title}
                            initial={{ opacity: 0, y: 34 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
                            className="group relative min-h-[360px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 dark:border-slate-700 dark:bg-[#101827]/88 dark:shadow-black/20 dark:hover:border-cyan-400/45 dark:hover:bg-[#122033] dark:hover:shadow-cyan-500/10"
                        >
                            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 opacity-80 dark:opacity-95"></div>
                            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/8 blur-3xl transition group-hover:bg-blue-500/12 dark:bg-cyan-400/8 dark:group-hover:bg-cyan-400/12"></div>

                            <div className="relative z-10 flex h-full flex-col">
                                <div className="flex size-14 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600 shadow-sm dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-300">
                                    <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                                </div>

                                <h3 className="mt-7 text-2xl font-bold leading-tight text-slate-950 dark:text-white">
                                    {service.title}
                                </h3>

                                <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                                    {service.description}
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {service.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-slate-700 dark:bg-slate-950/50 dark:text-slate-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <Link href="/services" className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-bold text-blue-600 transition group-hover:text-blue-500 dark:text-cyan-300 dark:group-hover:text-cyan-200">
                                    Learn more
                                    <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">arrow_forward</span>
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}

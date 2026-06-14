"use client";

import { motion } from "framer-motion";

const services = [
    {
        icon: "smart_toy",
        title: "Software & AI Solutions",
        description:
            "Intelligent automation, predictive workflows, chatbots, and custom software that help your business move faster.",
        tags: ["AI apps", "Automation", "Chatbots", "SaaS"],
        cardClass: "lg:col-span-4 bg-[#181818] text-white",
        titleClass: "text-white",
        bodyClass: "text-white/58",
        chipClass: "border-white/70 text-white/86",
        orbClass: "from-cyan-300 via-blue-500 to-violet-600",
        contentClass: "lg:max-w-[54%]",
    },
    {
        icon: "devices",
        title: "Website & Mobile Development",
        description:
            "Modern websites, e-commerce stores, mobile apps, and custom web platforms designed for real users.",
        tags: ["Frontend", "Mobile apps", "Backend"],
        cardClass: "lg:col-span-2 bg-[#e8ff65] text-[#151515]",
        titleClass: "text-[#151515]",
        bodyClass: "text-[#151515]/76",
        chipClass: "border-[#151515]/70 text-[#151515]",
        orbClass: "from-white via-lime-200 to-cyan-300",
        contentClass: "max-w-[82%]",
    },
    {
        icon: "palette",
        title: "Branding & Design",
        description:
            "Memorable brand identity, launch graphics, collateral, photography, and creative systems that make your business look premium.",
        tags: ["Identity", "Creative", "Media"],
        cardClass: "lg:col-span-3 bg-[#9586de] text-white",
        titleClass: "text-white",
        bodyClass: "text-white/78",
        chipClass: "border-white/80 text-white",
        orbClass: "from-violet-200 via-fuchsia-400 to-cyan-300",
        contentClass: "max-w-[78%] lg:max-w-[64%]",
    },
    {
        icon: "campaign",
        title: "Digital Marketing & Growth",
        description:
            "SEO, social campaigns, lead generation, and growth systems that turn attention into qualified customers.",
        tags: ["Strategy", "SEO", "Campaigns"],
        cardClass: "lg:col-span-3 bg-[#f5f1ee] text-[#151515]",
        titleClass: "text-[#151515]",
        bodyClass: "text-[#151515]/76",
        chipClass: "border-[#151515]/70 text-[#151515]",
        orbClass: "from-amber-200 via-orange-400 to-rose-500",
        contentClass: "max-w-[78%] lg:max-w-[64%]",
    },
];

export default function ServicesSection() {
    return (
        <section
            className="relative overflow-hidden bg-slate-50 px-5 py-16 text-slate-950 md:px-8 md:py-24 dark:bg-[#111111] dark:text-white"
            id="services"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(37,99,235,0.10),transparent_28%),radial-gradient(circle_at_86%_26%,rgba(232,255,101,0.14),transparent_24%)] pointer-events-none dark:bg-[radial-gradient(circle_at_18%_8%,rgba(255,255,255,0.07),transparent_28%),radial-gradient(circle_at_86%_26%,rgba(232,255,101,0.08),transparent_24%)]"></div>

            <div className="relative z-10 mx-auto max-w-[1760px]">
                <motion.div
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 0.75, ease: "easeOut" }}
                    className="mb-9 flex flex-col gap-4 md:mb-12 lg:flex-row lg:items-end lg:justify-between"
                >
                    <div>
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-primary-glow dark:text-[#e8ff65]">
                            What We Offer
                        </p>
                        <h2 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-slate-950 md:text-6xl dark:text-white">
                            Services built for modern digital businesses
                        </h2>
                    </div>
                    <p className="max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg dark:text-white/56">
                        Creative, engineering, AI, and growth capabilities packaged into focused services for brands that want to launch sharper.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-5 lg:grid-cols-6 lg:auto-rows-[250px] lg:gap-7">
                    {services.map((service, index) => (
                        <motion.article
                            key={service.title}
                            initial={{ opacity: 0, y: 42, scale: 0.98 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-90px" }}
                            transition={{ duration: 0.72, delay: index * 0.08, ease: "easeOut" }}
                            whileHover={{ y: -10, scale: 1.01 }}
                            className={`group relative min-h-[500px] overflow-hidden rounded-[34px] p-8 shadow-2xl shadow-black/15 md:min-h-[520px] md:rounded-[44px] md:p-12 lg:row-span-2 lg:min-h-0 ${service.cardClass}`}
                        >
                            <motion.div
                                className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                style={{
                                    backgroundImage:
                                        "radial-gradient(circle at 70% 20%, rgba(255,255,255,0.18), transparent 24%), radial-gradient(circle at 22% 88%, rgba(255,255,255,0.12), transparent 30%)",
                                    backgroundSize: "160% 160%",
                                }}
                            ></motion.div>

                            <div className={`relative z-20 flex h-full max-w-[88%] flex-col sm:max-w-[76%] ${service.contentClass}`}>
                                <h3 className={`text-4xl font-bold leading-[1.08] tracking-tight md:text-5xl ${service.titleClass}`}>
                                    {service.title}
                                </h3>

                                <div className="mt-8 flex flex-wrap gap-3">
                                    {service.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className={`rounded-full border px-4 py-2 text-sm font-medium leading-none backdrop-blur-sm md:text-base ${service.chipClass}`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <p className={`mt-8 text-lg leading-relaxed md:text-xl ${service.bodyClass}`}>
                                    {service.description}
                                </p>
                            </div>

                            <motion.div
                                className={`absolute -right-16 -bottom-20 z-10 size-64 rounded-[36%_64%_55%_45%/44%_39%_61%_56%] bg-gradient-to-br ${service.orbClass} opacity-85 shadow-2xl shadow-black/20 blur-0 md:size-80`}
                                animate={{
                                    y: [0, -18, 0],
                                    rotate: [0, 8, -5, 0],
                                    scale: [1, 1.04, 1],
                                }}
                                transition={{
                                    duration: 6 + index * 0.45,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <div className="absolute inset-5 rounded-[inherit] border border-white/35"></div>
                                <div className="absolute inset-12 rounded-full bg-white/20 blur-sm"></div>
                            </motion.div>

                            <motion.div
                                className="absolute right-12 bottom-14 z-20 flex size-20 items-center justify-center rounded-3xl border border-white/35 bg-white/18 text-white shadow-xl backdrop-blur-md"
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: index * 0.12 }}
                            >
                                <span className="material-symbols-outlined text-4xl">
                                    {service.icon}
                                </span>
                            </motion.div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}

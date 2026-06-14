"use client";

import Globe from "../ui/Globe";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
    const { scrollY } = useScroll();

    // Parallax transforms
    const bgY = useTransform(scrollY, [0, 800], [0, 200]);
    const contentY = useTransform(scrollY, [0, 600], [0, 100]);
    const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);

    return (
        <section className="relative px-6 py-14 md:px-10 md:py-16 lg:px-20 lg:py-16 overflow-hidden bg-background-dark dark:bg-[#0a0c14]">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_0%,#f8fbff_36%,#f2f4ff_68%,#fff4f7_100%)] pointer-events-none dark:bg-[linear-gradient(135deg,#0a0c14_0%,#10172a_46%,#020617_100%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_77%_43%,rgba(124,58,237,0.20),transparent_33%),radial-gradient(circle_at_86%_32%,rgba(244,114,182,0.16),transparent_28%),radial-gradient(circle_at_18%_24%,rgba(45,212,191,0.10),transparent_24%)] pointer-events-none dark:bg-[radial-gradient(circle_at_76%_42%,rgba(59,130,246,0.22),transparent_34%),radial-gradient(circle_at_86%_32%,rgba(99,102,241,0.20),transparent_30%)]"></div>
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white/70 pointer-events-none dark:to-[#0a0c14]"></div>

            <motion.div
                style={{ y: bgY }}
                className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none dark:opacity-20"
            ></motion.div>

            <div className="absolute left-0 top-24 h-72 w-px bg-gradient-to-b from-transparent via-cyan-300/70 to-transparent"></div>
            <div className="absolute right-0 top-24 h-72 w-px bg-gradient-to-b from-transparent via-fuchsia-300/45 to-transparent"></div>

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center relative z-10">
                <motion.div
                    style={{ y: contentY, opacity: contentOpacity }}
                    className="lg:col-span-7 flex flex-col gap-6 max-w-3xl"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 w-fit backdrop-blur-sm shadow-sm dark:border-emerald-400/20 dark:bg-emerald-400/10"
                    >
                        <span className="size-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-300">
                            Available for new projects
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-[54px] xl:text-[62px] font-bold leading-[1.08] tracking-tight text-slate-950 dark:text-white"
                    >
                        Building Intelligent{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-indigo-600 to-fuchsia-600 dark:from-blue-400 dark:to-indigo-400">
                            Digital Solutions
                        </span>{" "}
                        for Modern Businesses
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base md:text-lg xl:text-xl text-slate-600 font-light leading-relaxed max-w-xl dark:text-slate-400"
                    >
                        We bridge the gap between complex problems and elegant experiences, delivering websites, apps, and AI solutions that drive measurable growth.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap gap-4 pt-2"
                    >
                        <Link href="/contact" className="h-14 px-8 flex items-center justify-center rounded-lg bg-primary text-white font-semibold text-base hover:bg-primary-glow transition-all shadow-lg cta-glow active:scale-95">
                            Get Free Consultation
                        </Link>
                        <Link
                            href="/projects"
                            className="h-14 px-8 rounded-lg backdrop-blur-md bg-white/75 border border-slate-200 hover:bg-white text-slate-950 font-semibold text-base transition-all flex items-center gap-2 active:scale-95 hover:border-primary/30 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:hover:border-white/20"
                        >
                            <span>View Our Work</span>
                            <span className="material-symbols-outlined text-sm">arrow_outward</span>
                        </Link>
                    </motion.div>

                </motion.div>

                <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
                    <Globe />
                </div>
            </div>
        </section>
    );
}

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
        <section className="relative px-6 py-14 md:px-10 md:py-16 lg:px-20 lg:py-16 overflow-hidden bg-slate-50 dark:bg-[#0a0c14]">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_0%,#f8fbff_42%,#eef5ff_100%)] pointer-events-none dark:bg-[linear-gradient(135deg,#05070d_0%,#0b1020_48%,#070a12_100%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_42%,rgba(59,130,246,0.16),transparent_34%),radial-gradient(circle_at_88%_28%,rgba(14,165,233,0.12),transparent_28%),radial-gradient(circle_at_16%_22%,rgba(37,99,235,0.08),transparent_26%)] pointer-events-none dark:bg-[radial-gradient(circle_at_76%_42%,rgba(59,130,246,0.20),transparent_34%),radial-gradient(circle_at_86%_32%,rgba(14,165,233,0.11),transparent_30%)]"></div>
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white/70 pointer-events-none dark:to-[#0a0c14]"></div>

            <motion.div
                style={{ y: bgY }}
                className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none dark:opacity-20"
            ></motion.div>

            <div className="absolute left-0 top-24 h-72 w-px bg-gradient-to-b from-transparent via-cyan-300/70 to-transparent"></div>
            <div className="absolute right-0 top-24 h-72 w-px bg-gradient-to-b from-transparent via-blue-300/45 to-transparent"></div>

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center relative z-10">
                <motion.div
                    style={{ y: contentY, opacity: contentOpacity }}
                    className="lg:col-span-7 flex flex-col gap-6 max-w-3xl"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 w-fit backdrop-blur-sm shadow-sm dark:border-cyan-300/20 dark:bg-cyan-300/10"
                    >
                        <span className="size-2 rounded-full bg-blue-500 animate-pulse dark:bg-cyan-300"></span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-cyan-300">
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
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-300 dark:via-cyan-300 dark:to-blue-400">
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

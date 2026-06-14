"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function WhyUsSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Gentle parallax so the generated scene stays framed cleanly.
    const imgY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const listContainerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    return (
        <section ref={containerRef} className="relative px-6 py-20 bg-white border-t border-slate-200 overflow-hidden dark:border-white/5 dark:bg-transparent">
            <div className="absolute inset-0 bg-white pointer-events-none dark:bg-transparent"></div>
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-[100px] pointer-events-none translate-x-1/4 dark:bg-blue-500/10"></div>

            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex flex-col gap-6"
                    >
                        <div>
                            <motion.h2 variants={textVariants} className="text-sm font-bold text-primary-glow tracking-widest uppercase mb-3">Why Us</motion.h2>
                            <motion.h3 variants={textVariants} className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-slate-950 dark:text-white">Partners, Not Just Vendors</motion.h3>
                            <motion.p variants={textVariants} className="text-slate-600 text-lg mb-8 dark:text-slate-400">
                                We bridge the gap between business goals and technical execution. Our holistic approach ensures your digital products succeed in the real world.
                            </motion.p>
                        </div>

                        <motion.div variants={listContainerVariants} className="space-y-6">
                            <motion.div variants={textVariants} className="flex gap-4">
                                <div className="mt-1 min-w-6 text-primary-glow">
                                    <span className="material-symbols-outlined shrink-0">check_circle</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-1 text-slate-950 dark:text-white">End-to-End Solutions</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">From concept to launch and beyond, we handle every aspect of the digital lifecycle.</p>
                                </div>
                            </motion.div>
                            <motion.div variants={textVariants} className="flex gap-4">
                                <div className="mt-1 min-w-6 text-primary-glow">
                                    <span className="material-symbols-outlined shrink-0">psychology</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-1 text-slate-950 dark:text-white">AI-Integrated Approach</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">We leverage the latest AI tools to optimize development and enhance product capabilities.</p>
                                </div>
                            </motion.div>
                            <motion.div variants={textVariants} className="flex gap-4">
                                <div className="mt-1 min-w-6 text-primary-glow">
                                    <span className="material-symbols-outlined shrink-0">trending_up</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-1 text-slate-950 dark:text-white">Performance-Focused Execution</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Speed, security, and scalability are built into the foundation of everything we create.</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl ring-1 ring-slate-200 group"
                    >
                        <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-10 group-hover:bg-blue-500/0 transition-all duration-700"></div>
                        {/* Parallax Image Mapping */}
                        <motion.img
                            style={{ y: imgY, scale: 1.06 }}
                            className="object-cover object-center w-full h-[108%] -mt-[4%] opacity-95 transition-transform duration-700 group-hover:opacity-100 group-hover:scale-[1.08]"
                            alt="Technology partners planning an AI-enabled digital product around a laptop"
                            src="/why-us-partnership.webp"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

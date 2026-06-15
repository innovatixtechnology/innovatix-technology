"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projects, type Project } from "@/data/projects";

function PortfolioCard({ project, index }: { project: Project, index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    // Parallax effect for the image inside the card
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <Link href="/projects" className="group cursor-pointer block">
            <motion.div
                ref={cardRef}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
            >
                <div className={`rounded-xl overflow-hidden mb-5 aspect-[16/10] relative border border-slate-200 shadow-xl bg-gradient-to-br ${project.accent} dark:border-white/5`}>
                    {project.coverImage ? (
                        <img
                            alt={`${project.title} homepage screenshot`}
                            src={project.coverImage}
                            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                    ) : (
                        <>
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(255,255,255,0.45),transparent_18rem)] pointer-events-none"></div>
                            <div className="absolute inset-4 rounded-lg bg-white/90 shadow-2xl dark:bg-slate-950/80">
                                <motion.div
                                    style={{ y }}
                                    className="absolute inset-0 flex flex-col justify-between p-5 transition-transform duration-700 group-hover:scale-[1.04]"
                                >
                                    <div className="flex items-center justify-between gap-4">
                                        <img
                                            alt=""
                                            src={`https://www.google.com/s2/favicons?domain=${project.domain}&sz=128`}
                                            className="h-12 w-12 rounded-lg border border-slate-200 bg-white p-2 shadow-sm dark:border-white/10"
                                        />
                                        <span className="truncate rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500 dark:bg-white/10 dark:text-slate-300">
                                            {project.domain}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-300">{project.category}</p>
                                        <h4 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">{project.title}</h4>
                                    </div>
                                </motion.div>
                            </div>
                        </>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-80 pointer-events-none"></div>

                    <div className="absolute bottom-4 left-4 z-30 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white shadow-lg">
                            <span className="material-symbols-outlined text-sm">arrow_outward</span>
                        </span>
                    </div>
                </div>
                <h4 className="text-xl font-bold text-slate-950 group-hover:text-primary-glow transition-colors dark:text-white">{project.title}</h4>
                <p className="text-slate-600 text-sm mt-1 dark:text-slate-400">{project.category}</p>
            </motion.div>
        </Link>
    );
}

export default function PortfolioSection() {
    const featuredProjects = projects.slice(0, 3);

    return (
        <section className="relative px-6 py-20 bg-white overflow-hidden dark:bg-transparent" id="work">
            <div className="absolute inset-0 bg-white dark:bg-transparent"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none dark:opacity-10"></div>
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-300/18 rounded-full blur-[90px] pointer-events-none -translate-x-1/4 -translate-y-1/4 dark:bg-cyan-500/8"></div>

            <div className="container mx-auto relative z-10">
                <div className="flex justify-between items-end mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-sm font-bold text-primary-glow tracking-widest uppercase mb-3">Portfolio</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-950 dark:text-white">Selected Work</h3>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link href="/projects" className="hidden md:flex items-center gap-2 text-slate-950 font-bold hover:text-primary-glow transition-colors group dark:text-white">
                            View All Projects <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredProjects.map((project, index) => (
                        <PortfolioCard key={index} project={project} index={index} />
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link href="/projects" className="inline-block px-8 py-3 rounded-lg bg-primary text-white font-bold shadow-lg shadow-primary/30 hover:bg-primary-glow transition-all">
                        View All Projects
                    </Link>
                </div>
            </div>
        </section>
    );
}

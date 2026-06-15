"use client";

import { motion } from "framer-motion";

export default function ProcessSection() {
    const steps = [
        { icon: "search", title: "Discover", description: "Understanding your goals and market landscape." },
        { icon: "design_services", title: "Design", description: "Crafting intuitive UIs and solid architectures." },
        { icon: "code", title: "Develop", description: "Building robust solutions with clean code." },
        { icon: "rocket_launch", title: "Deploy", description: "Testing, launching, and going live flawlessly." },
        { icon: "trending_up", title: "Scale", description: "Iterating and growing with data-driven insights." },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.8 },
        show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 100, damping: 15 } }
    };

    return (
        <section className="relative px-6 py-24 overflow-hidden bg-slate-50 dark:bg-transparent" id="process">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#f8fbff_0%,#eef5ff_48%,#f8fbff_100%)] opacity-90 dark:bg-[linear-gradient(90deg,rgba(8,11,19,0.2)_0%,rgba(37,99,235,0.10)_48%,rgba(8,11,19,0.18)_100%)]"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-35 pointer-events-none dark:opacity-10"></div>

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-3"
                    >
                        Our Workflow
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-slate-950 dark:text-white"
                    >
                        How We Bring Ideas to Life
                    </motion.h3>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative"
                >
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent -z-0 origin-left"
                    ></motion.div>

                    {steps.map((step, index) => (
                        <motion.div
                            variants={itemVariants}
                            key={index}
                            className="flex flex-col items-center text-center group relative z-10"
                        >
                            <div className="w-24 h-24 rounded-full bg-white border-2 border-blue-100 text-blue-600 flex items-center justify-center text-3xl font-bold mb-6 shadow-xl shadow-blue-500/8 group-hover:scale-110 group-hover:border-blue-300 group-hover:shadow-blue-500/18 transition-all duration-300 backdrop-blur-md dark:bg-[#101827]/82 dark:border-cyan-300/20 dark:text-cyan-300 dark:shadow-black/20">
                                <span className="material-symbols-outlined text-4xl">{step.icon}</span>
                            </div>
                            <h4 className="text-xl font-bold mb-2 text-slate-950 dark:text-white">{step.title}</h4>
                            <p className="text-slate-600 text-sm px-4 dark:text-slate-400">{step.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

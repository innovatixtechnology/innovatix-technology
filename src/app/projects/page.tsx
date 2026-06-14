"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { projects, type Project } from "@/data/projects";
import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
  { value: `${projects.length}+`, label: "Featured Projects" },
  { value: "8", label: "Industries Served" },
  { value: "100%", label: "Responsive Delivery" },
  { value: "AI", label: "Innovation Ready" },
];

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className={`relative aspect-[16/10] overflow-hidden rounded-xl bg-gradient-to-br ${project.accent}`}>
      {project.coverImage ? (
        <img
          src={project.coverImage}
          alt={`${project.title} homepage screenshot`}
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.38),transparent_24rem)]" />
          <div className="absolute inset-x-5 bottom-5 top-14 rounded-b-lg bg-white/92 p-5 shadow-2xl dark:bg-slate-950/82">
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">{project.category}</p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">{project.title}</h3>
                </div>
                <img
                  alt=""
                  className="h-12 w-12 rounded-lg border border-slate-200 bg-white p-2 shadow-sm dark:border-white/10"
                  src={`https://www.google.com/s2/favicons?domain=${project.domain}&sz=128`}
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="h-2 rounded-full bg-slate-200 dark:bg-white/15" />
                <span className="h-2 rounded-full bg-slate-200 dark:bg-white/15" />
                <span className="h-2 rounded-full bg-slate-200 dark:bg-white/15" />
                <span className="col-span-2 h-2 rounded-full bg-slate-300 dark:bg-white/25" />
                <span className="h-2 rounded-full bg-slate-200 dark:bg-white/15" />
              </div>
            </div>
          </div>
        </>
      )}
      {project.coverImage && <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent opacity-80" />}
      <div className="absolute inset-x-5 top-5 flex h-9 items-center gap-2 rounded-t-lg bg-white/88 px-4 shadow-lg backdrop-blur dark:bg-slate-950/75">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span className="ml-3 truncate text-xs font-medium text-slate-600 dark:text-slate-300">{project.domain}</span>
      </div>
      {project.coverImage && (
        <div className="absolute inset-x-5 bottom-5">
          <p className="text-xs font-bold uppercase tracking-wider text-white/75">{project.category}</p>
          <h3 className="mt-1 text-2xl font-bold text-white drop-shadow-sm">{project.title}</h3>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.04, 0.28) }}
      className="group rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-blue-400/60"
    >
      <ProjectVisual project={project} />
      <div className="p-3">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.services.map((service) => (
            <span key={service} className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:text-slate-300">
              {service}
            </span>
          ))}
        </div>
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">{project.title}</h2>
        <p className="mt-3 min-h-24 text-sm leading-6 text-slate-600 dark:text-slate-400">{project.summary}</p>
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 font-bold text-blue-600 transition-colors hover:text-blue-500 dark:text-blue-400"
        >
          View work
          <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">arrow_outward</span>
        </a>
      </div>
    </motion.article>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="flex-grow overflow-x-hidden bg-slate-50 dark:bg-[#0a0c14]">
        <section className="relative px-6 pb-12 pt-28">
          <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-10" />
          <div className="absolute left-1/2 top-0 h-[28rem] w-[52rem] -translate-x-1/2 rounded-full bg-blue-400/15 blur-[110px] dark:bg-blue-600/20" />

          <div className="container relative z-10 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-blue-300">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                Selected Work
              </span>
              <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 md:text-6xl dark:text-white">
                Projects built for real brands.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
                A curated look at websites, e-commerce experiences, enterprise platforms, and brand-led digital work delivered by Innovatix Technology.
              </p>
            </motion.div>

            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.04]">
                  <p className="text-3xl font-bold text-slate-950 dark:text-white">{stat.value}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 pt-4">
          <div className="container mx-auto">
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-300">Portfolio</p>
                <h2 className="mt-2 text-3xl font-bold text-slate-950 dark:text-white">Client Work</h2>
              </div>
              <Link href="/contact" className="inline-flex w-fit items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500">
                Start a project
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project, index) => (
                <ProjectCard key={project.url} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

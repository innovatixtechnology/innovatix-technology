import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

const founders = [
  {
    name: "Yash Choudhary",
    role: "Co-Founder",
    note: "Leads with a product-first mindset, turning business goals into clear digital systems that are reliable, scalable, and ready for real users.",
    image: "/founders/yash-choudhary.jpg",
    imagePosition: "object-center",
  },
  {
    name: "Sanchita Dhariwal",
    role: "Co-Founder",
    note: "Shapes brand, strategy, and execution with a strong focus on clarity, client trust, and digital experiences that feel thoughtful from start to finish.",
    image: "/founders/sanchita-dhariwal.jpg",
    imagePosition: "object-center",
  },
  {
    name: "Vishal Patil",
    role: "Co-Founder",
    note: "Connects technology, creativity, and growth strategy to help businesses build stronger foundations and move forward with confidence.",
    image: "/founders/vishal-patil.jpg",
    imagePosition: "object-[50%_38%]",
  },
];

const team = [
  ["Manish Ranjan", "Senior Developer"],
  ["Aashish Kumar", "Developer"],
  ["Priyanshu Singh", "Digital Media Manager"],
  ["Arjit Ghosh", "Operation Executive"],
  ["Nitish Pandey", "Sales Executive"],
  ["Luv Mishra", "Business Development Executive"],
  ["Sagar Dixit", "Digital Ads Consultant"],
  ["Akansha Kashyap", "Marketing Consultant"],
  ["Tanish Jain", "Social Media Executive"],
  ["Nitish Choubey", "UI/UX Designer"],
  ["Rishu Mishra", "SEO Specialist"],
  ["Abhishek Gosawami", "Sales & Marketing Head"],
];

const services = [
  "Logo & Brand Identity",
  "UI/UX & Creative Design",
  "Website Development",
  "E-commerce Development",
  "Mobile App Development",
  "Custom Software Development",
  "AI-Driven Solutions & Automation",
  "Business Process Automation",
  "Digital Marketing",
  "SEO",
  "Lead Generation",
  "Social Media Management",
  "Content Creation",
  "Photography & Film Production",
];

const goals = [
  {
    title: "Increase Brand Visibility",
    text: "Position Innovatix as a go-to partner for marketing and IT needs through strategic online presence, SEO, and targeted campaigns.",
    icon: "campaign",
  },
  {
    title: "Build Client Trust",
    text: "Showcase consistent, high-value content, testimonials, case studies, and transparent communication.",
    icon: "verified",
  },
  {
    title: "Enhance Engagement",
    text: "Use platform-specific strategies to improve interactions, feedback loops, and audience connection.",
    icon: "forum",
  },
  {
    title: "Strengthen Thought Leadership",
    text: "Publish insights, trends, and practical tips that establish the brand as a trusted voice in marketing and IT.",
    icon: "tips_and_updates",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-grow overflow-hidden bg-slate-50 dark:bg-[#05060a]">
        <section className="relative px-6 pb-20 pt-28">
          <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-10" />
          <div className="absolute right-0 top-0 h-[36rem] w-[36rem] translate-x-1/4 rounded-full bg-blue-300/20 blur-[110px] dark:bg-blue-600/15" />
          <div className="container relative z-10 mx-auto">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-blue-300">
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                  About Innovatix
                </span>
                <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight tracking-tight text-slate-950 md:text-7xl dark:text-white">
                  Technology, creativity, and AI for measurable business growth.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
                  Innovatix Technology delivers high-quality IT, software, and digital solutions that help businesses build strong digital foundations, automate processes, and achieve long-term success.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500">
                    Start a conversation
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </Link>
                  <Link href="/projects" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 font-bold text-slate-950 transition hover:border-blue-300 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-blue-400">
                    View our work
                    <span className="material-symbols-outlined text-base">work</span>
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-2xl shadow-blue-500/10 dark:border-white/10 dark:bg-white/[0.04]">
                  <img
                    src="/why-us-partnership.webp"
                    alt="Innovatix team planning AI enabled digital solutions"
                    className="aspect-[16/11] w-full rounded-lg object-cover object-center"
                  />
                </div>
                <div className="absolute -bottom-6 left-6 right-6 grid grid-cols-3 gap-3 rounded-xl border border-slate-200 bg-white/90 p-4 shadow-xl backdrop-blur dark:border-white/10 dark:bg-[#101322]/90">
                  <div>
                    <p className="text-2xl font-bold text-slate-950 dark:text-white">AI</p>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Driven</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-950 dark:text-white">360</p>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Solutions</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-950 dark:text-white">Growth</p>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Focused</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="px-6 py-20">
          <div className="container mx-auto grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-300">Our Vision</p>
              <h2 className="mt-4 text-3xl font-bold text-slate-950 dark:text-white">A trusted technology partner for modern businesses.</h2>
              <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
                To become a trusted technology partner that empowers businesses with innovative, intelligent, and scalable digital solutions, driving long-term growth through technology, creativity, and artificial intelligence.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-300">Our Mission</p>
              <h2 className="mt-4 text-3xl font-bold text-slate-950 dark:text-white">Strong foundations, automated processes, measurable results.</h2>
              <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
                We combine technology, design, marketing, and AI-driven innovation to create practical solutions tailored to each client&apos;s goals and built for real-world impact.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white px-6 py-20 dark:border-white/10 dark:bg-transparent">
          <div className="container mx-auto">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-300">Leadership</p>
              <h2 className="mt-3 text-4xl font-bold text-slate-950 dark:text-white">Built by founders who stay close to the work.</h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {founders.map((founder) => (
                <article key={founder.name} className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-blue-400/40">
                  <div className="relative aspect-[4/4] overflow-hidden bg-blue-50 dark:bg-slate-900">
                    <img
                      src={founder.image}
                      alt={`${founder.name}, ${founder.role} at Innovatix Technology`}
                      className={`h-full w-full object-cover ${founder.imagePosition}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-950 dark:text-white">{founder.name}</h3>
                    <p className="mt-1 text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-300">{founder.role}</p>
                    <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">{founder.note}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="container mx-auto grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-300">What We Do</p>
              <h2 className="mt-3 text-4xl font-bold text-slate-950 dark:text-white">End-to-end services under one roof.</h2>
              <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
                From brand identity to automation, Innovatix helps businesses design, build, market, and scale their digital presence.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <div key={service} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200">
                  <span className="material-symbols-outlined text-base text-blue-600 dark:text-blue-300">check_circle</span>
                  {service}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20 dark:bg-transparent">
          <div className="container mx-auto">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-300">Marketing Goals</p>
              <h2 className="mt-3 text-4xl font-bold text-slate-950 dark:text-white">How we keep growth visible and practical.</h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {goals.map((goal) => (
                <article key={goal.title} className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.04]">
                  <span className="material-symbols-outlined text-3xl text-blue-600 dark:text-blue-300">{goal.icon}</span>
                  <h3 className="mt-5 text-lg font-bold text-slate-950 dark:text-white">{goal.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{goal.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="container mx-auto">
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-300">Team</p>
                <h2 className="mt-3 text-4xl font-bold text-slate-950 dark:text-white">Specialists across product, marketing, and operations.</h2>
              </div>
              <Link href="/contact" className="inline-flex w-fit items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500">
                Work with us
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {team.map(([name, role]) => (
                <div key={name} className="rounded-lg border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.04]">
                  <p className="font-bold text-slate-950 dark:text-white">{name}</p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

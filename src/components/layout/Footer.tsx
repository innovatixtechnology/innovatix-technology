import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 relative z-10 w-full dark:border-white/10 dark:bg-[#05060a] dark:text-slate-400">
            <div className="border-b border-slate-200 px-6 py-12 dark:border-white/10">
                <div className="container mx-auto">
                    <p className="text-center text-sm font-semibold uppercase tracking-widest mb-8 text-slate-500">
                        Digital solutions for growing businesses
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                        <div className="flex flex-col items-center gap-2 group cursor-default">
                            <span className="material-symbols-outlined text-3xl group-hover:text-primary-glow transition-colors">rocket</span>
                            <span className="text-xs font-medium">Startups</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 group cursor-default">
                            <span className="material-symbols-outlined text-3xl group-hover:text-primary-glow transition-colors">shopping_cart</span>
                            <span className="text-xs font-medium">E-commerce</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 group cursor-default">
                            <span className="material-symbols-outlined text-3xl group-hover:text-primary-glow transition-colors">local_hospital</span>
                            <span className="text-xs font-medium">Healthcare</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 group cursor-default">
                            <span className="material-symbols-outlined text-3xl group-hover:text-primary-glow transition-colors">school</span>
                            <span className="text-xs font-medium">Education</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 group cursor-default">
                            <span className="material-symbols-outlined text-3xl group-hover:text-primary-glow transition-colors">domain</span>
                            <span className="text-xs font-medium">Enterprises</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 group cursor-default">
                            <span className="material-symbols-outlined text-3xl group-hover:text-primary-glow transition-colors">storefront</span>
                            <span className="text-xs font-medium">Local Business</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 gap-12 mb-12 md:grid-cols-[1.4fr_0.8fr_0.9fr_1fr]">
                    <div>
                        <Link href="/" className="mb-6 block w-[172px]" aria-label="Innovatix Technology home">
                            <Image
                                src="/innovatix-logo.png"
                                alt="Innovatix Technology"
                                width={392}
                                height={120}
                                className="h-auto w-full drop-shadow-[0_8px_18px_rgba(37,99,235,0.14)] dark:brightness-0 dark:invert dark:drop-shadow-[0_0_18px_rgba(59,130,246,0.38)]"
                            />
                        </Link>
                        <p className="text-sm leading-relaxed mb-6">
                            We build websites, software, AI workflows, brand systems, and growth campaigns for businesses that want practical digital progress.
                        </p>
                        <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500">
                            Start a project
                            <span className="material-symbols-outlined text-base">arrow_forward</span>
                        </Link>
                    </div>
                    <div>
                        <h4 className="text-slate-950 font-bold mb-4 dark:text-white">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link className="hover:text-primary-glow transition-colors" href="/about">About Us</Link></li>
                            <li><Link className="hover:text-primary-glow transition-colors" href="/about#team">Our Team</Link></li>
                            <li><Link className="hover:text-primary-glow transition-colors" href="/projects">Our Work</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-slate-950 font-bold mb-4 dark:text-white">Services</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link className="hover:text-primary-glow transition-colors" href="/services">Software & AI Solutions</Link></li>
                            <li><Link className="hover:text-primary-glow transition-colors" href="/services">Website & Mobile Development</Link></li>
                            <li><Link className="hover:text-primary-glow transition-colors" href="/services">Branding & Creative Design</Link></li>
                            <li><Link className="hover:text-primary-glow transition-colors" href="/services">Digital Marketing & Growth</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-slate-950 font-bold mb-4 dark:text-white">Contact</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-base text-primary">mail</span>
                                <a className="hover:text-primary-glow transition-colors" href="mailto:innovatixtechnology12@gmail.com">innovatixtechnology12@gmail.com</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-base text-primary">chat</span>
                                <Link className="hover:text-primary-glow transition-colors" href="/contact">Request a consultation</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs dark:border-white/10">
                    <p>© {new Date().getFullYear()} Innovatix Technology. All rights reserved.</p>
                    <Link className="hover:text-slate-950 transition-colors dark:hover:text-white" href="/contact">Let&apos;s build something useful</Link>
                </div>
            </div>
        </footer>
    );
}

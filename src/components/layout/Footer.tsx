import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 relative z-10 w-full dark:border-white/10 dark:bg-[#05060a] dark:text-slate-400">
            <div className="border-b border-slate-200 px-6 py-12 dark:border-white/10">
                <div className="container mx-auto">
                    <p className="text-center text-sm font-semibold uppercase tracking-widest mb-8 text-slate-500">
                        Trusted by industries worldwide
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
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 text-slate-950 mb-6 dark:text-white">
                            <div className="size-6 text-primary">
                                <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        clipRule="evenodd"
                                        d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                                        fill="currentColor"
                                        fillRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                            <h2 className="text-lg font-bold">Innovatix</h2>
                        </div>
                        <p className="text-sm leading-relaxed mb-6">
                            Transforming businesses through intelligent design and robust technology. Let&apos;s build the future together.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-slate-950 font-bold mb-4 dark:text-white">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link className="hover:text-primary-glow transition-colors" href="/#about">About Us</Link></li>
                            <li><Link className="hover:text-primary-glow transition-colors" href="#">Our Team</Link></li>
                            <li><Link className="hover:text-primary-glow transition-colors" href="#">Careers</Link></li>
                            <li><Link className="hover:text-primary-glow transition-colors" href="#">Blog</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-slate-950 font-bold mb-4 dark:text-white">Services</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link className="hover:text-primary-glow transition-colors" href="/#services">Web Development</Link></li>
                            <li><Link className="hover:text-primary-glow transition-colors" href="/#services">Mobile Apps</Link></li>
                            <li><Link className="hover:text-primary-glow transition-colors" href="/#services">AI Solutions</Link></li>
                            <li><Link className="hover:text-primary-glow transition-colors" href="/#services">Digital Marketing</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-slate-950 font-bold mb-4 dark:text-white">Contact</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-base text-primary">mail</span>
                                hello@innovatix.tech
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-base text-primary">call</span>
                                +1 (555) 123-4567
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-base text-primary">location_on</span>
                                San Francisco, CA
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs dark:border-white/10">
                    <p>© {new Date().getFullYear()} Innovatix Technology. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link className="hover:text-slate-950 transition-colors dark:hover:text-white" href="#">Privacy Policy</Link>
                        <Link className="hover:text-slate-950 transition-colors dark:hover:text-white" href="#">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

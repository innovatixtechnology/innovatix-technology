import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="flex-grow bg-slate-50 relative overflow-hidden py-16 md:py-24 dark:bg-[#05060a]">
                {/* Background elements */}
                <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-10"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3 dark:bg-blue-600/20"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

                        {/* Left side Content */}
                        <div className="flex flex-col gap-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 w-fit shadow-sm dark:border-white/10 dark:bg-white/5 dark:shadow-none">
                                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                <span className="text-xs font-semibold text-slate-600 tracking-wide uppercase dark:text-slate-300">Consultation</span>
                            </div>

                            <h1 className="text-5xl md:text-[64px] font-bold tracking-tight text-slate-950 leading-[1.1] dark:text-white">
                                Let&apos;s Build <br className="hidden md:block" />
                                Something <br className="hidden md:block" />
                                <span className="text-blue-500">Great Together</span>
                            </h1>

                            <p className="text-lg text-slate-600 leading-relaxed max-w-md dark:text-slate-400">
                                Schedule a free consultation with our experts to discuss your project and growth goals. We&apos;re here to help you navigate the digital landscape.
                            </p>

                            <div className="flex flex-col gap-8 mt-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-blue-500 shrink-0 shadow-sm dark:border-white/10 dark:bg-white/5 dark:shadow-none">
                                        <span className="material-symbols-outlined">mail</span>
                                    </div>
                                    <div>
                                        <h4 className="text-[11px] text-slate-500 font-bold uppercase tracking-widest mb-1 dark:text-slate-500">Email Us</h4>
                                        <p className="text-slate-950 font-medium dark:text-white">hello@innovatix.tech</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-blue-500 shrink-0 shadow-sm dark:border-white/10 dark:bg-white/5 dark:shadow-none">
                                        <span className="material-symbols-outlined">call</span>
                                    </div>
                                    <div>
                                        <h4 className="text-[11px] text-slate-500 font-bold uppercase tracking-widest mb-1 dark:text-slate-500">Call Us</h4>
                                        <p className="text-slate-950 font-medium dark:text-white">+1 (555) 123-4567</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-blue-500 shrink-0 shadow-sm dark:border-white/10 dark:bg-white/5 dark:shadow-none">
                                        <span className="material-symbols-outlined">location_on</span>
                                    </div>
                                    <div>
                                        <h4 className="text-[11px] text-slate-500 font-bold uppercase tracking-widest mb-1 dark:text-slate-500">Visit Us</h4>
                                        <p className="text-slate-950 font-medium dark:text-white">San Francisco, CA</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right side form */}
                        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-2xl shadow-slate-200/70 dark:border-white/10 dark:bg-[#101322] dark:shadow-black/30">
                            <form className="flex flex-col gap-6">

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2 relative">
                                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest absolute -top-2 left-3 bg-white px-1 dark:bg-[#101322] dark:text-slate-400">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full bg-transparent border border-slate-200 rounded-xl px-4 py-3.5 text-slate-950 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm dark:border-white/10 dark:text-slate-200 dark:placeholder:text-slate-600"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-2 relative">
                                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest absolute -top-2 left-3 bg-white px-1 dark:bg-[#101322] dark:text-slate-400">Business Email</label>
                                        <input
                                            type="email"
                                            placeholder="john@company.com"
                                            className="w-full bg-transparent border border-slate-200 rounded-xl px-4 py-3.5 text-slate-950 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm dark:border-white/10 dark:text-slate-200 dark:placeholder:text-slate-600"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
                                    <div className="flex flex-col gap-2 relative">
                                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest absolute -top-2 left-3 bg-white px-1 dark:bg-[#101322] dark:text-slate-400">Company Name</label>
                                        <input
                                            type="text"
                                            placeholder="Acme Inc."
                                            className="w-full bg-transparent border border-slate-200 rounded-xl px-4 py-3.5 text-slate-950 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm dark:border-white/10 dark:text-slate-200 dark:placeholder:text-slate-600"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-2 relative">
                                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest absolute -top-2 left-3 bg-white px-1 z-10 dark:bg-[#101322] dark:text-slate-400">Interested Service</label>
                                        <div className="relative">
                                            <select
                                                className="w-full bg-transparent border border-slate-200 rounded-xl px-4 py-3.5 text-slate-950 appearance-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm relative z-0 dark:border-white/10 dark:text-slate-200"
                                                defaultValue="Website Development"
                                            >
                                                <option value="Website Development" className="bg-white dark:bg-[#101322]">Website Development</option>
                                                <option value="App Development" className="bg-white dark:bg-[#101322]">App Development</option>
                                                <option value="AI Solutions" className="bg-white dark:bg-[#101322]">AI Solutions</option>
                                                <option value="Digital Marketing" className="bg-white dark:bg-[#101322]">Digital Marketing</option>
                                                <option value="Other" className="bg-white dark:bg-[#101322]">Other</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500 z-10 dark:text-slate-400">
                                                <span className="material-symbols-outlined text-sm">expand_more</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2 relative mt-2">
                                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest absolute -top-2 left-3 bg-white px-1 z-10 dark:bg-[#101322] dark:text-slate-400">Your Message</label>
                                    <textarea
                                        placeholder="Tell us about your project goals..."
                                        rows={4}
                                        className="w-full bg-transparent border border-slate-200 rounded-xl px-4 py-4 text-slate-950 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none text-sm relative z-0 dark:border-white/10 dark:text-slate-200 dark:placeholder:text-slate-600"
                                    ></textarea>
                                </div>

                                <div className="mt-4 flex flex-col items-center">
                                    <button
                                        type="button"
                                        className="w-full flex justify-center items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/25 transition-all mb-4"
                                    >
                                        Submit Request
                                        <span className="material-symbols-outlined text-base">send</span>
                                    </button>

                                    <p className="text-[9px] uppercase font-bold tracking-widest text-slate-600 dark:text-slate-500">
                                        Our team typically responds within 24 business hours.
                                    </p>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

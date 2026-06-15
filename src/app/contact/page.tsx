import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "./ContactForm";

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
                                        <p className="text-slate-950 font-medium dark:text-white">innovatixtechnology12@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-blue-500 shrink-0 shadow-sm dark:border-white/10 dark:bg-white/5 dark:shadow-none">
                                        <span className="material-symbols-outlined">forum</span>
                                    </div>
                                    <div>
                                        <h4 className="text-[11px] text-slate-500 font-bold uppercase tracking-widest mb-1 dark:text-slate-500">Consultation</h4>
                                        <p className="text-slate-950 font-medium dark:text-white">Share your goals and we&apos;ll respond by email</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-blue-500 shrink-0 shadow-sm dark:border-white/10 dark:bg-white/5 dark:shadow-none">
                                        <span className="material-symbols-outlined">public</span>
                                    </div>
                                    <div>
                                        <h4 className="text-[11px] text-slate-500 font-bold uppercase tracking-widest mb-1 dark:text-slate-500">Delivery</h4>
                                        <p className="text-slate-950 font-medium dark:text-white">Remote-first project support</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right side form */}
                        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-2xl shadow-slate-200/70 dark:border-white/10 dark:bg-[#101322] dark:shadow-black/30">
                            <ContactForm />
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

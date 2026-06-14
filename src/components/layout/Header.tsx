"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-slate-200/70 bg-white/85 backdrop-blur-md px-6 py-4 md:px-10 lg:px-20 dark:border-white/10 dark:bg-[#05070d]/72 dark:shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
            <div className="flex items-center">
                <Link href="/" className="block w-[142px] sm:w-[176px]" aria-label="Innovatix Technology home">
                    <Image
                        src="/innovatix-logo.png"
                        alt="Innovatix Technology"
                        width={392}
                        height={120}
                        priority
                        className="h-auto w-full drop-shadow-[0_8px_18px_rgba(37,99,235,0.16)] dark:drop-shadow-[0_0_16px_rgba(59,130,246,0.32)]"
                    />
                </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
                <Link className="text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors dark:text-slate-300 dark:hover:text-white" href="/#services">
                    Services
                </Link>
                <Link className="text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors dark:text-slate-300 dark:hover:text-white" href="/projects">
                    Work
                </Link>
                <Link className="text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors dark:text-slate-300 dark:hover:text-white" href="/#process">
                    Process
                </Link>
                <Link className="text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors dark:text-slate-300 dark:hover:text-white" href="/#about">
                    About Us
                </Link>
            </nav>

            <div className="flex items-center gap-4">
                <button
                    type="button"
                    onClick={toggleTheme}
                    className="flex size-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:border-primary/40 hover:text-primary dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-primary/50"
                    aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                    title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                >
                    {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <Link href="/contact" className="hidden sm:flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-bold text-white shadow-lg cta-glow hover:bg-primary-glow transition-all duration-300">
                    Get Consultation
                </Link>
                <button
                    className="lg:hidden p-2 text-slate-950 dark:text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-[73px] left-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 lg:hidden flex flex-col p-6 gap-6 shadow-xl dark:border-white/10 dark:bg-[#0a0c14]/95">
                    <Link href="/#services" className="text-base font-medium text-slate-700 dark:text-slate-200" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
                    <Link href="/projects" className="text-base font-medium text-slate-700 dark:text-slate-200" onClick={() => setIsMobileMenuOpen(false)}>Work</Link>
                    <Link href="/#process" className="text-base font-medium text-slate-700 dark:text-slate-200" onClick={() => setIsMobileMenuOpen(false)}>Process</Link>
                    <Link href="/#about" className="text-base font-medium text-slate-700 dark:text-slate-200" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                    <Link href="/contact" className="h-12 w-full mt-2 flex items-center justify-center rounded-lg bg-primary text-sm font-bold text-white shadow-lg cta-glow">
                        Get Consultation
                    </Link>
                </div>
            )}
        </header>
    );
}

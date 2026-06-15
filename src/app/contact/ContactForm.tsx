"use client";

import { FormEvent, useState } from "react";

const services = [
  "Software & AI Solutions",
  "Website & Mobile Development",
  "Branding & Creative Design",
  "Digital Marketing & Growth",
  "Other",
];

type SubmitState = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("sending");
    setFeedback("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      fullName: String(formData.get("fullName") || ""),
      email: String(formData.get("email") || ""),
      company: String(formData.get("company") || ""),
      service: String(formData.get("service") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your request.");
      }

      event.currentTarget.reset();
      setSubmitState("success");
      setFeedback("Thanks. Your request has been sent to the Innovatix team.");
    } catch (error) {
      setSubmitState("error");
      setFeedback(error instanceof Error ? error.message : "Unable to send your request.");
    }
  }

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2 relative">
          <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest absolute -top-2 left-3 bg-white px-1 dark:bg-[#101322] dark:text-slate-400">Full Name</label>
          <input
            name="fullName"
            type="text"
            placeholder="John Doe"
            required
            className="w-full bg-transparent border border-slate-200 rounded-xl px-4 py-3.5 text-slate-950 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm dark:border-white/10 dark:text-slate-200 dark:placeholder:text-slate-600"
          />
        </div>

        <div className="flex flex-col gap-2 relative">
          <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest absolute -top-2 left-3 bg-white px-1 dark:bg-[#101322] dark:text-slate-400">Business Email</label>
          <input
            name="email"
            type="email"
            placeholder="john@company.com"
            required
            className="w-full bg-transparent border border-slate-200 rounded-xl px-4 py-3.5 text-slate-950 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm dark:border-white/10 dark:text-slate-200 dark:placeholder:text-slate-600"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
        <div className="flex flex-col gap-2 relative">
          <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest absolute -top-2 left-3 bg-white px-1 dark:bg-[#101322] dark:text-slate-400">Company Name</label>
          <input
            name="company"
            type="text"
            placeholder="Acme Inc."
            className="w-full bg-transparent border border-slate-200 rounded-xl px-4 py-3.5 text-slate-950 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm dark:border-white/10 dark:text-slate-200 dark:placeholder:text-slate-600"
          />
        </div>

        <div className="flex flex-col gap-2 relative">
          <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest absolute -top-2 left-3 bg-white px-1 z-10 dark:bg-[#101322] dark:text-slate-400">Interested Service</label>
          <div className="relative">
            <select
              name="service"
              className="w-full bg-transparent border border-slate-200 rounded-xl px-4 py-3.5 text-slate-950 appearance-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm relative z-0 dark:border-white/10 dark:text-slate-200"
              defaultValue={services[1]}
            >
              {services.map((service) => (
                <option key={service} value={service} className="bg-white dark:bg-[#101322]">
                  {service}
                </option>
              ))}
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
          name="message"
          placeholder="Tell us about your project goals..."
          rows={4}
          required
          className="w-full bg-transparent border border-slate-200 rounded-xl px-4 py-4 text-slate-950 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none text-sm relative z-0 dark:border-white/10 dark:text-slate-200 dark:placeholder:text-slate-600"
        />
      </div>

      <div className="mt-4 flex flex-col items-center">
        <button
          type="submit"
          disabled={submitState === "sending"}
          className="w-full flex justify-center items-center gap-2 bg-blue-500 hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-70 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/25 transition-all mb-4"
        >
          {submitState === "sending" ? "Sending..." : "Submit Request"}
          <span className="material-symbols-outlined text-base">{submitState === "sending" ? "progress_activity" : "send"}</span>
        </button>

        {feedback ? (
          <p className={`mb-3 text-center text-sm font-semibold ${submitState === "success" ? "text-blue-600 dark:text-cyan-300" : "text-red-600 dark:text-red-300"}`}>
            {feedback}
          </p>
        ) : null}

        <p className="text-[9px] uppercase font-bold tracking-widest text-slate-600 dark:text-slate-500">
          Our team typically responds within 24 business hours.
        </p>
      </div>
    </form>
  );
}

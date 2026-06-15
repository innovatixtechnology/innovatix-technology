"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const revealSelector = [
  "main > section",
  "main article",
  "main form",
  "footer",
].join(",");

export default function SiteAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));

    targets.forEach((target, index) => {
      target.dataset.siteReveal = "true";
      target.dataset.revealVisible = "false";
      target.style.setProperty("--reveal-delay", `${Math.min(index * 45, 220)}ms`);
    });

    if (prefersReducedMotion) {
      targets.forEach((target) => {
        target.dataset.revealVisible = "true";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          target.dataset.revealVisible = "true";
          observer.unobserve(target);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.08,
      },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

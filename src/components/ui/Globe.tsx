"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { FaAws, FaJava } from "react-icons/fa";
import {
  SiGooglegemini,
  SiNextdotjs,
  SiOpenai,
  SiReact,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { useTheme } from "@/components/theme/ThemeProvider";

type TechIcon = {
  name: string;
  Icon: IconType;
  color: string;
  theta: number;
  centerY: number;
  radiusX: number;
};

const techIcons: TechIcon[] = [
  {
    name: "Java",
    Icon: FaJava,
    color: "#f89820",
    theta: 0,
    centerY: 18,
    radiusX: 24,
  },
  {
    name: "React",
    Icon: SiReact,
    color: "#61dafb",
    theta: Math.PI,
    centerY: 32,
    radiusX: 38,
  },
  {
    name: "Next.js",
    Icon: SiNextdotjs,
    color: "#111827",
    theta: Math.PI / 3,
    centerY: 45,
    radiusX: 46,
  },
  {
    name: "AWS",
    Icon: FaAws,
    color: "#ff9900",
    theta: (4 * Math.PI) / 3,
    centerY: 58,
    radiusX: 46,
  },
  {
    name: "Gemini",
    Icon: SiGooglegemini,
    color: "#8e75b2",
    theta: (2 * Math.PI) / 3,
    centerY: 72,
    radiusX: 36,
  },
  {
    name: "OpenAI",
    Icon: SiOpenai,
    color: "#111827",
    theta: (5 * Math.PI) / 3,
    centerY: 84,
    radiusX: 24,
  },
];

export default function Globe() {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const iconsRef = useRef<(HTMLDivElement | null)[]>([]);
  const blendedIconColors: Record<string, string> = {
    Java: "#2563eb",
    React: "#0891b2",
    "Next.js": "#1e293b",
    AWS: "#2563eb",
    Gemini: "#0ea5e9",
    OpenAI: "#1e293b",
  };

  useEffect(() => {
    let phi = 0;
    let width = 0;

    if (!canvasRef.current) return;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const isDark = theme === "dark";

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: isDark ? 0.16 : 0.18,
      dark: isDark ? 1 : 0,
      diffuse: isDark ? 1.18 : 1.1,
      mapSamples: 42000,
      mapBrightness: isDark ? 32 : 4.1,
      baseColor: isDark ? [0.024, 0.03, 0.07] : [0.8, 0.84, 1],
      markerColor: isDark ? [0.38, 0.78, 1] : [0.15, 0.39, 0.92],
      glowColor: isDark ? [0.01, 0.018, 0.04] : [0.98, 0.98, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.08 },
        { location: [40.7128, -74.006], size: 0.08 },
        { location: [51.5074, -0.1278], size: 0.08 },
        { location: [35.6762, 139.6503], size: 0.08 },
        { location: [1.3521, 103.8198], size: 0.08 },
      ],
      onRender: (state) => {
        state.width = width * 2;
        state.height = width * 2;

        state.phi = isDark ? phi - 0.58 : phi - 0.7;
        phi += 0.005;

        techIcons.forEach((icon, i) => {
          const el = iconsRef.current[i];
          if (!el) return;

          const angle = icon.theta - phi;

          const x = 50 + Math.sin(angle) * icon.radiusX;
          const y = icon.centerY;
          const depth = Math.cos(angle);
          const isBehind = depth < 0;

          const scale = isBehind
            ? 0.42 + ((depth + 1) / 2) * 0.18
            : 0.82 + depth * 0.18;

          const opacity = isBehind
            ? 0.28 + ((depth + 1) / 2) * 0.18
            : 0.82 + depth * 0.18;

          el.style.left = `${x}%`;
          el.style.top = `${y}%`;
          el.style.transform = `translate(-50%, -50%) scale(${scale})`;
          el.style.opacity = opacity.toString();
          el.style.pointerEvents = "auto";
          el.style.zIndex = isBehind ? "0" : "20";
        });
      },
    });

    return () => {
      window.removeEventListener("resize", onResize);
      globe.destroy();
    };
  }, [theme]);

  return (
    <div className="w-full flex items-center justify-center px-4 py-3 lg:p-0">
      <div className="relative w-full max-w-[390px] md:max-w-[450px] lg:max-w-[520px] xl:max-w-[560px] aspect-square mx-auto">
        <div className="absolute -inset-[8%] bg-[radial-gradient(circle_at_48%_42%,rgba(59,130,246,0.18),rgba(14,165,233,0.10)_42%,transparent_70%)] blur-3xl dark:bg-[radial-gradient(circle_at_52%_48%,rgba(37,99,235,0.13),rgba(15,23,42,0.18)_44%,transparent_72%)]"></div>
        <div className="absolute inset-[2%] bg-[radial-gradient(circle,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.06)_48%,transparent_68%)] blur-2xl dark:bg-[radial-gradient(circle,rgba(30,41,59,0.12)_0%,rgba(15,23,42,0.06)_46%,transparent_68%)]"></div>
        <div className="absolute left-[18%] top-[18%] h-20 w-20 rounded-full bg-blue-200/32 blur-2xl dark:bg-blue-400/10"></div>
        <div className="absolute right-[16%] bottom-[18%] h-24 w-24 rounded-full bg-cyan-200/32 blur-2xl dark:bg-cyan-400/10"></div>
        <div className="absolute left-[13%] top-[23%] z-30 hidden rounded-full border border-blue-100 bg-white/85 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-blue-700 shadow-lg shadow-blue-200/50 backdrop-blur-md sm:block dark:hidden">
          AI ready
        </div>
        <div className="absolute bottom-[15%] right-[8%] z-30 hidden rounded-full border border-cyan-100 bg-white/85 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-cyan-700 shadow-lg shadow-cyan-200/50 backdrop-blur-md sm:block dark:hidden">
          Global delivery
        </div>
        <canvas
          ref={canvasRef}
          className="relative z-10 drop-shadow-[0_28px_42px_rgba(99,102,241,0.18)] dark:drop-shadow-[0_34px_56px_rgba(0,0,0,0.62)]"
          style={{
            width: "100%",
            height: "100%",
            contain: "layout paint size",
            maskImage: theme === "dark"
              ? "radial-gradient(circle at 50% 50%, black 0%, black 52%, rgba(0,0,0,0.72) 62%, rgba(0,0,0,0.24) 72%, transparent 82%)"
              : "radial-gradient(circle at 50% 50%, black 0%, black 38%, rgba(0,0,0,0.74) 47%, rgba(0,0,0,0.28) 55%, transparent 64%)",
            WebkitMaskImage: theme === "dark"
              ? "radial-gradient(circle at 50% 50%, black 0%, black 52%, rgba(0,0,0,0.72) 62%, rgba(0,0,0,0.24) 72%, transparent 82%)"
              : "radial-gradient(circle at 50% 50%, black 0%, black 38%, rgba(0,0,0,0.74) 47%, rgba(0,0,0,0.28) 55%, transparent 64%)",
          }}
        />

        {techIcons.map(({ name, Icon, color }, index) => (
          <div
            key={name}
            ref={(el) => {
              iconsRef.current[index] = el;
            }}
            className="absolute transition-opacity duration-300"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              opacity: 0,
            }}
          >
            <div
              title={name}
              className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-white/90 backdrop-blur-xl border border-white shadow-xl shadow-blue-200/45 ring-1 ring-blue-100/80 dark:border-white/10 dark:bg-slate-950/45 dark:shadow-black/40 dark:ring-white/5"
            >
              <Icon
                className="h-7 w-7 sm:h-8 sm:w-8 drop-shadow-[0_0_8px_rgba(99,102,241,0.28)]"
                style={{
                  color: theme === "dark" && (name === "Next.js" || name === "OpenAI") ? "#ffffff" : blendedIconColors[name] ?? color,
                }}
                aria-label={name}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

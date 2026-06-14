"use client";

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore } from "react";
import type { ReactNode } from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
    theme: Theme;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);
const THEME_CHANGE_EVENT = "theme-change";

function getStoredTheme(): Theme {
    if (typeof window === "undefined") {
        return "light";
    }

    const storedTheme = window.localStorage.getItem("theme");
    return storedTheme === "dark" || storedTheme === "light" ? storedTheme : "light";
}

function subscribeToThemeChanges(callback: () => void) {
    window.addEventListener("storage", callback);
    window.addEventListener(THEME_CHANGE_EVENT, callback);

    return () => {
        window.removeEventListener("storage", callback);
        window.removeEventListener(THEME_CHANGE_EVENT, callback);
    };
}

function applyTheme(theme: Theme) {
    document.documentElement.classList.toggle("dark", theme === "dark");
}

export function ThemeProvider({ children }: { children: ReactNode }) {
    const theme = useSyncExternalStore<Theme>(subscribeToThemeChanges, getStoredTheme, () => "light");

    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    const value = useMemo<ThemeContextValue>(() => ({
        theme,
        toggleTheme: () => {
            const nextTheme = getStoredTheme() === "dark" ? "light" : "dark";
            applyTheme(nextTheme);
            window.localStorage.setItem("theme", nextTheme);
            window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
        },
    }), [theme]);

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be used inside ThemeProvider");
    }

    return context;
}

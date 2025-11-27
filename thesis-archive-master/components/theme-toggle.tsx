"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const STORAGE_KEY = "thesis-archive-theme";

const readThemeFromDom = (): "light" | "dark" => {
  if (typeof document === "undefined") {
    return "light";
  }
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
};

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(readThemeFromDom);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const handleToggle = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const Icon = theme === "dark" ? SunIcon : MoonIcon;
  const label =
    theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      className="flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1.5 text-sm font-medium text-foreground shadow-sm transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      aria-label={label}
      onClick={handleToggle}
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
      <span>{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}


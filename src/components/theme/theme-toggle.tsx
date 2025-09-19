"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative rounded-full p-2.5 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <Sun className="absolute h-5 w-5 rotate-0 scale-100 transition-all duration-200 dark:rotate-90 dark:scale-0" />
        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-200 dark:rotate-0 dark:scale-100" />
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
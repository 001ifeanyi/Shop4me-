import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { trackEvent } from "../lib/utils";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={() => {
        toggleTheme();
        trackEvent("theme_toggled", { theme: theme === "light" ? "dark" : "light" });
      }}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-hover text-text-secondary transition-colors hover:bg-border"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </button>
  );
}

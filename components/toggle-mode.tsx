"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

export const ToggleMode = () => {
  const { setTheme, theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <Button variant="ghost" size="icon" onClick={() => setTheme(isDarkMode ? "light" : "dark")} aria-label="Toggle dark mode" className="text-black-500 hover:text-blue-800 transition-colors dark:text-blue-200 dark:hover:text-blue-500">
      {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
};

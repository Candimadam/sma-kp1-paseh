"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "./ui/button"
import { useTheme } from "next-themes"

export const ToggleMode = () => {
    const { setTheme, theme } = useTheme()
    const isDarkMode = theme === "dark"

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(isDarkMode ? "light" : "dark")}
            aria-label="Toggle dark mode"
            className="ml-2"
        >
            {isDarkMode ? (
                <Sun className="h-5 w-5" />
            ) : (
                <Moon className="h-5 w-5" />
            )}
        </Button>
    )
}
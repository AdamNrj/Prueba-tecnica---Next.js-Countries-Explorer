"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="sm"
        className="w-10 h-10 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-transparent"
      >
        <div className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group w-10 h-10 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-red-500 dark:hover:border-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-all duration-300 hover:scale-110"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 text-yellow-500 group-hover:text-yellow-600 transition-colors duration-300 group-hover:rotate-180 transform transition-transform duration-500" />
      ) : (
        <Moon className="h-4 w-4 text-blue-600 group-hover:text-blue-700 transition-colors duration-300 group-hover:-rotate-12 transform transition-transform duration-300" />
      )}
    </Button>
  );
}

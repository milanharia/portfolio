"use client";
import { Theme } from "@/types";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ThemeContext = createContext<{
  theme: Theme | null;
  toggleTheme: () => void;
}>({
  theme: null,
  toggleTheme() {
    return;
  },
});

export function ThemeProvider({ children }: PropsWithChildren<{}>) {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    // Check if theme is stored in local storage
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      setTheme(storedTheme === Theme.LIGHT ? Theme.LIGHT : Theme.DARK);
    } else {
      const systemPrefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(systemPrefersDark ? Theme.DARK : Theme.LIGHT);
    }
  }, []);

  useEffect(() => {
    if (theme === Theme.DARK) {
      localStorage.setItem("theme", Theme.DARK);
      document.querySelector("html")?.classList.add("dark");
    } else {
      localStorage.setItem("theme", Theme.LIGHT);
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  return ctx;
};

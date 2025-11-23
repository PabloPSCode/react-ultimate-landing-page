import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = window.localStorage.getItem("@theme") as Theme | null;
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)")
      .matches;
    const preferred = saved ?? (prefersLight ? "dark" : "light");

    setTheme(preferred);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready || typeof document === "undefined") return;

    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");

    if (typeof window !== "undefined") {
      window.localStorage.setItem("@theme", theme);
    }
  }, [theme, ready]);

  return { theme, setTheme };
};

export default useTheme;

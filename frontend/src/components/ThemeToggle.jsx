import { useEffect, useState } from "react";

const STORAGE_KEY = "theme";

// Light by default; dark only when the visitor has chosen it
function getInitialTheme() {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);
  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggle = () => {
    const next = isDark ? "light" : "dark";
    const root = document.documentElement;
    root.classList.add("theme-transition");
    window.setTimeout(() => root.classList.remove("theme-transition"), 350);
    try { localStorage.setItem(STORAGE_KEY, next); } catch { /* storage unavailable */ }
    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className="fixed z-50 flex items-center justify-center backdrop-blur-xl transition-colors bottom-4 right-4 lg:bottom-auto lg:top-6 lg:right-6 w-12 h-12 lg:w-14 lg:h-14"
      style={{
        background: "var(--nav-bg)",
        border: "1px solid var(--border)",
        borderRadius: "10px",
        color: "var(--text-2)",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.color = "#4f7cff"; }}
      onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-2)"; }}
    >
      {isDark ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      )}
    </button>
  );
}

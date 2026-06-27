import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const navRef = useRef(null);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Stack", href: "#stack" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Tap outside closes the menu on touch devices, where there's no
  // mouseleave to fall back on.
  useEffect(() => {
    if (!expanded) return;
    const handleOutsideTap = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setExpanded(false);
      }
    };
    document.addEventListener("touchstart", handleOutsideTap);
    return () => document.removeEventListener("touchstart", handleOutsideTap);
  }, [expanded]);

  const handleToggle = () => {
    // Only the collapsed dot needs a tap-to-open; once expanded, links
    // handle their own navigation and closing.
    if (!expanded) setExpanded(true);
  };

  return (
    <div className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 px-4 w-full sm:w-auto flex justify-center">
      <nav
        ref={navRef}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        onClick={handleToggle}
        className="
          group
          relative
          h-12
          sm:h-14
          bg-white/90
          backdrop-blur-xl
          border
          border-slate-200
          rounded-full
          shadow-lg
          overflow-hidden
          cursor-pointer
          transition-all
          duration-500
          ease-in-out
          hover:shadow-xl
          hover:border-blue-200
          max-w-full
        "
        style={{
          width: expanded ? "min(720px, 92vw)" : "52px",
          boxShadow: expanded
            ? "0 10px 30px rgba(37,99,235,0.12)"
            : "0 4px 16px rgba(37,99,235,0.10)",
        }}
      >
        {/* Center Dot — rest state */}
        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            pointer-events-none
          "
          style={{
            opacity: expanded ? 0 : 1,
            transition: "opacity 150ms ease",
          }}
        >
          <div className="relative w-7 h-7 flex items-center justify-center">
            {/* Slow orbiting ring */}
            <div
              className="absolute inset-0 rounded-full border border-blue-300"
              style={{
                borderStyle: "dashed",
                animation: "navbar-spin 6s linear infinite",
                opacity: 0.6,
              }}
            />
            {/* Soft breathing pulse */}
            <div
              className="absolute inset-0 rounded-full bg-blue-400"
              style={{ animation: "navbar-breathe 2.4s ease-in-out infinite" }}
            />
            {/* Core dot */}
            <div
              className="
                relative
                w-3
                h-3
                rounded-full
                bg-blue-600
                transition-transform
                duration-300
                group-hover:scale-125
              "
            />
          </div>
        </div>

        {/* Navigation Links — expanded state */}
        <div
          className="
            h-full
            flex
            items-center
            justify-center
            gap-1
            sm:gap-2
            px-4
            sm:px-6
            flex-nowrap
            overflow-x-auto
          "
          style={{
            opacity: expanded ? 1 : 0,
            transition: "opacity 250ms ease",
            transitionDelay: expanded ? "180ms" : "0ms",
          }}
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setExpanded(false)}
              className="
                px-3
                sm:px-5
                py-2
                rounded-full
                text-xs
                sm:text-sm
                font-medium
                text-slate-600
                whitespace-nowrap
                hover:text-blue-600
                hover:bg-blue-50
                transition-all
                duration-200
              "
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>

      <style>{`
        @keyframes navbar-breathe {
          0%, 100% { transform: scale(1); opacity: 0.35; }
          50% { transform: scale(1.8); opacity: 0; }
        }
        @keyframes navbar-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .group [style*="navbar-breathe"],
          .group [style*="navbar-spin"] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
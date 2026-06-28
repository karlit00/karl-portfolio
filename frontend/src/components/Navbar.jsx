import { useState, useEffect, useRef } from "react";
import useActiveSection from "../hooks/useActiveSection";

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const navRef = useRef(null);

  const links = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "About", href: "#about", id: "about" },
    { name: "Stack", href: "#techstack", id: "techstack" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const activeSection = useActiveSection(links.map((l) => l.id));

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
    if (!expanded) setExpanded(true);
  };

  return (
    <div className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 px-4 w-full sm:w-auto flex justify-center">
      <nav
        ref={navRef}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        onClick={handleToggle}
        className="group relative h-12 sm:h-14 backdrop-blur-xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out max-w-full"
        style={{
          width: expanded ? "min(780px, 92vw)" : "52px",
          background: "rgba(250,250,250,0.9)",
          border: "1px solid #e4e4e7",
          borderRadius: "10px",
        }}
      >
        {/* Rest state — corner brackets around a single blue dot, same motif used across the site */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ opacity: expanded ? 0 : 1, transition: "opacity 150ms ease" }}
        >
          <div className="relative w-6 h-6 flex items-center justify-center">
            {[
              { top: "-2px", left: "-2px", borderWidth: "1.5px 0 0 1.5px" },
              { top: "-2px", right: "-2px", borderWidth: "1.5px 1.5px 0 0" },
              { bottom: "-2px", left: "-2px", borderWidth: "0 0 1.5px 1.5px" },
              { bottom: "-2px", right: "-2px", borderWidth: "0 1.5px 1.5px 0" },
            ].map((pos, i) => (
              <span
                key={i}
                className="absolute"
                style={{
                  width: "8px",
                  height: "8px",
                  borderColor: "#d4d4d8",
                  borderStyle: "solid",
                  transition: "border-color 200ms ease",
                  ...pos,
                }}
              />
            ))}
            <div
              className="relative w-2 h-2 rounded-full transition-transform duration-300 group-hover:scale-125"
              style={{ background: "#4f7cff" }}
            />
          </div>
        </div>

        {/* Navigation links — expanded state */}
        <div
          className="h-full flex items-center justify-center flex-nowrap overflow-x-auto font-mono"
          style={{
            opacity: expanded ? 1 : 0,
            transition: "opacity 250ms ease",
            transitionDelay: expanded ? "180ms" : "0ms",
            padding: "0 20px",
            gap: "4px",
          }}
        >
          {links.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setExpanded(false)}
                className="whitespace-nowrap transition-colors"
                style={{
                  fontSize: "13px",
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? "#4f7cff" : "#71717a",
                  background: isActive ? "#f4f4f5" : "transparent",
                  padding: "8px 18px",
                  borderRadius: "6px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#4f7cff";
                  e.currentTarget.style.background = "#f4f4f5";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isActive ? "#4f7cff" : "#71717a";
                  e.currentTarget.style.background = isActive ? "#f4f4f5" : "transparent";
                }}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
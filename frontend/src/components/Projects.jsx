import { useState, useEffect } from "react";
import ht1 from "../assets/ht1.jpg";
import ht2 from "../assets/ht2.jpg";
import ht3 from "../assets/ht3.jpg";
import ht4 from "../assets/ht4.jpg";
import ht5 from "../assets/ht5.jpg";
import ht6 from "../assets/ht6.jpg";
import ht7 from "../assets/ht7.jpg";
import ht8 from "../assets/ht8.jpg";
import pi1 from "../assets/pi1.jpg";
import pi2 from "../assets/pi2.jpg";
import pi3 from "../assets/pi3.jpg";
import pi4 from "../assets/pi4.jpg";
import pi5 from "../assets/pi5.jpg";
import pi6 from "../assets/pi6.jpg";
import pi7 from "../assets/pi7.jpg";
import pi8 from "../assets/pi8.jpg";
import pi9 from "../assets/pi9.jpg";
import tv1 from "../assets/tv1.jpg";
import tv2 from "../assets/tv2.jpg";
import tv3 from "../assets/tv3.jpg";
import tv4 from "../assets/tv4.jpg";
import tv5 from "../assets/tv5.jpg";
import tv6 from "../assets/tv6.jpg";

const projects = [
  {
    title: "Hometail",
    subtitle: "Las Pinas City Stray Animal Reporting App",
    tags: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    cover: ht1,
    screenshots: [ht1, ht2, ht3, ht4, ht5, ht6, ht7, ht8],
    description:
      "A full-stack web and mobile application designed to optimize stray animal reporting and management for Las Piñas City LGU. Features an admin dashboard with descriptive and prescriptive analytics for city-wide decision-making.",
    role: "System Analyst & Fullstack Developer",
    period: "March 2025 – October 2025",
  },
  {
    title: "Paladin Insurance",
    subtitle: "Corporate Website for Wilshire Financial Network",
    tags: ["Fullstack", "Admin Dashboard", "Contact Forms"],
    cover: pi1,
    screenshots: [pi1, pi2, pi3, pi4, pi5, pi6, pi7, pi8, pi9],
    description:
      "A modern, responsive corporate website for Paladin Insurance under Wilshire Financial Network. Includes contact forms, quotation request management, dynamic content administration, and a secure admin dashboard.",
    role: "Fullstack Web Developer",
    period: "May 2026 – June 2026",
  },
  {
    title: "Tinkventory",
    subtitle: "Inventory and POS System",
    tags: ["Inventory", "POS", "Fullstack"],
    cover: tv1,
    screenshots: [tv1, tv2, tv3, tv4, tv5, tv6],
    description:
      "A full-featured inventory and point-of-sale system designed to streamline product management, sales tracking, and business operations with a clean and intuitive interface.",
    role: "Fullstack Developer",
    period: "2025",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [currentImg, setCurrentImg] = useState(0);

  const openModal = (project) => {
    setSelected(project);
    setCurrentImg(0);
  };

  const closeModal = () => setSelected(null);

  const prev = () => setCurrentImg((i) => (i - 1 + selected.screenshots.length) % selected.screenshots.length);
  const next = () => setCurrentImg((i) => (i + 1) % selected.screenshots.length);

  useEffect(() => {
    const onKey = (e) => {
      if (!selected) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected, currentImg]);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <section
      id="projects"
      className="relative overflow-hidden"
      style={{ background: "#fafafa", padding: "clamp(64px, 12vw, 112px) clamp(20px, 5vw, 48px)" }}
    >
      {/* Dot-grid texture, consistent with Hero, About, and TechStack */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #e4e4e7 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.6,
        }}
      />

      <div className="relative z-10" style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Section label — plain mono gray, no pill, matches the rest of the site */}
        <p
          className="font-mono uppercase"
          style={{
            fontSize: "14px",
            letterSpacing: "0.08em",
            color: "#a1a1aa",
            marginBottom: "32px",
          }}
        >
          Projects
        </p>

        {/* Gallery grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "24px" }}
        >
          {projects.map((project) => (
            <div
              key={project.title}
              onClick={() => openModal(project)}
              className="group cursor-pointer overflow-hidden transition-transform hover:-translate-y-1"
              style={{
                background: "#ffffff",
                border: "1px solid #e4e4e7",
                borderRadius: "10px",
                minWidth: 0,
              }}
            >
              {/* Cover image */}
              <div className="relative overflow-hidden" style={{ height: "clamp(160px, 32vw, 210px)" }}>
                <img
                  src={project.cover}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

                {/* Corner brackets — same hover motif used across the site */}
                {[
                  { top: "10px", left: "10px", borderWidth: "2px 0 0 2px" },
                  { top: "10px", right: "10px", borderWidth: "2px 2px 0 0" },
                  { bottom: "10px", left: "10px", borderWidth: "0 0 2px 2px" },
                  { bottom: "10px", right: "10px", borderWidth: "0 2px 2px 0" },
                ].map((pos, i) => (
                  <span
                    key={i}
                    className="absolute opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      width: "16px",
                      height: "16px",
                      borderColor: "#ffffff",
                      borderStyle: "solid",
                      ...pos,
                    }}
                  />
                ))}

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className="font-mono flex items-center gap-1.5"
                    style={{
                      fontSize: "12px",
                      color: "#0a0a0b",
                      background: "#ffffff",
                      padding: "8px 16px",
                      borderRadius: "6px",
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                    </svg>
                    View screenshots
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div style={{ padding: "clamp(18px, 4vw, 24px)" }}>
                <div style={{ marginBottom: "12px" }}>
                  <h3 className="font-semibold" style={{ fontSize: "16px", color: "#0a0a0b", marginBottom: "4px" }}>
                    {project.title}
                  </h3>
                  <p className="font-mono" style={{ fontSize: "11px", color: "#a1a1aa" }}>{project.subtitle}</p>
                </div>
                <p className="line-clamp-2" style={{ fontSize: "14px", lineHeight: 1.7, color: "#71717a", marginBottom: "20px" }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap" style={{ gap: "6px" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono"
                      style={{
                        fontSize: "11px",
                        padding: "4px 10px",
                        borderRadius: "6px",
                        background: "#f4f4f5",
                        border: "1px solid #e4e4e7",
                        color: "#52525b",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(10,10,11,0.7)", backdropFilter: "blur(6px)", padding: "16px" }}
          onClick={closeModal}
        >
          <div
            className="relative overflow-y-auto w-full"
            style={{
              background: "#ffffff",
              border: "1px solid #e4e4e7",
              borderRadius: "16px",
              maxHeight: "92vh",
              maxWidth: "896px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute z-10 flex items-center justify-center transition-colors"
              style={{
                top: "16px",
                right: "16px",
                width: "32px",
                height: "32px",
                background: "#ffffff",
                border: "1px solid #e4e4e7",
                borderRadius: "8px",
                color: "#a1a1aa",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Screenshot viewer */}
            <div className="relative" style={{ height: "clamp(240px, 55vw, 420px)", background: "#f4f4f5" }}>
              <img
                src={selected.screenshots[currentImg]}
                alt={`${selected.title} screenshot ${currentImg + 1}`}
                className="w-full h-full object-cover"
              />

              {selected.screenshots.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center transition-colors"
                    style={{
                      left: "clamp(8px, 2vw, 16px)",
                      width: "clamp(32px, 6vw, 40px)",
                      height: "clamp(32px, 6vw, 40px)",
                      background: "#ffffff",
                      border: "1px solid #e4e4e7",
                      borderRadius: "8px",
                      color: "#0a0a0b",
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <button
                    onClick={next}
                    className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center transition-colors"
                    style={{
                      right: "clamp(8px, 2vw, 16px)",
                      width: "clamp(32px, 6vw, 40px)",
                      height: "clamp(32px, 6vw, 40px)",
                      background: "#ffffff",
                      border: "1px solid #e4e4e7",
                      borderRadius: "8px",
                      color: "#0a0a0b",
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </>
              )}

              {/* Counter */}
              <div
                className="absolute font-mono"
                style={{
                  top: "16px",
                  left: "16px",
                  fontSize: "11px",
                  padding: "6px 12px",
                  borderRadius: "6px",
                  background: "rgba(10,10,11,0.75)",
                  color: "#fafafa",
                }}
              >
                {currentImg + 1} / {selected.screenshots.length}
              </div>

              {/* Dot indicators — active dot uses the single blue accent */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex" style={{ gap: "6px" }}>
                {selected.screenshots.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImg(i)}
                    className="transition-all"
                    style={{
                      width: i === currentImg ? "20px" : "6px",
                      height: "6px",
                      borderRadius: "3px",
                      background: i === currentImg ? "#4f7cff" : "rgba(255,255,255,0.5)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Modal info */}
            <div style={{ padding: "clamp(20px, 5vw, 32px)" }}>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between" style={{ gap: "16px", marginBottom: "16px" }}>
                <div style={{ minWidth: 0 }}>
                  <h3 className="font-bold" style={{ fontSize: "22px", color: "#0a0a0b", letterSpacing: "-0.02em", marginBottom: "6px" }}>
                    {selected.title}
                  </h3>
                  <p className="font-mono" style={{ fontSize: "12px", color: "#a1a1aa" }}>{selected.subtitle}</p>
                </div>
                <div className="sm:text-right flex-shrink-0">
                  <div className="font-mono" style={{ fontSize: "12px", color: "#4f7cff" }}>{selected.role}</div>
                  <div className="font-mono" style={{ fontSize: "11px", color: "#a1a1aa", marginTop: "4px" }}>{selected.period}</div>
                </div>
              </div>
              <p style={{ fontSize: "14px", lineHeight: 1.75, color: "#71717a", marginBottom: "20px" }}>
                {selected.description}
              </p>
              <div className="flex flex-wrap" style={{ gap: "6px" }}>
                {selected.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono"
                    style={{
                      fontSize: "11px",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      background: "#f4f4f5",
                      border: "1px solid #e4e4e7",
                      color: "#52525b",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
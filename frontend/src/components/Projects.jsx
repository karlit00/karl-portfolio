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
      className="relative py-28 px-8 md:px-12 overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      {/* Blobs */}
      <div className="absolute -top-40 -right-36 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "rgba(37,99,235,0.05)" }} />
      <div className="absolute -bottom-28 -left-24 w-[360px] h-[360px] rounded-full pointer-events-none" style={{ background: "rgba(37,99,235,0.03)" }} />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section label */}
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold tracking-[0.08em] uppercase px-4 py-2 rounded-full border border-blue-200 mb-10">
          <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
          Projects
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              onClick={() => openModal(project)}
              className="group cursor-pointer bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl hover:border-blue-200"
              style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
            >
              {/* Cover image */}
              <div className="relative overflow-hidden" style={{ height: "200px" }}>
                <img
                  src={project.cover}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white text-blue-600 text-xs font-semibold px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                    </svg>
                    View Screenshots
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5">
                <div className="mb-3">
                  <h3 className="font-semibold text-base mb-0.5" style={{ color: "var(--black)" }}>{project.title}</h3>
                  <p className="text-xs text-slate-400">{project.subtitle}</p>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-medium px-2.5 py-1 rounded-md">
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(6px)" }}
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-3xl overflow-hidden w-full max-w-4xl"
            style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.3)", maxHeight: "90vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-700 transition-colors"
              style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Screenshot viewer */}
            <div className="relative bg-slate-100" style={{ height: "420px" }}>
              <img
                src={selected.screenshots[currentImg]}
                alt={`${selected.title} screenshot ${currentImg + 1}`}
                className="w-full h-full object-cover"
              />

              {selected.screenshots.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-600 hover:text-blue-600 transition-colors"
                    style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.15)" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-600 hover:text-blue-600 transition-colors"
                    style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.15)" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </>
              )}

              {/* Counter */}
              <div
                className="absolute top-4 left-4 text-xs font-medium px-3 py-1.5 rounded-full"
                style={{ background: "rgba(0,0,0,0.45)", color: "white" }}
              >
                {currentImg + 1} / {selected.screenshots.length}
              </div>

              {/* Dot indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                {selected.screenshots.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImg(i)}
                    className="rounded-full transition-all"
                    style={{
                      width: i === currentImg ? "20px" : "6px",
                      height: "6px",
                      background: i === currentImg ? "white" : "rgba(255,255,255,0.45)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Modal info */}
            <div className="p-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="font-bold text-xl mb-0.5" style={{ color: "var(--black)", letterSpacing: "-0.02em" }}>{selected.title}</h3>
                  <p className="text-slate-400 text-sm">{selected.subtitle}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-xs text-blue-600 font-medium">{selected.role}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{selected.period}</div>
                </div>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{selected.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {selected.tags.map((tag) => (
                  <span key={tag} className="bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-medium px-2.5 py-1 rounded-md">
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
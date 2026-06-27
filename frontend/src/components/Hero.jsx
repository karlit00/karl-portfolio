import heropic from '../assets/heropic.jpg';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-8 md:px-12 py-28 overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      {/* Blobs */}
      <div className="absolute -top-40 -right-36 w-[560px] h-[560px] rounded-full pointer-events-none" style={{ background: "rgba(37,99,235,0.06)" }} />
      <div className="absolute -bottom-28 -left-24 w-[360px] h-[360px] rounded-full pointer-events-none" style={{ background: "rgba(37,99,235,0.04)" }} />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-[72px] items-center max-w-7xl mx-auto w-full">

        {/* Left */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold tracking-[0.08em] uppercase px-4 py-2 rounded-full border border-blue-200 mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse flex-shrink-0" />
            Available for work
          </div>

          {/* Heading */}
          <h1
            className="font-bold leading-[1.08] mb-6"
            style={{ fontSize: "clamp(36px, 4.8vw, 56px)", letterSpacing: "-0.03em", color: "var(--black)" }}
          >
            Hi! This is{" "}
            <span className="gradient-text">Karl Gabutero</span>,
            <br />
            a Fullstack Website
            <br />
            and Mobile Developer.
          </h1>

          {/* Sub */}
          <p className="text-slate-500 text-[17px] leading-[1.8] mb-10" style={{ maxWidth: "400px" }}>
            Crafting{" "}
            <strong style={{ color: "var(--text)", fontWeight: 500 }}>clean, performant apps</strong>
            {" "}across web and mobile — from API design to pixel-perfect UIs.
          </p>

          {/* Stack chips */}
          <div className="flex flex-wrap gap-2 mb-10">
            {["React", "React Native", "Node.js", "Tailwind CSS", "MongoDB", "ExpressJS"].map((tech) => (
              <span
                key={tech}
                className="bg-white border border-slate-200 text-slate-500 text-xs font-medium px-3 py-1.5 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3.5 mb-12">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-white text-sm font-medium rounded-[10px] transition-all hover:-translate-y-px active:translate-y-0"
              style={{
                background: "var(--primary)",
                padding: "14px 32px",
                boxShadow: "0 4px 20px rgba(37,99,235,0.3)",
                textDecoration: "none",
              }}
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium rounded-[10px] border border-slate-200 bg-white transition-all hover:border-blue-500 hover:text-blue-600 hover:-translate-y-px active:translate-y-0"
              style={{
                color: "var(--black)",
                padding: "14px 32px",
                textDecoration: "none",
              }}
            >
              Contact Me
            </a>
          </div>

          {/* Stats */}
          <div className="flex border-t border-slate-200 pt-8">
            {[
              { num: "2+", label: "Years experience" },
              { num: "5+", label: "Projects shipped" },
              { num: "∞", label: "Coffee consumed" },
            ].map(({ num, label }, i) => (
              <div
                key={label}
                className="flex-1"
                style={{
                  paddingRight: "24px",
                  paddingLeft: i > 0 ? "24px" : 0,
                  borderLeft: i > 0 ? "1px solid #e2e8f0" : "none",
                }}
              >
                <div className="font-bold mb-1.5" style={{ fontSize: "26px", letterSpacing: "-0.03em", color: "var(--black)" }}>
                  {num}
                </div>
                <div className="text-xs text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — image */}
        <div className="relative flex items-center justify-center">
          <div className="absolute rounded-full border border-dashed border-blue-200" style={{ inset: "-22px" }} />
          <div className="absolute rounded-full border border-dashed border-blue-100 opacity-45" style={{ inset: "-46px" }} />

          <img
            src={heropic}
            alt="Karl Gabutero"
            className="w-[340px] h-[340px] md:w-[380px] md:h-[380px] rounded-full object-cover"
            style={{
              border: "5px solid white",
              boxShadow: "0 16px 48px rgba(37,99,235,0.16)",
            }}
          />
        </div>

      </div>
    </section>
  );
}
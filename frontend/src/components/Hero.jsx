import heropic from '../assets/heropic.jpg';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      {/* Blobs */}
      <div
        className="absolute -top-40 -right-36 w-[280px] sm:w-[420px] md:w-[560px] h-[280px] sm:h-[420px] md:h-[560px] rounded-full pointer-events-none"
        style={{ background: "rgba(37,99,235,0.06)" }}
      />
      <div
        className="absolute -bottom-28 -left-24 w-[200px] sm:w-[280px] md:w-[360px] h-[200px] sm:h-[280px] md:h-[360px] rounded-full pointer-events-none"
        style={{ background: "rgba(37,99,235,0.04)" }}
      />

      {/* Inner container — padding via inline style to avoid global CSS conflicts */}
      <div
        className="relative z-10 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] items-center w-full"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "80px 48px",
          gap: "80px",
        }}
      >
        {/* Left content */}
        <div className="order-2 md:order-1 text-center md:text-left" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold tracking-[0.08em] uppercase rounded-full border border-blue-200"
            style={{ padding: "8px 16px", marginBottom: "32px" }}
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse flex-shrink-0" />
            Available for work
          </div>

          {/* Heading */}
          <h1
            className="font-bold"
            style={{
              fontSize: "clamp(32px, 5.5vw, 58px)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "var(--black)",
              marginBottom: "28px",
            }}
          >
            Hi! This is{" "}
            <span className="gradient-text">Karl Gabutero</span>,
            <br />
            a Fullstack Website
            <br />
            and Mobile Developer.
          </h1>

          {/* Subtext */}
          <p
            className="text-slate-500"
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              maxWidth: "420px",
              marginBottom: "36px",
            }}
          >
            Crafting{" "}
            <strong style={{ color: "var(--text)", fontWeight: 500 }}>clean, performant apps</strong>
            {" "}across web and mobile — from API design to pixel-perfect UIs.
          </p>

          {/* Stack chips */}
          <div
            className="flex flex-wrap justify-start"
            style={{ gap: "8px", marginBottom: "36px" }}
          >
            {["React", "React Native", "Node.js", "Tailwind CSS", "MongoDB", "ExpressJS"].map((tech) => (
              <span
                key={tech}
                className="bg-white border border-slate-200 text-slate-500 font-medium rounded-md"
                style={{ fontSize: "12px", padding: "7px 14px" }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div
            className="flex flex-wrap"
            style={{ gap: "12px", marginBottom: "52px" }}
          >
            <a
              href="#projects"
              className="inline-flex items-center text-white font-medium rounded-[10px] transition-all hover:-translate-y-px active:translate-y-0"
              style={{
                background: "var(--primary)",
                padding: "14px 28px",
                fontSize: "14px",
                boxShadow: "0 4px 20px rgba(37,99,235,0.3)",
                textDecoration: "none",
              }}
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="inline-flex items-center font-medium rounded-[10px] border border-slate-200 bg-white transition-all hover:border-blue-500 hover:text-blue-600 hover:-translate-y-px active:translate-y-0"
              style={{
                color: "var(--black)",
                padding: "14px 28px",
                fontSize: "14px",
                textDecoration: "none",
              }}
            >
              Contact Me
            </a>
          </div>

          {/* Stats */}
          <div
            className="flex border-t border-slate-200 w-full"
            style={{ paddingTop: "36px" }}
          >
            {[
              { num: "5+", label: "Years experience" },
              { num: "12+", label: "Projects shipped" },
              { num: "∞", label: "Coffee consumed" },
            ].map(({ num, label }, i) => (
              <div
                key={label}
                style={{
                  flex: 1,
                  paddingRight: "28px",
                  paddingLeft: i > 0 ? "28px" : 0,
                  borderLeft: i > 0 ? "1px solid #e2e8f0" : "none",
                }}
              >
                <div
                  className="font-bold"
                  style={{
                    fontSize: "clamp(22px, 3vw, 28px)",
                    letterSpacing: "-0.03em",
                    color: "var(--black)",
                    marginBottom: "6px",
                  }}
                >
                  {num}
                </div>
                <div style={{ fontSize: "12px", color: "#94a3b8" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — image */}
        <div className="order-1 md:order-2 relative flex items-center justify-center">
          <div className="absolute rounded-full border border-dashed border-blue-200" style={{ inset: "-20px" }} />
          <div className="absolute rounded-full border border-dashed border-blue-100 opacity-45" style={{ inset: "-40px" }} />

          <img
            src={heropic}
            alt="Karl Gabutero"
            className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] lg:w-[390px] lg:h-[390px] rounded-full object-cover"
            style={{
              border: "5px solid white",
              boxShadow: "0 20px 56px rgba(37,99,235,0.18)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
export default function About() {
  const expertise = [
    "Fullstack Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Quality Assurance",
    "Database Management",
    "API Integration",
    "Research",
    "Information Systems Development",
  ];

  const experiences = [
    {
      company: "Wilshire Financial Network LLC.",
      role: "Fullstack Web Developer Intern",
      location: "Beverly Hills, California, USA",
      period: "May 2026 – June 2026",
      desc: "Designed and developed a full-stack corporate website for Paladin Insurance — built contact forms, quotation request management, dynamic content admin, and a secure administrative dashboard.",
    },
    {
      company: "Eternal Bright Sanctuary Inc.",
      role: "Fullstack Web Developer Intern",
      location: "Quezon City, Philippines",
      period: "March 2026 – May 2026",
      desc: "Built a payroll management system using Laravel, PHP, and MySQL — handled UI design, frontend/backend development, and database optimization for accurate payroll processing.",
    },
    {
      company: "Phoenix Petroleum Philippines Inc.",
      role: "IT Technical Support Intern",
      location: "Taguig, Philippines",
      period: "December 2025 – March 2026",
      desc: "Provided technical support, laptop maintenance, network troubleshooting, and AV equipment management across Phoenix Petroleum and Udenna Tower in BGC.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden"
      style={{ background: "#fafafa", padding: "clamp(64px, 12vw, 112px) clamp(20px, 5vw, 48px)" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap');

        .exp-card {
          background: #ffffff;
          border: 1px solid #e4e4e7;
          border-radius: 10px;
          padding: clamp(20px, 4vw, 28px);
          gap: 20px;
          min-width: 0;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          cursor: default;
          transition:
            transform 0.22s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.22s cubic-bezier(0.22, 1, 0.36, 1),
            border-color 0.22s ease;
        }

        .exp-card::before {
          content: '';
          position: absolute;
          inset: 0 auto 0 0;
          width: 3px;
          background: #4f7cff;
          border-radius: 10px 0 0 10px;
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .exp-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px -8px rgba(79, 124, 255, 0.14), 0 2px 8px -2px rgba(0,0,0,0.06);
          border-color: #c7d4ff;
        }

        .exp-card:hover::before {
          transform: scaleY(1);
          transform-origin: top;
        }

        @media (prefers-reduced-motion: reduce) {
          .exp-card,
          .exp-card::before {
            transition: none;
          }
        }
      `}</style>

      {/* Dot-grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #e4e4e7 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.6,
        }}
      />

      <div className="relative z-10" style={{ maxWidth: "1280px", margin: "0 auto" }}>

        <p
          className="font-mono uppercase"
          style={{
            fontSize: "14px",
            letterSpacing: "0.08em",
            color: "#a1a1aa",
            marginBottom: "18px",
          }}
        >
          About me
        </p>

        <h2
          className="font-bold"
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            color: "#0a0a0b",
            marginBottom: "24px",
          }}
        >
          Passionate about building{" "}
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#4f7cff" }}>
            digital experiences.
          </span>
        </h2>

        <p
          style={{
            fontSize: "15px",
            lineHeight: 1.75,
            color: "#71717a",
            maxWidth: "620px",
            width: "100%",
            marginBottom: "clamp(48px, 8vw, 72px)",
          }}
        >
          A self-motivated and detail-oriented developer with strong leadership, creativity,
          and problem-solving skills. Skilled in full-stack web and mobile development,
          UI/UX design, and database management — dedicated to delivering user-centered
          digital solutions that are both performant and beautiful.
        </p>

        {/* Experience */}
        <div style={{ marginBottom: "clamp(56px, 9vw, 80px)" }}>
          <p
            className="font-mono uppercase"
            style={{ fontSize: "11px", letterSpacing: "0.08em", color: "#a1a1aa", marginBottom: "28px" }}
          >
            Professional experience
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "24px" }}>
            {experiences.map(({ company, role, location, period, desc }, i) => (
              <div key={i} className="exp-card">
                <div>
                  <div className="font-semibold" style={{ fontSize: "14px", color: "#0a0a0b", marginBottom: "6px" }}>
                    {company}
                  </div>
                  <div className="font-mono" style={{ fontSize: "12px", color: "#4f7cff" }}>{role}</div>
                </div>
                <p className="flex-1" style={{ fontSize: "13px", lineHeight: 1.7, color: "#71717a" }}>{desc}</p>
                <div
                  style={{
                    borderTop: "1px solid #e4e4e7",
                    paddingTop: "16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <div className="font-mono" style={{ fontSize: "11px", color: "#a1a1aa" }}>{period}</div>
                  <div className="font-mono" style={{ fontSize: "11px", color: "#a1a1aa" }}>{location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise + Education */}
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "clamp(40px, 8vw, 64px)" }}>
          <div style={{ minWidth: 0 }}>
            <p
              className="font-mono uppercase"
              style={{ fontSize: "11px", letterSpacing: "0.08em", color: "#a1a1aa", marginBottom: "20px" }}
            >
              Area of expertise
            </p>
            <div className="flex flex-wrap" style={{ gap: "8px" }}>
              {expertise.map((item) => (
                <span
                  key={item}
                  className="font-mono"
                  style={{
                    fontSize: "12px",
                    padding: "6px 12px",
                    borderRadius: "6px",
                    background: "#f4f4f5",
                    border: "1px solid #e4e4e7",
                    color: "#52525b",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div style={{ minWidth: 0 }}>
            <p
              className="font-mono uppercase"
              style={{ fontSize: "11px", letterSpacing: "0.08em", color: "#a1a1aa", marginBottom: "20px" }}
            >
              Education
            </p>
            <div
              className="relative"
              style={{
                background: "#ffffff",
                border: "1px solid #e4e4e7",
                borderRadius: "10px",
                padding: "clamp(18px, 4vw, 24px)",
              }}
            >
              {[
                { top: "-7px", left: "-7px", borderWidth: "2px 0 0 2px" },
                { top: "-7px", right: "-7px", borderWidth: "2px 2px 0 0" },
                { bottom: "-7px", left: "-7px", borderWidth: "0 0 2px 2px" },
                { bottom: "-7px", right: "-7px", borderWidth: "0 2px 2px 0" },
              ].map((pos, i) => (
                <span
                  key={i}
                  className="absolute"
                  style={{
                    width: "16px",
                    height: "16px",
                    borderColor: "#4f7cff",
                    borderStyle: "solid",
                    ...pos,
                  }}
                />
              ))}
              <div
                className="font-mono uppercase"
                style={{ fontSize: "11px", letterSpacing: "0.08em", color: "#4f7cff", marginBottom: "10px" }}
              >
                Undergraduate
              </div>
              <div className="font-semibold" style={{ fontSize: "14px", color: "#0a0a0b", marginBottom: "6px" }}>
                National University – Manila
              </div>
              <div style={{ fontSize: "13px", color: "#71717a", marginBottom: "6px" }}>
                B.S. Information Technology — Web &amp; Mobile Applications
              </div>
              <div style={{ fontSize: "12px", color: "#a1a1aa" }}>2022 – Expected September 2026</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
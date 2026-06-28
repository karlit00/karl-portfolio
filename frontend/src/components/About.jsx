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
      style={{ background: "#fafafa", padding: "112px 48px" }}
    >
      {/* Loads the display font used for the heading accent — same as Hero */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap');
      `}</style>

      {/* Dot-grid texture, consistent with Hero */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #e4e4e7 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.6,
        }}
      />

      <div className="relative z-10" style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Section label — quiet mono, no pill, matches Hero's label treatment */}
        <p
          className="font-mono uppercase"
          style={{
            fontSize: "12px",
            letterSpacing: "0.08em",
            color: "#a1a1aa",
            marginBottom: "18px",
          }}
        >
          About me
        </p>

        {/* Heading — Space Grotesk on the key phrase instead of a gradient span */}
        <h2
          className="font-bold"
          style={{
            fontSize: "clamp(30px, 4vw, 48px)",
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

        {/* Bio */}
        <p
          style={{
            fontSize: "15px",
            lineHeight: 1.75,
            color: "#71717a",
            maxWidth: "620px",
            marginBottom: "72px",
          }}
        >
          A self-motivated and detail-oriented developer with strong leadership, creativity,
          and problem-solving skills. Skilled in full-stack web and mobile development,
          UI/UX design, and database management — dedicated to delivering user-centered
          digital solutions that are both performant and beautiful.
        </p>

        {/* Experience — bordered gray cards, blue used once per card for the role */}
        <div style={{ marginBottom: "80px" }}>
          <p
            className="font-mono uppercase"
            style={{ fontSize: "11px", letterSpacing: "0.08em", color: "#a1a1aa", marginBottom: "28px" }}
          >
            Professional experience
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "24px" }}>
            {experiences.map(({ company, role, location, period, desc }, i) => (
              <div
                key={i}
                className="flex flex-col"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e4e4e7",
                  borderRadius: "10px",
                  padding: "28px",
                  gap: "20px",
                }}
              >
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

        {/* Expertise + Education — same quiet chip treatment as Hero's stack line, demoted to gray */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: "64px" }}
        >
          {/* Expertise */}
          <div>
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

          {/* Education — clean bordered card with the corner-bracket signature, no gradient */}
          <div>
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
                padding: "24px",
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
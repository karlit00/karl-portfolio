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
      style={{ background: "var(--background)", padding: "112px 48px" }}
    >
      {/* Subtle blobs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "rgba(37,99,235,0.04)" }} />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full pointer-events-none" style={{ background: "rgba(37,99,235,0.03)" }} />

      <div className="relative z-10" style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Section label */}
        <div
          className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold tracking-[0.08em] uppercase rounded-full border border-blue-200"
          style={{ padding: "8px 16px", marginBottom: "24px" }}
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
          About Me
        </div>

        {/* Heading */}
        <h2
          className="font-bold"
          style={{
            fontSize: "clamp(32px, 4vw, 52px)",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            color: "var(--black)",
            marginBottom: "24px",
          }}
        >
          Passionate about building{" "}
          <span className="gradient-text">digital experiences.</span>
        </h2>

        {/* Bio */}
        <p
          className="text-slate-500"
          style={{ fontSize: "17px", lineHeight: 1.8, maxWidth: "640px", marginBottom: "72px" }}
        >
          A self-motivated and detail-oriented developer with strong leadership, creativity,
          and problem-solving skills. Skilled in full-stack web and mobile development,
          UI/UX design, and database management — dedicated to delivering user-centered
          digital solutions that are both performant and beautiful.
        </p>

        {/* Expertise + Education */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: "64px", marginBottom: "80px" }}
        >
          {/* Expertise */}
          <div>
            <h3
              className="font-semibold text-slate-400 uppercase tracking-[0.08em]"
              style={{ fontSize: "12px", marginBottom: "20px" }}
            >
              Area of Expertise
            </h3>
            <div className="flex flex-wrap" style={{ gap: "8px" }}>
              {expertise.map((item) => (
                <span
                  key={item}
                  className="bg-white border border-slate-200 text-slate-500 font-medium rounded-md"
                  style={{ fontSize: "12px", padding: "7px 14px" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3
              className="font-semibold text-slate-400 uppercase tracking-[0.08em]"
              style={{ fontSize: "12px", marginBottom: "20px" }}
            >
              Education
            </h3>
            <div
              className="rounded-2xl border border-blue-100"
              style={{
                background: "linear-gradient(140deg, #eff6ff, #dbeafe22)",
                padding: "24px",
              }}
            >
              <div
                className="font-semibold uppercase tracking-[0.08em] text-blue-400"
                style={{ fontSize: "11px", marginBottom: "10px" }}
              >
                Undergraduate
              </div>
              <div className="font-semibold" style={{ fontSize: "14px", color: "var(--black)", marginBottom: "6px" }}>
                National University – Manila
              </div>
              <div className="text-slate-500" style={{ fontSize: "13px", marginBottom: "6px" }}>
                B.S. Information Technology — Web & Mobile Applications
              </div>
              <div className="text-slate-400" style={{ fontSize: "12px" }}>2022 – Expected September 2026</div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3
            className="font-semibold text-slate-400 uppercase tracking-[0.08em]"
            style={{ fontSize: "12px", marginBottom: "28px" }}
          >
            Professional Experience
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "24px" }}>
            {experiences.map(({ company, role, location, period, desc }, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl flex flex-col"
                style={{ padding: "28px", gap: "20px", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
              >
                <div>
                  <div className="font-semibold" style={{ fontSize: "14px", color: "var(--black)", marginBottom: "6px" }}>
                    {company}
                  </div>
                  <div className="text-blue-600 font-medium" style={{ fontSize: "12px" }}>{role}</div>
                </div>
                <p className="text-slate-500 flex-1" style={{ fontSize: "13px", lineHeight: 1.7 }}>{desc}</p>
                <div className="border-t border-slate-100" style={{ paddingTop: "16px", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <div className="text-slate-400" style={{ fontSize: "12px" }}>{period}</div>
                  <div className="text-slate-400" style={{ fontSize: "12px" }}>{location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
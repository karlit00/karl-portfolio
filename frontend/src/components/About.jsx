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
      className="relative py-28 px-8 md:px-12 overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      {/* Subtle blobs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "rgba(37,99,235,0.04)" }} />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full pointer-events-none" style={{ background: "rgba(37,99,235,0.03)" }} />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section label */}
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold tracking-[0.08em] uppercase px-4 py-2 rounded-full border border-blue-200 mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
          About Me
        </div>

        {/* Heading */}
        <h2
          className="font-bold leading-[1.1] mb-6"
          style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em", color: "var(--black)" }}
        >
          Passionate about building{" "}
          <span className="gradient-text">digital experiences.</span>
        </h2>

        {/* Bio */}
        <p className="text-slate-500 text-[17px] leading-[1.8] mb-16" style={{ maxWidth: "640px" }}>
          A self-motivated and detail-oriented developer with strong leadership, creativity,
          and problem-solving skills. Skilled in full-stack web and mobile development,
          UI/UX design, and database management — dedicated to delivering user-centered
          digital solutions that are both performant and beautiful.
        </p>

        {/* Top two-col: Expertise + Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">

          {/* Expertise */}
          <div>
            <h3 className="font-semibold text-sm tracking-[0.08em] uppercase text-slate-400 mb-6">Area of Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {expertise.map((item) => (
                <span
                  key={item}
                  className="bg-white border border-slate-200 text-slate-500 text-xs font-medium px-3 py-1.5 rounded-md"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Education — college only */}
          <div>
            <h3 className="font-semibold text-sm tracking-[0.08em] uppercase text-slate-400 mb-6">Education</h3>
            <div
              className="p-5 rounded-2xl border border-blue-100"
              style={{ background: "linear-gradient(140deg, #eff6ff, #dbeafe22)" }}
            >
              <div className="text-xs font-semibold tracking-[0.08em] uppercase text-blue-400 mb-2">Undergraduate</div>
              <div className="font-semibold text-sm mb-0.5" style={{ color: "var(--black)" }}>
                National University – Manila
              </div>
              <div className="text-slate-500 text-xs mb-1">
                B.S. Information Technology — Web & Mobile Applications
              </div>
              <div className="text-slate-400 text-xs">2022 – Expected September 2026</div>
            </div>
          </div>

        </div>

        {/* Experience — full width */}
        <div>
          <h3 className="font-semibold text-sm tracking-[0.08em] uppercase text-slate-400 mb-8">Professional Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experiences.map(({ company, role, location, period, desc }, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col gap-3"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
              >
                <div>
                  <div className="font-semibold text-sm mb-0.5" style={{ color: "var(--black)" }}>{company}</div>
                  <div className="text-blue-600 text-xs font-medium">{role}</div>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">{desc}</p>
                <div className="border-t border-slate-100 pt-3 flex flex-col gap-0.5">
                  <div className="text-xs text-slate-400">{period}</div>
                  <div className="text-xs text-slate-400">{location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
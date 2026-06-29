export default function Services() {
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: "Web Development",
      desc: "Clean, fast, and scalable websites built with modern frameworks — from landing pages to complex web platforms.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
      title: "Responsive UI Development",
      desc: "Pixel-perfect interfaces that look and feel great on every screen size — desktop, tablet, and mobile.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      title: "Full-Stack Web Applications",
      desc: "End-to-end application development covering frontend, backend, and database — shipped and production-ready.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
      ),
      title: "Dashboard & Admin Systems",
      desc: "Custom dashboards and admin panels with data visualization, role-based access, and intuitive management tools.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      ),
      title: "API Integration",
      desc: "Seamless integration of third-party APIs and services — payment gateways, maps, auth providers, and more.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      title: "Website Maintenance & Support",
      desc: "Ongoing updates, bug fixes, performance tuning, and technical support to keep your site running smoothly.",
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden"
      style={{ background: "#fafafa", padding: "112px 48px" }}
    >
      {/* Dot-grid texture, consistent with the rest of the site */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #e4e4e7 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.6,
        }}
      />

      <div className="relative z-10" style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Section label — plain mono gray, no pill */}
        <p
          className="font-mono uppercase"
          style={{
            fontSize: "14px",
            letterSpacing: "0.08em",
            color: "#a1a1aa",
            marginBottom: "24px",
          }}
        >
          Services
        </p>

        {/* Heading — Space Grotesk on the accent phrase, same treatment as About */}
        <h2
          className="font-bold"
          style={{
            fontSize: "clamp(30px, 4vw, 48px)",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            color: "#0a0a0b",
            marginBottom: "16px",
          }}
        >
          What I can do{" "}
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#4f7cff" }}>
            for you.
          </span>
        </h2>

        <p
          style={{ fontSize: "15px", lineHeight: 1.75, color: "#71717a", maxWidth: "480px", marginBottom: "56px" }}
        >
          From idea to deployment — I cover the full spectrum of web and mobile development.
        </p>

        {/* Cards grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "24px" }}
        >
          {services.map(({ icon, title, desc }, i) => (
            <div
              key={title}
              className="group relative flex flex-col transition-transform hover:-translate-y-1"
              style={{
                background: "#ffffff",
                border: "1px solid #e4e4e7",
                borderRadius: "10px",
                padding: "28px",
                gap: "16px",
              }}
            >
              {/* Corner brackets mark the featured service — same motif as the rest of the site, not a solid fill */}
              {i === 0 && [
                { top: "-7px", left: "-7px", borderWidth: "2px 0 0 2px" },
                { top: "-7px", right: "-7px", borderWidth: "2px 2px 0 0" },
                { bottom: "-7px", left: "-7px", borderWidth: "0 0 2px 2px" },
                { bottom: "-7px", right: "-7px", borderWidth: "0 2px 2px 0" },
              ].map((pos, b) => (
                <span
                  key={b}
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

              {/* Icon */}
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#f4f4f5",
                  border: "1px solid #e4e4e7",
                  color: i === 0 ? "#4f7cff" : "#52525b",
                  flexShrink: 0,
                }}
              >
                {icon}
              </div>

              {/* Text */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <h3
                  className="font-semibold"
                  style={{ fontSize: "15px", color: "#0a0a0b", letterSpacing: "-0.01em" }}
                >
                  {title}
                </h3>
                <p style={{ fontSize: "13px", lineHeight: 1.7, color: "#71717a" }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
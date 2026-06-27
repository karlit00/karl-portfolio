export default function Contact() {
  const contacts = [
    {
      label: "Email",
      value: "gabuterokarlchristian@gmail.com",
      href: "mailto:gabuterokarlchristian@gmail.com",
      color: "#3b82f6",
      bg: "rgba(59,130,246,0.07)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      label: "Mobile",
      value: "+63 927 727 8139",
      href: "tel:+639277278139",
      color: "#10b981",
      bg: "rgba(16,185,129,0.07)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.87a16 16 0 0 0 6.29 6.29l1.77-1.77a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      value: "github.com/karlit00",
      href: "https://github.com/karlit00",
      color: "#8b5cf6",
      bg: "rgba(139,92,246,0.07)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/karl-gabutero",
      href: "https://www.linkedin.com/in/karl-gabutero-3072711a4/",
      color: "#0ea5e9",
      bg: "rgba(14,165,233,0.07)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-28 px-8 md:px-12 overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      {/* Blobs */}
      <div className="absolute -top-40 -right-36 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "rgba(37,99,235,0.05)" }} />
      <div className="absolute -bottom-28 -left-24 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "rgba(37,99,235,0.03)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none" style={{ background: "rgba(37,99,235,0.02)" }} />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section label */}
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold tracking-[0.08em] uppercase px-4 py-2 rounded-full border border-blue-200 mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse flex-shrink-0" />
          Contact
        </div>

        {/* Heading */}
        <h2
          className="font-bold leading-[1.1] mb-4"
          style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em", color: "var(--black)" }}
        >
          Let's work{" "}
          <span className="gradient-text">together.</span>
        </h2>
        <p className="text-slate-500 text-[17px] leading-[1.8] mb-16" style={{ maxWidth: "500px" }}>
          I'm currently open to new opportunities — whether it's a full-time role, freelance project, or just a chat. Don't hesitate to reach out.
        </p>

        {/* Main card */}
        <div
          className="rounded-3xl overflow-hidden"
          style={{
            background: "white",
            border: "1px solid #e2e8f0",
            boxShadow: "0 8px 40px rgba(37,99,235,0.08)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Left panel — dark */}
            <div
              className="relative p-10 flex flex-col justify-between overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 60%, #3b82f6 100%)",
                minHeight: "420px",
              }}
            >
              {/* Decorative circles */}
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full" style={{ background: "rgba(255,255,255,0.05)" }} />
              <div className="absolute -bottom-12 -left-12 w-36 h-36 rounded-full" style={{ background: "rgba(255,255,255,0.05)" }} />
              <div className="absolute top-1/2 right-8 w-20 h-20 rounded-full" style={{ background: "rgba(255,255,255,0.04)" }} />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-2xl mb-3" style={{ letterSpacing: "-0.02em" }}>
                  Get in touch
                </h3>
                <p className="text-blue-200 text-sm leading-relaxed" style={{ maxWidth: "260px" }}>
                  Have a project in mind or want to collaborate? I'd love to hear from you. Pick the channel that works best for you.
                </p>
              </div>

              <div className="relative z-10 mt-10">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-[0.06em] uppercase px-4 py-2 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                  Available for work
                </div>
              </div>
            </div>

            {/* Right panel — contact links */}
            <div className="p-10 flex flex-col justify-center gap-4">
              {contacts.map(({ label, value, href, icon, color, bg }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-2xl px-5 py-4 border border-slate-100 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  style={{
                    textDecoration: "none",
                    background: "#fafafa",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = color;
                    e.currentTarget.style.background = bg;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#f1f5f9";
                    e.currentTarget.style.background = "#fafafa";
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all"
                    style={{ background: bg, color: color }}
                  >
                    {icon}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-slate-400 font-medium mb-0.5">{label}</div>
                    <div className="text-sm font-semibold truncate" style={{ color: "var(--black)" }}>{value}</div>
                  </div>

                  {/* Arrow */}
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all"
                    style={{ background: "transparent", color: "#cbd5e1" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 7h10v10" /><path d="M7 17 17 7" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
export default function Contact() {
  const contacts = [
    {
      label: "Email",
      value: "gabuterokarlchristian@gmail.com",
      href: "mailto:gabuterokarlchristian@gmail.com",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      label: "Mobile",
      value: "+63 927 727 8139",
      href: "tel:+639277278139",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.87a16 16 0 0 0 6.29 6.29l1.77-1.77a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      value: "github.com/karlit00",
      href: "https://github.com/karlit00",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/karl-gabutero",
      href: "https://www.linkedin.com/in/karl-gabutero-3072711a4/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
      className="relative overflow-hidden"
      style={{ background: "#fafafa", padding: "clamp(64px, 12vw, 112px) clamp(20px, 5vw, 48px)" }}
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

        {/* Section label */}
        <p
          className="font-mono uppercase"
          style={{ fontSize: "12px", letterSpacing: "0.08em", color: "#a1a1aa", marginBottom: "24px" }}
        >
          Contact
        </p>

        {/* Heading */}
        <h2
          className="font-bold"
          style={{
            fontSize: "clamp(28px, 5vw, 48px)",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            color: "#0a0a0b",
            marginBottom: "16px",
          }}
        >
          Let's work{" "}
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#4f7cff" }}>
            together.
          </span>
        </h2>

        <p style={{ fontSize: "15px", lineHeight: 1.75, color: "#71717a", maxWidth: "480px", width: "100%", marginBottom: "clamp(36px, 7vw, 56px)" }}>
          I'm currently open to new opportunities — whether it's a full-time role, freelance project, or just a chat. Don't hesitate to reach out.
        </p>

        {/* Main card */}
        <div
          className="overflow-hidden"
          style={{ background: "#ffffff", border: "1px solid #e4e4e7", borderRadius: "16px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Left panel — flat near-black, matches the site's primary CTA color instead of a blue gradient */}
            <div
              className="relative flex flex-col justify-between overflow-hidden"
              style={{ background: "#0a0a0b", minHeight: "clamp(260px, 40vw, 360px)", padding: "clamp(28px, 6vw, 48px)" }}
            >
              {/* Corner brackets — same motif used throughout the site */}
              {[
                { top: "20px", left: "20px", borderWidth: "2px 0 0 2px" },
                { top: "20px", right: "20px", borderWidth: "2px 2px 0 0" },
              ].map((pos, i) => (
                <span
                  key={i}
                  className="absolute"
                  style={{ width: "18px", height: "18px", borderColor: "#4f7cff", borderStyle: "solid", ...pos }}
                />
              ))}

              <div className="relative z-10">
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.06)",
                    marginBottom: "28px",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fafafa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <h3 className="font-bold" style={{ fontSize: "24px", color: "#fafafa", letterSpacing: "-0.02em", marginBottom: "16px" }}>
                  Get in touch
                </h3>
                <p style={{ fontSize: "14px", lineHeight: 1.75, color: "#a1a1aa", maxWidth: "260px" }}>
                  Have a project in mind or want to collaborate? I'd love to hear from you. Pick the channel that works best for you.
                </p>
              </div>

              <div className="relative z-10 font-mono" style={{ marginTop: "48px" }}>
                <div
                  className="inline-flex items-center"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "6px",
                    fontSize: "11px",
                    color: "#a1a1aa",
                    padding: "8px 14px",
                    gap: "8px",
                  }}
                >
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
                  available for work
                </div>
              </div>
            </div>

            {/* Right panel — contact links, all unified to one neutral treatment */}
            <div className="flex flex-col justify-center" style={{ padding: "clamp(24px, 6vw, 48px)", gap: "12px" }}>
              {contacts.map(({ label, value, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center transition-colors"
                  style={{
                    textDecoration: "none",
                    background: "#fafafa",
                    border: "1px solid #e4e4e7",
                    borderRadius: "10px",
                    padding: "clamp(12px, 3vw, 16px) clamp(14px, 3vw, 18px)",
                    gap: "16px",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#4f7cff"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#e4e4e7"; }}
                >
                  <div
                    className="flex items-center justify-center flex-shrink-0"
                    style={{ width: "clamp(36px, 8vw, 40px)", height: "clamp(36px, 8vw, 40px)", borderRadius: "8px", background: "#f4f4f5", color: "#52525b" }}
                  >
                    {icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-mono" style={{ fontSize: "11px", color: "#a1a1aa", marginBottom: "3px" }}>{label}</div>
                    <div className="font-semibold truncate" style={{ fontSize: "14px", color: "#0a0a0b" }}>{value}</div>
                  </div>
                  <div
                    className="hidden sm:flex items-center justify-center flex-shrink-0 transition-colors"
                    style={{ width: "28px", height: "28px", color: "#d4d4d8" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
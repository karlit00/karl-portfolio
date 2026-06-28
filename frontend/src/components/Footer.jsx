export default function Footer() {
  const nav = [
    { label: "Home", href: "#hero" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socials = [
    {
      label: "Email",
      href: "mailto:gabuterokarlchristian@gmail.com",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      href: "https://github.com/karlit00",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/karl-gabutero-3072711a4/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
  ];

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "#fafafa",
        borderTop: "1px solid #e4e4e7",
        paddingTop: "80px",
        paddingBottom: "40px",
        paddingLeft: "48px",
        paddingRight: "48px",
      }}
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

        {/* Top row */}
        <div
          className="flex flex-col md:flex-row md:items-start md:justify-between"
          style={{ gap: "56px", paddingBottom: "56px" }}
        >

          {/* Brand */}
          <div style={{ maxWidth: "320px" }}>
            <div
              className="font-bold"
              style={{ fontSize: "20px", letterSpacing: "-0.02em", color: "#0a0a0b", marginBottom: "14px" }}
            >
              <span style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Karl Gabutero</span>
            </div>
            <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#71717a" }}>
              Fullstack web and mobile developer, crafting clean, performant apps from API design to pixel-perfect UIs.
            </p>
            <div
              className="inline-flex items-center font-mono"
              style={{
                background: "#f4f4f5",
                border: "1px solid #e4e4e7",
                borderRadius: "6px",
                fontSize: "11px",
                color: "#71717a",
                padding: "8px 14px",
                marginTop: "24px",
                gap: "8px",
              }}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
              available for work
            </div>
          </div>

          {/* Nav */}
          <div>
            <p
              className="font-mono uppercase"
              style={{ fontSize: "11px", letterSpacing: "0.08em", color: "#a1a1aa", marginBottom: "20px" }}
            >
              Navigate
            </p>
            <ul className="flex flex-col" style={{ gap: "14px" }}>
              {nav.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="font-medium transition-colors"
                    style={{ fontSize: "14px", color: "#71717a", textDecoration: "none" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#4f7cff"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#71717a"; }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p
              className="font-mono uppercase"
              style={{ fontSize: "11px", letterSpacing: "0.08em", color: "#a1a1aa", marginBottom: "20px" }}
            >
              Connect
            </p>
            <div className="flex" style={{ gap: "10px" }}>
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="flex items-center justify-center flex-shrink-0 transition-colors"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    background: "#f4f4f5",
                    border: "1px solid #e4e4e7",
                    color: "#52525b",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#4f7cff"; e.currentTarget.style.borderColor = "#4f7cff"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "#52525b"; e.currentTarget.style.borderColor = "#e4e4e7"; }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col-reverse md:flex-row items-center justify-between"
          style={{ borderTop: "1px solid #e4e4e7", paddingTop: "32px", gap: "16px" }}
        >
          <p className="font-mono" style={{ fontSize: "11px", color: "#a1a1aa" }}>
            Designed &amp; built by{" "}
            <span style={{ color: "#4f7cff" }}>Karl Christian Gabutero</span>
            {" "}· {new Date().getFullYear()}
          </p>
          <a
            href="#hero"
            className="inline-flex items-center font-medium transition-colors"
            style={{ fontSize: "12px", color: "#71717a", textDecoration: "none", gap: "6px" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#4f7cff"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#71717a"; }}
          >
            Back to top
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5" /><path d="m5 12 7-7 7 7" />
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
}
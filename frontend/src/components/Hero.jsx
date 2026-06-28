import heropic from '../assets/heropic.jpg';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#fafafa" }}
    >
      {/* Loads the display font + defines the entrance animation keyframes */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap');

        @keyframes heroFadeUp {
          0% { opacity: 0; transform: translateY(18px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes heroPhotoIn {
          0% { opacity: 0; transform: translateY(14px) scale(0.96); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes heroBracket {
          0% { opacity: 0; transform: scale(0.4); }
          100% { opacity: 1; transform: scale(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          #hero * { animation: none !important; }
        }
      `}</style>

      {/* Faint dot-grid texture — tech signal, kept extremely subtle */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #e4e4e7 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.6,
        }}
      />

      <div
        className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_auto] items-center w-full"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "clamp(40px, 8vw, 80px) clamp(20px, 5vw, 48px)",
          gap: "clamp(32px, 6vw, 56px)",
        }}
      >
        {/* Left content */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%", minWidth: 0 }}>

          {/* Label */}
          <p
            className="font-mono uppercase"
            style={{
              fontSize: "12px",
              letterSpacing: "0.08em",
              color: "#a1a1aa",
              marginBottom: "18px",
              animation: "heroFadeIn 0.6s ease-out 0.05s both",
            }}
          >
            Fullstack developer · available for work
          </p>

          {/* Heading */}
          <h1
            className="font-bold"
            style={{
              fontSize: "clamp(28px, 5vw, 56px)",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              color: "#0a0a0b",
              marginBottom: "20px",
            }}
          >
            <span style={{ 
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2.1rem, 9vw, 5.5rem)",
              lineHeight: 1.05,
              display: "inline-block",
              wordBreak: "break-word",
              animation: "heroFadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s both",
            }}>
              KARL GABUTERO
            </span>
            <br />
            <span style={{
              color: "#71717a",
              display: "inline-block",
              animation: "heroFadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s both",
            }}>
              builds <span style={{ color: "#4f7cff" }}>your vision</span> for web
              and mobile apps.
            </span>
          </h1>

          {/* Subtext */}
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.7,
              color: "#a1a1aa",
              maxWidth: "400px",
              width: "100%",
              marginBottom: "32px",
              animation: "heroFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.42s both",
            }}
          >
            From API design to pixel-perfect interfaces — I focus on clean
            architecture and code that holds up once it ships.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap" style={{ gap: "12px", marginBottom: "32px" }}>
            <a
              href="#projects"
              className="inline-flex items-center font-medium transition-all hover:-translate-y-px active:translate-y-0"
              style={{
                background: "#0a0a0b",
                color: "#fafafa",
                padding: "14px clamp(24px, 5vw, 38px)",
                fontSize: "16px",
                borderRadius: "8px",
                textDecoration: "none",
                whiteSpace: "nowrap",
                animation: "heroFadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.54s both",
              }}
            >
              View projects
            </a>

            <a
              href="#contact"
              className="inline-flex items-center font-medium transition-all hover:border-[#4f7cff] hover:text-[#4f7cff] active:translate-y-0"
              style={{
                background: "transparent",
                color: "#71717a",
                padding: "14px clamp(24px, 5vw, 38px)",
                fontSize: "16px",
                borderRadius: "8px",
                border: "1px solid #e4e4e7",
                textDecoration: "none",
                whiteSpace: "nowrap",
                animation: "heroFadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.62s both",
              }}
            >
              Contact me
            </a>
          </div>

          {/* Stack line */}
          <p
            className="font-mono"
            style={{
              fontSize: "13px",
              color: "#52525B",
              marginBottom: "32px",
              maxWidth: "440px",
              width: "100%",
              lineHeight: 1.6,
              animation: "heroFadeIn 0.6s ease-out 0.72s both",
            }}
          >
            React · React Native · Node.js · Tailwind · MongoDB · Express
          </p>

          {/* Stats */}
          <div
            className="flex w-full"
            style={{
              borderTop: "1px solid #e4e4e7",
              paddingTop: "24px",
              flexWrap: "wrap",
              rowGap: "12px",
              animation: "heroFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.8s both",
            }}
          >
            {[
              { num: "2+", label: "years experience", accent: true },
              { num: "5+", label: "projects shipped", accent: false },
              { num: "6", label: "coffee a day", accent: false },
            ].map(({ num, label, accent }, i) => (
              <div
                key={label}
                style={{
                  paddingRight: "clamp(12px, 4vw, 24px)",
                  paddingLeft: i > 0 ? "clamp(12px, 4vw, 24px)" : 0,
                  borderLeft: i > 0 ? "1px solid #e4e4e7" : "none",
                  minWidth: 0,
                  flex: "1 1 auto",
                }}
              >
                <div
                  className="font-bold font-mono"
                  style={{
                    fontSize: "clamp(18px, 3vw, 22px)",
                    color: accent ? "#4f7cff" : "#0a0a0b",
                    marginBottom: "4px",
                  }}
                >
                  {num}
                </div>
                <div style={{ fontSize: "11px", color: "#a1a1aa" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — photo */}
        <div className="relative flex items-center justify-center" style={{ width: "100%" }}>
          <div
            className="relative"
            style={{
              width: "clamp(170px, 70vw, 300px)",
              animation: "heroPhotoIn 0.8s cubic-bezier(0.16,1,0.3,1) 0.25s both",
            }}
          >
            <img
              src={heropic}
              alt="Karl Gabutero"
              className="w-full object-cover"
              style={{
                aspectRatio: "4 / 5",
                borderRadius: "10px",
                border: "1px solid #e4e4e7",
              }}
            />

            {/* Corner brackets — pop in one by one after the photo settles */}
            {[
              { top: "-9px", left: "-9px", borderWidth: "2px 0 0 2px" },
              { top: "-9px", right: "-9px", borderWidth: "2px 2px 0 0" },
              { bottom: "-9px", left: "-9px", borderWidth: "0 0 2px 2px" },
              { bottom: "-9px", right: "-9px", borderWidth: "0 2px 2px 0" },
            ].map((pos, i) => (
              <span
                key={i}
                className="absolute"
                style={{
                  width: "20px",
                  height: "20px",
                  borderColor: "#4f7cff",
                  borderStyle: "solid",
                  animation: `heroBracket 0.5s cubic-bezier(0.34,1.56,0.64,1) ${0.6 + i * 0.06}s both`,
                  ...pos,
                }}
              />
            ))}

            {/* Status tag */}
            <div
              className="absolute font-mono"
              style={{
                bottom: "16px",
                left: "16px",
                fontSize: "11px",
                color: "#fafafa",
                background: "rgba(10,10,11,0.85)",
                padding: "6px 10px",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                animation: "heroFadeUp 0.5s ease-out 0.9s both",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#22c55e",
                  display: "inline-block",
                }}
              />
              online
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
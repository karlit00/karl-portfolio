export default function TechStack() {
  const techs = [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" },
    { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  ];

  return (
    <section
      id="techstack"
      className="relative overflow-hidden"
      style={{ background: "#fafafa", padding: "112px 48px" }}
    >
      {/* Dot-grid texture, consistent with Hero and About */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #e4e4e7 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.6,
        }}
      />

      <div className="relative z-10" style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Section label — plain mono gray, no pill, matches Hero/About */}
        <p
          className="font-mono uppercase"
          style={{
            fontSize: "14px",
            letterSpacing: "0.08em",
            color: "#a1a1aa",
            marginBottom: "32px",
          }}
        >
          Tech stack
        </p>

        {/* Logo grid */}
        <div
          className="grid"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))", gap: "16px" }}
        >
          {techs.map(({ name, icon }) => (
            <div key={name} className="group relative flex flex-col items-center" style={{ gap: "12px" }}>
              <div
                className="relative w-full aspect-square flex items-center justify-center transition-transform group-hover:-translate-y-1"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e4e4e7",
                  borderRadius: "10px",
                }}
              >
                {/* Corner brackets — appear on hover, same motif as Hero's photo and About's education card */}
                {[
                  { top: "-6px", left: "-6px", borderWidth: "2px 0 0 2px" },
                  { top: "-6px", right: "-6px", borderWidth: "2px 2px 0 0" },
                  { bottom: "-6px", left: "-6px", borderWidth: "0 0 2px 2px" },
                  { bottom: "-6px", right: "-6px", borderWidth: "0 2px 2px 0" },
                ].map((pos, i) => (
                  <span
                    key={i}
                    className="absolute opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      width: "12px",
                      height: "12px",
                      borderColor: "#4f7cff",
                      borderStyle: "solid",
                      ...pos,
                    }}
                  />
                ))}

                <img
                  src={icon}
                  alt={name}
                  className="w-10 h-10 object-contain"
                  style={{ filter: name === "Express.js" || name === "Vercel" ? "invert(0.6)" : "none" }}
                />
              </div>
              <span
                className="font-mono text-center leading-tight"
                style={{ fontSize: "11px", color: "#a1a1aa" }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
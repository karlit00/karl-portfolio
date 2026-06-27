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
      className="relative py-28 px-8 md:px-12 overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "rgba(37,99,235,0.03)" }} />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section label */}
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold tracking-[0.08em] uppercase px-4 py-2 rounded-full border border-blue-200 mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
          Tech Stack
        </div>

        {/* Heading */}
        <h2
          className="font-bold leading-[1.1] mb-4"
          style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em", color: "var(--black)" }}
        >
          Tools I work with.
        </h2>

        <p className="text-slate-500 text-[17px] leading-[1.8] mb-16" style={{ maxWidth: "500px" }}>
          A collection of technologies I use to design, build, and ship products across web and mobile.
        </p>

        {/* Logo grid */}
        <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))" }}>
          {techs.map(({ name, icon }) => (
            <div
              key={name}
              className="group flex flex-col items-center gap-2.5"
            >
              <div
                className="w-full aspect-square rounded-2xl bg-white border border-slate-200 flex items-center justify-center transition-all group-hover:-translate-y-1 group-hover:shadow-md group-hover:border-blue-200"
                style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
              >
                <img
                  src={icon}
                  alt={name}
                  className="w-12 h-12 object-contain"
                  style={{ filter: name === "Express.js" || name === "Vercel" ? "invert(0.6)" : "none" }}
                />
              </div>
              <span className="text-[11px] text-slate-400 font-medium text-center leading-tight">{name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
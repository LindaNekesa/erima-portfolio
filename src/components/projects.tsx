

interface Project {
  title: string;
  role: string;
  description: string;
  tools: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: "Data Voyage",
    role: "Data Visualization & Insights Platform",
    description: "Built an interactive dashboard to explore and visualize data trends using React, Recharts, and Zustand.",
    tools: ["React", "Tailwind CSS", "TypeScript", "Prisma", "PostgreSQL"],
    link: "https://github.com/erimalinda/data-voyage"
  },
  {
    title: "Fika Safe",
    role: "Incident Reporting System",
    description: "Developed a secure platform for reporting and tracking security incidents in educational institutions.",
    tools: ["Next.js", "Node.js", "Prisma", "PostgreSQL"],
    link: "https://github.com/erimalinda/fika-safe"
  },
  {
    title: "Hospital Database Design",
    role: "System Optimization Project",
    description: "Designed and optimized a hospital management database system using ER diagrams, SQL schemas, and TypeScript logic.",
    tools: ["TypeScript", "PostgreSQL", "Prisma", "Lucidchart"],
  },
  {
    title: "IT Support Log System",
    role: "Internship Project",
    description: "Created a system to log, summarize, and resolve IT support tasks during internship at a government institution.",
    tools: ["Excel", "SQL", "Power BI", "Markdown"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">My Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 italic mb-1">{project.role}</p>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-blue-600 hover:underline text-sm"
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

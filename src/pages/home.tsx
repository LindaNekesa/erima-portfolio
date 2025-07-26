import { Header } from "../components/ui/header";
import Footer  from '../components/ui/footer';
import { ProjectCard } from "../components/ui/projectcard";
import { StatBlock } from "../components/ui/statblock";
import { ContactSection } from "../components/contactsection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Navigation */}
      <Header />

      {/* About Me */}
      <section id="about" className="py-12 px-6 md:px-16 bg-white dark:bg-gray-800">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I'm <strong>Erima Nekesa Linda</strong>, a passionate <strong>Data Analyst</strong> and <strong>IT Specialist</strong> with experience in building interactive dashboards, optimizing databases, and automating reports.
          I love transforming raw data into actionable insights and building tools that solve real-world problems.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="py-12 px-6 md:px-16 bg-gray-100 dark:bg-gray-900">
        <h2 className="text-3xl font-bold mb-6">Skills & Tools</h2>
        <div className="flex flex-wrap gap-4">
          {[
            "Python", "SQL", "Power BI", "Excel", "React", "TypeScript",
            "PostgreSQL", "Prisma", "Git & GitHub", "Data Visualization",
            "Web Development", "Data Analysis", "Networking"
          ].map(skill => (
            <span
              key={skill}
              className="bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-white px-3 py-1 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 md:px-16 bg-white dark:bg-gray-800">
        <h2 className="text-3xl font-bold mb-6 text-center">My Impact in Numbers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <StatBlock label="Completed Projects" value={12} />
          <StatBlock label="Technologies Used" value={15} />
          <StatBlock label="Reports Generated" value={50} />
          <StatBlock label="Dashboards Built" value={10} />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-12 px-6 md:px-16 bg-gray-100 dark:bg-gray-900">
        <h2 className="text-3xl font-bold mb-8 text-center">Highlighted Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="FIKA SAFE"
            role="Incident Reporting System"
            description="Developed a secure platform for reporting and tracking security incidents in educational institutions."
            tools={["Next.js", "Node.js", "Prisma", "PostgreSQL"]}
            link="https://github.com/LindaNekesa/fika-safe"
          />
          <ProjectCard
            title="Data Voyage"
            role="Data Visualization Journey"
            description="Designed a data-driven dashboard platform using React, Zustand, and Recharts for visualizing analytical insights."
            tools={["Vite", "React Query", "Zustand", "Recharts"]}
            link="https://github.com/LindaNekesa/data-voyage"
          />
          <ProjectCard
            title="Hospital Database Design"
            role="System Optimization Project"
            description="Designed and optimized a hospital management database system using ER diagrams, SQL schemas, and TypeScript logic."
            tools={["TypeScript", "PostgreSQL", "Prisma", "Lucidchart"]}
            link="#"
          />
          <ProjectCard
            title="IT Support Log System"
            role="Internship Project"
            description="Created a system to log, summarize, and resolve IT support tasks during internship at a government institution."
            tools={["Excel", "SQL", "Power BI", "Markdown"]}
            link="#"
          />
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}

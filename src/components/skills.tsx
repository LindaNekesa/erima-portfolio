const skills = {
  Languages: [
    "Python",
    "TypeScript",
    "Power BI",
    "SQL",
    "Data Analysis",
    "Excel",
    "Networking",
    "IT Specialist",
  ],
  Tools: ["VS Code", "Git", "Canva", "Figma"],
  Frameworks: ["React", "Node.js", "Next.js", "Express", "Tailwind CSS"],
  "Soft Skills": ["Problem Solving", "Teamwork", "Adaptability", "Communication"],
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-10 bg-gray-50 dark:bg-gray-800 text-center"
    >
      <h2 className="text-3xl font-bold text-yellow-500 mb-8">Skills</h2>
      <div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="text-left">
            <h3 className="text-xl font-semibold text-yellow-600 dark:text-yellow-300 mb-2">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 bg-yellow-100 dark:bg-yellow-700 text-yellow-800 dark:text-white rounded-full text-sm font-medium shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from "react";

interface ProjectCardProps {
  title: string;
  role: string;
  description: string;
  tools: string[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  role,
  description,
  tools,
  link,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 transition hover:shadow-lg">
      <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-1">{title}</h3>
      <p className="text-sm italic text-gray-600 dark:text-gray-400 mb-2">{role}</p>
      <p className="mb-4 text-gray-700 dark:text-gray-300">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tools.map((tool) => (
          <span
            key={tool}
            className="text-xs bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-white px-2 py-1 rounded"
          >
            {tool}
          </span>
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 hover:underline"
      >
        View Project →
      </a>
    </div>
  );
};

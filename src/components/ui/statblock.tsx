import React from "react";

type StatBlockProps = {
  label: string;
  value: string | number;
};

export const StatBlock: React.FC<StatBlockProps> = ({ label, value }) => {
  return (
    <div className="text-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-sm">
      <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{value}</p>
      <p className="text-sm text-gray-700 dark:text-gray-300">{label}</p>
    </div>
  );
};

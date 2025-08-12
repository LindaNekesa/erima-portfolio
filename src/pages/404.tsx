// pages/404.tsx

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Custom404() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-2">Page Not Found</p>
      <p className="text-gray-500 dark:text-gray-400 mb-6 text-center">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline text-lg"
      >
        <ArrowLeft className="mr-2" size={20} />
        Go Back Home
      </Link>
    </div>
  );
}

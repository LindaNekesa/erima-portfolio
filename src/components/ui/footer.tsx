import { Mail, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Erima Nekesa Linda. All rights reserved.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="mailto:nekesaerima@gmail.com"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://github.com/erima"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/erima-nekesa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

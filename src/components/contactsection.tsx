
import { Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 px-6 md:px-16 bg-white dark:bg-gray-800 text-center"
    >
      <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-yellow-400">
        Contact Me
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 max-w-xl mx-auto">
        Interested in working together or have a project idea? Let’s connect!
      </p>
      <a
        href="mailto:nekesaerima@gmail.com"
        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white dark:bg-yellow-500 dark:hover:bg-yellow-600 rounded-full shadow-md transition-all"
      >
        <Mail size={18} />
        nekesaerima@gmail.com
      </a>
    </section>
  );
}

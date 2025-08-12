// components/Hero.tsx
export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white pt-20"
    >
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">
        Hi, I'm Erima Nekesa Linda
      </h1>
      <h2 className="text-xl sm:text-2xl mb-6 text-blue-600 dark:text-blue-400">
        Data Analyst & IT Specialist
      </h2>
      <p className="max-w-2xl mb-8 text-sm sm:text-base">
        Passionate about transforming data into decisions and building technology solutions
        that create real-world impact. Based at MMUST, I specialize in data visualization,
        full-stack web development, and IT systems support.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#projects"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md"
        >
          View My Work
        </a>
        <a
          href="/assets/erima-resume.pdf"
          target="_blank"
          className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-md transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}




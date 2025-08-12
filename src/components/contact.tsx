

export default function Contact() {
  return (
    <section
      id="contact"
      className="p-10 bg-gray-50 text-gray-900 flex flex-col items-center dark:bg-gray-900 dark:text-white"
    >
      <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
      <p className="text-center mb-6 max-w-xl">
        I’m Erima Nekesa Linda — a passionate IT specialist and data analyst.
        Whether you have a project in mind, want to collaborate, or just say hi,
        feel free to reach out!
      </p>

      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-4">
        <form
          action="https://formspree.io/f/your_form_id"
          method="POST"
        >
          <div className="mb-3">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded focus:outline-none focus:ring focus:border-blue-400 bg-white dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded focus:outline-none focus:ring focus:border-blue-400 bg-white dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded focus:outline-none focus:ring focus:border-blue-400 bg-white dark:bg-gray-700 dark:text-white"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-6 text-center">
        <p>
          Email:{' '}
          <a
            href="mailto:erimalinda26@gmail.com"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            erimalinda26@gmail.com
          </a>
        </p>
        <p>
          LinkedIn:{' '}
          <a
            href="https://linkedin.com/in/Linda Erima"
            className="text-blue-600 dark:text-blue-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/Linda Erima
          </a>
        </p>
        <p>
          GitHub:{' '}
          <a
            href="https://github.com/LindaNekesa"
            className="text-blue-600 dark:text-blue-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/LindaNekesa
          </a>
        </p>
      </div>
    </section>
  );
}

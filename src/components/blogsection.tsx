// src/components/BlogSection.tsx
export default function BlogSection() {
  const posts = [
    {
      title: "Optimizing Performance in React",
      description: "Tips and techniques to boost your React app speed.",
      link: "#",
    },
    {
      title: "Getting Started with Tailwind CSS",
      description: "Why Tailwind makes building UIs faster and more enjoyable.",
      link: "#",
    },
  ];

  return (
    <section id="blog" className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
      <h2 className="text-3xl font-bold mb-8 text-center">Blog</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{post.description}</p>
            <a
              href={post.link}
              className="text-blue-600 dark:text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

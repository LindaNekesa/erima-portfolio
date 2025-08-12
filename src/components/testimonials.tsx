export default function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      text: "Linda is a very reliable and skilled professional!",
      role: "Software Engineer, XYZ Corp",
    },
    {
      name: "Jane Smith",
      text: "She delivered high-quality work on time and beyond expectations.",
      role: "Data Analyst, ABC Inc",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">🌟 Testimonials</h2>
        <div className="space-y-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded shadow">
              <p className="italic text-lg">“{t.text}”</p>
              <h4 className="font-semibold mt-4">{t.name}</h4>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

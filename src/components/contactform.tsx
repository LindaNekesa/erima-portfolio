// src/components/ContactForm.tsx
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("Thanks for your message!");
      form.reset();
    } else {
      setStatus("Oops! There was a problem.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        className="w-full p-2 border border-gray-300 rounded"
      />
      <textarea
        name="message"
        rows={5}
        placeholder="Message"
        required
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Send Message
      </button>
      {status && <p className="text-sm text-green-500 mt-2">{status}</p>}
    </form>
  );
}

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react'; // Or any icon

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return visible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 z-50 p-3 rounded-full bg-yellow-400 hover:bg-yellow-300 text-black shadow-lg transition duration-300"
      aria-label="Back to Top"
    >
      <ArrowUp />
    </button>
  ) : null;
}

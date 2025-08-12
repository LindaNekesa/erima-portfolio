// src/App.tsx
import Layout from "./layout/layout";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import { ContactSection } from "./components/contactsection";
import Footer from "./components/ui/footer";
import BackToTop from "./components/backtotop";
import { Toaster } from "react-hot-toast";
import { useScrollObserver } from "./hooks/usescrollobserver";
import Testimonials from "./components/testimonials";
import BlogSection from "./components/blogsection";

function App() {
  // Activate ScrollSpy for key sections
  useScrollObserver(["hero", "about", "projects", "contact"]);

  return (
    <div className="font-sans text-gray-800 dark:text-white dark:bg-gray-900">
      <Navbar />
      <BackToTop />
      <Layout>
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="blog">
          <BlogSection />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="contact">
          <ContactSection />
          <Contact />
        </section>
      </Layout>

      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;


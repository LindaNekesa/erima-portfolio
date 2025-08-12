// src/pages/index.tsx
import React from "react";
import HeroSection from "../components/herosection";
import About from "../components/about";
import Projects from "../components/projects";
import {ContactSection }from "../components/contactsection";
import Navbar from "../components/navbar";
import Footer from "../components/ui/footer";
import Layout from "../layout/layout";
import BackToTop from "../components/backtotop";
import Testimonials from "../components/testimonials";
import BlogSection from "../components/blogsection";
import { Toaster } from "react-hot-toast";

const IndexPage: React.FC = () => {
  return (
    <div className="font-sans text-gray-800 dark:text-white dark:bg-gray-900">
      <Navbar />
      <BackToTop />
      <Layout>
        <section id="hero">
          <HeroSection />
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
        </section>
      </Layout>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

export default IndexPage;

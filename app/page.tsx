import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import BlogSection from "./components/BlogSection";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <BlogSection />
      <CTA />
      <Footer />
    </main>
  );
}

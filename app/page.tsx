import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";

// Definimos el page principal
export default function Home() {
  return (
    <main className="min-h-screen bg-ink">
      <Navbar/>
      <div className="max-w-6xl mx-auto">
        <Hero/>
        <Projects/>
        <Stack/>
        <About/>
        <Contact/>
        <Footer/>
      </div>
    </main>
  );
}

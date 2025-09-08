import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import ContactSection from "./components/contactSection";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Projects/>
      <ContactSection/>
    </div>
  );
}

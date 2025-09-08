import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import ContactSection from "./components/contactSection";
import Technoligies from "./components/technoligies";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Technoligies/>
      <About />
      <Projects/>
      <ContactSection/>
    </div>
  );
}

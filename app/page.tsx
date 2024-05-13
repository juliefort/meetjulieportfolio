import Image from "next/image";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Experiences } from "./components/Experiences";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Skills />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

import About from "@/component/sections/About";
import Contact from "@/component/sections/Contact";
import Hero from "@/component/sections/Hero";
import Projects from "@/component/sections/Projects";
import Skills from "@/component/sections/Skills";

export default function Page() {
    return (
        <main className="min-h-screen">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </main>
    );
}

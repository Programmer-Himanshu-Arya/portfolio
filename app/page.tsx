import AboutPage from "@/components/About";
import Approach from "@/components/Approach ";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/Data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <ContactMe/>
        <AboutPage />
        <Grid />
        <Projects />
        {/* <Clients /> */} 
        {/* <Experience /> */}
        <Approach/>
        <Footer/>
      </div>
    </main>
  );
}

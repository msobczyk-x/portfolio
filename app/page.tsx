import Header from "@/components/Header";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
export default function Home() {
  return (
    
      <main className="flex justify-between gap-48 bg-primary text-textColor">
        
        <Header />
        
    
        <div className="flex flex-col p-24">
          <About />
          <Projects />
          <Experience />
        </div>
      </main>
  
  );
}

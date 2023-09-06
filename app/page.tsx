"use client"
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Terminal from "@/components/Terminal";
import { useState } from "react";
export default function Home() {
  const [whichInView, setWhichInView] = useState(0);
  const targetIds = ["about", "projects", "experience"];
  return (
      <div className="bg-primary text-textColor flex justify-center">
      <main className="flex justify-between gap-24 max-w-7xl">
        
        <Header targetIds={targetIds}/>
        
    
        <div className="flex flex-col p-24 w-2/3 snap-y snap-mandatory snap">
          <Terminal/>
          <About />
          <Projects />
          <Experience />
        </div>
      </main>
      </div>
  
  );
}

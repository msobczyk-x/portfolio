"use client"
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Terminal from "@/components/Terminal";
import Contact from "@/components/Contact";
import { useState } from "react";
export default function Home() {
  const targetIds = ["about", "projects", "education"];
  return (
      <div className="bg-primary text-textColor flex w-full flex-col items-center justify-center">
      <main className="flex justify-between gap-24 max-w-7xl">
        
        <Header targetIds={targetIds}/>
        
    
        <div className="flex flex-col p-24 w-2/3 snap-y snap-mandatory snap gap-12">
          <Terminal/>
          <Projects />
          <Experience />
         
        </div>
        
      </main>
{/*    <Contact />  */}
      </div>
  
  );
}

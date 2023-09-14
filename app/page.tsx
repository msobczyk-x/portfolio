"use client"
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Terminal from "@/components/Terminal";
import Contact from "@/components/Contact";
import { useEffect, useState } from "react";
import HeaderMobile from "@/components/HeaderMobile";
import useDeviceSize from "@/components/useDeviceSize";
export default function Home() {
  const [width, height] = useDeviceSize();

  const targetIds = ["about", "projects", "education"];
  return (
      <div className="bg-primary text-textColor flex flex-col items-center justify-center w-screen">
      <main className="flex justify-between gap-12 md:gap-24 max-w-7xl flex-col md:flex-row">
        {
          //if breakpoint is is larger than 900px then render the header
          //otherwise render the header in the mobile menu
          (width >= 900 ? (
            <Header targetIds={targetIds} />
          )
            : (
              <HeaderMobile targetIds={targetIds} />
            )
          )


        }
        
        
    
        <div className="flex flex-col p-8 md:p-24 snap-y snap-mandatory snap md:gap-12">
          <Terminal/>
          <Projects />
          <Experience />
         
        </div>
        
      </main>
{/*    <Contact />  */}
      </div>
  
  );
}

import Header from "@/components/Header";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
export default function Home() {
  return (
<main className="flex bg-primary w-full flex-row justify-between text-textColor">
  <div className="m-24 flex w-full flex-row gap-48">

  
  <Header />
    <div className="flex flex-col">
    <About />
    <Projects />
    <Experience />
    </div>
    </div>
</main>
  )
}

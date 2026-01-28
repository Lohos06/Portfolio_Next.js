import Header from "@/components/Header/Header";

import Skills from "@/components/Skills/Skills";
import Experiences from "@/components/Experiences/Experiences";
import Formations from "@/components/Formations/Formations";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Header></Header>
      <main className="min-h-screen w-full flex flex-col items-center p-4 gap-10 md:p-10">
          <div className="w-full flex flex-col justify-between gap-6 md:flex-row md:w-3/4">
            <div className="flex flex-col justify-between gap-6">
              <Skills></Skills>
              <Formations></Formations>
            </div>            
            <Experiences></Experiences>
          </div>
          <div className="w-full flex flex-col items-center">
            <Projects></Projects>
          </div>
      </main>
    </div>
  );
}

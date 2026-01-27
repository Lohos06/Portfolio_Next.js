import Header from "@/components/Header/Header";

import Skills from "@/components/Skills/Skills";
import Experiences from "@/components/Experiences/Experiences";
import Formations from "@/components/Formations/Formations";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Header></Header>
      <main className="min-h-screen w-full flex flex-col items-center p-10 gap-10">
          <div className="w-3/4 flex justify-between gap-6">
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

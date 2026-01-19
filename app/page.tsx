import Image from "next/image";

import Header from "@/components/Header/Header";

import Skills from "@/components/Skills/Skills";
import Career from "@/components/Career/Career";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Header></Header>
      <main className="min-h-screen w-full flex flex-col items-center p-10 gap-10">
          <div className="w-3/4 flex justify-between">
            <Skills></Skills>
            <Career></Career>
          </div>
          <div className="w-3/4 flex flex-col items-center">
            <p>Projet</p>
            <p>Projet</p>
            <p>Projet</p>
            <p>Projet</p>
          </div>
      </main>
    </div>
  );
}

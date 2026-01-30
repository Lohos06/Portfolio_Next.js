"use server";

import Header from "@/components/Header/Header";

import ProjectDetailed from "@/components/Projects/ProjectDetailed/ProjectDetailed"
 
export default async function findOneProject({params}: { params: Promise<{ id: number }>;}) {
  const id = (await params).id;
 
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Header></Header>
      <main className="min-h-screen w-full flex flex-col items-center p-4 gap-10 md:p-10">
            <ProjectDetailed id={id}/>
        </main>
    </div>
  );
}
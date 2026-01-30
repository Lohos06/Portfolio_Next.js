import Image from "next/image";
import Link from "next/link";
import { redirect } from 'next/navigation'

import styles from "./ProjectDetailed.module.css"

import data from "@/data/Projects.json"
export default function ProjectDetailed({id}: any) {

    if (!data.Projects[id]) {
        redirect(`/`)
    }

    const project = data.Projects[id]
    
    let Descritpion = null;
    if(project.ExtendedDescripton){
        Descritpion = project.ExtendedDescripton.map( (paragraph: string, i: number) => {
            return(<p key={i}>{paragraph}</p>)
        })
    }

    return (
        <div>
            <div className={`${styles.presentation}`}>
                <div className={`${styles.projectSummary}`}>
                    <h2>{project.Title}</h2>
                    {project.GitHubLink && <Link className={`${styles.link}`} target="_blank" href={project.GitHubLink}>{project.GitHubLink}</Link>} 
                    <p>{project.Summary}</p>
                </div>
                {project.ImageLink &&
                <Image
                    src={project.ImageLink}
                    alt={project.ImageAlt}
                    width={project.ImageWidth}
                    height={project.ImageHeight}
                    className="w-full max-w-full h-auto object-cover rounded-xl md:w-5/8"
                />
                }
            </div>

            <div className={`${styles.projectDescription}`}>
                <h3>Descritpion</h3>
                {Descritpion && Descritpion}
            </div>
        </div>
    )
}
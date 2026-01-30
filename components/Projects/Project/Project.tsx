import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";

import styles from "./Project.module.css"

import data from "@/data/Projects.json"

export default function Project({id}: any) {

    const project = data.Projects[id]
    let orientation = true
    if (id % 2 == 1) {
        orientation = false
    }

    return (
        <div className={clsx(`${styles.project}`,
                {"md:flex-row": orientation, "md:flex-row-reverse": !orientation})}>
            <div className={`${styles.projectDescription}`}>
                <Link className={`${styles.link}`} href={`/Projects/${id}`}><h3>{project.Title}</h3></Link>
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
    )
}
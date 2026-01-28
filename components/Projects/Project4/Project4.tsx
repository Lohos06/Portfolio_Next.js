import Image from "next/image";

import LiamStudio from "@/public/ProjectsAssets/LiamStudio.png";

import styles from "../Project.module.css"

export default function Project4() {
    return (
        <div className={`${styles.project}`}>
            <Image
                src={LiamStudio}
                alt="Image Site Liam Studio"
                className="w-full h-auto object-cover rounded-xl md:w-5/8"
            />
            <div className={`${styles.projectDescription}`}>
                <h3>Liam Studio</h3>
                <p>
                    Liam Studio est un site web de presentation des courts metrage d&apos;un jeune studio d&apos;animation.
                    Il y a une presentation de qui ils sont, les animations les plus populaires du studio tel que Before The Storm
                    Ainsi qu&apos;un formulaire pour contacter le studio.
                </p>
            </div>
        </div>
    )
}
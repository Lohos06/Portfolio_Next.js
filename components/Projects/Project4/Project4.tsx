import Image from "next/image";

import LiamStudio from "@/public/ProjectsAssets/LiamStudio.png";

import styles from "./Project4.module.css"

export default function Project4() {
    return (
        <div className={`${styles.project}`}>
            <Image
                src={LiamStudio}
                alt="Image Site Jazz In Marciac"
                className="w-5/8 h-auto object-cover rounded-xl"
            />
            <div className={`${styles.projectDescription}`}>
                <h3 className={`${styles.h3}`}>Liam Studio</h3>
                <p>
                    Liam Studio est un site web de presentation des courts metrage d'un jeune studio d'animation.
                    Il y a une presentation de qui ils sont, les animations les plus populaires du studio tel que Before The Storm
                    Ainsi qu'un formulaire pour contacter le studio.
                </p>
            </div>
        </div>
    )
}
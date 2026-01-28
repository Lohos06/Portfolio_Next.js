import Image from "next/image";

import MoiMonCerveau from "@/public/ProjectsAssets/MoiMonCerveau.png";

import styles from "../Project.module.css"

export default function Project2() {
    return (
        <div className={`${styles.project}`}>
            <Image
                src={MoiMonCerveau}
                alt="Image Site Moi Mon Cerveau"
                className="w-full h-auto object-cover rounded-xl md:w-5/8"
            />
            <div className={`${styles.projectDescription}`}>
                <h3>Moi Mon Cerveau</h3>
                <p>
                    Moi, mon cerveau, était un projet pour la Fondation pour la recherche du cerveau en équipe. 
                    Ils nous avaient chargés de créer un module de sensibilisation au cerveau, à son fonctionnement 
                    et aux maladies le concernant.
                    Nous avons donc développé un quiz sur les habitudes et leur impact sur le cerveau, 
                    donnant des conseils après chaque question.
                    Nous avons aussi développé une carte du cerveau interactive afin d&apos;apprendre à le connaitre 
                    et un minijeu pour le travailler.
                </p>
            </div>
        </div>
    )
}
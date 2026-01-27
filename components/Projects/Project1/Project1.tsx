import Image from "next/image";

import JazzInMarciac from "@/public/ProjectsAssets/JazzInMarciac.png";

import styles from "./Project1.module.css"

export default function Project1() {
    return (
        <div className={`${styles.project}`}>
            <div className={`${styles.projectDescription}`}>
                <h3>Jazz In Marciac</h3>
                <p>
                    Jazz in Marciac est un projet fait en équipe avec un autre développeur, des designers et autres. 
                    On nous a demandé un site web servant de vitrine à nos créations concernant le festival. 
                    Nos créations sont constituées d'un jeu vidéo, d'un court métrage, d'articles de presse, de merch, 
                    avec bien sûr un site web contenant des assets faits pour l'occasion.
                </p>
            </div>
            <Image
                src={JazzInMarciac}
                alt="Image Site Jazz In Marciac"
                className="w-5/8 h-auto object-cover rounded-xl"
            />
        </div>
    )
}
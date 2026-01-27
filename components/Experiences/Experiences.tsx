import styles from "./Experiences.module.css";

import Image from "next/image";

import CYLogo from "@/public/Logos/CYLogo.png";
import JazzInMarciacLogo from "@/public/Logos/JazzInMarciacLogo.png";

export default function Career() {
    return (
            <section>
                <h2>Experiences</h2>
                <div className={`${styles.category}`}>
                    <div className={`${styles.logos}`}>
                        <Image
                            src={JazzInMarciacLogo}
                            alt="Logo Jazz In Marciac"
                            className="w-full h-auto object-cover rounded-xl"
                        />
                        <Image
                            src={CYLogo}
                            alt="Logo Université"
                            className="w-full h-auto object-cover rounded-xl"
                        />
                        <Image
                            src={CYLogo}
                            alt="Liam Studio"
                            className="w-full h-auto object-cover rounded-xl"
                        />
                    </div>
                    <div className={`${styles.description}`}>
                        <div>
                            <p>03/25 - 05/25  | 3 mois</p>
                            <h3>Développeur Web | Jazz In Marciac</h3>
                            <p>Création d'un site web de zéro.</p>
                            <p>Adaptation a une charte graphique.</p>
                            <p>Coopération en équipe.</p>
                        </div>
                        <div>
                            <p>05/25 - 06/25 | 1 mois</p>
                            <h3>Développeur Web |Université CY Cergy Paris</h3>
                            <p>Développement d'un formulaire de Césure.</p>
                            <p>Gestion d'une base de donnée.</p>
                            <p>Interface Admin pour gestion des demandes de Césure.</p>
                        </div>
                        <div>
                            <p>08/25 - Maintenant</p>
                            <h3>Développeur Web | Studio d'animation</h3>
                            <p>Création d'un site vitrine.</p>
                            <p>Maintenance et optimisation du site.</p>
                        </div>
                    </div>
                </div>
            </section>
    )
}
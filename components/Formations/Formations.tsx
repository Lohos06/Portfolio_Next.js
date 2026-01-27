import styles from "./Formations.module.css";

import Image from "next/image";

import JeanPerrinLogo from "@/public/Logos/JeanPerrinLogo.png";
import IIMLogo from "@/public/Logos/IIMLogo.png";

export default function Formations() {
    return (           
            <section>
                <h2>Formations</h2>
                <div className={`${styles.category}`}>
                    <div className={`${styles.logos}`}>
                        <Image
                            src={JeanPerrinLogo}
                            alt="Logo Lycée Jean Perrin"
                            className="w-full h-auto object-cover rounded-xl"
                        />
                        <Image
                            src={IIMLogo}
                            alt="Logo IIM Digital School"
                            className="w-full h-auto object-cover rounded-xl"
                        />
                    </div>
                    <div className={`${styles.description}`}>
                        <div>
                            <p>06/23</p>
                            <h3>Baccalauréat | Lycée Jean Perrin</h3>
                            <p>Mention Bien</p>
                            <p>Spécialités Mathématiques et SVT</p>
                        </div>
                        <div>
                            <p>07/24 - 05/27 |3 ans</p>
                            <h3>Bachelor chef de projet digital| IIM Digital School</h3>
                            <p>Spécialité Coding et Digital Innovation</p>
                        </div>
                    </div>
                </div>
            </section>

    )
}
import Image from "next/image";

import PokemonTradingCenter from "@/public/ProjectsAssets/PokemonTradingCenter.png";

import styles from "../Project.module.css"

export default function Project3() {
    return (
        <div className={`${styles.project}`}>
            <div className={`${styles.projectDescription}`}>
                <h3>Pokemon Trading Center</h3>
                <p>
                    Pokemon Trading Center est un projet personnel avec pour fonction 
                    la collection et l&apos;échange de cartes Pokemons. 
                    Ce site permet l&apos;ouverture de boosters, la collection et l&apos;échange de cartes Pokémon 
                    pour chacun de ses utilisateurs.
                </p>
            </div>
            <Image
                src={PokemonTradingCenter}
                alt="Image Site Pokemon Trading Center"
                className="w-full h-auto object-cover rounded-xl md:w-5/8"
            />
        </div>
    )
}
import Image from "next/image";

import PokemonTradingCenter from "@/public/ProjectsAssets/PokemonTradingCenter.png";

import styles from "./Project3.module.css"

export default function Project3() {
    return (
        <div className={`${styles.project}`}>
            <div className={`${styles.projectDescription}`}>
                <h3>Pokemon Trading Center</h3>
                <p>
                    Pokemon Trading Center est un projet personnel avec pour fonction 
                    la collection et l'échange de cartes Pokemons. 
                    Ce site permet l'ouverture de boosters, la collection et l'échange de cartes Pokémon 
                    pour chacun de ses utilisateurs.
                </p>
            </div>
            <Image
                src={PokemonTradingCenter}
                alt="Image Site Pokemon Trading Center"
                className="w-5/8 h-auto object-cover rounded-xl"
            />
        </div>
    )
}